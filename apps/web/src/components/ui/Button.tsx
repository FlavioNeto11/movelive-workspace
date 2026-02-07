import * as React from 'react';
import { cn } from '@/lib/utils';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
};

const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-emerald-500 text-zinc-950 hover:bg-emerald-400 active:bg-emerald-500/90 focus:ring-emerald-400',
  secondary:
    'bg-zinc-900 text-zinc-50 hover:bg-zinc-800 active:bg-zinc-900/90 focus:ring-zinc-500',
  ghost: 'bg-transparent hover:bg-zinc-900/60 active:bg-zinc-900/80 focus:ring-zinc-500',
};

const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-4 text-base',
  lg: 'h-12 px-5 text-base',
};

export function Button({ className, variant = 'primary', size = 'md', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-2xl font-semibold transition',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-950',
        'disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
