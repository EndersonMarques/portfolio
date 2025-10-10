'use client';

import { motion } from 'framer-motion';
import { Monitor, Smartphone, Palette, Code, ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/lib/useLanguage';
import { useTheme } from '@/lib/useTheme';

export default function BuildWithUs() {
  const { t } = useLanguage();
  const { colors } = useTheme();

  const features = [
    "Design responsivo para todos os dispositivos",
    "Sistema de reservas integrado",
    "Otimização para Google (SEO)",
    "Carregamento super rápido",
    "Fácil de gerenciar",
    "Suporte técnico incluído"
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
            Monte Seu Site Conosco
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Veja como seu site pode ficar com um design profissional, moderno e focado em conversão. 
            Perfeito para destacar seus tours e aumentar suas reservas.
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
                    www.seutour.com.br
                  </div>
                </div>
                
                {/* Website Content */}
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full" style={{ backgroundColor: colors.primary[500] }}></div>
                      <span className="font-bold text-primary">Seu Tour</span>
                    </div>
                    <div className="flex space-x-4 text-sm text-secondary">
                      <span>Tours</span>
                      <span>Sobre</span>
                      <span>Contato</span>
                    </div>
                  </div>

                  {/* Hero Section */}
                  <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-primary mb-2">Aventuras de Motocicleta</h1>
                    <p className="text-sm text-secondary mb-4">Descubra a Austrália como nunca antes</p>
                    <button 
                      className="px-4 py-2 rounded text-sm text-white"
                      style={{ backgroundColor: colors.primary[600] }}
                    >
                      Reservar Agora
                    </button>
                  </div>

                  {/* Tours Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="rounded overflow-hidden" style={{ backgroundColor: colors.background.tertiary }}>
                        <div className="h-16" style={{ backgroundColor: colors.primary[200] }}></div>
                        <div className="p-2">
                          <div className="text-xs font-semibold text-primary mb-1">Tour {i}</div>
                          <div className="text-xs text-secondary">AUD $450</div>
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
                      <span className="font-bold text-sm text-primary">Seu Tour</span>
                    </div>
                    <div className="w-6 h-6 rounded" style={{ backgroundColor: colors.primary[100] }}></div>
                  </div>

                  {/* Hero */}
                  <div className="text-center mb-4">
                    <h2 className="text-lg font-bold text-primary mb-1">Aventuras de Motocicleta</h2>
                    <p className="text-xs text-secondary mb-3">Descubra a Austrália</p>
                    <button 
                      className="px-3 py-1 rounded text-xs text-white"
                      style={{ backgroundColor: colors.primary[600] }}
                    >
                      Reservar
                    </button>
                  </div>

                  {/* Tours List */}
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center space-x-3 p-2 rounded" style={{ backgroundColor: colors.background.tertiary }}>
                        <div className="w-8 h-8 rounded" style={{ backgroundColor: colors.primary[200] }}></div>
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-primary">Tour {i}</div>
                          <div className="text-xs text-secondary">AUD $450</div>
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
            O Que Você Recebe
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
              Pronto para Transformar Seu Negócio?
            </h3>
            <p className="text-secondary mb-6">
              Vamos criar um site que realmente converte visitantes em clientes. 
              Com design profissional e funcionalidades que fazem a diferença.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Vamos Começar
                <ArrowRight size={20} className="ml-2" />
              </motion.a>
              <motion.a
                href="#projects"
                className="btn-secondary inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Mais Exemplos
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
