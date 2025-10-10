'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { PROFILE } from '@/lib/data';
import { useLanguage } from '@/lib/useLanguage';
import { useTheme } from '@/lib/useTheme';

export default function Hero() {
  const { t } = useLanguage();
  const { colors } = useTheme();
  
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `linear-gradient(to bottom right, ${colors.background.secondary}, ${colors.background.primary}, ${colors.primary[50]})`
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute top-20 left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ backgroundColor: colors.primary[500] }}
        ></div>
        <div 
          className="absolute top-40 right-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-float" 
          style={{ 
            backgroundColor: colors.primary[400],
            animationDelay: '2s' 
          }}
        ></div>
        <div 
          className="absolute -bottom-8 left-40 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-float" 
          style={{ 
            backgroundColor: colors.primary[600],
            animationDelay: '4s' 
          }}
        ></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary-500 to-blue-500 p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src="/profile_me.png"
                  alt={PROFILE.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
              {t('hero.greeting')} <span className="gradient-text">{PROFILE.name}</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-semibold mb-4" style={{ color: colors.primary[600] }}>
              {t('hero.title')}
            </h2>
            
            <p className="text-lg md:text-xl text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('hero.tagline')}
            </p>

            {/* Location */}
            <div className="flex items-center justify-center mb-8 text-tertiary">
              <MapPin size={20} className="mr-2" />
              <span>{t('hero.location')}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.a
                href="#projects"
                className="btn-primary inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.viewWork')}
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-secondary inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.getInTouch')}
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <motion.a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href={`mailto:${PROFILE.email}`}
                className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={24} />
              </motion.a>
              <motion.a
                href={`tel:${PROFILE.phone}`}
                className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Phone size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToNext}
            className="text-gray-400 hover:text-primary-600 transition-colors duration-200 animate-bounce"
          >
            <ArrowDown size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
