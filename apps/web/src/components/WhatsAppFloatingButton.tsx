'use client';

import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '@/lib/config';

export function WhatsAppFloatingButton() {
  return (
    <Link
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-4 py-3 font-semibold text-zinc-950 shadow-lg transition hover:bg-emerald-400 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-zinc-950"
      aria-label="WhatsApp — Falar com consultor"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Falar com consultor</span>
      <span className="sm:hidden">WhatsApp</span>
    </Link>
  );
}
