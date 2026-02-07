import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { SectionTitle } from '@/components/SectionTitle';
import { SITE } from '@/lib/config';

const BENEFITS = [
  'Autonomia',
  'Segurança',
  'Resultados',
  'Facilidade',
  'Treinos organizados',
  'Acesso 24/7',
  'Exercícios demonstrados por profissionais',
  'Ideal para iniciantes e avançados',
];

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-[2rem] border border-zinc-900 bg-gradient-to-b from-zinc-950 to-zinc-950/40 p-8 md:p-12">
        <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_20%_20%,#10b981_0,transparent_35%),radial-gradient(circle_at_90%_20%,#3b82f6_0,transparent_30%)]" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-2 text-sm text-zinc-200">
            <Sparkles className="h-4 w-4 text-emerald-400" />
            Produto premium para academias condominiais
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">{SITE.name}</h1>
          <p className="mt-2 text-lg font-semibold text-emerald-400 md:text-2xl">{SITE.slogan}</p>

          <p className="mt-5 max-w-2xl text-base text-zinc-200 md:text-lg">
            Saúde e qualidade de vida no conforto do seu condomínio
          </p>

          <p className="mt-3 max-w-2xl text-sm text-zinc-300 md:text-base">
            Treine com segurança, autonomia e economia utilizando a academia do seu condomínio.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/exercicios">
              <Button size="lg" className="w-full sm:w-auto">
                Começar agora <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contato">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Falar com consultor
              </Button>
            </Link>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Card className="border-zinc-900 bg-zinc-950/40">
              <CardHeader>
                <CardTitle className="text-base">Rápido e intuitivo</CardTitle>
                <CardDescription>Interface estilo aplicativo, perfeita no celular.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-zinc-900 bg-zinc-950/40">
              <CardHeader>
                <CardTitle className="text-base">Treinos organizados</CardTitle>
                <CardDescription>Por grupamento muscular, com busca e filtros.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-zinc-900 bg-zinc-950/40">
              <CardHeader>
                <CardTitle className="text-base">Segurança em primeiro lugar</CardTitle>
                <CardDescription>Orienta você para evitar erros e evoluir com consistência.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Objetivo */}
      <section>
        <SectionTitle title="Qual o objetivo da Move&Live" />
        <Card>
          <CardContent className="p-6 text-base text-zinc-200 md:p-8 md:text-lg">
            “Levar saúde e qualidade de vida para os moradores no conforto do seu condomínio de forma barata, autônoma
            e segura.”
          </CardContent>
        </Card>
      </section>

      {/* Como funciona */}
      <section>
        <SectionTitle title="Como funciona o site" />
        <p className="max-w-3xl text-sm text-zinc-300 md:text-base">
          “Na próxima página você encontrará ícones com nomes de grupos musculares. Ao clicar, terá acesso a diversos
          vídeos com exercícios que você pode fazer aqui na sua academia.”
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { n: '1', t: 'Escolha o grupamento muscular', d: 'Selecione o que você quer treinar hoje.' },
            { n: '2', t: 'Assista ao vídeo do exercício', d: 'Entenda postura, execução e equipamento.' },
            { n: '3', t: 'Treine com segurança e consistência', d: 'Progrida aos poucos e com técnica.' },
          ].map((s) => (
            <Card key={s.n} className="transition hover:-translate-y-0.5 hover:bg-zinc-950/80">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400">
                    <span className="text-sm font-extrabold">{s.n}</span>
                  </div>
                  <div>
                    <CardTitle className="text-base">{s.t}</CardTitle>
                    <CardDescription>{s.d}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefícios */}
      <section>
        <SectionTitle title="Benefícios" subtitle="Tudo organizado para você treinar com confiança." />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => (
            <Card key={b} className="transition hover:-translate-y-0.5 hover:bg-zinc-950/80">
              <CardContent className="flex items-center gap-3 p-5">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <span className="text-sm font-semibold">{b}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Por que escolher */}
      <section>
        <SectionTitle title="Por que escolher a Move&Live" />
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Modelo corporativo e eficiente</CardTitle>
              <CardDescription>Benefícios claros para moradores e para o condomínio.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-zinc-200">
              <div>• Expertise comprovada</div>
              <div>• Economia garantida</div>
              <div>• Resultados mensuráveis</div>
              <div>• Moradores mais satisfeitos</div>
              <div>• Condomínio mais valorizado</div>
            </CardContent>
          </Card>

          <Card className="border-emerald-500/30 bg-emerald-500/10">
            <CardHeader>
              <CardTitle className="text-emerald-200">Frase de impacto</CardTitle>
              <CardDescription className="text-emerald-200/80">Visão institucional</CardDescription>
            </CardHeader>
            <CardContent className="text-base text-emerald-100">
              “Academias bem mantidas elevam significativamente a qualidade de vida e aumentam a valorização do condomínio.”
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <Link href="/contato">
            <Button size="lg" className="w-full">
              Solicitar visita gratuita
            </Button>
          </Link>
          <Link href="/contato">
            <Button size="lg" variant="secondary" className="w-full">
              Falar com consultor
            </Button>
          </Link>
          <Link href="/contato">
            <Button size="lg" variant="ghost" className="w-full">
              Conhecer planos
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
