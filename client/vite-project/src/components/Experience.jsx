import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { usePasskey } from '../context/PasskeyContext';

export default function Experience() {
  const { isDark } = useTheme();
  const { isUnlocked, openModal } = usePasskey();

  const experiences = [
    {
      title: 'Full-Stack Development',
      company: 'Personal Projects',
      duration: '2023 - Present',
      description: 'Built 15+ web applications using React, Node.js, and MongoDB',
      skills: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    },
    {
      title: 'DSA Mentoring',
      company: 'East West University',
      duration: '2023 - Present',
      description: 'Mentoring 20+ students in Data Structures and Algorithms',
      skills: ['Teaching', 'Mentoring', 'DSA', 'Problem Solving'],
    },
    {
      title: 'Open Source Contributions',
      company: 'GitHub Community',
      duration: '2023 - Present',
      description: 'Contributing to open-source projects and helping the community',
      skills: ['Git', 'Collaboration', 'Python', 'JavaScript'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className={`py-20 px-4 transition-colors duration-500 ${
      isDark
        ? 'bg-gray-950'
        : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent`}>
            Experience & Leadership
          </h2>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Teaching, Mentoring & Full-Stack Development Journey
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className={`absolute left-6 top-20 w-0.5 h-32 ${
                  isDark ? 'bg-gradient-to-b from-cyan-400 to-transparent' : 'bg-gradient-to-b from-cyan-500 to-transparent'
                }`} />
              )}

              {/* Timeline Dot */}
              <div className="relative flex gap-8">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center z-10 ${
                    isDark
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-600'
                  }`}
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5.951-1.429 5.951 1.429a1 1 0 001.169-1.409l-7-14z" />
                  </svg>
                </motion.div>

                {/* Experience Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`flex-1 p-6 rounded-2xl border transition-all duration-300 ${
                    isDark
                      ? 'bg-gray-900 border-gray-800 hover:border-cyan-400'
                      : 'bg-gray-50 border-gray-200 hover:border-cyan-500'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {exp.title}
                      </h3>
                      <p className={`text-lg ${isDark ? 'text-cyan-400' : 'text-cyan-600'} font-medium`}>
                        {exp.company}
                      </p>
                    </div>
                    <span className={`text-sm font-medium px-4 py-2 rounded-lg whitespace-nowrap ${
                      isDark
                        ? 'bg-gray-800 text-cyan-400'
                        : 'bg-gray-200 text-cyan-600'
                    }`}>
                      {exp.duration}
                    </span>
                  </div>

                  <p className={`mb-6 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className={`px-3 py-1 rounded-lg text-sm font-medium ${
                          isDark
                            ? 'bg-cyan-400/20 text-cyan-300'
                            : 'bg-cyan-500/20 text-cyan-700'
                        }`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Leadership & Teaching Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`mt-16 p-8 md:p-12 rounded-2xl border ${
            isDark
              ? 'bg-gradient-to-r from-cyan-500/5 to-blue-500/5 border-cyan-400/50'
              : 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/50'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '👥',
                title: 'Mentoring',
                desc: '20+ students mentored in DSA and competitive programming',
              },
              {
                icon: '📚',
                title: 'Teaching',
                desc: 'Strong focus on DSA, SQL Queries, and Algorithms',
              },
              {
                icon: '🏆',
                title: 'Community',
                desc: 'Active contributor to open-source projects',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h4 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {item.title}
                </h4>
                <p className={isDark ? 'text-gray-400' : 'text-gray-700'}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Protected Resume Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={`mt-16 p-8 md:p-12 rounded-2xl border-2 text-center ${
            isDark
              ? 'bg-gray-900 border-cyan-400/50'
              : 'bg-gray-100 border-cyan-500/50'
          }`}
        >
          <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            📄 Full Resume
          </h3>
          <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Download my detailed resume with complete experience, skills, and achievements
          </p>
          {!isUnlocked ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openModal}
              className={`px-8 py-3 rounded-lg font-bold transition-all duration-300 ${
                isDark
                  ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-400 hover:bg-cyan-500/30'
                  : 'bg-cyan-500/20 border border-cyan-500 text-cyan-600 hover:bg-cyan-500/30'
              }`}
            >
              🔓 Unlock Resume
            </motion.button>
          ) : (
            <motion.a
              href="#resume-download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-block px-8 py-3 rounded-lg font-bold transition-all duration-300 ${
                isDark
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-950'
                  : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
              }`}
            >
              ⬇️ Download Resume
            </motion.a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
