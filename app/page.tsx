'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { defaultLocale, locales, type Locale } from '@/lib/i18n';

/** Root path: middleware handles redirects in server mode; client redirect for static export. */
export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    let locale: Locale = defaultLocale;
    const pref = navigator.language?.split('-')[0];
    if (pref && locales.includes(pref as Locale)) {
      locale = pref as Locale;
    }
    router.replace(`/${locale}/`);
  }, [router]);

  return null;
}
