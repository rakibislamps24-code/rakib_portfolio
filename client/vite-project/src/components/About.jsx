import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 100,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center+=100',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center py-20 px-6"
    >
      <div className="max-w-5xl">
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-6xl md:text-7xl font-bold font-clash text-white mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-gray-300 font-inter">
              <p className="text-lg leading-relaxed">
                I'm a passionate software engineer currently in my 3rd year pursuing a degree in Computer Science and Engineering at East West University, Bangladesh.
              </p>
              <p className="text-lg leading-relaxed">
                I specialize in full-stack web development, with expertise in modern frameworks like React, Node.js, and Express. I'm driven by a love for solving complex problems and building scalable, user-centric applications.
              </p>
              <p className="text-lg leading-relaxed">
                Beyond coding, I'm deeply interested in data structures, algorithms, and exploring emerging technologies. I believe in continuous learning and pushing the boundaries of what's possible with code.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <motion.div
              whileHover={{ x: 10, backgroundColor: '#1a1a1a' }}
              transition={{ duration: 0.3 }}
              className="p-6 bg-dark-secondary rounded-lg border border-neon-cyan/20 hover:border-neon-cyan transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-neon-cyan font-inter mb-2">Education</h3>
              <p className="text-gray-300">East West University, Bangladesh</p>
              <p className="text-sm text-gray-400">B.Sc. in Computer Science & Engineering</p>
              <p className="text-sm text-neon-blue mt-2">3rd Year | Expected Graduation: 2026</p>
            </motion.div>

            <motion.div
              whileHover={{ x: 10, backgroundColor: '#1a1a1a' }}
              transition={{ duration: 0.3 }}
              className="p-6 bg-dark-secondary rounded-lg border border-neon-cyan/20 hover:border-neon-cyan transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-neon-cyan font-inter mb-2">Focus Areas</h3>
              <ul className="text-gray-300 space-y-2">
                <li>✦ Full-Stack Development</li>
                <li>✦ Backend Engineering</li>
                <li>✦ Data Structures & Algorithms</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
