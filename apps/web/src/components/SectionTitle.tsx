import * as React from 'react';
import { cn } from '@/lib/utils';

export function SectionTitle({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn('mb-6', className)}>
      <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-2 text-sm text-zinc-300 md:text-base">{subtitle}</p> : null}
    </div>
  );
}
