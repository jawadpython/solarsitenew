import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales, localeDirections } from '@/lib/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Tawfir Energy — Solutions solaires au Maroc',
    template: '%s | Tawfir Energy',
  },
  description: 'Solutions d\'énergie solaire professionnelles au Maroc. Installation solaire, maintenance et consultation pour réduire vos factures d\'électricité.',
  keywords: [
    'énergie solaire',
    'solaire Maroc',
    'installation solaire',
    'panneaux solaires',
    'pompage solaire',
    'énergie renouvelable Maroc',
    'devis solaire',
    'technicien solaire',
  ],
  authors: [{ name: 'Tawfir Energy' }],
  creator: 'Tawfir Energy',
  publisher: 'Tawfir Energy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tawfirenergy.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://tawfirenergy.com',
    siteName: 'Tawfir Energy',
    title: 'Tawfir Energy — Solutions solaires au Maroc',
    description: 'Solutions d\'énergie solaire professionnelles au Maroc. Installation solaire, maintenance et consultation.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tawfir Energy — Solutions solaires au Maroc',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tawfir Energy — Solutions solaires au Maroc',
    description: 'Solutions d\'énergie solaire professionnelles au Maroc.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  
  if (!locales.includes(locale as typeof locales[number])) {
    notFound();
  }

  const direction = localeDirections[locale as typeof locales[number]];

  // Update html lang and dir attributes via useEffect on client
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof document !== 'undefined') {
              document.documentElement.setAttribute('lang', '${locale}');
              document.documentElement.setAttribute('dir', '${direction}');
            }
          `,
        }}
      />
      <div dir={direction} className="flex flex-col min-h-screen">
        <Navbar locale={locale} />
        <main className="flex-grow">{children}</main>
        <Footer locale={locale} />
      </div>
    </>
  );
}
