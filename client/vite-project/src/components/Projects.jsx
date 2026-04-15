import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const API_URL = import.meta.env.VITE_API_URL;

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A personal portfolio built with React, GSAP, and Framer Motion showcasing interactive animations and modern design.',
    tech: ['React', 'GSAP', 'Framer Motion', 'Tailwind CSS', 'Three.js'],
    github: 'https://github.com',
    demo: 'https://github.com',
    color: 'from-neon-cyan to-neon-blue',
  },
  {
    id: 2,
    title: 'Weather App',
    description: 'Real-time weather application with API integration, featuring interactive maps and detailed forecasts.',
    tech: ['React', 'API', 'JavaScript', 'Node.js', 'Express'],
    github: 'https://github.com',
    demo: 'https://github.com',
    color: 'from-neon-blue to-neon-purple',
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with authentication, payment integration, and admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
    github: 'https://github.com',
    demo: 'https://github.com',
    color: 'from-neon-purple to-neon-cyan',
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current?.querySelectorAll('[data-project]'), {
        opacity: 0,
        y: 100,
        stagger: 0.2,
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
    <section ref={sectionRef} className="relative w-full min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-bold font-clash text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 font-inter">
            Showcasing my best work and creative solutions
          </p>
        </motion.div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              data-project
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ y: -10 }}
              className="group cursor-pointer h-full"
            >
              <div className="relative h-full p-8 rounded-xl border border-neon-cyan/20 bg-gradient-to-br from-dark-secondary to-dark overflow-hidden group-hover:border-neon-cyan transition-all duration-300">
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}
                />

                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-6">
                    <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${project.color} background-clip-text text-transparent font-bold text-sm`}>
                      {project.tech[0]}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 font-inter group-hover:text-neon-cyan transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-6 flex-grow font-inter text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 font-inter"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-neon-cyan/20">
                    <motion.a
                      whileHover={{ x: 5 }}
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2 px-4 text-center text-white border border-neon-cyan rounded-lg hover:bg-neon-cyan hover:text-dark transition-all duration-300 font-inter font-semibold text-sm"
                    >
                      Code
                    </motion.a>
                    <motion.a
                      whileHover={{ x: 5 }}
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2 px-4 text-center text-dark bg-neon-cyan rounded-lg hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300 font-inter font-semibold text-sm"
                    >
                      Demo
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
