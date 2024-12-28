import React, { useState } from 'react';
import { Code2, RefreshCw } from 'lucide-react';

const CodeGeneratorDemo = () => {
  const [prompt, setPrompt] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCode, setGeneratedCode] = useState<string | null>(null);

  const languages = ['javascript', 'python', 'typescript', 'java', 'cpp'];

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setGeneratedCode(`// Generated ${language} code\nfunction example() {\n  // Implementation\n}`);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="mb-6">
        <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-2">
          Select Language
        </label>
        <select
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang.charAt(0).toUpperCase() + lang.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
          Describe the code you need
        </label>
        <textarea
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          rows={4}
          placeholder="Create a function that..."
        />
      </div>

      <button
        onClick={handleGenerate}
        disabled={!prompt || isGenerating}
        className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {isGenerating ? (
          <>
            <RefreshCw className="w-5 h-5 animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <Code2 className="w-5 h-5" />
            Generate Code
          </>
        )}
      </button>

      {generatedCode && (
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Generated Code:</h3>
          <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto">
            <code>{generatedCode}</code>
          </pre>
        </div>
      )}
    </div>
  );
};