'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { navLinks, profile } from '@/lib/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[var(--color-line)] bg-[var(--color-base)]/80 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="group flex items-center gap-2.5 font-bold tracking-tight">
          <Image
            src={profile.photo}
            alt={profile.name}
            width={72}
            height={72}
            className="h-9 w-9 rounded-full border border-[var(--color-line)] object-cover ring-2 ring-[var(--color-accent)]/40 transition group-hover:ring-[var(--color-accent)]/70"
            style={{ objectPosition: '50% 18%' }}
          />
          <span className="text-sm text-white/90 transition group-hover:text-white">
            {profile.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-[var(--color-muted)] transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.cvUrl}
            className="ml-2 rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-accent)] transition hover:bg-[var(--color-accent)]/20"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-line)] text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition ${open ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span className={`block h-0.5 w-5 bg-current transition ${open ? 'opacity-0' : ''}`} />
            <span
              className={`block h-0.5 w-5 bg-current transition ${open ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-[var(--color-line)] bg-[var(--color-base)]/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm text-[var(--color-muted)] transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.cvUrl}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 px-4 py-2.5 text-center text-sm font-semibold text-[var(--color-accent)]"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
