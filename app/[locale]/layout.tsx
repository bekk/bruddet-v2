import { DisableDraftMode } from '@/components/DisableDraftMode';
import Header from '@/components/header/Header';
import { Newsletter } from '@/components/newsletter/Newsletter';
import { NewsLetterProvider } from '@/hooks/useDialog';
import { routing } from '@/i18n/routing';
import { SanityLive } from '@/sanity/lib/live';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { VisualEditing } from 'next-sanity';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import '../globals.css';
import { JumpToContent } from '@/components/JumpToContent';
import { Lexic } from '@/app/fonts';

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await Promise.resolve(params);
  // Ensure that the incoming `locale` is valid
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={Lexic.variable}>
      <body className={`antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <JumpToContent />
          <Header />
          <main id="main-content" tabIndex={0}>
            <NewsLetterProvider>
              {children}
              <Newsletter />
            </NewsLetterProvider>
            <SanityLive />
            {(await draftMode()).isEnabled && (
              <>
                <DisableDraftMode />
                <VisualEditing />
              </>
            )}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
