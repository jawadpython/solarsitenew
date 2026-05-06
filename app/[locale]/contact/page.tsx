import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales } from '@/lib/i18n';
import { getTranslations } from '@/lib/translations';
import Container from '@/components/Container';
import ContactForm from '@/components/ContactForm';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;
  const t = await import(`@/messages/${locale}.json`).then((m) => m.default).catch(() => null);
  
  if (!t) {
    return {};
  }

  return {
    title: locale === 'ar' ? 'اتصل بنا' : 'Contact',
    description: locale === 'ar'
      ? 'اتصل بطوفير إنرجي للحصول على استشارة مجانية أو عرض سعر للطاقة الشمسية أو أي سؤال حول خدمات الطاقة الشمسية في المغرب.'
      : 'Contactez Tawfir Energy pour une consultation gratuite, un devis solaire ou toute question sur nos services d\'énergie solaire au Maroc.',
    alternates: {
      canonical: `/${locale}/contact`,
    },
  };
}

export default function ContactPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  
  if (!locales.includes(locale as typeof locales[number])) {
    notFound();
  }

  const t = getTranslations(locale as typeof locales[number]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-neutral-900 py-16 lg:py-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-solar-500/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl" aria-hidden="true" />
        
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6 border border-white/20">
              <svg className="w-5 h-5 text-solar-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="text-sm font-semibold text-white/90">
                {locale === 'ar' ? 'رد خلال 24 ساعة' : 'Réponse sous 24\u202fh'}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.contact.title}
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <Container>
          <ContactForm locale={locale} t={t} />
        </Container>
      </section>
    </div>
  );
}
