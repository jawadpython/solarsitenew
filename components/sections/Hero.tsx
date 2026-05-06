import Link from 'next/link';
import Container from '../Container';
import { getTranslations } from '@/lib/translations';
import type { Locale } from '@/lib/i18n';

export default function Hero({ locale }: { locale: string }) {
  const t = getTranslations(locale as Locale);
  
  // Credibility stats
  const stats = [
    { value: '10+', label: locale === 'ar' ? 'سنوات خبرة' : "Années d'expertise" },
    { value: '500+', label: locale === 'ar' ? 'مشروع منجز' : 'Installations réalisées' },
    { value: '25', label: locale === 'ar' ? 'سنة ضمان' : 'Années de garantie' },
  ];

  return (
    <section 
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{
        backgroundImage: 'url(/images/solarimage.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Strong dark overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950/85 via-primary-950/80 to-neutral-900/75" aria-hidden="true" />
      
      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-solar-500/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl" aria-hidden="true" />
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-12 lg:py-16">
          {/* Left Content - Main messaging */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <div className="w-2 h-2 bg-eco-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-white/90">
                {t.hero.badge}
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              {t.hero.headline.split('\n')[0]}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-solar-400 via-solar-300 to-solar-400">
                {t.hero.headline.split('\n')[1]}
              </span>
            </h1>
            
            {/* Subtext */}
            <p className="text-lg md:text-xl text-neutral-200 max-w-2xl leading-relaxed">
              {t.hero.subtext}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href={`/${locale}/contact`}
                className="group bg-solar-500 hover:bg-solar-400 text-neutral-900 px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-solar-500/30 hover:shadow-xl hover:shadow-solar-400/40 hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                {t.hero.ctaPrimary}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href={`/${locale}/services`}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 hover:border-white/40 transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>
            
            {/* Trust indicators with checkmarks */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-4">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-eco-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-neutral-200 font-medium">{t.hero.trust1}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-eco-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-neutral-200 font-medium">{t.hero.trust2}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-eco-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-neutral-200 font-medium">{t.hero.trust3}</span>
              </div>
            </div>
          </div>

          {/* Right - Stats & Credibility Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl">
              {/* Card Header */}
              <div className="text-center mb-6 pb-6 border-b border-white/10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-solar-400 to-solar-600 rounded-2xl mb-4 shadow-lg shadow-solar-500/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {locale === 'ar' ? 'خبراء الطاقة الشمسية بالمغرب' : 'Expert solaire au Maroc'}
                </h3>
                <p className="text-neutral-300 text-sm">
                  {locale === 'ar' ? 'دراسة، توريد، تركيب وصيانة' : 'Étude, fourniture, installation et maintenance'}
                </p>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-solar-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-neutral-300 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* CTA in card */}
              <Link
                href={`/${locale}/contact`}
                className="block w-full bg-white text-primary-800 px-6 py-4 rounded-xl font-bold text-center hover:bg-neutral-50 hover:shadow-lg transition-all duration-200"
              >
                {locale === 'ar' ? 'احصل على دراسة مجانية' : 'Demandez votre étude gratuite'}
              </Link>
              
              {/* Reassurance text */}
              <p className="text-center text-neutral-400 text-xs mt-4">
                {locale === 'ar' ? 'رد خلال 24 ساعة • بدون التزام' : 'Réponse sous 24\u202fh • Sans engagement'}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
