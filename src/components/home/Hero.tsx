import React from 'react';
import { motion } from 'framer-motion';
import Scene from '../3d/Scene';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-purple-700 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0.3)_100%)]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Where AI Meets
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                {" "}Design Excellence
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your ideas into stunning 3D realities with our cutting-edge AI technology.
              Experience design innovation like never before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Get Started
              </button>
              <button className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors">
                View Portfolio
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="h-[500px]"
          >
            <Scene />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;