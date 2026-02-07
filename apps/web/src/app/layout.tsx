import type { Metadata } from 'next';
import './globals.css';
import { SITE } from '@/lib/config';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { WhatsAppFloatingButton } from '@/components/WhatsAppFloatingButton';

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — ${SITE.slogan}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: ['treino', 'academia', 'condomínio', 'musculação', 'exercícios', 'saúde'],
  openGraph: {
    title: `${SITE.name} — ${SITE.slogan}`,
    description: SITE.description,
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-emerald-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-zinc-950"
        >
          Pular para o conteúdo principal
        </a>
        <SiteHeader />
        <main id="conteudo" className="mx-auto min-h-[70vh] max-w-6xl px-4 py-10">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
