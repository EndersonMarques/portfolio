'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Palette, Code, Rocket, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/lib/useLanguage';
import { useTheme } from '@/lib/useTheme';

export default function WorkProcess() {
  const { t } = useLanguage();
  const { colors } = useTheme();

  const steps = [
    {
      icon: MessageCircle,
      title: t('workProcess.steps.discovery.title'),
      duration: t('workProcess.steps.discovery.duration'),
      description: t('workProcess.steps.discovery.description')
    },
    {
      icon: Palette,
      title: t('workProcess.steps.design.title'),
      duration: t('workProcess.steps.design.duration'),
      description: t('workProcess.steps.design.description')
    },
    {
      icon: Code,
      title: t('workProcess.steps.development.title'),
      duration: t('workProcess.steps.development.duration'),
      description: t('workProcess.steps.development.description')
    },
    {
      icon: Rocket,
      title: t('workProcess.steps.launch.title'),
      duration: t('workProcess.steps.launch.duration'),
      description: t('workProcess.steps.launch.description')
    }
  ];

  const guarantees = [
    t('workProcess.guarantees.mobile'),
    t('workProcess.guarantees.seo'),
    t('workProcess.guarantees.speed'),
    t('workProcess.guarantees.management'),
    t('workProcess.guarantees.support'),
    t('workProcess.guarantees.guarantee')
  ];

  return (
    <section 
      className="section-padding"
      style={{ backgroundColor: colors.background.secondary }}
    >
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('workProcess.title')}
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            {t('workProcess.subtitle')}
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.primary[100] }}>
                  <step.icon size={32} style={{ color: colors.primary[600] }} />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5" style={{ backgroundColor: colors.primary[200] }}></div>
                )}
              </div>
              <div className="text-sm font-semibold text-primary mb-1">
                {t('workProcess.step')} {index + 1}
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">
                {step.title}
              </h3>
              <div className="text-sm text-tertiary mb-3">
                {step.duration}
              </div>
              <p className="text-sm text-secondary">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card p-8"
        >
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">
            {t('workProcess.guaranteesTitle')}
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={guarantee}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle size={20} style={{ color: colors.primary[600] }} />
                <span className="text-secondary">{guarantee}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              {t('workProcess.timeline.title')}
            </h3>
            <p className="text-secondary mb-6">
              {t('workProcess.timeline.description')}
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">{t('workProcess.timeline.week1.title')}</div>
                <div className="text-sm text-secondary">{t('workProcess.timeline.week1.description')}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">{t('workProcess.timeline.week2.title')}</div>
                <div className="text-sm text-secondary">{t('workProcess.timeline.week2.description')}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">{t('workProcess.timeline.week3.title')}</div>
                <div className="text-sm text-secondary">{t('workProcess.timeline.week3.description')}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
