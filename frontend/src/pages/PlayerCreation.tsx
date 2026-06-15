import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PlayerCreation: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [player, setPlayer] = useState({
    firstName: '',
    lastName: '',
    age: 20,
    nationality: 'England',
    position: 'ST',
    height: 185,
    weight: 80,
    preferredFoot: 'right',
    playstyles: [] as string[],
    traits: [] as string[],
  });

  const playstyles = ['Clinical Striker', 'Playmaker', 'Ball Carrier', 'Physical Defender', 'Speed Demon', 'Tactician', 'Set Piece Specialist', 'Box-to-Box'];
  const traits = ['Leader', 'Clutch Performer', 'Quick Learner', 'Showman', 'Comeback King'];
  const positions = ['ST', 'CAM', 'CM', 'LW', 'RW', 'CB', 'LB', 'RB', 'GK'];
  const nationalities = ['England', 'Spain', 'Italy', 'Germany', 'France', 'Brazil', 'Argentina', 'Portugal'];

  const handlePlaystyleToggle = (style: string) => {
    setPlayer(prev => ({
      ...prev,
      playstyles: prev.playstyles.includes(style) ? prev.playstyles.filter(s => s !== style) : [...prev.playstyles, style].slice(0, 3),
    }));
  };

  const handleTraitToggle = (trait: string) => {
    setPlayer(prev => ({
      ...prev,
      traits: prev.traits.includes(trait) ? prev.traits.filter(t => t !== trait) : [...prev.traits, trait].slice(0, 2),
    }));
  };

  const handleCreatePlayer = async () => {
    try {
      const response = await fetch('/api/players', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(player),
      });
      if (response.ok) navigate('/career');
    } catch (error) {
      console.error('Failed to create player:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Create Your Player</h1>

        <div className="flex gap-4 mb-12 justify-center">
          {[1, 2, 3].map(s => (
            <div key={s} className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${s <= step ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-slate-700'}`}>{s}</div>
          ))}
        </div>

        {step === 1 && (
          <div className="bg-slate-800 border border-purple-500 rounded-xl p-8 space-y-6">
            <h2 className="text-2xl font-bold mb-6">Basic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">First Name</label>
                <input type="text" value={player.firstName} onChange={(e) => setPlayer({ ...player, firstName: e.target.value })} className="w-full bg-slate-700 border border-purple-400 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-pink-600" placeholder="Your first name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name</label>
                <input type="text" value={player.lastName} onChange={(e) => setPlayer({ ...player, lastName: e.target.value })} className="w-full bg-slate-700 border border-purple-400 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-pink-600" placeholder="Your last name" />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Age</label>
                <input type="number" value={player.age} onChange={(e) => setPlayer({ ...player, age: parseInt(e.target.value) })} className="w-full bg-slate-700 border border-purple-400 rounded-lg px-4 py-2 text-white" min="16" max="40" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Height (cm)</label>
                <input type="number" value={player.height} onChange={(e) => setPlayer({ ...player, height: parseInt(e.target.value) })} className="w-full bg-slate-700 border border-purple-400 rounded-lg px-4 py-2 text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Weight (kg)</label>
                <input type="number" value={player.weight} onChange={(e) => setPlayer({ ...player, weight: parseInt(e.target.value) })} className="w-full bg-slate-700 border border-purple-400 rounded-lg px-4 py-2 text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Foot</label>
                <select value={player.preferredFoot} onChange={(e) => setPlayer({ ...player, preferredFoot: e.target.value })} className="w-full bg-slate-700 border border-purple-400 rounded-lg px-4 py-2 text-white">
                  <option>left</option>
                  <option>right</option>
                  <option>both</option>
                </select>
              </div>
            </div>
            <button onClick={() => setStep(2)} className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-bold hover:from-purple-700 hover:to-pink-700 transition">Next: Playstyles</button>
          </div>
        )}

        {step === 2 && (
          <div className="bg-slate-800 border border-purple-500 rounded-xl p-8 space-y-6">
            <h2 className="text-2xl font-bold mb-6">Choose Your Playstyles (Max 3)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {playstyles.map(style => (
                <button key={style} onClick={() => handlePlaystyleToggle(style)} className={`p-4 rounded-lg border-2 transition ${player.playstyles.includes(style) ? 'border-pink-600 bg-pink-600 bg-opacity-20' : 'border-purple-400 hover:border-pink-600 bg-slate-700'}`}>
                  <div className="font-bold">{style}</div>
                </button>
              ))}
            </div>
            <div className="flex gap-4">
              <button onClick={() => setStep(1)} className="flex-1 py-3 bg-slate-700 rounded-lg font-bold hover:bg-slate-600 transition">Back</button>
              <button onClick={() => setStep(3)} disabled={player.playstyles.length === 0} className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-bold hover:from-purple-700 hover:to-pink-700 transition disabled:opacity-50">Next: Traits</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="bg-slate-800 border border-purple-500 rounded-xl p-8 space-y-6">
            <h2 className="text-2xl font-bold mb-6">Choose Your Traits (Max 2)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {traits.map(trait => (
                <button key={trait} onClick={() => handleTraitToggle(trait)} className={`p-4 rounded-lg border-2 transition ${player.traits.includes(trait) ? 'border-blue-600 bg-blue-600 bg-opacity-20' : 'border-purple-400 hover:border-blue-600 bg-slate-700'}`}>
                  <div className="font-bold">{trait}</div>
                </button>
              ))}
            </div>
            <div className="bg-slate-700 border border-purple-400 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold mb-4">Your Player Summary</h3>
              <div className="space-y-2 text-sm">
                <p><span className="text-purple-400">Name:</span> {player.firstName} {player.lastName}</p>
                <p><span className="text-purple-400">Position:</span> {player.position}</p>
                <p><span className="text-purple-400">Playstyles:</span> {player.playstyles.join(', ') || 'None'}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <button onClick={() => setStep(2)} className="flex-1 py-3 bg-slate-700 rounded-lg font-bold hover:bg-slate-600 transition">Back</button>
              <button onClick={handleCreatePlayer} className="flex-1 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg font-bold hover:from-green-700 hover:to-emerald-700 transition">Create Player!</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayerCreation;
