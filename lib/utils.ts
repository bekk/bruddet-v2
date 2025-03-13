import { client } from '@/sanity/lib/client';
import { clsx, type ClassValue } from 'clsx';
import { Metadata } from 'next';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const RedirectType = (type: string) => {
  if (type == 'article') {
    return 'meny';
  } else if (type == 'event') {
    return 'event';
  } else {
    return '';
  }
};

export function generateSeoData(
  metaTitle?: string | null,
  metaDescription?: string | null,
): Metadata {
  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle ?? '',
      description: metaDescription ?? '',
    },
  };
}
