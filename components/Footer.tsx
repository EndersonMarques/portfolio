'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PROFILE } from '@/lib/data';
import { useLanguage } from '@/lib/useLanguage';
import { useTheme } from '@/lib/useTheme';

export default function Footer() {
  const { t } = useLanguage();
  const { colors } = useTheme();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: PROFILE.github,
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: PROFILE.linkedin,
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: `mailto:${PROFILE.email}`,
      label: 'Email',
    },
  ];

  const quickLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <footer 
      className="text-white"
      style={{ backgroundColor: colors.background.tertiary }}
    >
      <div className="container-max">
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-r from-primary-500 to-blue-500 p-0.5">
                  <img
                    src="/profile_me.png"
                    alt={PROFILE.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: colors.text.primary }}>{PROFILE.name}</h3>
              </div>
              <p className="mb-6 leading-relaxed" style={{ color: colors.text.secondary }}>
                {PROFILE.tagline}
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4" style={{ color: colors.text.primary }}>Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:transition-colors duration-200"
                      style={{ 
                        color: colors.text.secondary,
                        '--hover-color': colors.text.primary 
                      } as any}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-4" style={{ color: colors.text.primary }}>Contact</h4>
              <div className="space-y-2" style={{ color: colors.text.secondary }}>
                <p>{PROFILE.location}</p>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="hover:transition-colors duration-200"
                  style={{ 
                    color: colors.text.secondary,
                    '--hover-color': colors.text.primary 
                  } as any}
                >
                  {PROFILE.email}
                </a>
                <a
                  href={`tel:${PROFILE.phone}`}
                  className="hover:transition-colors duration-200"
                  style={{ 
                    color: colors.text.secondary,
                    '--hover-color': colors.text.primary 
                  } as any}
                >
                  {PROFILE.phone}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
            style={{ borderTopColor: colors.border.primary }}
          >
            <p className="text-sm" style={{ color: colors.text.secondary }}>
              © {currentYear} {PROFILE.name}. All rights reserved.
            </p>
            <p className="text-sm flex items-center mt-2 md:mt-0" style={{ color: colors.text.secondary }}>
              {t('footer.madeWith')} <Heart size={16} className="mx-1 text-red-500" /> {t('footer.in')} {PROFILE.location}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
