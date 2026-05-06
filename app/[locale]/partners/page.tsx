import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales } from '@/lib/i18n';
import { getTranslations } from '@/lib/translations';
import Container from '@/components/Container';
import PartnersForm from '@/components/PartnersForm';

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
    title: locale === 'ar' ? 'الشركاء والفنيون' : 'Partenaires et techniciens',
    description: locale === 'ar'
      ? 'انضم إلى شبكة طوفير إنرجي كشريك أو فني. تواصل مع شبكة محترفي الطاقة الشمسية في المغرب.'
      : 'Rejoignez le réseau Tawfir Energy en tant que partenaire ou technicien. Connectez-vous avec notre réseau de professionnels de l\'énergie solaire au Maroc.',
    alternates: {
      canonical: `/${locale}/partners`,
    },
  };
}

export default function PartnersPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  
  if (!locales.includes(locale as typeof locales[number])) {
    notFound();
  }

  const t = getTranslations(locale as typeof locales[number]);

  return (
    <div>
      <Container>
        <div className="section-padding">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t.partners.title}
            </h1>
            <p className="text-lg text-foreground-muted mb-4">
              {t.partners.subtitle}
            </p>
            <p className="text-foreground-muted">
              {t.partners.description}
            </p>
          </div>

          <PartnersForm locale={locale} t={t} />
        </div>
      </Container>
    </div>
  );
}
