import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function Hero() {
  const { isDark } = useTheme();
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Initial animation on load
    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      opacity: 0,
      y: 100,
      duration: 0.8,
      delay: 0.2,
    })
      .from(subtitleRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.6,
      }, '-=0.4')
      .from(ctaRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
      }, '-=0.3');
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className={`relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 transition-colors duration-500 ${
      isDark ? 'bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950' : 'bg-gradient-to-b from-gray-50 via-white to-gray-100'
    }`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className={`absolute w-72 h-72 rounded-full ${
            isDark ? 'bg-cyan-500/10' : 'bg-cyan-300/20'
          } blur-3xl`}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className={`absolute w-72 h-72 rounded-full ${
            isDark ? 'bg-blue-500/10' : 'bg-blue-300/20'
          } blur-3xl -bottom-32 -right-32`}
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="text-center z-10 px-4 max-w-6xl">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <motion.h1
            className={`text-7xl md:text-8xl lg:text-9xl font-bold leading-tight mb-4 ${
              isDark
                ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent'
            }`}
            animate={{
              backgroundPosition: ["0%", "100%"],
            }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          >
            Rakib
          </motion.h1>
          <motion.div
            className={`h-1.5 w-48 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-blue-500`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <motion.div
          ref={subtitleRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8 mt-8 space-y-2"
        >
          <motion.p
            className={`text-2xl md:text-4xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
            variants={itemVariants}
          >
            Full-Stack Software Engineer
          </motion.p>
          <motion.p
            className={`text-lg md:text-2xl font-light ${
              isDark ? 'text-gray-400' : 'text-gray-700'
            }`}
            variants={itemVariants}
          >
            3rd Year CSE Student @ East West University
          </motion.p>
          <motion.p
            className={`text-base md:text-lg font-light ${
              isDark ? 'text-gray-500' : 'text-gray-600'
            }`}
            variants={itemVariants}
          >
            160+ DSA Problems | Web Apps | ML Projects | Open Source
          </motion.p>
        </motion.div>

        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap gap-6 justify-center mt-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34, 197, 255, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 font-bold rounded-xl transition-all duration-300 ${
              isDark
                ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-950 hover:shadow-lg'
                : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg'
            }`}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 border-2 font-bold rounded-xl transition-all duration-300 ${
              isDark
                ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
                : 'border-cyan-500 text-cyan-600 hover:bg-cyan-500/10'
            }`}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-8 mt-16 md:mt-20 max-w-2xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { label: 'Projects', value: '15+' },
            { label: 'DSA Problems', value: '160+' },
            { label: 'Years Experience', value: '2+' },
          ].map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center">
              <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className={`text-sm md:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className={`w-6 h-10 border-2 rounded-full flex items-center justify-center ${
          isDark ? 'border-cyan-400' : 'border-cyan-500'
        }`}>
          <motion.div
            className={`w-1 h-2 rounded-full ${
              isDark ? 'bg-cyan-400' : 'bg-cyan-500'
            }`}
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
