import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const askClaudeBrain = async (message: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/claude/chat`, { message });
    return response.data;
  } catch (error) {
    console.error('Error contacting Claude Brain:', error);
    throw error;
  }
};

export const askGitaAi = async (question: string, chat_history: any[] = []) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/gita/generate`, { question, chat_history });
    return response.data;
  } catch (error) {
    console.error('Error contacting Gita AI:', error);
    throw error;
  }
};
