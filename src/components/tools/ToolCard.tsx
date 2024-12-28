import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AITool } from '../../types/tools';

interface ToolCardProps {
  tool: AITool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={tool.image}
          alt={tool.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{tool.name}</h3>
        <p className="text-gray-600 mb-4">{tool.description}</p>
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {tool.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <Link
          to={`/tools/${tool.id}`}
          className="inline-flex items-center text-purple-600 hover:text-purple-700"
        >
          Learn More <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ToolCard;