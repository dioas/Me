import { asset } from '@/lib/asset';
import { education, leadership, profile } from '@/lib/data';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="About" title="A little about me" />

      <div className="grid gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="mb-6 flex items-center gap-4">
            <div className="relative h-20 w-20 flex-shrink-0">
              <div className="pointer-events-none absolute -inset-1 rounded-full bg-gradient-to-tr from-[var(--color-accent)] to-[var(--color-accent-2)] opacity-70 blur-[6px]" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset(profile.photo)}
                alt={profile.name}
                width={160}
                height={160}
                className="relative h-20 w-20 rounded-full border border-[var(--color-line)] object-cover"
                style={{ objectPosition: '50% 18%' }}
              />
            </div>
            <div>
              <p className="font-bold text-white">{profile.name}</p>
              <p className="text-sm text-[var(--color-accent)]">{profile.role}</p>
              <p className="text-sm text-[var(--color-muted)]">{profile.location}</p>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-[var(--color-muted)]">
            {profile.summary}
          </p>
          <p className="mt-5 text-lg leading-relaxed text-[var(--color-muted)]">
            I&apos;m endlessly curious about the <em>how</em> and <em>why</em>{' '}
            behind the systems we build, and I&apos;m always learning something
            new — that curiosity is what keeps the work fun and the products
            getting better.
          </p>
        </Reveal>

        <Reveal className="lg:col-span-2" delay={120}>
          <div className="space-y-4">
            <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]/50 p-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                Education
              </h3>
              <p className="mt-3 font-semibold text-white">{education.degree}</p>
              <p className="text-[var(--color-muted)]">{education.school}</p>
              <p className="mt-1 text-sm text-[var(--color-muted)]/70">
                {education.period}
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]/50 p-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                Leadership
              </h3>
              <ul className="mt-3 space-y-3">
                {leadership.map((item) => (
                  <li key={item.role}>
                    <p className="font-semibold text-white">{item.role}</p>
                    <p className="text-sm text-[var(--color-muted)]">
                      {item.org}
                    </p>
                    <p className="text-xs text-[var(--color-muted)]/70">
                      {item.period}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
