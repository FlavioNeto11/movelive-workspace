'use client';

import * as React from 'react';

const KEY = 'movelive:favorites:v1';

function read(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function write(ids: string[]) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(KEY, JSON.stringify(ids));
}

export function useFavorites() {
  const [ids, setIds] = React.useState<string[]>([]);

  React.useEffect(() => {
    setIds(read());
  }, []);

  function isFavorite(id: string) {
    return ids.includes(id);
  }

  function toggleFavorite(id: string) {
    setIds((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      write(next);
      return next;
    });
  }

  return { ids, isFavorite, toggleFavorite };
}
