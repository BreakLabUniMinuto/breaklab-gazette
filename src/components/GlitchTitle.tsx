export default function GlitchTitle({ text }: { text: string }) {
  return (
    <h1 className="glitch-title mt-6 max-w-4xl font-sans text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl">
      <span className="sr-only">{text}</span>
      <span aria-hidden className="glitch-title__track">
        {text.split("").map((letter, index) => (
          <span
            key={`${letter}-${index}`}
            className="glitch-title__letter"
            style={{ animationDelay: `${index * 70}ms, 0s` }}
          >
            {letter}
          </span>
        ))}
      </span>
    </h1>
  );
}
