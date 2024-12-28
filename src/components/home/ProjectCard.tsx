import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      className="flex-shrink-0 w-full px-4"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="relative h-64">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">
              {project.category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
          <p className="text-gray-600">{project.description}</p>
          <button className="mt-4 text-purple-600 font-medium hover:text-purple-700">
            Learn More →
          </button>
        </div>
      </div>
    </motion.div>
  );
};