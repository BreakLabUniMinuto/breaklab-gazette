$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

$Url = "http://localhost:3000"
$Port = 3000
$MaxWait = 60

function Get-NpmCommand {
  $cmd = Get-Command npm.cmd -ErrorAction SilentlyContinue
  if ($cmd) { return $cmd.Source }
  $cmd = Get-Command npm -ErrorAction SilentlyContinue
  if ($cmd) { return $cmd.Source }
  return $null
}

$npm = Get-NpmCommand
if (-not $npm) {
  Write-Host "No se encontro npm. Instala Node.js e intenta de nuevo."
  Read-Host "Enter para salir"
  exit 1
}

if (-not (Test-Path (Join-Path $PSScriptRoot "node_modules"))) {
  Write-Host "Instalando dependencias..."
  & $npm install
  if ($LASTEXITCODE -ne 0) { exit 1 }
}

Write-Host "Liberando el puerto $Port..."
Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue |
  ForEach-Object {
    if ($_.OwningProcess -gt 0) {
      Stop-Process -Id $_.OwningProcess -Force -ErrorAction SilentlyContinue
    }
  }
Start-Sleep -Seconds 1

Write-Host "Iniciando BREAKLAB Gazette..."
$devCmd = "cd /d `"$PSScriptRoot`" && npm run dev -- -p $Port"
Start-Process -FilePath "cmd.exe" -ArgumentList @("/k", $devCmd) -WorkingDirectory $PSScriptRoot

function Test-StyledServer {
  try {
    $page = Invoke-WebRequest -UseBasicParsing -Uri $Url -TimeoutSec 2
    $match = [regex]::Match($page.Content, 'href="(/_next/static/[^"]+\.css[^"]*)"')
    if (-not $match.Success) { return $false }
    $css = Invoke-WebRequest -UseBasicParsing -Uri ($Url + $match.Groups[1].Value) -TimeoutSec 2
    return ($css.StatusCode -ge 200 -and $css.RawContentLength -gt 500)
  } catch {
    return $false
  }
}

Write-Host "Esperando HTML y CSS en $Url ..."
$ready = $false
for ($i = 0; $i -lt $MaxWait; $i++) {
  Start-Sleep -Seconds 1
  if (Test-StyledServer) {
    $ready = $true
    break
  }
}

if (-not $ready) {
  Write-Host "El servidor tardo demasiado. Revisa la ventana de npm run dev."
  Read-Host "Enter para salir"
  exit 1
}

$edge = @(
  "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe",
  "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe"
) | Where-Object { Test-Path $_ } | Select-Object -First 1

$chrome = @(
  "$env:ProgramFiles\Google\Chrome\Application\chrome.exe",
  "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe"
) | Where-Object { Test-Path $_ } | Select-Object -First 1

Write-Host "Abriendo el navegador..."
if ($edge) {
  Start-Process -FilePath $edge -ArgumentList $Url
} elseif ($chrome) {
  Start-Process -FilePath $chrome -ArgumentList $Url
} else {
  Start-Process "microsoft-edge:$Url"
}

Write-Host "Listo."
exit 0
