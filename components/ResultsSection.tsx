'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Clock, Target, Zap } from 'lucide-react';
import { useLanguage } from '@/lib/useLanguage';
import { useTheme } from '@/lib/useTheme';

export default function ResultsSection() {
  const { t } = useLanguage();
  const { colors } = useTheme();

  const results = [
    {
      icon: TrendingUp,
      metric: "200%",
      label: t('results.metrics.bookings.label'),
      description: t('results.metrics.bookings.description')
    },
    {
      icon: Users,
      metric: "60%",
      label: t('results.metrics.calls.label'),
      description: t('results.metrics.calls.description')
    },
    {
      icon: DollarSign,
      metric: "AUD $15K+",
      label: t('results.metrics.revenue.label'),
      description: t('results.metrics.revenue.description')
    },
    {
      icon: Clock,
      metric: "24/7",
      label: t('results.metrics.availability.label'),
      description: t('results.metrics.availability.description')
    }
  ];

  const features = [
    {
      icon: Target,
      title: t('results.features.mobile.title'),
      description: t('results.features.mobile.description')
    },
    {
      icon: Zap,
      title: t('results.features.speed.title'),
      description: t('results.features.speed.description')
    },
    {
      icon: Users,
      title: t('results.features.booking.title'),
      description: t('results.features.booking.description')
    },
    {
      icon: TrendingUp,
      title: t('results.features.seo.title'),
      description: t('results.features.seo.description')
    }
  ];

  return (
    <section 
      className="section-padding"
      style={{ backgroundColor: colors.background.primary }}
    >
      <div className="container-max">
        {/* Results Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('results.title')}
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            {t('results.subtitle')}
          </p>
        </motion.div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {results.map((result, index) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.primary[100] }}>
                <result.icon size={32} style={{ color: colors.primary[600] }} />
              </div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {result.metric}
              </div>
              <div className="text-lg font-semibold text-primary mb-2">
                {result.label}
              </div>
              <div className="text-sm text-secondary">
                {result.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card p-8"
        >
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">
            {t('results.whyYouNeed.title')}
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.primary[100] }}>
                  <feature.icon size={24} style={{ color: colors.primary[600] }} />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-secondary">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Investment Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              {t('results.investment.title')}
            </h3>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">{t('results.investment.starting')}</div>
                <div className="text-secondary">{t('results.investment.discuss')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">AUD $15K+</div>
                <div className="text-secondary">{t('results.investment.revenue')}</div>
              </div>
            </div>
            <p className="text-lg text-secondary mb-6">
              <strong>{t('results.investment.roi')}</strong> - {t('results.investment.solution')}
            </p>
            <motion.a
              href="#contact"
              className="btn-primary inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('results.investment.cta')}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
