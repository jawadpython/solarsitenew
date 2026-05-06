import Container from '../Container';
import { getTranslations } from '@/lib/translations';
import type { Locale } from '@/lib/i18n';

export default function Trust({ locale }: { locale: string }) {
  const t = getTranslations(locale as Locale);
  
  const trustPoints = [
    {
      value: t.trust.stat1,
      label: t.trust.stat1Label,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      value: t.trust.stat2,
      label: t.trust.stat2Label,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      value: t.trust.stat3,
      label: t.trust.stat3Label,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      value: t.trust.stat4,
      label: t.trust.stat4Label,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];
  
  return (
    <section className="section-padding bg-neutral-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-solar-500/10 rounded-full blur-3xl" aria-hidden="true" />
      
      <Container className="relative z-10">
        {/* Section header */}
        <div className="mb-12 lg:mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
            <svg className="w-5 h-5 text-solar-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <span className="text-sm font-semibold text-white/80">
              {locale === 'ar' ? 'أرقامنا تتحدث' : 'Nos chiffres parlent'}
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.trust.title}
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            {t.trust.subtitle}
          </p>
        </div>
        
        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {trustPoints.map((point, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-solar-400 to-solar-600 rounded-xl mb-4 text-white shadow-lg shadow-solar-500/30 group-hover:scale-110 transition-transform">
                {point.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {point.value}
              </div>
              <div className="text-neutral-400 font-medium text-sm md:text-base">
                {point.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust badges */}
        <div className="mt-12 pt-12 border-t border-white/10">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-eco-600/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-eco-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-sm text-neutral-300">
                <span className="block font-semibold text-white">{locale === 'ar' ? 'معتمد' : 'Certifié'}</span>
                {locale === 'ar' ? 'جودة المغرب' : 'Qualité au Maroc'}
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary-600/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-sm text-neutral-300">
                <span className="block font-semibold text-white">{locale === 'ar' ? 'ضمان' : 'Garantie'}</span>
                {locale === 'ar' ? 'حتى 25 سنة' : "Jusqu'à 25 ans"}
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-solar-600/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-solar-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-sm text-neutral-300">
                <span className="block font-semibold text-white">{locale === 'ar' ? 'سريع' : 'Rapide'}</span>
                {locale === 'ar' ? 'رد خلال 24 ساعة' : 'Réponse sous 24\u202fh'}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
