import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { locales } from '@/lib/i18n';
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
    title: locale === 'ar' ? 'التطبيق المحمول' : 'Application mobile',
    description: locale === 'ar'
      ? 'تطبيق طوفير إنرجي: حاسبة الطاقة الشمسية، حاسبة الضخ، تقدير التوفير، البحث عن الفنيين وطلب عرض السعر.'
      : 'Application Tawfir Energy : calculateur solaire, calculateur de pompage, estimation des économies, recherche de techniciens et demande de devis.',
    alternates: {
      canonical: `/${locale}/mobile-app`,
    },
  };
}

export default function MobileAppPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  
  if (!locales.includes(locale as typeof locales[number])) {
    notFound();
  }

  const t = getTranslations(locale as typeof locales[number]);

  const features = [
    t.mobileAppPage.features.feature1,
    t.mobileAppPage.features.feature2,
    t.mobileAppPage.features.feature3,
    t.mobileAppPage.features.feature4,
    t.mobileAppPage.features.feature5,
  ];

  const featureIcons = [
    <svg key="1" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>,
    <svg key="2" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>,
    <svg key="3" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg key="4" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>,
    <svg key="5" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>,
  ];

  const isRTL = locale === 'ar';

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-neutral-900 py-16 lg:py-24 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-solar-500/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl" aria-hidden="true" />
        
        <Container className="relative z-10">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
            {/* Text Content */}
            <div className={isRTL ? 'lg:col-start-2' : ''}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6 border border-white/20">
                <svg className="w-5 h-5 text-solar-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-semibold text-white/90">
                  {locale === 'ar' ? 'تطبيق مجاني' : 'Application gratuite'}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {t.mobileAppPage.title}
              </h1>
              <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-8">
                {t.mobileAppPage.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-3 bg-neutral-900 text-white px-6 py-4 rounded-xl font-semibold hover:bg-neutral-800 transition-colors"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-80">{locale === 'ar' ? 'حمّل من' : 'Télécharger sur'}</div>
                    <div className="text-sm font-bold">App Store</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-3 bg-neutral-900 text-white px-6 py-4 rounded-xl font-semibold hover:bg-neutral-800 transition-colors"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-80">{locale === 'ar' ? 'متوفر على' : 'Disponible sur'}</div>
                    <div className="text-sm font-bold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Image */}
            <div className={isRTL ? 'lg:col-start-1' : ''}>
              <div className="relative w-full max-w-sm mx-auto">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-solar-500/20 rounded-[3rem] blur-3xl scale-75" aria-hidden="true" />
                <Image
                  src="/images/appimage2.jpeg"
                  alt={locale === 'ar' ? 'تطبيق طوفير إنرجي' : 'Application Tawfir Energy'}
                  width={400}
                  height={800}
                  className="relative w-full h-auto rounded-3xl shadow-2xl border-4 border-white/10"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-12 lg:mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-primary-600 to-primary-400 rounded-full"></div>
                <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">
                  {locale === 'ar' ? 'المميزات' : 'Fonctionnalités'}
                </span>
                <div className="w-12 h-1 bg-gradient-to-l from-primary-600 to-primary-400 rounded-full"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                {t.mobileAppPage.features.title}
              </h2>
            </div>
            
            {/* Features grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 border border-neutral-100 hover:border-primary-200 shadow-soft hover:shadow-medium transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center text-primary-700 mb-4 group-hover:scale-110 transition-transform">
                    {featureIcons[index]}
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Download CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-primary-800 to-primary-700">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.mobileAppPage.download.title}
            </h2>
            <p className="text-primary-100 mb-8 text-lg">
              {t.mobileAppPage.download.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 bg-white text-primary-800 px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-neutral-50 hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                {t.mobileAppPage.download.appStore}
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 bg-white text-primary-800 px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-neutral-50 hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                {t.mobileAppPage.download.playStore}
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              {locale === 'ar' ? 'هل لديك أسئلة؟' : 'Des questions ?'}
            </h2>
            <p className="text-neutral-600 mb-8">
              {t.mobileApp.description}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 bg-primary-800 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary-900/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              {t.contact.title}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
