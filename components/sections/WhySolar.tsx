import Container from '../Container';
import { getTranslations } from '@/lib/translations';
import type { Locale } from '@/lib/i18n';

export default function WhySolar({ locale }: { locale: string }) {
  const t = getTranslations(locale as Locale);
  
  const benefits = [
    {
      title: t.whySolar.benefit1.title,
      description: t.whySolar.benefit1.description,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      highlight: locale === 'ar' ? 'حتى 70%' : "Jusqu'à 70%",
      highlightLabel: locale === 'ar' ? 'توفير' : "d'économies",
    },
    {
      title: t.whySolar.benefit2.title,
      description: t.whySolar.benefit2.description,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      highlight: '25',
      highlightLabel: locale === 'ar' ? 'سنة حماية' : 'ans de protection',
    },
    {
      title: t.whySolar.benefit3.title,
      description: t.whySolar.benefit3.description,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      highlight: '+15%',
      highlightLabel: locale === 'ar' ? 'قيمة العقار' : 'valeur du bien',
    },
    {
      title: t.whySolar.benefit4.title,
      description: t.whySolar.benefit4.description,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      highlight: '-40%',
      highlightLabel: locale === 'ar' ? 'انبعاثات CO2' : 'émissions de CO₂',
    },
  ];
  
  return (
    <section className="section-padding bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-40 w-96 h-96 bg-solar-100 rounded-full blur-3xl opacity-50" aria-hidden="true" />
      
      <Container className="relative z-10">
        {/* Section header */}
        <div className="mb-12 lg:mb-16 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-solar-500 to-solar-400 rounded-full"></div>
            <span className="text-sm font-semibold text-solar-700 uppercase tracking-wider">
              {locale === 'ar' ? 'المزايا' : 'Les avantages'}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            {t.whySolar.title}
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            {t.whySolar.subtitle}
          </p>
        </div>
        
        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-6 lg:p-8 border border-neutral-100 hover:border-solar-200 shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <div className="flex gap-5">
                {/* Stat badge — readable typography, not a cramped square */}
                <div className="flex-shrink-0 pt-0.5">
                  <div
                    className="relative flex w-[6.75rem] sm:w-[7.25rem] flex-col items-center justify-center gap-1.5 rounded-2xl border border-solar-300/50 bg-gradient-to-b from-solar-100 to-solar-50 px-2.5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] transition-transform duration-300 group-hover:scale-[1.02] group-hover:border-solar-400/60 group-hover:shadow-md"
                    dir={locale === 'ar' ? 'rtl' : 'ltr'}
                  >
                    <span className="text-[1.375rem] sm:text-2xl font-black tabular-nums tracking-tight text-solar-900 leading-none">
                      {benefit.highlight}
                    </span>
                    <span className="text-center text-[11px] sm:text-xs font-semibold leading-snug text-solar-800/90">
                      {benefit.highlightLabel}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center text-primary-700 flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 pt-1">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-neutral-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA banner */}
        <div className="mt-12 lg:mt-16 bg-gradient-to-r from-primary-800 to-primary-700 rounded-2xl p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                {locale === 'ar' ? 'هل أنت مستعد للبدء؟' : 'Prêt à faire des économies ?'}
              </h3>
              <p className="text-primary-100">
                {locale === 'ar' ? 'احصل على دراسة مجانية ومخصصة لمشروعك' : 'Obtenez une étude gratuite et personnalisée pour votre projet'}
              </p>
            </div>
            <a 
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 bg-solar-500 hover:bg-solar-400 text-neutral-900 px-8 py-4 rounded-xl font-bold shadow-lg shadow-solar-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
            >
              {locale === 'ar' ? 'طلب دراسة مجانية' : 'Demander une étude gratuite'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
