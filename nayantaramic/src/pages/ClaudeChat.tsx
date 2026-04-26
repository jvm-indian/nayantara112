import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { askClaudeBrain } from '../services/api';

export default function ClaudeChat() {
  const [input, setInput] = useState('');
  const [chat, setChat] = useState<{sender: string, text: string}[]>([]);
  const navigate = useNavigate();

  const handleSend = async () => {
    if (!input.trim()) return;
    const newChat = [...chat, { sender: 'You', text: input }];
    setChat(newChat);
    setInput('');

    try {
      const response = await askClaudeBrain(input);
      setChat([...newChat, { sender: 'Claude Brain', text: response.reply }]);
    } catch (error: any) {
      const errMsg = error.response?.data?.error || 'Error connecting to Claude Brain.';
      setChat([...newChat, { sender: 'System', text: errMsg }]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-xl overflow-hidden flex flex-col h-[80vh]">
        <div className="p-4 bg-indigo-600 text-white flex justify-between items-center">
          <h2 className="text-2xl font-bold">Nayanthara AI Brain (Claude)</h2>
          <button onClick={() => navigate('/dashboard')} className="px-3 py-1 bg-white/20 rounded hover:bg-white/30">Back</button>
        </div>
        
        <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
          {chat.length === 0 && (
            <p className="text-gray-400 text-center mt-10">How can I assist you today?</p>
          )}
          {chat.map((msg, idx) => (
            <div key={idx} className={`p-3 rounded-lg max-w-[80%] ${msg.sender === 'You' ? 'bg-indigo-100 self-end' : 'bg-gray-100 self-start'}`}>
              <strong className="block text-xs text-gray-500 mb-1">{msg.sender}</strong>
              <p>{msg.text}</p>
            </div>
          ))}
        </div>
        
        <div className="p-4 bg-gray-100 flex gap-2">
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 p-2 rounded border focus:outline-none focus:border-indigo-500"
            placeholder="Type your message..."
          />
          <button onClick={handleSend} className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Send</button>
        </div>
      </div>
    </div>
  );
}
