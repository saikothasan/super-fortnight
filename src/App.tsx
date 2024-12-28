import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import AITools from './pages/tools/AITools';
import ImageGenerator from './pages/tools/ImageGenerator';
import PromptEngineer from './pages/tools/PromptEngineer';
import CodeGenerator from './pages/tools/CodeGenerator';
import ArticleWriter from './pages/tools/ArticleWriter';
import ToolDetail from './pages/tools/ToolDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<AITools />} />
          <Route path="/tools/image-generator" element={<ImageGenerator />} />
          <Route path="/tools/prompt-engineer" element={<PromptEngineer />} />
          <Route path="/tools/code-generator" element={<CodeGenerator />} />
          <Route path="/tools/article-writer" element={<ArticleWriter />} />
          <Route path="/tools/:id" element={<ToolDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;