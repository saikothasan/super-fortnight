import React from 'react';
import { motion } from 'framer-motion';
import FloatingParticles from '../3d/FloatingParticles';
import { AITool } from '../../types/tools';

interface ToolHeroProps {
  tool: AITool;
}

const ToolHero: React.FC<ToolHeroProps> = ({ tool }) => {
  return (
    <div className="relative min-h-[60vh] flex items-center">
      <div className="absolute inset-0">
        <FloatingParticles />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {tool.name}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            {tool.description}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 flex justify-center gap-4"
          >
            <button className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Try Now
            </button>
            <button className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors">
              Documentation
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};