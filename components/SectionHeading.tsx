import Reveal from './Reveal';

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-[var(--color-muted)]">
          {description}
        </p>
      )}
    </Reveal>
  );
}
