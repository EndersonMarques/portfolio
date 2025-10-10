'use client';

import { motion } from 'framer-motion';
import { Monitor, Smartphone, Palette, Code, ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/lib/useLanguage';
import { useTheme } from '@/lib/useTheme';

export default function BuildWithUs() {
  const { t } = useLanguage();
  const { colors } = useTheme();

  const features = [
    t('buildWithUs.features.responsive'),
    t('buildWithUs.features.booking'),
    t('buildWithUs.features.seo'),
    t('buildWithUs.features.fast'),
    t('buildWithUs.features.manage'),
    t('buildWithUs.features.support')
  ];

  const mockupStyles = {
    desktop: {
      background: `linear-gradient(135deg, ${colors.background.primary}, ${colors.background.secondary})`,
      border: `2px solid ${colors.border.primary}`,
      boxShadow: `0 20px 40px rgba(0,0,0,0.1)`
    },
    mobile: {
      background: `linear-gradient(135deg, ${colors.background.primary}, ${colors.background.secondary})`,
      border: `2px solid ${colors.border.primary}`,
      boxShadow: `0 15px 30px rgba(0,0,0,0.1)`
    }
  };

  return (
    <section 
      className="section-padding"
      style={{ backgroundColor: colors.background.secondary }}
    >
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('buildWithUs.title')}
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            {t('buildWithUs.subtitle')}
          </p>
        </motion.div>

        {/* Mockup Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Desktop Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              {/* Browser Frame */}
              <div 
                className="rounded-lg overflow-hidden"
                style={mockupStyles.desktop}
              >
                {/* Browser Header */}
                <div className="flex items-center space-x-2 p-3" style={{ backgroundColor: colors.background.tertiary }}>
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="flex-1 mx-4 py-1 px-3 rounded text-xs" style={{ backgroundColor: colors.background.primary, color: colors.text.secondary }}>
                    {t('buildWithUs.mockup.url')}
                  </div>
                </div>
                
                {/* Website Content */}
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full" style={{ backgroundColor: colors.primary[500] }}></div>
                      <span className="font-bold text-primary">{t('buildWithUs.mockup.brand')}</span>
                    </div>
                    <div className="flex space-x-4 text-sm text-secondary">
                      <span>{t('buildWithUs.mockup.nav.tours')}</span>
                      <span>{t('buildWithUs.mockup.nav.about')}</span>
                      <span>{t('buildWithUs.mockup.nav.contact')}</span>
                    </div>
                  </div>

                  {/* Hero Section */}
                  <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-primary mb-2">{t('buildWithUs.mockup.hero.title')}</h1>
                    <p className="text-sm text-secondary mb-4">{t('buildWithUs.mockup.hero.subtitle')}</p>
                    <button 
                      className="px-4 py-2 rounded text-sm text-white"
                      style={{ backgroundColor: colors.primary[600] }}
                    >
                      {t('buildWithUs.mockup.hero.cta')}
                    </button>
                  </div>

                  {/* Tours Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { id: 1, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=120&fit=crop" },
                      { id: 2, image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=200&h=120&fit=crop" },
                      { id: 3, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=120&fit=crop" },
                      { id: 4, image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=200&h=120&fit=crop" }
                    ].map((tour) => (
                      <div key={tour.id} className="rounded overflow-hidden" style={{ backgroundColor: colors.background.tertiary }}>
                        <div className="h-16 relative overflow-hidden">
                          <img 
                            src={tour.image} 
                            alt={`${t('buildWithUs.mockup.tour')} ${tour.id}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-2">
                          <div className="text-xs font-semibold text-primary mb-1">{t('buildWithUs.mockup.tour')} {tour.id}</div>
                          <div className="text-xs text-secondary">{t('buildWithUs.mockup.price')}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-xs">
              {/* Phone Frame */}
              <div 
                className="rounded-3xl overflow-hidden"
                style={mockupStyles.mobile}
              >
                {/* Phone Header */}
                <div className="flex items-center justify-center p-2" style={{ backgroundColor: colors.background.tertiary }}>
                  <div className="w-12 h-1 rounded-full" style={{ backgroundColor: colors.text.tertiary }}></div>
                </div>
                
                {/* Mobile Content */}
                <div className="p-4">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full" style={{ backgroundColor: colors.primary[500] }}></div>
                      <span className="font-bold text-sm text-primary">{t('buildWithUs.mockup.brand')}</span>
                    </div>
                    <div className="w-6 h-6 rounded" style={{ backgroundColor: colors.primary[100] }}></div>
                  </div>

                  {/* Hero */}
                  <div className="text-center mb-4">
                    <h2 className="text-lg font-bold text-primary mb-1">{t('buildWithUs.mockup.hero.title')}</h2>
                    <p className="text-xs text-secondary mb-3">{t('buildWithUs.mockup.hero.subtitle')}</p>
                    <button 
                      className="px-3 py-1 rounded text-xs text-white"
                      style={{ backgroundColor: colors.primary[600] }}
                    >
                      {t('buildWithUs.mockup.hero.cta')}
                    </button>
                  </div>

                  {/* Tours List */}
                  <div className="space-y-2">
                    {[
                      { id: 1, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=60&fit=crop" },
                      { id: 2, image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=100&h=60&fit=crop" },
                      { id: 3, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=60&fit=crop" }
                    ].map((tour) => (
                      <div key={tour.id} className="flex items-center space-x-3 p-2 rounded" style={{ backgroundColor: colors.background.tertiary }}>
                        <div className="w-8 h-8 rounded overflow-hidden">
                          <img 
                            src={tour.image} 
                            alt={`${t('buildWithUs.mockup.tour')} ${tour.id}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-primary">{t('buildWithUs.mockup.tour')} {tour.id}</div>
                          <div className="text-xs text-secondary">{t('buildWithUs.mockup.price')}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="card p-8"
        >
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">
            {t('buildWithUs.whatYouGet')}
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle size={20} style={{ color: colors.primary[600] }} />
                <span className="text-secondary">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              {t('buildWithUs.cta.title')}
            </h3>
            <p className="text-secondary mb-6">
              {t('buildWithUs.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('buildWithUs.cta.primary')}
                <ArrowRight size={20} className="ml-2" />
              </motion.a>
              <motion.a
                href="#projects"
                className="btn-secondary inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('buildWithUs.cta.secondary')}
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
