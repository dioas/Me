import { projects } from '@/lib/data';
import { ArrowIcon } from './Icons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Featured Work"
        title="Selected impact"
        description="A few initiatives I led or shaped — measured by the outcomes they drove."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 90}>
            <article className="group relative h-full overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]/50 p-7 transition hover:border-[var(--color-accent)]/40">
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--color-accent)]/10 blur-3xl transition group-hover:bg-[var(--color-accent)]/20" />

              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                    {project.tagline}
                  </p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link inline-flex items-center gap-1.5 rounded-full border border-[var(--color-line)] bg-[var(--color-base)]/40 px-3 py-1 text-xs font-semibold text-white transition hover:border-[var(--color-accent)]/50"
                    >
                      {project.linkLabel ?? 'Visit'}
                      <ArrowIcon className="h-3.5 w-3.5 -rotate-45 transition group-hover/link:translate-x-0.5" />
                    </a>
                  )}
                </div>
                <h3 className="mt-2 text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="rounded-full border border-[var(--color-accent)]/25 bg-[var(--color-accent)]/10 px-3 py-1 text-xs font-semibold text-[var(--color-accent)]"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2 border-t border-[var(--color-line)] pt-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium text-[var(--color-muted)]/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
