import React, { useState } from 'react';
import { Upload, Wand2 } from 'lucide-react';

const ImageGeneratorDemo = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setResult('https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80&w=800');
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="mb-6">
        <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
          Enter your image description
        </label>
        <textarea
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          rows={4}
          placeholder="A serene landscape with mountains..."
        />
      </div>

      <button
        onClick={handleGenerate}
        disabled={!prompt || isGenerating}
        className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {isGenerating ? (
          <>
            <Upload className="w-5 h-5 animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <Wand2 className="w-5 h-5" />
            Generate Image
          </>
        )}
      </button>

      {result && (
        <div className="mt-6">
          <img src={result} alt="Generated" className="w-full rounded-lg shadow-md" />
        </div>
      )}
    </div>
  );
};

export default ImageGeneratorDemo;
