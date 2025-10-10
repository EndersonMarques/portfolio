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
      title: "Discovery Call",
      duration: "30 min",
      description: "We discuss your business, goals, and vision for the perfect website."
    },
    {
      icon: Palette,
      title: "Design & Planning",
      duration: "3-5 days",
      description: "I create wireframes and design mockups tailored to your motorcycle tour business."
    },
    {
      icon: Code,
      title: "Development",
      duration: "2-3 weeks",
      description: "Building your website with modern technology and best practices."
    },
    {
      icon: Rocket,
      title: "Launch & Support",
      duration: "Ongoing",
      description: "Go live with your new website and receive 30 days of free support."
    }
  ];

  const guarantees = [
    "Mobile-responsive design",
    "SEO optimization included",
    "Fast loading speeds",
    "Easy content management",
    "30-day support included",
    "Money-back guarantee"
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
            How We Work Together
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            A proven process that ensures your motorcycle tour website exceeds expectations and drives bookings.
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
                Step {index + 1}
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
            What You Get Guaranteed
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
              Timeline: 3-4 Weeks Total
            </h3>
            <p className="text-secondary mb-6">
              From our first call to your website going live, the entire process takes just 3-4 weeks. 
              Most of that time is spent perfecting the design and functionality.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">Week 1</div>
                <div className="text-sm text-secondary">Planning & Design</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">Week 2-3</div>
                <div className="text-sm text-secondary">Development</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">Week 4</div>
                <div className="text-sm text-secondary">Testing & Launch</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
