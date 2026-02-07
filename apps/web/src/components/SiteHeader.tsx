import Link from 'next/link';
import { SITE } from '@/lib/config';

const nav = [
  { href: '/', label: 'Início' },
  { href: '/exercicios', label: 'Exercícios' },
  { href: '/treinos-prontos', label: 'Treinos Prontos' },
  { href: '/orientacoes', label: 'Orientações' },
  { href: '/contato', label: 'Contato' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-900 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-lg font-extrabold tracking-tight">{SITE.name}</span>
          <span className="text-xs text-zinc-400">{SITE.slogan}</span>
        </Link>
        <nav className="hidden gap-6 md:flex" aria-label="Navegação principal">
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className="text-sm text-zinc-200 hover:text-zinc-50">
              {i.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/exercicios"
          className="rounded-2xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-zinc-50 transition hover:bg-zinc-800"
        >
          Começar
        </Link>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-3 md:hidden">
        <div className="grid grid-cols-5 gap-2 text-center text-[11px]">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="rounded-xl border border-zinc-900 bg-zinc-950/60 px-1 py-2 text-zinc-200 hover:text-zinc-50"
            >
              {i.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
