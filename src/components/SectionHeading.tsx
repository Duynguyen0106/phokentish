type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: Props) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : ""}>
      {eyebrow && (
        <p className="mb-3 text-xs tracking-[0.3em] text-gold uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl text-foreground md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 font-serif text-xl leading-relaxed text-muted">
          {subtitle}
        </p>
      )}
      <div
        className={`gold-line mt-6 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
