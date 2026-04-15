import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'JavaScript', icon: '📜' },
  { name: 'Express', icon: '🚀' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'GSAP', icon: '✨' },
  { name: 'Three.js', icon: '🎯' },
  { name: 'HTML/CSS', icon: '🏗️' },
  { name: 'REST APIs', icon: '🔌' },
  { name: 'Git', icon: '🌳' },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const skillElements = skillsRef.current?.querySelectorAll('[data-skill]');
      gsap.from(skillElements, {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.6,
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
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-bold font-clash text-white mb-4">
            Tech Stack
          </h2>
          <p className="text-xl text-gray-300 font-inter">
            Tools and technologies I work with
          </p>
        </motion.div>

        <div
          ref={skillsRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              data-skill
              whileHover={{ scale: 1.1, rotateZ: 5 }}
              whileTap={{ scale: 0.95 }}
              className="group cursor-pointer"
            >
              <div className="p-6 bg-dark-secondary border border-neon-cyan/20 rounded-lg hover:border-neon-cyan hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300 text-center backdrop-blur-sm">
                <div className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold text-white font-inter group-hover:text-neon-cyan transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee-style scroll alternative */}
        <div className="mt-20 overflow-hidden">
          <motion.div
            className="flex gap-6 whitespace-nowrap"
            initial={{ x: 0 }}
            animate={{ x: -1000 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-3 px-6 py-3 bg-dark-secondary border border-neon-cyan/20 rounded-full hover:border-neon-cyan transition-all duration-300"
              >
                <span className="text-2xl">{skill.icon}</span>
                <span className="text-white font-inter font-semibold">{skill.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
