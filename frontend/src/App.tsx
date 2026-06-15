import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PlayerCreation from './pages/PlayerCreation';
import CareerDashboard from './pages/CareerDashboard';
import MatchSimulation from './pages/MatchSimulation';
import TransferMarket from './pages/TransferMarket';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-player" element={<PlayerCreation />} />
          <Route path="/career" element={<CareerDashboard />} />
          <Route path="/match" element={<MatchSimulation />} />
          <Route path="/transfers" element={<TransferMarket />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
