'use client';

import { useState } from 'react';
import { Translations } from '@/lib/translations';

interface ContactFormProps {
  locale: string;
  t: Translations;
}

export default function ContactForm({ locale, t }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isRTL = locale === 'ar';

  const inputClasses = "w-full px-4 py-3.5 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-neutral-900 placeholder:text-neutral-400";

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
        {/* Contact Form - Takes more space */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-soft border border-neutral-100">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-neutral-900 mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t.contact.form.namePlaceholder}
                    className={inputClasses}
                    dir={isRTL ? 'rtl' : 'ltr'}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-neutral-900 mb-2">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t.contact.form.emailPlaceholder}
                    className={inputClasses}
                    dir="ltr"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-neutral-900 mb-2">
                    {t.contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t.contact.form.phonePlaceholder}
                    className={inputClasses}
                    dir="ltr"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-neutral-900 mb-2">
                    {t.contact.form.subject}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    dir={isRTL ? 'rtl' : 'ltr'}
                  >
                    <option value="">{t.contact.form.subjectPlaceholder}</option>
                    <option value="quote">{locale === 'ar' ? 'طلب دراسة مجانية' : 'Demande d\'étude gratuite'}</option>
                    <option value="residential">{locale === 'ar' ? 'مشروع سكني' : 'Projet résidentiel'}</option>
                    <option value="commercial">{locale === 'ar' ? 'مشروع تجاري' : 'Projet commercial'}</option>
                    <option value="agricultural">{locale === 'ar' ? 'مشروع زراعي (الضخ)' : 'Projet agricole (pompage)'}</option>
                    <option value="maintenance">{locale === 'ar' ? 'الصيانة' : 'Maintenance'}</option>
                    <option value="other">{locale === 'ar' ? 'أخرى' : 'Autre'}</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-neutral-900 mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder={t.contact.form.messagePlaceholder}
                  className={`${inputClasses} resize-none`}
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-eco-50 border border-eco-200 rounded-xl text-eco-800 flex items-start gap-3">
                  <svg className="w-5 h-5 text-eco-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{t.contact.form.success}</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{t.contact.form.error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-800 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary-900/20 hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t.contact.form.submitting}
                  </>
                ) : (
                  <>
                    {t.contact.form.submit}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </button>
              
              {/* Reassurance */}
              <p className="text-center text-sm text-neutral-500">
                {locale === 'ar' ? 'رد خلال 24 ساعة • بدون التزام' : 'Réponse sous 24\u202fh • Sans engagement'}
              </p>
            </form>
          </div>
        </div>

        {/* Contact Information */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-6 lg:p-8 text-white">
            <h2 className="text-xl font-bold mb-6">
              {t.contact.info.title}
            </h2>
            
            <div className="space-y-5">
              {/* Phone - Primary */}
              <a 
                href="tel:+212663512221" 
                className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors group"
              >
                <div className="w-12 h-12 bg-solar-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-primary-200 mb-1">{t.contact.info.phone}</div>
                  <div className="font-bold text-lg group-hover:text-solar-300 transition-colors">+212 663-512-221</div>
                </div>
              </a>
              
              {/* Email */}
              <a 
                href="mailto:contact@tawfirenergy.com" 
                className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-primary-200 mb-1">{t.contact.info.email}</div>
                  <div className="font-medium group-hover:text-solar-300 transition-colors">contact@tawfirenergy.com</div>
                </div>
              </a>
              
              {/* Hours */}
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-primary-200 mb-1">{t.contact.info.hours}</div>
                  <div className="font-medium">{t.contact.info.hoursValue}</div>
                </div>
              </div>
              
              {/* Location */}
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-primary-200 mb-1">{t.contact.info.address}</div>
                  <div className="font-medium">{t.contact.info.addressValue}</div>
                </div>
              </div>
            </div>

            {/* Founder (brand — no personal name) */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-solar-400 to-solar-600 rounded-full flex items-center justify-center text-neutral-900 font-bold text-lg tracking-tight">
                  {t.contact.info.founderBadge}
                </div>
                <div>
                  <div className="font-bold">{t.contact.info.founderTitle}</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick call CTA */}
          <div className="mt-6 bg-solar-50 border border-solar-200 rounded-2xl p-6 text-center">
            <h3 className="text-lg font-bold text-neutral-900 mb-2">
              {t.contact.cta.title}
            </h3>
            <p className="text-neutral-600 text-sm mb-4">
              {t.contact.cta.description}
            </p>
            <a
              href="tel:+212663512221"
              className="inline-flex items-center gap-2 bg-solar-500 hover:bg-solar-400 text-neutral-900 px-6 py-3 rounded-xl font-bold shadow-lg shadow-solar-500/20 hover:shadow-xl transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {locale === 'ar' ? 'اتصل الآن' : 'Appelez maintenant'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
