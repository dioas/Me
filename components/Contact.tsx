import { profile } from '@/lib/data';
import { ArrowIcon, GithubIcon, LinkedinIcon, MailIcon } from './Icons';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-[var(--color-line)] bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-surface-2)] px-6 py-16 text-center sm:px-12">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--color-accent)]/15 blur-[100px]" />

          <div className="relative">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Contact
            </span>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">
              Let&apos;s build something{' '}
              <span className="text-gradient">exceptional</span>.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-[var(--color-muted)]">
              Always happy to chat about frontend, design systems, and building
              great products. Feel free to reach out.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] px-6 py-3 text-sm font-semibold text-[var(--color-base)] transition hover:opacity-90"
              >
                <MailIcon className="h-4 w-4" />
                {profile.email}
                <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-full border border-[var(--color-line)] bg-[var(--color-base)]/40 text-[var(--color-muted)] transition hover:border-[var(--color-accent)]/40 hover:text-white"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-11 w-11 place-items-center rounded-full border border-[var(--color-line)] bg-[var(--color-base)]/40 text-[var(--color-muted)] transition hover:border-[var(--color-accent)]/40 hover:text-white"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="grid h-11 w-11 place-items-center rounded-full border border-[var(--color-line)] bg-[var(--color-base)]/40 text-[var(--color-muted)] transition hover:border-[var(--color-accent)]/40 hover:text-white"
              >
                <MailIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
