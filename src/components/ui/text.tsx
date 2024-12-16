import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'blockquote' | 'li';

type TextProps = {
  as?: Variant; // Optional with a default fallback
  className?: string;
  children: React.ReactNode;
} & VariantProps<typeof textVariants>;

const textVariants = cva('', {
  variants: {
    as: {
      h1: 'scroll-m-20 text-lg font-extrabold tracking-tight lg:text-xl font-foreground',
      h2: 'scroll-m-20 text-base font-semibold tracking-tight transition-colors',
      h3: 'scroll-m-20 text-sm font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xs font-semibold tracking-tight',
      p: 'leading-7',
      blockquote: 'border-l-2 pl-6 italic',
      li: 'my-6 ml-6 list-disc',
    },
    styleVariant: {
      muted: 'text-muted-foreground',
    },
  },
  defaultVariants: {
    as: 'p',
  },
});

export const Text: React.FC<TextProps> = ({ as = 'p', styleVariant, className, children }) => {
  const Component = as;

  return (
    <Component className={cn(textVariants({ as, styleVariant }), className)}>{children}</Component>
  );
};
