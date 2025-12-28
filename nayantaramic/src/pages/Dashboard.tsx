import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { User } from '../lib/schemas';
import { db } from '../lib/schemas';
import { analyzeGameMetrics } from '../lib/gitaAI';

const GAMES = [
  {
    id: 'MIRROR_PATTERN',
    name: 'The Mirror Pattern',
    emoji: '🔷',
    description: 'Pattern Recognition & Visual Memory',
    color: 'from-blue-400 to-blue-600',
  },
  {
    id: 'HIDDEN_HERB',
    name: 'The Hidden Herb',
    emoji: '🌿',
    description: 'Focus & Impulse Control',
    color: 'from-green-400 to-green-600',
  },
  {
    id: 'LIONS_BREATH',
    name: "The Lion's Breath",
    emoji: '🦁',
    description: 'Anxiety Control & Breath Awareness',
    color: 'from-orange-400 to-orange-600',
  },
  {
    id: 'SOCIAL_DETECTIVE',
    name: 'The Social Detective',
    emoji: '🕵️',
    description: 'Emotional Intelligence & Social Cues',
    color: 'from-purple-400 to-purple-600',
  }
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [karmaPoints, setKarmaPoints] = useState(0);
  const [gitaUnlocked, setGitaUnlocked] = useState<number[]>([]);

  useEffect(() => {
    const userStr = localStorage.getItem('currentUser');
    if (!userStr) {
      navigate('/login');
      return;
    }
    const user: User = JSON.parse(userStr);
    setCurrentUser(user);
    setKarmaPoints(user.karma_points || 0);
    setGitaUnlocked(user.gita_unlocked_chapters || []);
  }, [navigate]);

  const handleGameSelect = (game: string) => {
    navigate(`/game/${game.toLowerCase().replace(/_/g, '-')}`);
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('currentUser');
      navigate('/login');
    }
  };

  if (!currentUser) {
    return <div className="flex items-center justify-center min-h-screen bg-ayur-cream"><span className="text-4xl">🧘</span></div>;
  }

  return (
    <div className="min-h-screen relative">
      {/* Background SVG */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/src/assets/background of children page.svg" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10">
      <motion.div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-ayur-gold/30 shadow-lg" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-5xl font-playfair font-bold text-gray-900" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>Welcome, {currentUser.name}</h1>
            <p className="text-2xl text-gray-900 font-body font-bold">Your path to clarity begins here</p>
          </div>
          <div className="flex gap-3">
            <button onClick={() => navigate('/lifestyle')} className="px-6 py-3 text-xl bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300 font-bold shadow-lg">
              💪 Lifestyle & Diet
            </button>
            <button onClick={() => navigate('/gita')} className="px-4 py-2 bg-ayur-gold/20 hover:bg-ayur-gold/40 text-ayur-slate rounded-lg transition-colors duration-300">
              Gita Knowledge
            </button>
            <button onClick={handleLogout} className="px-4 py-2 bg-ayur-gold/20 hover:bg-ayur-gold/40 text-ayur-slate rounded-lg transition-colors duration-300">
              Logout
            </button>
          </div>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ staggerChildren: 0.1, delayChildren: 0.2 }} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="p-6 rounded-2xl bg-gradient-to-br from-ayur-gold/20 to-ayur-gold/5 border border-ayur-gold/30">
            <p className="text-ayur-slate/70 font-body mb-2">Karma Points</p>
            <h2 className="text-4xl font-playfair font-bold text-ayur-gold">{karmaPoints}</h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="p-6 rounded-2xl bg-gradient-to-br from-vata-wind/20 to-vata-wind/5 border border-vata-wind/30">
            <p className="text-ayur-slate/70 font-body mb-2">Progress</p>
            <h2 className="text-4xl font-playfair font-bold text-vata-wind">0%</h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="p-6 rounded-2xl bg-gradient-to-br from-pitta-fire/20 to-pitta-fire/5 border border-pitta-fire/30">
            <p className="text-ayur-slate/70 font-body mb-2">Sessions</p>
            <h2 className="text-4xl font-playfair font-bold text-pitta-fire">0</h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="p-6 rounded-2xl bg-gradient-to-br from-kapha-earth/20 to-kapha-earth/5 border border-kapha-earth/30">
            <p className="text-ayur-slate/70 font-body mb-2">Stories</p>
            <h2 className="text-4xl font-playfair font-bold text-kapha-earth">{gitaUnlocked.length}</h2>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ staggerChildren: 0.1, delayChildren: 0.5 }} className="mb-12">
          <h2 className="text-5xl font-playfair font-bold text-gray-900 mb-8" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>Your Therapeutic Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {GAMES.map((game, idx) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`p-8 rounded-3xl bg-gradient-to-br ${game.color} text-white shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-300`}
                onClick={() => handleGameSelect(game.id)}
              >
                <div className="text-5xl mb-4">{game.emoji}</div>
                <h3 className="text-3xl font-playfair font-bold">{game.name}</h3>
                <p className="text-white/80 mt-2 font-body mb-6">{game.description}</p>
                <button className="w-full py-3 rounded-lg font-bold bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300">▶ Play Level 1</button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      </div>
    </div>
  );
}
