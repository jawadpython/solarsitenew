'use client';

import { useState, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from './Container';
import LanguageSwitcher from './LanguageSwitcher';
import { getTranslations } from '@/lib/translations';
import type { Locale } from '@/lib/i18n';

export default function Navbar({ locale }: { locale: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const t = useMemo(() => getTranslations(locale as Locale), [locale]);

  const navLinks = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}/services`, label: t.nav.services },
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/mobile-app`, label: t.nav.mobileApp },
    { href: `/${locale}/partners`, label: t.nav.partners },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-xl border-b border-neutral-200/80 shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={`/${locale}`} className="flex items-center gap-2 group">
              {/* Logo Icon */}
              <div className="w-10 h-10 bg-gradient-to-br from-primary-700 to-primary-900 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-neutral-900">
                  TAWFIR <span className="text-primary-700">ENERGY</span>
                </span>
                <span className="text-[10px] font-medium text-neutral-500 tracking-wider uppercase hidden sm:block">
                  {locale === 'ar' ? 'الطاقة الشمسية • المغرب' : 'Énergie solaire • Maroc'}
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  isActive(link.href)
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-neutral-700 hover:text-primary-700 hover:bg-neutral-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side: Language + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher currentLocale={locale} />
            <Link
              href={`/${locale}/contact`}
              className="bg-primary-800 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm shadow-md shadow-primary-900/20 hover:shadow-lg hover:shadow-primary-900/25 transition-all duration-200 flex items-center gap-2"
            >
              <span>{t.nav.contact}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2.5 text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            type="button"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6 pt-4 border-t border-neutral-200 bg-white">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`px-4 py-3.5 rounded-xl text-base font-semibold transition-all duration-200 ${
                    isActive(link.href)
                      ? 'text-primary-700 bg-primary-50'
                      : 'text-neutral-700 hover:text-primary-700 hover:bg-neutral-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 mt-2 border-t border-neutral-200">
                <Link
                  href={`/${locale}/contact`}
                  onClick={closeMenu}
                  className="block w-full bg-primary-800 hover:bg-primary-700 text-white px-4 py-3.5 rounded-xl font-semibold text-center shadow-md transition-all duration-200"
                >
                  {t.nav.contact}
                </Link>
              </div>
              
              {/* Language Switcher */}
              <div className="pt-4 flex justify-center">
                <LanguageSwitcher currentLocale={locale} />
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
