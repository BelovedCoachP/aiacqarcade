import React, { useState } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import toolNodes from '../data/toolNodes';  // ← Import real toolNodes from separate file

function AIArcadeFinder() {
  const [currentNode, setCurrentNode] = useState('start');
  const [searchQuery, setSearchQuery] = useState('');

  const currentData = toolNodes[currentNode] || { title: "Coming Soon", description: "New content will be available shortly!", options: [] };

  const navigate = (node) => {
    setCurrentNode(node);
    setSearchQuery('');
  };

  const filteredTools = currentData.tools ? currentData.tools.filter(tool => tool.name.toLowerCase().includes(searchQuery.toLowerCase())) : [];

  const Container = ({ children }) => (
    <div className="relative min-h-screen p-6 bg-gray-900 text-white overflow-hidden" style={{ background: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)' }}>
      <Particles
        id="tsparticles"
        init={loadFull}
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 100 },
            size: { value: 2 },
            color: { value: "#ffffff" },
            move: { speed: 0.5 },
            opacity: { value: 0.7 },
            links: { enable: true, color: "#ffffff", distance: 150, opacity: 0.2 }
          },
          fullScreen: { enable: false }
        }}
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );

  const NeonTitle = ({ children }) => (
    <h1 className="text-4xl md:text-5xl font-bold text-pink-500 mb-4 animate-pulse" style={{ textShadow: '0 0 10px rgba(236,72,153,0.7), 0 0 20px rgba(236,72,153,0.5)' }}>{children}</h1>
  );

  const GlowButton = ({ onClick, children }) => (
    <button onClick={onClick} className="bg-transparent border-2 border-green-500 text-green-500 hover:text-white hover:border-green-400 px-4 py-2 rounded font-bold transition-all" style={{ boxShadow: '0 0 10px currentColor' }}>{children}</button>
  );

  return (
    <Container>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <NeonTitle>AI ARCADE</NeonTitle>
          {currentNode !== 'start' && <GlowButton onClick={() => navigate('start')}>Start Over</GlowButton>}
        </div>
        <div className="bg-gray-900 bg-opacity-80 border-2 border-blue-500 rounded-lg p-6" style={{ boxShadow: '0 0 10px #3b82f6' }}>
          <h2 className="text-xl font-bold text-blue-300 mb-3">{currentData.title}</h2>
          {currentData.description && <p className="text-blue-100 mb-4 whitespace-pre-line">{currentData.description}</p>}
          {currentData.options.length > 0 && (
            <div className="grid grid-cols-1 gap-3 mt-4">
              {currentData.options.map((option, idx) => (
                <GlowButton key={idx} onClick={() => navigate(option.node)}>{option.text}</GlowButton>
              ))}
            </div>
          )}
          {currentData.tools && (
            <>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full p-2 rounded border-2 border-blue-400 text-black"
                />
              </div>
              <div className="mt-6 space-y-4">
                {filteredTools.map((tool, idx) => (
                  <div key={idx} className="border-2 border-blue-400 bg-gray-900 bg-opacity-70 p-4 rounded-lg transition-all hover:border-pink-400" style={{ boxShadow: '0 0 10px rgba(96,165,250,0.3)' }}>
                    <h3 className="text-blue-400 text-xl font-bold mb-2">{tool.name}</h3>
                    <p className="text-blue-100 mb-2">{tool.description}</p>
                    <a href={tool.link} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 font-bold">Visit Site</a>
                  </div>
                ))}
                {filteredTools.length === 0 && <p className="text-blue-100">No matching tools found.</p>}
              </div>
            </>
          )}
        </div>
      </div>
    </Container>
  );
}

export default AIArcadeFinder;
