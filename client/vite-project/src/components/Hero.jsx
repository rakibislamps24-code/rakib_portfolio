import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';

export default function Hero() {
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

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="text-center z-10">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <h1 className="text-8xl md:text-9xl font-bold font-clash text-white leading-tight mb-4">
            Rakib
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto"></div>
        </motion.div>

        <motion.div
          ref={subtitleRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8 mt-8"
        >
          <p className="text-2xl md:text-3xl font-light text-gray-300 font-inter">
            Full-Stack Software Engineer
          </p>
          <p className="text-lg md:text-xl font-light text-gray-400 mt-2">
            3rd Year CSE Student @ East West University
          </p>
        </motion.div>

        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex gap-6 justify-center mt-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-neon-cyan text-dark font-bold rounded-lg hover:shadow-lg hover:shadow-neon-cyan transition-all duration-300 font-inter"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-neon-cyan text-neon-cyan font-bold rounded-lg hover:bg-neon-cyan hover:text-dark transition-all duration-300 font-inter"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
}
