import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center uppercase rounded-md border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        // NBNB: DEFAULT, SECONDARY AND DESTRUCTIVE ARE NOT USED AND THUS NOT STYLED ACCORDINGLY
        // default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        // secondary:
        //   'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        // destructive:
        //   'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
      },
      size: {
        default: 'min-h-10 px-4 py-2 text-md',
        lg: 'min-h-11 rounded-md px-4 text-lg',
        // NBNB: SM AND ICON ARE NOT USED AND THUS NOT STYLED ACCORDINGLY
        // sm: 'min-h-9 rounded-md px-3 text-sm',
        // icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      // CHANGE VARIANT TO DEFAULT IF THAT IS STYLED AT SOME POINT
      variant: 'outline',
      size: 'default',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant, size }), className)} {...props} />;
}

export { Badge, badgeVariants };
