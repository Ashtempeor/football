import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <nav className="bg-black bg-opacity-50 backdrop-blur-md border-b border-purple-500">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            ⚽ Football Legend
          </h1>
          <div className="space-x-4">
            <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition">Sign In</button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Create Your Own Football Legend</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Build your player from scratch, compete in real leagues, experience career drama, and become a football icon.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
          <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-8 rounded-xl border border-purple-400 hover:border-pink-500 transition">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-2xl font-bold mb-2">Create Player</h3>
            <p className="text-gray-200">Design your player with unique attributes, playstyles, and traits</p>
          </div>

          <div className="bg-gradient-to-br from-pink-600 to-purple-800 p-8 rounded-xl border border-pink-400 hover:border-purple-500 transition">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold mb-2">Real Leagues</h3>
            <p className="text-gray-200">Play in Premier League, La Liga, Serie A, Bundesliga, and more</p>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-800 p-8 rounded-xl border border-blue-400 hover:border-pink-500 transition">
            <div className="text-4xl mb-4">🎬</div>
            <h3 className="text-2xl font-bold mb-2">Career Drama</h3>
            <p className="text-gray-200">Experience transfers, injuries, interviews, and media attention</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button onClick={() => navigate('/create-player')} className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-bold text-lg transition transform hover:scale-105">Start New Career</button>
          <button className="px-8 py-4 bg-slate-700 hover:bg-slate-600 rounded-lg font-bold text-lg transition">Load Career</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
