import { profile } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-[var(--color-muted)] sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p>
          Built with{' '}
          <span className="font-semibold text-white">Next.js</span> &amp;{' '}
          <span className="font-semibold text-white">Tailwind CSS</span>.
        </p>
      </div>
    </footer>
  );
}
