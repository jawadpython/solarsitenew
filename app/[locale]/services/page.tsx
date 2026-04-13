import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { locales } from '@/lib/i18n';
import { SERVICE_PILLAR_SLUGS } from '@/lib/service-pillars';
import { getTranslations } from '@/lib/translations';
import Container from '@/components/Container';

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
    title: locale === 'ar' ? 'الخدمات' : 'Services',
    description: locale === 'ar'
      ? 'خدمات شاملة في الطاقة الشمسية: الدراسة وعرض السعر، التركيب، الصيانة، الضخ الشمسي وشبكة الفنيين المعتمدين في المغرب.'
      : 'Services complets en énergie solaire : étude et devis, installation, maintenance, pompage solaire et réseau de techniciens certifiés au Maroc.',
    alternates: {
      canonical: `/${locale}/services`,
    },
  };
}

export default function ServicesPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  
  if (!locales.includes(locale as typeof locales[number])) {
    notFound();
  }

  const t = getTranslations(locale as typeof locales[number]);

  const services = [
    {
      title: t.services.service1.title,
      description: t.services.service1.description,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      badge: locale === 'ar' ? 'مجاني' : 'Gratuit',
    },
    {
      title: t.services.service2.title,
      description: t.services.service2.description,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      badge: locale === 'ar' ? 'الأكثر طلباً' : 'Populaire',
    },
    {
      title: t.services.service3.title,
      description: t.services.service3.description,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: t.services.service4.title,
      description: t.services.service4.description,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      badge: locale === 'ar' ? 'زراعي' : 'Agricole',
    },
    {
      title: t.services.service5.title,
      description: t.services.service5.description,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-neutral-900 py-20 lg:py-28 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-solar-500/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl" aria-hidden="true" />
        
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6 border border-white/20">
              <svg className="w-5 h-5 text-solar-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-semibold text-white/90">
                {locale === 'ar' ? 'حلول شاملة' : 'Solutions complètes'}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.services.title}
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
              {t.services.subtitle}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 lg:py-16 bg-white border-b border-neutral-100">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
                {t.services.pillarsIntro.title}
              </h2>
              <p className="text-neutral-600 leading-relaxed">{t.services.pillarsIntro.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SERVICE_PILLAR_SLUGS.map((slug) => {
                const pillar = t.services.pillars[slug];
                return (
                  <Link
                    key={slug}
                    href={`/${locale}/services/${slug}/`}
                    className="group rounded-2xl p-6 border border-neutral-100 bg-gradient-to-b from-neutral-50 to-white hover:border-primary-200 hover:shadow-medium transition-all duration-300 flex flex-col text-start"
                  >
                    <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-800 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed flex-1 mb-4">{pillar.short}</p>
                    <span className="inline-flex items-center gap-2 text-primary-700 font-semibold text-sm">
                      {t.services.pillarReadMore}
                      <svg
                        className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 lg:p-8 border border-neutral-100 hover:border-primary-200 shadow-soft hover:shadow-medium transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center text-primary-700 group-hover:scale-110 transition-transform">
                        {service.icon}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h2 className="text-xl lg:text-2xl font-bold text-neutral-900">
                          {service.title}
                        </h2>
                        {service.badge && (
                          <span className="flex-shrink-0 px-3 py-1 bg-solar-100 text-solar-700 text-xs font-semibold rounded-full">
                            {service.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-neutral-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-primary-800 to-primary-700">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                  {t.services.contactCta}
                </h2>
                <p className="text-primary-100">
                  {locale === 'ar' ? 'رد خلال 24 ساعة • بدون التزام' : 'Réponse sous 24h • Sans engagement'}
                </p>
              </div>
              <Link
                href={`/${locale}/contact/`}
                className="inline-flex items-center gap-2 bg-solar-500 hover:bg-solar-400 text-neutral-900 px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-solar-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
              >
                {t.services.contactButton}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
