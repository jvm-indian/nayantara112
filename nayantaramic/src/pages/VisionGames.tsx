import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function VisionGames() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen relative bg-[#FDFBF7]">
      <div className="absolute top-4 left-4 z-50">
        <button onClick={() => navigate('/dashboard')} className="px-6 py-2 bg-ayur-slate text-white rounded-lg hover:bg-opacity-90 font-bold shadow-lg transition-all border border-ayur-gold/30">
          ← Back to Dashboard
        </button>
      </div>
      
      <iframe 
        src="/vision-games/index.html" 
        className="w-full h-full border-none"
        title="Vision Games"
        allow="camera; microphone"
      ></iframe>
    </div>
  );
}
