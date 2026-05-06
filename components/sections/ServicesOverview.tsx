import Link from 'next/link';
import Container from '../Container';
import { getTranslations } from '@/lib/translations';
import type { Locale } from '@/lib/i18n';

export default function ServicesOverview({ locale }: { locale: string }) {
  const t = getTranslations(locale as Locale);
  
  const services = [
    {
      title: t.services.service1.title,
      description: t.services.service1.description,
      iconBg: 'bg-primary-100',
      iconColor: 'text-primary-600',
      icon: '📊',
    },
    {
      title: t.services.service2.title,
      description: t.services.service2.description,
      iconBg: 'bg-accent-100',
      iconColor: 'text-accent-600',
      icon: '🏠',
    },
    {
      title: t.services.service3.title,
      description: t.services.service3.description,
      iconBg: 'bg-success-100',
      iconColor: 'text-success-600',
      icon: '🔧',
    },
    {
      title: t.services.service4.title,
      description: t.services.service4.description,
      iconBg: 'bg-secondary-100',
      iconColor: 'text-secondary-600',
      icon: '🔍',
    },
  ];
  
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            {t.services.title}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl">
            {t.services.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
            >
              <div className={`w-16 h-16 ${service.iconBg} ${service.iconColor} rounded-[16px] flex items-center justify-center text-3xl mb-5`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                {service.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Calculator Section - App Module Style */}
        <div className="bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-500 rounded-[24px] p-8 md:p-10 text-white mb-12 shadow-[0_8px_24px_rgba(14,165,233,0.25)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-white/20 rounded-[20px] flex items-center justify-center text-5xl backdrop-blur-sm">
                🧮
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">
                  {locale === 'ar' ? 'حاسبة الطاقة الشمسية' : 'Calculateur solaire'}
                </h3>
                <p className="text-white/90 text-lg">
                  {locale === 'ar' 
                    ? 'قدّر تركيبك وتوفيرك ببضع نقرات'
                    : 'Estimez votre installation et vos économies en quelques clics.'}
                </p>
              </div>
            </div>
            <Link
              href={`/${locale}/services`}
              className="bg-white text-primary-700 px-8 py-4 rounded-[16px] font-semibold hover:bg-neutral-50 hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
            >
              <span>Calculer</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Result Cards - Green Highlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="result-card">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-success-500 rounded-[12px] flex items-center justify-center text-white text-sm font-bold leading-tight px-1">
                {t.services.overviewStats.savings.badge}
              </div>
              <div className="min-w-0">
                <div className="text-sm text-neutral-600 font-medium">{t.services.overviewStats.savings.label}</div>
                <div className="text-2xl sm:text-3xl font-bold text-success-700 tabular-nums tracking-tight">
                  {t.services.overviewStats.savings.value}
                </div>
              </div>
            </div>
            <p className="text-sm text-neutral-600">{t.services.overviewStats.savings.hint}</p>
          </div>

          <div className="result-card">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-accent-500 rounded-[12px] flex items-center justify-center text-white text-xl font-bold">
                ⚡
              </div>
              <div className="min-w-0">
                <div className="text-sm text-neutral-600 font-medium">{t.services.overviewStats.production.label}</div>
                <div className="text-3xl font-bold text-accent-700 tabular-nums">{t.services.overviewStats.production.value}</div>
              </div>
            </div>
            <p className="text-sm text-neutral-600">{t.services.overviewStats.production.hint}</p>
          </div>

          <div className="result-card">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary-500 rounded-[12px] flex items-center justify-center text-white text-xl font-bold">
                📅
              </div>
              <div className="min-w-0">
                <div className="text-sm text-neutral-600 font-medium">{t.services.overviewStats.roi.label}</div>
                <div className="text-3xl font-bold text-primary-700">{t.services.overviewStats.roi.value}</div>
              </div>
            </div>
            <p className="text-sm text-neutral-600">{t.services.overviewStats.roi.hint}</p>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href={`/${locale}/services`}
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors text-lg"
          >
            <span>{locale === 'ar' ? 'عرض جميع الخدمات' : 'Voir tous les services'}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
}
