'use client';

import * as React from 'react';
import type { Goal, Level } from '@/lib/types';
import { cn } from '@/lib/utils';

export type FilterState = {
  q: string;
  level: Level | '';
  equipment: string;
  goal: Goal | '';
};

export function FilterBar({
  state,
  onChange,
  equipments,
}: {
  state: FilterState;
  onChange: (next: FilterState) => void;
  equipments: string[];
}) {
  return (
    <div className={cn('grid gap-3 md:grid-cols-4')}>
      <input
        value={state.q}
        onChange={(e) => onChange({ ...state, q: e.target.value })}
        placeholder="Pesquisar exercício…"
        aria-label="Pesquisar exercício"
        className="h-11 rounded-2xl border border-zinc-800 bg-zinc-950/40 px-4 text-sm text-zinc-50 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
      />

      <select
        value={state.level}
        onChange={(e) => onChange({ ...state, level: e.target.value as any })}
        aria-label="Filtrar por nível"
        className="h-11 rounded-2xl border border-zinc-800 bg-zinc-950/40 px-4 text-sm text-zinc-50 focus:outline-none focus:ring-2 focus:ring-emerald-400"
      >
        <option value="">Nível (todos)</option>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </select>

      <select
        value={state.equipment}
        onChange={(e) => onChange({ ...state, equipment: e.target.value })}
        aria-label="Filtrar por equipamento"
        className="h-11 rounded-2xl border border-zinc-800 bg-zinc-950/40 px-4 text-sm text-zinc-50 focus:outline-none focus:ring-2 focus:ring-emerald-400"
      >
        <option value="">Equipamento (todos)</option>
        {equipments.map((eq) => (
          <option key={eq} value={eq}>
            {eq}
          </option>
        ))}
      </select>

      <select
        value={state.goal}
        onChange={(e) => onChange({ ...state, goal: e.target.value as any })}
        aria-label="Filtrar por objetivo"
        className="h-11 rounded-2xl border border-zinc-800 bg-zinc-950/40 px-4 text-sm text-zinc-50 focus:outline-none focus:ring-2 focus:ring-emerald-400"
      >
        <option value="">Objetivo (todos)</option>
        <option value="Força">Força</option>
        <option value="Hipertrofia">Hipertrofia</option>
        <option value="Resistência">Resistência</option>
        <option value="Mobilidade">Mobilidade</option>
      </select>
    </div>
  );
}
