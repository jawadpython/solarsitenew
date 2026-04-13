import Link from 'next/link';
import Container from '../Container';
import { getTranslations } from '@/lib/translations';
import type { Locale } from '@/lib/i18n';

export default function WhatWeDo({ locale }: { locale: string }) {
  const t = getTranslations(locale as Locale);
  
  const features = [
    {
      title: t.whatWeDo.feature1.title,
      description: t.whatWeDo.feature1.description,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      iconBg: 'bg-primary-100',
      iconColor: 'text-primary-700',
      number: '01',
      slug: 'etude' as const,
    },
    {
      title: t.whatWeDo.feature2.title,
      description: t.whatWeDo.feature2.description,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      iconBg: 'bg-solar-100',
      iconColor: 'text-solar-700',
      number: '02',
      slug: 'installation' as const,
    },
    {
      title: t.whatWeDo.feature3.title,
      description: t.whatWeDo.feature3.description,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      iconBg: 'bg-eco-100',
      iconColor: 'text-eco-700',
      number: '03',
      slug: 'maintenance' as const,
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-neutral-50">
      <Container>
        {/* Section header */}
        <div className="mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-primary-600 to-primary-400 rounded-full"></div>
            <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">
              {locale === 'ar' ? 'خدماتنا' : 'Notre expertise'}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            {t.whatWeDo.title}
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl leading-relaxed">
            {t.whatWeDo.subtitle}
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-6 lg:p-8 border border-neutral-100 hover:border-primary-200 shadow-soft hover:shadow-medium transition-all duration-300"
            >
              {/* Number badge */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 ${feature.iconBg} ${feature.iconColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <span className="text-4xl font-bold text-neutral-100 group-hover:text-primary-100 transition-colors">
                  {feature.number}
                </span>
              </div>
              
              <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {feature.description}
              </p>
              
              <Link
                href={`/${locale}/services/${feature.slug}/`}
                className="mt-6 pt-6 border-t border-neutral-100 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-b-xl -mx-2 px-2"
              >
                <span className="flex items-center gap-2 text-primary-700 font-semibold text-sm hover:text-primary-800">
                  <span>{locale === 'ar' ? 'اقرأ المزيد' : 'En savoir plus'}</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
