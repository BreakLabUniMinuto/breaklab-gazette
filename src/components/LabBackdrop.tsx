"use client";

import { useEffect, useRef } from "react";

const FAULTS = [
  "SIGSEGV",
  "ECONNRESET",
  "500",
  "NULL",
  "TIMEOUT",
  "OOM",
  "DEADLOCK",
];

export default function LabBackdrop() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const onMove = (event: MouseEvent) => {
      stage.style.setProperty("--mx", `${event.clientX}px`);
      stage.style.setProperty("--my", `${event.clientY}px`);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div ref={stageRef} className="lab-stage" aria-hidden>
      <div className="lab-grid" />
      <div className="lab-spotlight" />
      <div className="lab-orb lab-orb-cyan" />
      <div className="lab-orb lab-orb-pink" />
      <div className="lab-orb lab-orb-green" />
      <div className="lab-scan" />
      <div className="lab-noise" />
      {FAULTS.map((fault, index) => (
        <span
          key={fault}
          className="lab-fault"
          style={{ animationDelay: `${index * 1.4}s` }}
        >
          {fault}
        </span>
      ))}
    </div>
  );
}
