'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, User } from 'lucide-react';
import { PROJECTS } from '@/lib/data';
import { useLanguage } from '@/lib/useLanguage';
import { useTheme } from '@/lib/useTheme';

export default function Projects() {
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

  const featuredProjects = PROJECTS.filter(project => project.featured);
  const otherProjects = PROJECTS.filter(project => !project.featured);

  return (
    <section 
      id="projects" 
      className="section-padding"
      style={{ backgroundColor: colors.background.secondary }}
    >
      <div className="container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {t('projects.title')}
            </h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              {t('projects.subtitle')}
            </p>
          </motion.div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="card overflow-hidden group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-blue-100 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 hover:bg-white text-gray-700 p-2 rounded-lg transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                    <span className="text-sm font-medium" style={{ color: colors.primary[600] }}>{project.role}</span>
                  </div>

                  <p className="text-secondary mb-4 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="text-sm text-secondary flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full mr-2 mt-2 flex-shrink-0" style={{ backgroundColor: colors.primary[500] }}></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">
              {t('projects.moreProjects')}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  className="card p-6 group"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-primary group-hover:transition-colors duration-200" style={{ '--hover-color': colors.primary[600] } as any}>
                      {project.title}
                    </h4>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tertiary hover:transition-colors duration-200"
                      style={{ '--hover-color': colors.primary[600] } as any}
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>

                  <p className="text-secondary text-sm mb-3 leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="flex items-center justify-between text-xs text-tertiary">
                    <span className="flex items-center">
                      <User size={12} className="mr-1" />
                      {project.role}
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {project.stack.slice(0, 2).map((tech) => (
                        <span key={tech} className="px-2 py-1 rounded" style={{ backgroundColor: colors.background.tertiary, color: colors.text.secondary }}>
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 2 && (
                        <span className="px-2 py-1 rounded" style={{ backgroundColor: colors.background.tertiary, color: colors.text.secondary }}>
                          +{project.stack.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <p className="text-secondary mb-6">
              {t('projects.interested')}
            </p>
            <motion.a
              href="#contact"
              className="btn-primary inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('projects.startProject')}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
