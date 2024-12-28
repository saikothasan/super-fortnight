import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
  children: React.ReactNode;
  delay?: number;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02 }}
      className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-6 border border-white/10"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;