'use client';

import { motion } from 'framer-motion';
import { Code, Zap, Search, TrendingUp } from 'lucide-react';
import { PROFILE, SKILLS, BENEFITS } from '@/lib/data';
import { useLanguage } from '@/lib/useLanguage';
import { useTheme } from '@/lib/useTheme';

export default function About() {
  const { t } = useLanguage();
  const { colors } = useTheme();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const benefitIcons = {
    "High Performance": Zap,
    "Visual Credibility": Code,
    "Found on Google": Search,
    "Conversão": TrendingUp,
  };

  return (
    <section 
      id="about" 
      className="section-padding"
      style={{ backgroundColor: colors.background.primary }}
    >
      <div className="container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {t('about.title')}
            </h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              {t('about.bio')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio & Skills */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-primary mb-6">{t('about.skillsTitle')}</h3>
              <div className="space-y-4 mb-8">
                {SKILLS.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-secondary font-medium">{skill.name}</span>
                      <span className="text-tertiary text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary-500 to-blue-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-primary mb-6">{t('about.whatIDeliver')}</h3>
              <div className="grid gap-6">
                {Object.entries(BENEFITS).map(([title, items], index) => {
                  const IconComponent = benefitIcons[title as keyof typeof benefitIcons];
                  return (
                    <motion.div
                      key={title}
                      variants={itemVariants}
                      className="card p-6"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-primary-600" />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-primary mb-2">{title}</h4>
                          <ul className="space-y-1">
                            {items.map((item, itemIndex) => (
                              <li key={itemIndex} className="text-secondary text-sm flex items-center">
                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "4+", label: t('about.stats.experience') },
                { number: "20+", label: t('about.stats.projects') },
                { number: "100%", label: t('about.stats.satisfaction') },
                { number: "24/7", label: t('about.stats.support') },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-tertiary text-sm md:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
