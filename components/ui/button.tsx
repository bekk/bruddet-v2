import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'uppercase relative border-black border-2 inline-flex items-center border justify-center gap-2 whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground hover:bg-primary-hover hover:underline hover:text-primary-foreground-hover before:absolute before:inset-0 before:border before:border-transparent before:hover:border-black before:pointer-events-none active:bg-primary-active active:underline active:text-primary-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:underline hover:bg-secondary-hover before:absolute before:inset-0 before:border before:border-transparent before:hover:border-black before:pointer-events-none active:bg-secondary-active',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',

        // NBNB: THESE ARE NOT USED AND THUS NOT STYLED ACCORDINGLY
        // outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        // ghost: 'hover:bg-accent hover:text-accent-foreground',
        // link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'min-h-10 px-4 py-2 text-md',
        lg: 'min-h-16 rounded-md px-8 text-lg',
        xl: 'min-h-14 rounded-md px-14 text-xl',

        // NBNB: THESE ARE NOT USED AND THUS NOT STYLED ACCORDINGLY
        // sm: 'min-h-9 rounded-md px-3 text-sm',
        // icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
