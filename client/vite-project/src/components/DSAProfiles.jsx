import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { usePasskey } from '../context/PasskeyContext';

export default function DSAProfiles() {
  const { isDark } = useTheme();
  const { isUnlocked, openModal } = usePasskey();

  const profiles = [
    {
      name: 'LeetCode',
      problems: '67',
      icon: '💻',
      link: 'https://leetcode.com/u/Rakibul_Islam_24',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      name: 'GeeksforGeeks',
      problems: '42',
      icon: '📚',
      link: 'https://geeksforgeeks.org/profile/rakib226',
      color: 'from-green-400 to-emerald-500',
    },
    {
      name: 'Code360 (Ninja)',
      problems: '45',
      icon: '⚡',
      link: 'https://naukri.com/code360/profile/9438540a',
      color: 'from-purple-400 to-pink-500',
    },
    {
      name: 'LinkedIn',
      problems: '160+',
      icon: '🔗',
      link: 'https://linkedin.com',
      color: 'from-blue-400 to-cyan-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className={`py-20 px-4 transition-colors duration-500 ${
      isDark
        ? 'bg-gradient-to-b from-gray-900 to-gray-950'
        : 'bg-gradient-to-b from-gray-100 to-white'
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
            Competitive Coding
          </h2>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            160+ Problems Solved • Data Structures & Algorithms Mastery
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {profiles.map((profile, index) => (
            <motion.a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: `0 20px 40px rgba(34, 197, 255, 0.2)` }}
              className={`relative group p-6 rounded-2xl overflow-hidden transition-all duration-300 ${
                isDark
                  ? 'bg-gray-800 border border-gray-700 hover:border-cyan-400'
                  : 'bg-white border border-gray-200 hover:border-cyan-500'
              }`}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${profile.color} opacity-0 group-hover:opacity-10 transition-all duration-300`} />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{profile.icon}</span>
                  <motion.div
                    whileHover={{ rotate: 20 }}
                    className="text-cyan-400"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                </div>

                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {profile.name}
                </h3>

                <p className={`text-3xl font-bold bg-gradient-to-r ${profile.color} bg-clip-text text-transparent mb-2`}>
                  {profile.problems}
                </p>

                <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                  {profile.name.includes('LinkedIn') ? 'Profile' : 'Problems Solved'}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Protected Content */}
        {!isUnlocked && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-8 md:p-12 border-2 ${
              isDark
                ? 'bg-gray-800/50 border-cyan-400/50'
                : 'bg-gray-100/50 border-cyan-500/50'
            }`}
          >
            <div className="text-center">
              <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                📊 Detailed Problem-Solving Breakdown
              </h3>
              <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                View detailed statistics, problem categories, and solving strategies
              </p>
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
                🔓 Unlock with Passkey
              </motion.button>
            </div>
          </motion.div>
        )}

        {isUnlocked && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`rounded-2xl p-8 md:p-12 ${
              isDark
                ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/50'
                : 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50'
            }`}
          >
            <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              📊 Problem-Solving Statistics
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Easy', value: '45', color: 'from-green-400 to-emerald-500' },
                { label: 'Medium', value: '85', color: 'from-yellow-400 to-orange-500' },
                { label: 'Hard', value: '30', color: 'from-red-400 to-pink-500' },
                { label: 'Total', value: '160+', color: 'from-cyan-400 to-blue-500' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  className={`p-4 rounded-lg border ${
                    isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                  }`}
                >
                  <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700">
              <h4 className={`font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Problem Categories:
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Arrays', 'Strings', 'Trees', 'Graphs', 'DP', 'Sorting', 'Searching', 'Hashing', 'BFS/DFS', 'Backtracking'].map((cat, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      isDark
                        ? 'bg-cyan-500/20 text-cyan-300'
                        : 'bg-cyan-500/30 text-cyan-700'
                    }`}
                  >
                    {cat}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
