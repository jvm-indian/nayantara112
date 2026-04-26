import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { askGitaAi } from '../services/api';

export default function GitaAiChat() {
  const [input, setInput] = useState('');
  const [chat, setChat] = useState<{sender: string, text: string}[]>([]);
  const navigate = useNavigate();

  const handleSend = async () => {
    if (!input.trim()) return;
    const newChat = [...chat, { sender: 'You', text: input }];
    setChat(newChat);
    setInput('');

    try {
      const response = await askGitaAi(input, newChat);
      setChat([...newChat, { sender: 'Gita AI', text: response.answer }]);
    } catch (error: any) {
      const errMsg = error.response?.data?.error || 'Error connecting to Gita AI.';
      setChat([...newChat, { sender: 'System', text: errMsg }]);
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col items-center py-10">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-xl overflow-hidden flex flex-col h-[80vh] border border-orange-200">
        <div className="p-4 bg-orange-600 text-white flex justify-between items-center">
          <h2 className="text-2xl font-bold font-playfair">Gita AI - Spiritual Guide</h2>
          <button onClick={() => navigate('/gita')} className="px-3 py-1 bg-white/20 rounded hover:bg-white/30">Back</button>
        </div>
        
        <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
          {chat.length === 0 && (
            <div className="text-center mt-10">
              <span className="text-4xl block mb-4">🪔</span>
              <p className="text-orange-800 font-playfair text-xl">Ask any question about life, duty, or the universe.</p>
            </div>
          )}
          {chat.map((msg, idx) => (
            <div key={idx} className={`p-4 rounded-lg max-w-[85%] shadow-sm ${msg.sender === 'You' ? 'bg-orange-100 self-end text-orange-900' : 'bg-white border border-orange-100 self-start text-gray-800'}`}>
              <strong className="block text-xs text-orange-500 mb-1 font-bold">{msg.sender}</strong>
              <p className="font-playfair text-lg leading-relaxed">{msg.text}</p>
            </div>
          ))}
        </div>
        
        <div className="p-4 bg-orange-100 flex gap-2">
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 p-3 rounded-lg border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Ask your question..."
          />
          <button onClick={handleSend} className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 font-bold">Seek Wisdom</button>
        </div>
      </div>
    </div>
  );
}
