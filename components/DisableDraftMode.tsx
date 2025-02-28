'use client';

import { useDraftModeEnvironment } from 'next-sanity/hooks';
import { Button } from './ui/button';
import Link from 'next/link';

export function DisableDraftMode() {
  const environment = useDraftModeEnvironment();

  // Only show the disable draft mode button when outside of Presentation Tool
  if (environment !== 'live' && environment !== 'unknown') {
    return null;
  }

  return (
    <Button variant="destructive" className="mb-footer-height fixed top-4 right-4">
      <Link href="/api/draft-mode/disable">Disable Draft Mode</Link>
    </Button>
  );
}
