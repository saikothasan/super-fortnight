import React, { useState } from 'react';
import { FileText, RefreshCw } from 'lucide-react';

const ArticleWriterDemo = () => {
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('professional');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedArticle, setGeneratedArticle] = useState<string | null>(null);

  const tones = ['professional', 'casual', 'academic', 'creative', 'technical'];

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setGeneratedArticle('Lorem ipsum dolor sit amet...');
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="mb-6">
        <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">
          Article Topic
        </label>
        <input
          type="text"
          id="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          placeholder="Enter your topic..."
        />
      </div>

      <div className="mb-6">
        <label htmlFor="tone" className="block text-sm font-medium text-gray-700 mb-2">
          Writing Tone
        </label>
        <select
          id="tone"
          value={tone}
          onChange={(e) => setTone(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        >
          {tones.map((t) => (
            <option key={t} value={t}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handleGenerate}
        disabled={!topic || isGenerating}
        className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {isGenerating ? (
          <>
            <RefreshCw className="w-5 h-5 animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <FileText className="w-5 h-5" />
            Generate Article
          </>
        )}
      </button>

      {generatedArticle && (
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Generated Article:</h3>
          <div className="p-4 bg-gray-50 rounded-lg prose max-w-none">
            {generatedArticle}
          </div>
        </div>
      )}
    </div>
  );
};