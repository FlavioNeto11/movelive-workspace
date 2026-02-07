import { NextResponse } from 'next/server';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { contentProvider } from '@/lib/content';
import type { ReadyWorkoutLevel } from '@/lib/types';

const LEVELS: ReadyWorkoutLevel[] = ['iniciante', 'intermediario', 'avancado'];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const nivel = (searchParams.get('nivel') ?? '').toLowerCase() as ReadyWorkoutLevel;

  if (!LEVELS.includes(nivel)) {
    return NextResponse.json({ error: 'Parâmetro nivel inválido' }, { status: 400 });
  }

  const workout = await contentProvider.getReadyWorkout(nivel);
  if (!workout) return NextResponse.json({ error: 'Treino não encontrado' }, { status: 404 });

  const exercises = await Promise.all(workout.items.map((i) => contentProvider.getExercise(i.exerciseId)));

  const pdf = await PDFDocument.create();
  const page = pdf.addPage([595.28, 841.89]); // A4
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);

  let y = 800;
  const margin = 40;

  const title = workout.name;
  page.drawText(title, { x: margin, y, size: 18, font: bold, color: rgb(0.06, 0.72, 0.49) });
  y -= 26;

  page.drawText(workout.objective, { x: margin, y, size: 11, font, color: rgb(0.2, 0.2, 0.2) });
  y -= 22;

  page.drawText('Lista de exercícios (ordem sugerida):', { x: margin, y, size: 12, font: bold, color: rgb(0.1, 0.1, 0.1) });
  y -= 18;

  for (let idx = 0; idx < workout.items.length; idx++) {
    const item = workout.items[idx];
    const ex = exercises[idx];
    const name = ex?.name ?? item.exerciseId;
    const line = `${idx + 1}. ${name} — ${item.sets}x ${item.reps} | descanso ${item.restSeconds}s`;
    page.drawText(line, { x: margin, y, size: 11, font, color: rgb(0.1, 0.1, 0.1) });
    y -= 16;
    if (y < 90) break; // simples para MVP
  }

  y -= 10;
  page.drawText('Aviso:', { x: margin, y, size: 11, font: bold, color: rgb(0.1, 0.1, 0.1) });
  y -= 14;
  page.drawText('Treine com atenção, respeite seus limites e mantenha a postura correta.', {
    x: margin,
    y,
    size: 11,
    font,
    color: rgb(0.1, 0.1, 0.1),
  });

  const bytes = await pdf.save();
  return new NextResponse(bytes, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="movelive-${nivel}.pdf"`,
    },
  });
}
