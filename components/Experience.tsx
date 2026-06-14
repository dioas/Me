import { experiences } from '@/lib/data';
import { CheckIcon } from './Icons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="border-y border-[var(--color-line)] bg-[var(--color-surface)]/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Experience"
          title="10+ years building for scale"
          description="From early-stage startups to Indonesia's largest travel platform."
        />

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--color-line)] md:left-[9px]" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <Reveal key={`${exp.company}-${exp.period}`} delay={i * 80}>
                <div className="relative pl-10 md:pl-14">
                  <span
                    className={`absolute left-0 top-1.5 grid h-[18px] w-[18px] place-items-center rounded-full border-2 ${
                      exp.current
                        ? 'border-[var(--color-accent)] bg-[var(--color-accent)] animate-pulse-ring'
                        : 'border-[var(--color-line)] bg-[var(--color-surface-2)]'
                    } md:left-0.5`}
                  />

                  <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]/60 p-6 transition hover:border-[var(--color-accent)]/30 sm:p-7">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-lg font-bold text-white">
                        {exp.role}
                      </h3>
                      <span className="text-sm font-medium text-[var(--color-muted)]">
                        {exp.period}
                      </span>
                    </div>
                    <p className="mt-0.5 font-semibold text-[var(--color-accent)]">
                      {exp.company}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]/80">
                      {exp.context}
                    </p>

                    <ul className="mt-4 space-y-2.5">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex gap-3 text-sm leading-relaxed text-[var(--color-muted)]">
                          <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--color-accent)]" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
