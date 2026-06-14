import Image from 'next/image';
import { profile, stats } from '@/lib/data';
import {
  ArrowIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  LocationIcon,
  MailIcon,
} from './Icons';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--color-accent)]/15 blur-[120px] animate-float-slow" />
      <div className="pointer-events-none absolute top-20 right-0 h-[360px] w-[360px] rounded-full bg-[var(--color-accent-2)]/15 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left — copy */}
          <div className="reveal is-visible text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)]/60 px-4 py-1.5 text-xs font-medium text-[var(--color-muted)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              </span>
              10+ years crafting frontend experiences
            </span>

            <h1 className="mt-8 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              Hi, I&apos;m {profile.name.split(' ')[0]}.
              <br />
              <span className="text-gradient">{profile.role}.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-muted)] lg:mx-0">
              {profile.tagline} 10+ years crafting fast, scalable products with
              React, Next.js &amp; TypeScript — from design systems to
              micro-frontends.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] px-6 py-3 text-sm font-semibold text-[var(--color-base)] transition hover:opacity-90"
              >
                View my work
                <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <a
                href={profile.cvUrl}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)]/60 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30"
              >
                <DownloadIcon className="h-4 w-4" />
                Download CV
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-[var(--color-muted)] lg:justify-start">
              <span className="inline-flex items-center gap-2">
                <LocationIcon className="h-4 w-4 text-[var(--color-accent)]" />
                {profile.location}
              </span>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 transition hover:text-white">
                <MailIcon className="h-4 w-4 text-[var(--color-accent)]" />
                {profile.email}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-white">
                <LinkedinIcon className="h-4 w-4 text-[var(--color-accent)]" />
                LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-white">
                <GithubIcon className="h-4 w-4 text-[var(--color-accent)]" />
                GitHub
              </a>
            </div>
          </div>

          {/* Right — portrait */}
          <div className="reveal is-visible relative mx-auto w-full max-w-sm">
            <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-[var(--color-accent)]/25 via-transparent to-[var(--color-accent-2)]/25 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-surface)]">
              <Image
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                width={628}
                height={1100}
                priority
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-base)]/70 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-[var(--color-line)] bg-[var(--color-base)]/90 px-5 py-3 backdrop-blur-md">
              <div className="text-2xl font-extrabold text-gradient">10+ yrs</div>
              <div className="text-xs font-medium text-[var(--color-muted)]">
                Frontend craft
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]/50 p-5 text-center backdrop-blur-sm transition hover:border-[var(--color-accent)]/40"
            >
              <div className="text-3xl font-extrabold text-gradient sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-medium text-[var(--color-muted)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
