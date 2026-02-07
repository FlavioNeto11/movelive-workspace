import Link from 'next/link';
import { SITE, WHATSAPP_LINK } from '@/lib/config';

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <div className="text-lg font-extrabold">{SITE.name}</div>
          <div className="text-sm text-zinc-400">{SITE.slogan}</div>
          <p className="mt-3 text-sm text-zinc-300">
            Plataforma digital de treinos organizada por grupamentos musculares, pensada para a academia do seu
            condomínio.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold text-zinc-200">Links</div>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            <li>
              <Link href="/exercicios" className="hover:text-zinc-50">
                Exercícios
              </Link>
            </li>
            <li>
              <Link href="/treinos-prontos" className="hover:text-zinc-50">
                Treinos Prontos
              </Link>
            </li>
            <li>
              <Link href="/orientacoes" className="hover:text-zinc-50">
                Orientações
              </Link>
            </li>
            <li>
              <Link href="/contato" className="hover:text-zinc-50">
                Contato
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-zinc-200">Contato</div>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 px-4 py-2 text-sm hover:bg-zinc-900"
            >
              Instagram
            </Link>
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 px-4 py-2 text-sm hover:bg-zinc-900"
            >
              WhatsApp
            </Link>
            <Link
              href="/contato"
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 px-4 py-2 text-sm hover:bg-zinc-900"
            >
              Contato
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-8 text-xs text-zinc-500">
        © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
