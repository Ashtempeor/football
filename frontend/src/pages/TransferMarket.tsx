import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TransferMarket: React.FC = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('offers');

  const transferOffers = [
    { id: 1, club: 'Barcelona', offer: 65000000, salary: 500000, contractYears: 5 },
    { id: 2, club: 'Real Madrid', offer: 75000000, salary: 600000, contractYears: 4 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Transfer Market</h1>
          <button onClick={() => navigate('/career')} className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition">Back</button>
        </div>

        <div className="space-y-4">
          {transferOffers.map(offer => (
            <div key={offer.id} className="bg-gradient-to-br from-slate-800 to-slate-700 border border-purple-500 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3">{offer.club}</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div><p className="text-gray-400">Offer</p><p className="text-xl font-bold text-green-400">${(offer.offer / 1000000).toFixed(0)}M</p></div>
                    <div><p className="text-gray-400">Salary</p><p className="text-xl font-bold text-green-400">${(offer.salary / 1000).toFixed(0)}K</p></div>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <button className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-bold transition">✅ Accept</button>
                  <button className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-bold transition">❌ Reject</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransferMarket;
