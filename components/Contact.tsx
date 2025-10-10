'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';
import { PROFILE } from '@/lib/data';
import { useLanguage } from '@/lib/useLanguage';
import { useTheme } from '@/lib/useTheme';

export default function Contact() {
  const { t } = useLanguage();
  const { colors } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: PROFILE.email,
      href: `mailto:${PROFILE.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: PROFILE.phone,
      href: `tel:${PROFILE.phone}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: PROFILE.location,
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: PROFILE.github,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: PROFILE.linkedin,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: `https://wa.me/${PROFILE.phone.replace(/\D/g, '')}`,
    },
  ];

  return (
    <section 
      id="contact" 
      className="section-padding"
      style={{ backgroundColor: colors.background.primary }}
    >
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-primary mb-6">{t('contact.letsConnect')}</h3>
              <p className="text-secondary mb-8 leading-relaxed">
                {t('contact.connectText')}
              </p>

              {/* Contact Methods */}
              <div className="space-y-4 mb-8">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    className="flex items-center space-x-4 p-4 rounded-lg transition-colors duration-200 group"
                    style={{ 
                      backgroundColor: colors.background.secondary,
                      '--hover-bg': colors.background.tertiary 
                    } as any}
                  >
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-200"
                      style={{ 
                        backgroundColor: colors.primary[100],
                        '--hover-bg': colors.primary[200] 
                      } as any}
                    >
                      <method.icon className="w-6 h-6" style={{ color: colors.primary[600] }} />
                    </div>
                    <div>
                      <div className="font-medium" style={{ color: colors.text.primary }}>{method.label}</div>
                      <div style={{ color: colors.text.secondary }}>{method.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">{t('contact.followMe')}</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-200 group"
                      style={{ 
                        backgroundColor: colors.background.secondary,
                        '--hover-bg': colors.primary[100] 
                      } as any}
                    >
                      <social.icon 
                        className="w-6 h-6 transition-colors duration-200" 
                        style={{ 
                          color: colors.text.secondary,
                          '--hover-color': colors.primary[600] 
                        } as any}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">{t('contact.sendMessage')}</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: colors.text.secondary }}>
                        {t('contact.form.name')} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                        style={{ 
                          backgroundColor: colors.background.tertiary, 
                          borderColor: colors.border.primary, 
                          color: colors.text.primary 
                        }}
                        placeholder={t('contact.form.namePlaceholder')}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: colors.text.secondary }}>
                        {t('contact.form.email')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                        style={{ 
                          backgroundColor: colors.background.tertiary, 
                          borderColor: colors.border.primary, 
                          color: colors.text.primary 
                        }}
                        placeholder={t('contact.form.emailPlaceholder')}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: colors.text.secondary }}>
                      {t('contact.form.subject')} *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      style={{ 
                        backgroundColor: colors.background.tertiary, 
                        borderColor: colors.border.primary, 
                        color: colors.text.primary 
                      }}
                      placeholder={t('contact.form.subjectPlaceholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: colors.text.secondary }}>
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
                      style={{ 
                        backgroundColor: colors.background.tertiary, 
                        borderColor: colors.border.primary, 
                        color: colors.text.primary 
                      }}
                      placeholder={t('contact.form.messagePlaceholder')}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        {t('contact.form.sending')}
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send size={20} className="mr-2" />
                        {t('contact.form.sendButton')}
                      </div>
                    )}
                  </motion.button>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center"
                    >
                      {t('contact.form.success')}
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
