'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as React from 'react';

import { cn } from '@/lib/utils';

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    className={cn('border-t border-b first:border-b-0', className)}
    {...props}
  />
));

Accordion.displayName = 'Accordion';

const AccordionItem = AccordionPrimitive.Item;

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'font-pt-serif font-bold text-lg flex flex-1 items-center justify-between py-2 transition-all [&[data-state=open]>svg]:rotate-180 hover:fill-primary-hover [&[data-state=open]]:fill-primary [&[data-state=open]]:hover:fill-primary-hover',
        className,
      )}
      {...props}
    >
      {children}
      <Arrow className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export const Arrow = ({ className = '' }) => {
  return (
    <svg
      width="24"
      height="16"
      viewBox="0 0 24 16"
      xmlns="http://www.w3.org/2000/svg"
      className={`fill-sort ${className}`}
    >
      <path d="M12 16L-5.08584e-07 -2.09815e-06L24 0L12 16Z" />
    </svg>
  );
};

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
