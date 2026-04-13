import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { locales, type Locale } from '@/lib/i18n';
import { SERVICE_PILLAR_SLUGS, type ServicePillarSlug } from '@/lib/service-pillars';
import { getTranslations } from '@/lib/translations';
import Container from '@/components/Container';

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    SERVICE_PILLAR_SLUGS.map((slug) => ({ locale, slug }))
  );
}

function isServicePillarSlug(s: string): s is ServicePillarSlug {
  return (SERVICE_PILLAR_SLUGS as readonly string[]).includes(s);
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const { locale, slug } = params;
  if (!locales.includes(locale as Locale) || !isServicePillarSlug(slug)) {
    return {};
  }
  const t = getTranslations(locale as Locale);
  const p = t.services.pillars[slug];
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    alternates: {
      canonical: `/${locale}/services/${slug}/`,
    },
  };
}

export default function ServicePillarPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const { locale, slug } = params;

  if (!locales.includes(locale as Locale) || !isServicePillarSlug(slug)) {
    notFound();
  }

  const t = getTranslations(locale as Locale);
  const p = t.services.pillars[slug];
  const backLabel = locale === 'ar' ? 'العودة إلى الخدمات' : 'Retour aux services';

  return (
    <div>
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-neutral-900 py-14 lg:py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-solar-500/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl" aria-hidden="true" />
        <Container className="relative z-10">
          <Link
            href={`/${locale}/services/`}
            className="inline-flex items-center gap-2 text-primary-100 hover:text-white text-sm font-medium mb-8 transition-colors"
          >
            <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {backLabel}
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl">{p.title}</h1>
          <p className="text-lg text-neutral-300 leading-relaxed max-w-3xl">{p.intro}</p>
        </Container>
      </section>

      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto space-y-12">
            {p.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4">{section.title}</h2>
                <p className="text-neutral-600 leading-relaxed whitespace-pre-line">{section.body}</p>
              </div>
            ))}

            <div className="rounded-2xl border border-primary-100 bg-primary-50/50 p-6 md:p-8">
              <h2 className="text-lg font-bold text-primary-900 mb-4">{p.listTitle}</h2>
              <ul className="space-y-3 text-neutral-700 list-disc list-inside marker:text-primary-600">
                {p.list.map((item, i) => (
                  <li key={i} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href={`/${locale}/contact/`}
                className="inline-flex items-center justify-center gap-2 bg-solar-500 hover:bg-solar-400 text-neutral-900 px-8 py-4 rounded-xl font-bold shadow-lg shadow-solar-500/25 transition-all duration-200"
              >
                {p.cta}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href={`/${locale}/services/`}
                className="inline-flex items-center justify-center gap-2 border-2 border-neutral-200 hover:border-primary-300 text-neutral-800 px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                {backLabel}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
