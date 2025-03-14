'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const columnsVariants = cva('flex');

const columnItemVariants = cva('max-w-xl', {
  variants: {
    variant: {
      leftColumn: 'lg:w-1/2 max-w-xl',
      rightColumn: 'hidden lg:flex lg:w-1/2 ml-auto',
    },
  },
});

interface ColumnsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof columnsVariants> {}

interface ColumnItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof columnItemVariants> {}

const Columns = React.forwardRef<HTMLDivElement, ColumnsProps>(({ className, ...props }, ref) => {
  return (
    <div
      id="scroll-content"
      ref={ref}
      className={cn(
        columnsVariants({}),
        className,
        'max-w-content-width mx-auto gap-32 pb-16 px-6 md:px-24',
      )}
      {...props}
    />
  );
});
Columns.displayName = 'Columns';

const ColumnItem = React.forwardRef<HTMLDivElement, ColumnItemProps>(
  ({ className, variant, ...props }, ref) => {
    return <div ref={ref} className={cn(columnItemVariants({ variant }), className)} {...props} />;
  },
);
ColumnItem.displayName = 'ColumnItem';

export { Columns, ColumnItem, type ColumnsProps, type ColumnItemProps };
