import Link from 'next/link';
import { Mail, MessageCircle, PhoneCall } from 'lucide-react';
import { SectionTitle } from '@/components/SectionTitle';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { WHATSAPP_LINK } from '@/lib/config';

export default function ContatoPage() {
  return (
    <div className="space-y-10">
      <SectionTitle
        title="Contato"
        subtitle="Quer levar a Move&Live para o seu condomínio? Fale com um consultor."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="transition hover:-translate-y-0.5 hover:bg-zinc-950/80">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-emerald-400" />
              WhatsApp
            </CardTitle>
            <CardDescription>Resposta rápida e direta.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              <Button className="w-full">Falar com consultor</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="transition hover:-translate-y-0.5 hover:bg-zinc-950/80">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-emerald-400" />
              E-mail
            </CardTitle>
            <CardDescription>Para propostas e contratos.</CardDescription>
          </CardHeader>
          <CardContent>
            <a
              className="inline-flex w-full items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 text-sm font-semibold hover:bg-zinc-900"
              href="mailto:contato@movelive.com.br"
            >
              Enviar e-mail
            </a>
          </CardContent>
        </Card>

        <Card className="transition hover:-translate-y-0.5 hover:bg-zinc-950/80">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PhoneCall className="h-5 w-5 text-emerald-400" />
              Visita gratuita
            </CardTitle>
            <CardDescription>Diagnóstico da academia e proposta.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              <Button variant="secondary" className="w-full">
                Solicitar visita gratuita
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-6 text-sm text-zinc-300">
          <div className="font-semibold text-zinc-100">O que oferecemos</div>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Biblioteca digital de treinos 24/7</li>
            <li>Manutenção preventiva de equipamentos</li>
            <li>Consultoria de infraestrutura</li>
            <li>Avaliações físicas presenciais mensais</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
