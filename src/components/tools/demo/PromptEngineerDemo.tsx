import React, { useState } from 'react';
import { Sparkles, RefreshCw } from 'lucide-react';

const PromptEngineerDemo = () => {
  const [basePrompt, setBasePrompt] = useState('');
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizedPrompt, setOptimizedPrompt] = useState<string | null>(null);

  const handleOptimize = async () => {
    setIsOptimizing(true);
    // Simulate API call
    setTimeout(() => {
      setOptimizedPrompt(basePrompt + ' [optimized with specific details, context, and style parameters]');
      setIsOptimizing(false);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="mb-6">
        <label htmlFor="basePrompt" className="block text-sm font-medium text-gray-700 mb-2">
          Enter your base prompt
        </label>
        <textarea
          id="basePrompt"
          value={basePrompt}
          onChange={(e) => setBasePrompt(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          rows={4}
          placeholder="Enter your prompt here..."
        />
      </div>

      <button
        onClick={handleOptimize}
        disabled={!basePrompt || isOptimizing}
        className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {isOptimizing ? (
          <>
            <RefreshCw className="w-5 h-5 animate-spin" />
            Optimizing...
          </>
        ) : (
          <>
            <Sparkles className="w-5 h-5" />
            Optimize Prompt
          </>
        )}
      </button>

      {optimizedPrompt && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Optimized Prompt:</h3>
          <p className="text-gray-900">{optimizedPrompt}</p>
        </div>
      )}
    </div>
  );
};