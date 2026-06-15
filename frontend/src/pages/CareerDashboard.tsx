import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CareerDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [player, setPlayer] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPlayer({
      firstName: 'John',
      lastName: 'Smith',
      age: 24,
      position: 'ST',
      currentClub: 'Manchester United',
      marketValue: 45000000,
      attributes: { pace: 87, shooting: 89, passing: 74, dribbling: 85, defense: 45, physical: 78 },
      stats: { appearancesThisSeason: 12, goalsThisSeason: 8, assistsThisSeason: 3, careerGoals: 42 },
      playstyles: ['Clinical Striker', 'Speed Demon'],
      traits: ['Clutch Performer'],
    });
    setLoading(false);
  }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="text-2xl font-bold">Loading...</div></div>;
  if (!player) return <div className="min-h-screen flex items-center justify-center"><button onClick={() => navigate('/create-player')} className="px-6 py-3 bg-purple-600 rounded-lg font-bold">Create Player</button></div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Career Dashboard</h1>
          <button onClick={() => navigate('/')} className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition">Home</button>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-purple-500 rounded-xl p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-3xl font-bold">{player.firstName} {player.lastName}</h2>
              <p className="text-purple-400 text-lg">{player.position} • {player.currentClub}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Attributes</h3>
              <div className="space-y-2 text-sm">
                {Object.entries(player.attributes).map(([key, value]: [string, any]) => (
                  <div key={key} className="flex justify-between"><span className="capitalize">{key}</span><span className="text-purple-400">{value}</span></div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Stats</h3>
              <div className="space-y-2 text-sm">
                <p><span className="text-purple-400">Goals:</span> {player.stats.goalsThisSeason}</p>
                <p><span className="text-purple-400">Assists:</span> {player.stats.assistsThisSeason}</p>
                <p><span className="text-purple-400">Market Value:</span> ${(player.marketValue / 1000000).toFixed(1)}M</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <button onClick={() => navigate('/match')} className="py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-bold hover:from-purple-700 hover:to-pink-700 transition">⚽ Play Match</button>
          <button onClick={() => navigate('/transfers')} className="py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-bold hover:from-blue-700 hover:to-cyan-700 transition">🔄 Transfer Market</button>
          <button className="py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg font-bold hover:from-green-700 hover:to-emerald-700 transition">📊 View Stats</button>
        </div>
      </div>
    </div>
  );
};

export default CareerDashboard;
