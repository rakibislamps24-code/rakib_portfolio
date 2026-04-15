import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const API_URL = import.meta.env.VITE_API_URL;

export default function Contact() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center py-20 px-6"
    >
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl md:text-7xl font-bold font-clash text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 font-inter">
            Let's collaborate and create something amazing together
          </p>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 bg-dark-secondary border border-neon-cyan/20 p-8 md:p-12 rounded-xl backdrop-blur-sm"
        >
          {/* Name Input */}
          <motion.div
            whileFocus={{ scale: 1.02 }}
            className="group"
          >
            <label htmlFor="name" className="block text-sm font-bold text-neon-cyan mb-3 font-inter">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-6 py-3 bg-dark border border-neon-cyan/30 rounded-lg text-white font-inter focus:outline-none focus:border-neon-cyan focus:shadow-lg focus:shadow-neon-cyan/30 transition-all duration-300"
              placeholder="Rakib"
            />
          </motion.div>

          {/* Email Input */}
          <motion.div
            whileFocus={{ scale: 1.02 }}
            className="group"
          >
            <label htmlFor="email" className="block text-sm font-bold text-neon-cyan mb-3 font-inter">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-6 py-3 bg-dark border border-neon-cyan/30 rounded-lg text-white font-inter focus:outline-none focus:border-neon-cyan focus:shadow-lg focus:shadow-neon-cyan/30 transition-all duration-300"
              placeholder="your.email@example.com"
            />
          </motion.div>

          {/* Message Input */}
          <motion.div
            whileFocus={{ scale: 1.02 }}
            className="group"
          >
            <label htmlFor="message" className="block text-sm font-bold text-neon-cyan mb-3 font-inter">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full px-6 py-3 bg-dark border border-neon-cyan/30 rounded-lg text-white font-inter focus:outline-none focus:border-neon-cyan focus:shadow-lg focus:shadow-neon-cyan/30 transition-all duration-300 resize-none"
              placeholder="Tell me about your project or inquiry..."
            />
          </motion.div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 font-inter"
            >
              ✓ Your message was sent successfully!
            </motion.div>
          )}
          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 font-inter"
            >
              ✗ Something went wrong. Please try again.
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-4 bg-gradient-to-r from-neon-cyan to-neon-blue text-dark font-bold rounded-lg hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-inter"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>

          {/* Social Links */}
          <div className="pt-6 border-t border-neon-cyan/20">
            <p className="text-sm text-gray-400 text-center mb-4 font-inter">
              Or connect with me on:
            </p>
            <div className="flex gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark transition-all duration-300"
              >
                GH
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark transition-all duration-300"
              >
                LI
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="mailto:your.email@example.com"
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark transition-all duration-300"
              >
                ✉️
              </motion.a>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
