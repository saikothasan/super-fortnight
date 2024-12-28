import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { aiTools } from '../../data/aiTools';
import PricingTable from '../../components/tools/PricingTable';
import ToolDemo from '../../components/tools/ToolDemo';

const ToolDetail = () => {
  const { id } = useParams<{ id: string }>();
  const tool = aiTools.find(t => t.id === id);

  if (!tool) {
    return <Navigate to="/tools" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{tool.name}</h1>
            <p className="text-xl text-gray-600">{tool.description}</p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Live Demo</h2>
            <ToolDemo tool={tool} />
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {tool.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <p className="text-gray-900">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing</h2>
            <PricingTable pricing={tool.pricing} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ToolDetail;