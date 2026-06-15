import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MatchSimulation: React.FC = () => {
  const navigate = useNavigate();
  const [matchStarted, setMatchStarted] = useState(false);
  const [matchResult, setMatchResult] = useState<any>(null);

  const startMatch = () => {
    setMatchStarted(true);
    setTimeout(() => {
      setMatchResult({
        homeTeam: 'Manchester United',
        awayTeam: 'Liverpool',
        homeScore: 2,
        awayScore: 1,
        yourTeamWon: true,
        playerPerformance: { rating: 8.2, goals: 1, assists: 1, shotsOnTarget: 5, passes: 45, passAccuracy: 87 },
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Match Day</h1>
          <button onClick={() => navigate('/career')} className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition">Back</button>
        </div>

        {!matchStarted && !matchResult && (
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-purple-500 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Manchester United vs Liverpool</h2>
            <p className="text-gray-300 mb-8 text-lg">Premier League - Week 12</p>
            <button onClick={startMatch} className="px-12 py-6 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg font-bold text-xl transition">🎮 Start Match</button>
          </div>
        )}

        {matchStarted && !matchResult && (
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-purple-500 rounded-xl p-12 text-center animate-pulse">
            <h2 className="text-3xl font-bold mb-4">Match in Progress...</h2>
            <p className="text-2xl text-purple-400 mb-8">⚽ 45+2'</p>
          </div>
        )}

        {matchResult && (
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-purple-500 rounded-xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">{matchResult.homeTeam} vs {matchResult.awayTeam}</h2>
                <div className="flex justify-center gap-8 items-center">
                  <div className="text-center"><p className="text-6xl font-bold text-purple-400">{matchResult.homeScore}</p></div>
                  <div className="text-3xl font-bold text-gray-500">-</div>
                  <div className="text-center"><p className="text-6xl font-bold text-red-400">{matchResult.awayScore}</p></div>
                </div>
              </div>
            </div>
            <button onClick={() => navigate('/career')} className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-bold hover:from-purple-700 hover:to-pink-700 transition">Back to Career</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchSimulation;
