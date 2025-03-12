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

export async function generateSeoData<T>({
  params,
  query,
}: {
  params: Promise<{ locale?: string; slug?: string }>;
  query: string;
}): Promise<Metadata> {
  const lang = (await params).locale;
  const slug = (await params).slug ?? '';
  const data: T = await client.fetch(query, { lang, slug });

  return {
    title: (data as any)?.metaTitle,
    description: (data as any)?.metaDescription,
    openGraph: {
      title: (data as any)?.metaTitle as string,
      description: (data as any)?.metaDescription as string,
    },
  };
}
