import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl">
      <Card>
        <CardContent className="p-8 text-center">
          <h1 className="text-2xl font-extrabold">Página não encontrada</h1>
          <p className="mt-2 text-sm text-zinc-300">Volte para a Home ou abra a biblioteca de exercícios.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/">
              <Button className="w-full sm:w-auto">Ir para Home</Button>
            </Link>
            <Link href="/exercicios">
              <Button variant="secondary" className="w-full sm:w-auto">Ver Exercícios</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
