import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SOCIAL_DETECTIVE_SCENARIOS } from '../../lib/gameConfig';
import type { GameLog } from '../../lib/schemas';
import { db } from '../../lib/schemas';
import { generateGitaWisdom } from '../../lib/gitaAI';

interface SocialDetectiveProps {
  childId: string;
  currentLevel: number;
  onLevelComplete: (metrics: any) => void;
}

export default function SocialDetective({ childId, currentLevel, onLevelComplete }: SocialDetectiveProps) {
  const scenario = SOCIAL_DETECTIVE_SCENARIOS[currentLevel - 1];
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState<'PLAYING' | 'WON' | 'FAILED'>('PLAYING');

  const handleAnswerClick = (option: string) => {
    if (isAnswered) return;

    setSelectedAnswer(option);
    const correct = option === scenario.correctAnswer;
    setIsCorrect(correct);
    setIsAnswered(true);

    if (correct) {
      setScore((prev) => prev + 1);
      setTimeout(() => handleGameEnd('WON'), 2000);
    } else {
      setTimeout(() => handleGameEnd('FAILED'), 2000);
    }
  };

  const handleGameEnd = (status: 'WON' | 'FAILED') => {
    setGameStatus(status);

    const metrics: GameLog = {
      _id: `log_${Date.now()}`,
      child_id: childId,
      game_type: 'SOCIAL_DETECTIVE',
      level_played: currentLevel,
      timestamp: new Date(),
      metrics: {
        accuracy: isCorrect ? 100 : 0,
        time_taken: 0,
        impulsivity_count: 0,
        tremor_index: 0,
        focus_breaks: 0,
        completion_status: status,
      },
      ai_insight: generateGitaWisdom('Child', 'SOCIAL_DETECTIVE', status === 'WON', currentLevel),
      recommended_action: '',
    };

    db.recordGameLog(metrics);
    onLevelComplete(metrics);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-ayur-sky/20 via-ayur-cream to-ayur-sage/10 p-8 flex flex-col items-center justify-center">
      {/* Header */}
      <motion.div className="w-full max-w-2xl mb-8 text-center" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-playfair text-4xl font-bold text-ayur-slate mb-2">🔍 The Social Detective</h1>
        <p className="font-body text-ayur-slate/60">Level {currentLevel} of 11 - Read the situation and guess the emotion</p>
      </motion.div>

      {/* Main Game Card */}
      <motion.div
        className="w-full max-w-2xl rounded-3xl bg-white p-12 shadow-2xl mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {/* Scenario Display */}
        <motion.div
          className="mb-8 p-8 bg-gradient-to-br from-ayur-sky/10 to-ayur-sage/10 rounded-2xl border-2 border-ayur-gold/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="font-body text-xl text-ayur-slate leading-relaxed text-center">
            {scenario.scenario}
          </p>
        </motion.div>

        {/* Question */}
        <motion.h3
          className="font-playfair text-2xl font-bold text-center text-ayur-slate mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          What is this person feeling?
        </motion.h3>

        {/* Answer Options */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          {scenario.options.map((option, idx) => (
            <motion.button
              key={idx}
              onClick={() => handleAnswerClick(option)}
              className={`p-6 rounded-2xl font-body font-bold text-lg transition-all ${
                selectedAnswer === option
                  ? isCorrect
                    ? 'bg-ayur-sage text-white scale-105 shadow-lg'
                    : 'bg-pitta-fire text-white scale-105 shadow-lg'
                  : 'bg-ayur-sky/10 text-ayur-slate border-2 border-ayur-sky/30 hover:border-ayur-sky hover:bg-ayur-sky/20'
              }`}
              whileHover={!isAnswered ? { scale: 1.05 } : {}}
              whileTap={!isAnswered ? { scale: 0.95 } : {}}
              disabled={isAnswered}
            >
              {option}
              {selectedAnswer === option && (
                <motion.div className="ml-3 inline-block">
                  {isCorrect ? '✓' : '✗'}
                </motion.div>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Feedback Message */}
        <AnimatePresence>
          {isAnswered && (
            <motion.div
              className={`p-6 rounded-2xl text-center ${
                isCorrect
                  ? 'bg-ayur-sage/20 border border-ayur-sage text-ayur-slate'
                  : 'bg-pitta-fire/20 border border-pitta-fire text-ayur-slate'
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <p className="font-playfair text-xl font-bold mb-2">{isCorrect ? '✨ Correct!' : '🤔 Not quite'}</p>
              <p className="font-body text-sm mb-4">{scenario.explanation}</p>
              {!isCorrect && (
                <p className="font-body text-sm font-bold text-pitta-fire">
                  The answer was: <span className="text-lg">{scenario.correctAnswer}</span>
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Emotional Cue Indicator */}
      <motion.div
        className="w-full max-w-2xl p-6 bg-ayur-gold/10 rounded-2xl border border-ayur-gold/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="font-body font-bold text-ayur-slate mb-2">💡 Clue: Look for...</p>
        <p className="font-body text-sm text-ayur-slate/70">{scenario.emotionalCue}</p>
      </motion.div>

      {/* Game Stats */}
      <motion.div className="mt-8 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        <div className="flex gap-8 justify-center">
          <div className="p-4 bg-white rounded-lg shadow">
            <p className="font-body text-xs text-ayur-slate/60 mb-1">Score</p>
            <p className="font-playfair text-3xl font-bold text-ayur-gold">{score}</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <p className="font-body text-xs text-ayur-slate/60 mb-1">Level</p>
            <p className="font-playfair text-3xl font-bold text-ayur-sky">{currentLevel}</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <p className="font-body text-xs text-ayur-slate/60 mb-1">Emotion</p>
            <p className="font-playfair text-2xl">{scenario.emotionalCue.split(' ')[0]}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
