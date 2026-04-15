import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePasskey } from '../context/PasskeyContext';
import { useTheme } from '../context/ThemeContext';
import axios from 'axios';

export default function PasskeyModal() {
  const { showModal, closeModal, verifyPasskey } = usePasskey();
  const { isDark } = useTheme();
  const [passkey, setPasskey] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleVerify = (e) => {
    e.preventDefault();
    if (verifyPasskey(passkey)) {
      setPasskey('');
      setError('');
    } else {
      setError('Invalid passkey. Please try again.');
      setPasskey('');
    }
  };

  const handleRequestAccess = async () => {
    setLoading(true);
    try {
      const response = await axios.post('https://rakib-backend-5wnm.onrender.com/api/request-access', {
        message: 'User requested access to protected content (resume & DSA info)',
      });
      
      if (response.status === 200) {
        alert('Access request sent! Please check your email for the passkey.');
        setPasskey('');
        setError('');
        closeModal();
      }
    } catch (err) {
      setError('Failed to send request. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className={`w-full max-w-md p-8 rounded-2xl ${
              isDark ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'
            }`}
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Protected Content
            </h2>
            <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Enter your passkey to access resume and DSA problem-solving details.
            </p>

            <form onSubmit={handleVerify} className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Passkey
                </label>
                <motion.input
                  type="password"
                  value={passkey}
                  onChange={(e) => {
                    setPasskey(e.target.value);
                    setError('');
                  }}
                  placeholder="Enter passkey"
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none ${
                    isDark
                      ? 'bg-gray-800 border-gray-700 text-white focus:border-cyan-400'
                      : 'bg-gray-100 border-gray-300 text-gray-900 focus:border-cyan-500'
                  }`}
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm font-medium"
                >
                  {error}
                </motion.p>
              )}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300"
              >
                Verify Passkey
              </motion.button>
            </form>

            <div className={`my-6 flex items-center gap-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <div className="flex-1 h-px bg-current opacity-20" />
              <span className="text-sm">or</span>
              <div className="flex-1 h-px bg-current opacity-20" />
            </div>

            <motion.button
              onClick={handleRequestAccess}
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/10 transition-all duration-300 ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Sending...' : 'Request Access via Email'}
            </motion.button>

            <p className={`text-xs mt-4 text-center ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
              💡 Tip: Ask the portfolio owner for the passkey via email.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
