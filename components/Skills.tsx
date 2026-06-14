import { certifications, skillGroups } from '@/lib/data';
import { CheckIcon } from './Icons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Skills() {
  return (
    <section id="skills" className="border-t border-[var(--color-line)] bg-[var(--color-surface)]/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Skills"
          title="The toolkit"
          description="Technologies I use day-to-day to ship reliable, performant interfaces."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 70}>
              <div className="h-full rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]/60 p-6 transition hover:border-[var(--color-accent)]/30">
                <h3 className="text-sm font-bold uppercase tracking-widest text-white">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-[var(--color-line)] bg-[var(--color-surface-2)] px-3 py-1.5 text-sm text-[var(--color-muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12" delay={120}>
          <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]/60 p-7">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-accent)]">
              Certifications
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-3 text-sm text-[var(--color-muted)]">
                  <CheckIcon className="h-4 w-4 flex-shrink-0 text-[var(--color-accent)]" />
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
