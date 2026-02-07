import { cn } from '@/lib/utils';

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-2xl bg-zinc-900/60 ring-1 ring-zinc-800',
        className,
      )}
    />
  );
}
