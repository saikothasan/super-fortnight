import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import AITools from './pages/tools/AITools';
import ImageGenerator from './pages/tools/ImageGenerator';
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
          <Route path="/tools/:id" element={<ToolDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
