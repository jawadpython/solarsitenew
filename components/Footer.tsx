import Link from 'next/link';
import Container from './Container';
import { getTranslations } from '@/lib/translations';
import type { Locale } from '@/lib/i18n';

export default function Footer({ locale }: { locale: string }) {
  const currentYear = new Date().getFullYear();
  const t = getTranslations(locale as Locale);

  return (
    <footer className="bg-neutral-950 text-neutral-300">
      {/* Main footer content */}
      <Container>
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Company Info - Larger column */}
            <div className="lg:col-span-4">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    TAWFIR <span className="text-solar-400">ENERGY</span>
                  </h3>
                  <span className="text-xs text-neutral-500 uppercase tracking-wider">
                    {locale === 'ar' ? 'الطاقة الشمسية' : 'Énergie solaire'}
                  </span>
                </div>
              </div>
              
              <p className="text-neutral-400 leading-relaxed mb-6 max-w-sm">
                {t.footer.description}
              </p>
              
              {/* Quick contact */}
              <div className="space-y-3">
                <a
                  href="tel:+212663512221"
                  className="flex items-center gap-3 text-neutral-300 hover:text-solar-400 transition-colors group"
                >
                  <div className="w-10 h-10 bg-neutral-800 group-hover:bg-neutral-700 rounded-lg flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="font-medium">+212 663-512-221</span>
                </a>
                <a
                  href="mailto:contact@tawfirenergy.com"
                  className="flex items-center gap-3 text-neutral-300 hover:text-solar-400 transition-colors group"
                >
                  <div className="w-10 h-10 bg-neutral-800 group-hover:bg-neutral-700 rounded-lg flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="font-medium">contact@tawfirenergy.com</span>
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">{t.footer.services}</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href={`/${locale}/services`}
                    className="text-neutral-400 hover:text-solar-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <svg className="w-3 h-3 text-solar-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                    {t.footer.solarInstallation}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/services`}
                    className="text-neutral-400 hover:text-solar-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <svg className="w-3 h-3 text-solar-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                    {t.footer.energyConsulting}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/services`}
                    className="text-neutral-400 hover:text-solar-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <svg className="w-3 h-3 text-solar-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                    {t.footer.maintenance}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">{t.footer.company}</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href={`/${locale}/about`}
                    className="text-neutral-400 hover:text-solar-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <svg className="w-3 h-3 text-solar-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                    {t.footer.aboutUs}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/partners`}
                    className="text-neutral-400 hover:text-solar-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <svg className="w-3 h-3 text-solar-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                    {t.footer.careers}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/mobile-app`}
                    className="text-neutral-400 hover:text-solar-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <svg className="w-3 h-3 text-solar-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                    {locale === 'ar' ? 'التطبيق' : 'Application mobile'}
                  </Link>
                </li>
              </ul>
            </div>

            {/* CTA Card */}
            <div className="lg:col-span-4">
              <div className="bg-gradient-to-br from-primary-900/50 to-neutral-900 border border-primary-800/30 rounded-2xl p-6">
                <h4 className="text-white font-bold mb-3">
                  {locale === 'ar' ? 'ابدأ مشروعك الشمسي' : 'Démarrez votre projet solaire'}
                </h4>
                <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
                  {locale === 'ar' 
                    ? 'احصل على دراسة مجانية ومخصصة لمشروعك الشمسي.'
                    : 'Obtenez une étude gratuite et personnalisée pour votre installation.'}
                </p>
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 bg-solar-500 hover:bg-solar-400 text-neutral-900 px-5 py-3 rounded-lg font-semibold text-sm shadow-lg shadow-solar-500/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                >
                  {locale === 'ar' ? 'طلب دراسة مجانية' : 'Demander une étude'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              
              {/* Location badge */}
              <div className="mt-4 flex items-center gap-2 text-neutral-500 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{t.footer.country}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
      
      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <Container>
          <div className="py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-neutral-500 text-sm">
                © {currentYear} TAWFIR ENERGY. {t.footer.copyright}
              </p>
              <div className="flex items-center gap-6">
                <Link
                  href="#"
                  className="text-neutral-500 hover:text-neutral-300 text-sm transition-colors"
                >
                  {t.footer.privacy}
                </Link>
                <Link
                  href="#"
                  className="text-neutral-500 hover:text-neutral-300 text-sm transition-colors"
                >
                  {t.footer.terms}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
