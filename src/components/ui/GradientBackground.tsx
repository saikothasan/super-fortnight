import React from 'react';
import { motion } from 'framer-motion';

interface GradientBackgroundProps {
  children: React.ReactNode;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({ children }) => {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900"
        animate={{
          background: [
            'linear-gradient(to bottom right, #4c1d95, #312e81, #1e3a8a)',
            'linear-gradient(to bottom right, #312e81, #1e3a8a, #4c1d95)',
            'linear-gradient(to bottom right, #1e3a8a, #4c1d95, #312e81)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GradientBackground;