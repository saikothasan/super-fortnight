import React, { useState } from 'react';
import { AITool } from '../../types/tools';
import Scene from '../3d/Scene';

interface ToolDemoProps {
  tool: AITool;
}

const ToolDemo: React.FC<ToolDemoProps> = ({ tool }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDemoAction = () => {
    setIsLoading(true);
    // Simulate demo action
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="h-[400px] mb-8 bg-gray-100 rounded-lg overflow-hidden">
        <Scene />
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleDemoAction}
          disabled={isLoading}
          className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
        >
          {isLoading ? 'Processing...' : 'Try Demo'}
        </button>
      </div>
    </div>
  );
};

export default ToolDemo;