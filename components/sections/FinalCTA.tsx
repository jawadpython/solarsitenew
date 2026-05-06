import Link from 'next/link';
import Container from '../Container';
import { getTranslations } from '@/lib/translations';
import type { Locale } from '@/lib/i18n';

export default function FinalCTA({ locale }: { locale: string }) {
  const t = getTranslations(locale as Locale);
  return (
    <section className="relative py-20 md:py-24 lg:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-neutral-900" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-solar-500/20 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      </div>
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main content */}
          <div className="text-center mb-10">
            {/* Urgency badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-solar-500/20 border border-solar-500/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-solar-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-solar-300">
                {locale === 'ar' ? 'عرض محدود' : 'Étude gratuite disponible'}
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {t.finalCta.title}
            </h2>
            <p className="text-lg md:text-xl text-neutral-300 mb-10 leading-relaxed max-w-2xl mx-auto">
              {t.finalCta.description}
            </p>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href={`/${locale}/contact`}
              className="group bg-solar-500 hover:bg-solar-400 text-neutral-900 px-8 py-5 rounded-xl font-bold text-lg shadow-xl shadow-solar-500/30 hover:shadow-2xl hover:shadow-solar-400/40 hover:-translate-y-1 transition-all duration-200 inline-flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {t.finalCta.cta1}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+212663512221"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-5 rounded-xl font-semibold text-lg hover:bg-white/20 hover:border-white/30 transition-all duration-200 inline-flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {t.finalCta.cta2}
            </a>
          </div>
          
          {/* Trust/reassurance elements */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 pt-8 border-t border-white/10">
            <div className="flex items-center gap-2 text-neutral-400">
              <svg className="w-5 h-5 text-eco-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">{locale === 'ar' ? 'بدون التزام' : 'Sans engagement'}</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <svg className="w-5 h-5 text-eco-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">{locale === 'ar' ? 'رد خلال 24 ساعة' : 'Réponse sous 24\u202fh'}</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <svg className="w-5 h-5 text-eco-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">{locale === 'ar' ? 'دراسة مخصصة' : 'Étude personnalisée'}</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <svg className="w-5 h-5 text-eco-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">{locale === 'ar' ? 'تغطية كل المغرب' : 'Tout le Maroc'}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
