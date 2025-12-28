import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  const [srcIdx, setSrcIdx] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <main className="min-h-screen w-full text-ayur-slate overflow-hidden relative">
      {/* Background SVG */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/src/assets/background of all home page.svg" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-ayur-gold/30 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="font-playfair text-2xl font-bold text-ayur-gold drop-shadow-lg">Nayanthara</h1>
          <div className="flex gap-6">
            <Link to="/login" className="text-sm font-body text-gray-800 hover:text-ayur-gold font-semibold">Login</Link>
            <Link to="/register" className="text-sm font-body px-4 py-2 bg-ayur-gold text-white rounded-full hover:bg-ayur-sage transition shadow-md">Register</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        className="relative min-h-screen w-full flex items-center justify-center pt-20 px-6 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Krishna Chariot Background */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-20">
          <motion.img
            src="/src/assets/krishna charriot home page.svg"
            alt=""
            className="max-w-4xl w-full h-auto"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

          {/* Thinking Child with Glowing Bulb Animation - SVG Based */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.12 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <div className="relative w-[400px] h-[400px]">
              {/* Child Silhouette */}
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{ rotate: [-1, 1, -1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg width="200" height="250" viewBox="0 0 200 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Head */}
                  <circle cx="100" cy="60" r="45" fill="#C4A661" opacity="0.3"/>
                  {/* Body */}
                  <path d="M100 105 Q80 130 75 180 L75 220 L85 220 L85 180 Q85 140 100 120 Q115 140 115 180 L115 220 L125 220 L125 180 Q120 130 100 105 Z" fill="#C4A661" opacity="0.3"/>
                  {/* Arms thinking pose */}
                  <path d="M75 130 Q60 140 55 160 L65 165 Q68 150 75 145 Z" fill="#C4A661" opacity="0.3"/>
                  <motion.path 
                    d="M125 130 Q130 125 120 110" 
                    stroke="#C4A661" 
                    strokeWidth="8" 
                    strokeLinecap="round" 
                    opacity="0.3"
                    animate={{ d: ["M125 130 Q130 125 120 110", "M125 130 Q135 120 125 105", "M125 130 Q130 125 120 110"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </svg>
              </motion.div>
              
              {/* Glowing Light Bulb - SVG */}
              <motion.div
                className="absolute -top-10 right-0"
                animate={{ 
                  y: [-10, 0, -10],
                  rotate: [-3, 3, -3]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div
                  className="relative"
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <svg width="100" height="140" viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Bulb glass */}
                    <motion.path 
                      d="M50 20 Q70 20 75 35 Q80 50 75 65 Q72 75 70 80 L30 80 Q28 75 25 65 Q20 50 25 35 Q30 20 50 20 Z" 
                      fill="#FDB813" 
                      opacity="0.4"
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    {/* Bulb base */}
                    <rect x="42" y="80" width="16" height="8" fill="#C4A661" opacity="0.3"/>
                    <rect x="40" y="88" width="20" height="12" rx="2" fill="#C4A661" opacity="0.3"/>
                    {/* Filament */}
                    <motion.path 
                      d="M45 50 Q50 45 55 50 Q50 55 45 50" 
                      stroke="#FDB813" 
                      strokeWidth="2" 
                      opacity="0.6"
                      animate={{ opacity: [0.4, 0.8, 0.4] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </svg>
                  
                  {/* Glowing effect rings */}
                  <motion.div
                    className="absolute top-8 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-yellow-400/20 blur-2xl"
                    animate={{ 
                      scale: [1, 1.4, 1],
                      opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute top-8 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-orange-400/15 blur-3xl"
                    animate={{ 
                      scale: [1.2, 1.6, 1.2],
                      opacity: [0.15, 0.4, 0.15]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  />
                  
                  {/* Light rays */}
                  <motion.div
                    className="absolute top-6 left-1/2 -translate-x-1/2 w-2 h-16 bg-gradient-to-b from-yellow-300/40 to-transparent"
                    style={{ transformOrigin: 'bottom center' }}
                    animate={{ 
                      opacity: [0, 0.6, 0],
                      scaleY: [0.8, 1.2, 0.8],
                      rotate: -20
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  />
                  <motion.div
                    className="absolute top-6 left-1/2 -translate-x-1/2 w-2 h-16 bg-gradient-to-b from-yellow-300/40 to-transparent"
                    style={{ transformOrigin: 'bottom center' }}
                    animate={{ 
                      opacity: [0, 0.6, 0],
                      scaleY: [0.8, 1.2, 0.8],
                      rotate: 0
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  />
                  <motion.div
                    className="absolute top-6 left-1/2 -translate-x-1/2 w-2 h-16 bg-gradient-to-b from-yellow-300/40 to-transparent"
                    style={{ transformOrigin: 'bottom center' }}
                    animate={{ 
                      opacity: [0, 0.6, 0],
                      scaleY: [0.8, 1.2, 0.8],
                      rotate: 20
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  />
                </motion.div>
              </motion.div>

              {/* Thought circles */}
              <motion.div
                className="absolute left-8 top-16 w-8 h-8 rounded-full bg-ayur-gold/20 border-2 border-ayur-gold/30"
                animate={{ 
                  opacity: [0, 0.8, 0.8, 0],
                  y: [0, -30, -60, -90],
                  scale: [0.6, 0.8, 1, 1.2]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute left-4 top-32 w-6 h-6 rounded-full bg-ayur-gold/20 border-2 border-ayur-gold/30"
                animate={{ 
                  opacity: [0, 0.8, 0.8, 0],
                  y: [0, -25, -50, -75],
                  scale: [0.4, 0.6, 0.8, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              />
              <motion.div
                className="absolute left-0 top-48 w-4 h-4 rounded-full bg-ayur-gold/20 border-2 border-ayur-gold/30"
                animate={{ 
                  opacity: [0, 0.8, 0.8, 0],
                  y: [0, -20, -40, -60],
                  scale: [0.3, 0.5, 0.7, 0.9]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>

        <motion.div
          className="relative z-10 text-center max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h2 className="font-playfair text-7xl md:text-8xl font-bold text-gray-900 mb-6" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.8)' }}>
              Nayanthara
            </h2>
            <p className="font-playfair text-4xl md:text-5xl text-orange-600 italic mb-8 font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3), 0 0 15px rgba(255,255,255,0.9)' }}>
              Seeing the World Clearly, Together
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="font-body text-2xl text-gray-900 mb-10 leading-relaxed font-bold bg-white/85 backdrop-blur-md p-6 rounded-2xl shadow-2xl border-2 border-gray-300"
          >
            A doctor-supervised neuro-lifestyle operating system blending AI, Ayurveda, and 
            behavioral science for children with ADHD, Autism, and Dyslexia.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-6 justify-center flex-wrap">
            <Link
              to="/dashboard"
              className="px-12 py-5 text-2xl bg-orange-600 text-white font-body font-bold rounded-full hover:bg-orange-700 transition shadow-2xl hover:shadow-3xl border-4 border-white"
            >
              Enter Gurukul
            </Link>
            <button className="px-8 py-4 border-2 border-ayur-gold text-ayur-gold font-body font-bold rounded-full hover:bg-ayur-gold/10 transition">
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Section 1: The Science - Ayurvedic Understanding */}
      <motion.section
        className="relative py-20 px-6 bg-white/50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h3
            className="font-playfair text-6xl font-bold text-center text-gray-900 mb-16" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}
            variants={itemVariants}
          >
            Understanding the Doshas
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* ADHD Card */}
            <motion.div
              className="p-8 rounded-3xl bg-gradient-to-br from-vata-wind/10 to-white border border-vata-wind/20 backdrop-blur-sm hover:shadow-lg transition"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-vata-wind/20 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-3xl">💨</span>
              </div>
              <h4 className="font-playfair text-3xl font-bold text-gray-900 mb-4">
                The Vata Mind (ADHD)
              </h4>
              <p className="font-body text-xl text-gray-800 mb-4 font-semibold">
                Like the wind, the mind moves rapidly, struggles with focus. We use gyroscope games to ground this energy and build stability.
              </p>
              <p className="font-body text-sm text-vata-wind font-semibold">
                ✓ Grounding activities • ✓ Steady routines • ✓ Deep pressure therapy
              </p>
            </motion.div>

            {/* Dyslexia Card */}
            <motion.div
              className="p-8 rounded-3xl bg-gradient-to-br from-pitta-fire/10 to-white border border-pitta-fire/20 backdrop-blur-sm hover:shadow-lg transition"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-pitta-fire/20 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-3xl">🎵</span>
              </div>
              <h4 className="font-playfair text-2xl font-bold text-ayur-slate mb-4">
                The Rhythm of Speech (Dyslexia)
              </h4>
              <p className="font-body text-ayur-slate/70 mb-4">
                Sound and sight disconnect. We use rhythm games to sync eye and ear, building neural bridges for reading and speech.
              </p>
              <p className="font-body text-sm text-pitta-fire font-semibold">
                ✓ Audiovisual sync • ✓ Tala yoga • ✓ Rhythm training
              </p>
            </motion.div>

            {/* Autism Card */}
            <motion.div
              className="p-8 rounded-3xl bg-gradient-to-br from-kapha-earth/10 to-white border border-kapha-earth/20 backdrop-blur-sm hover:shadow-lg transition"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-kapha-earth/20 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-3xl">🧩</span>
              </div>
              <h4 className="font-playfair text-2xl font-bold text-ayur-slate mb-4">
                The Inner World (Autism)
              </h4>
              <p className="font-body text-ayur-slate/70 mb-4">
                The mind processes patterns deeply. We use logic games and social cue training to teach emotional understanding safely.
              </p>
              <p className="font-body text-sm text-kapha-earth font-semibold">
                ✓ Pattern recognition • ✓ Social cues • ✓ Logic building
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Section 2: Digital Biomarkers - The Games */}
      <motion.section
        className="relative py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h3
            className="font-playfair text-4xl font-bold text-center text-ayur-slate mb-4"
            variants={itemVariants}
          >
            The Therapeutic Games
          </motion.h3>
          <motion.p
            className="font-body text-center text-ayur-slate/70 mb-16 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Proven digital biomarkers that measure real therapeutic progress using your phone's sensors
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Game 1: Mirror Pattern */}
            <motion.div
              className="p-8 rounded-2xl bg-ayur-sky/10 border border-ayur-sky/30"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-playfair text-xl font-bold text-ayur-slate mb-3">
                🪞 The Mirror Pattern
              </h4>
              <p className="font-body text-sm text-ayur-slate/70 mb-4">
                Connect dots to match patterns. Teaches pattern recognition and visual memory.
              </p>
              <p className="font-body text-xs text-ayur-sky font-semibold">
                For: Autism & Visual Processing | 11 Levels | Metrics: Accuracy & Speed
              </p>
            </motion.div>

            {/* Game 2: Hidden Herb */}
            <motion.div
              className="p-8 rounded-2xl bg-vata-wind/10 border border-vata-wind/30"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-playfair text-xl font-bold text-ayur-slate mb-3">
                🌿 The Hidden Herb
              </h4>
              <p className="font-body text-sm text-ayur-slate/70 mb-4">
                Find the glowing leaf amid distractors. Measures focus and impulsivity control.
              </p>
              <p className="font-body text-xs text-vata-wind font-semibold">
                For: ADHD & Concentration | 11 Levels | Metrics: Focus Duration & Wrong Clicks
              </p>
            </motion.div>

            {/* Game 3: Lion's Breath */}
            <motion.div
              className="p-8 rounded-2xl bg-pitta-fire/10 border border-pitta-fire/30"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-playfair text-xl font-bold text-ayur-slate mb-3">
                🦁 The Lion's Breath
              </h4>
              <p className="font-body text-sm text-ayur-slate/70 mb-4">
                Maintain steady breathing to keep feather floating. Measures anxiety and self-control.
              </p>
              <p className="font-body text-xs text-pitta-fire font-semibold">
                For: Anxiety & Speech | 11 Levels | Metrics: Breath Duration & Volume Control
              </p>
            </motion.div>

            {/* Game 4: Social Detective */}
            <motion.div
              className="p-8 rounded-2xl bg-kapha-earth/10 border border-kapha-earth/30"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-playfair text-xl font-bold text-ayur-slate mb-3">
                🔍 The Social Detective
              </h4>
              <p className="font-body text-sm text-ayur-slate/70 mb-4">
                Identify emotions and social cues. Teaches emotional intelligence and empathy.
              </p>
              <p className="font-body text-xs text-kapha-earth font-semibold">
                For: Autism & Social Skills | 11 Levels | Metrics: Emotional Recognition Accuracy
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Section 3: The Gita Module - Wisdom & Resilience */}
      <motion.section
        className="relative py-20 px-6 bg-gradient-to-r from-ayur-slate/5 to-ayur-gold/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible">
              <motion.h3
                variants={itemVariants}
                className="font-playfair text-4xl font-bold text-ayur-slate mb-6"
              >
                Building the Warrior Within
              </motion.h3>
              <motion.p
                variants={itemVariants}
                className="font-body text-lg text-ayur-slate/70 mb-6"
              >
                The Bhagavad Gita is not a religious text—it is a manual for the mind. We teach children to be warriors of their own consciousness.
              </motion.p>

              <motion.div variants={itemVariants} className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-2xl">🏹</span>
                  <div>
                    <h4 className="font-body font-bold text-ayur-slate">Arjuna's Focus</h4>
                    <p className="font-body text-sm text-ayur-slate/70">
                      Stories about focus, duty, and overcoming doubt strengthen the mind.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">🐎</span>
                  <div>
                    <h4 className="font-body font-bold text-ayur-slate">Krishna's Wisdom</h4>
                    <p className="font-body text-sm text-ayur-slate/70">
                      Personalized stories teach resilience and emotional mastery.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">⚔️</span>
                  <div>
                    <h4 className="font-body font-bold text-ayur-slate">Warrior Habits</h4>
                    <p className="font-body text-sm text-ayur-slate/70">
                      Actionable prescriptions (breathe, move, eat) translate wisdom into daily life.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Illustration Area */}
            <motion.div
              className="relative h-96 bg-gradient-to-br from-ayur-gold/10 via-ayur-sage/10 to-ayur-sky/10 rounded-3xl border border-ayur-gold/20 flex items-center justify-center overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="text-center"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="flex justify-center mb-4">
                  <img 
                    src="/src/assets/krishna charriot home page.svg" 
                    alt="Krishna's Chariot" 
                    className="w-64 h-64 object-contain"
                  />
                </div>
                <p className="font-playfair text-xl text-ayur-gold italic font-bold drop-shadow-md">
                  Krishna's Chariot
                </p>
                <p className="font-body text-sm text-gray-700 mt-2 font-semibold">
                  Representing the Guided Mind
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Section 4: The Doctor's Role */}
      <motion.section
        className="relative py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3
            className="font-playfair text-4xl font-bold text-ayur-slate mb-8"
            variants={itemVariants}
          >
            Doctor-Supervised Therapy
          </motion.h3>
          <motion.p
            className="font-body text-lg text-ayur-slate/70 mb-12"
            variants={itemVariants}
          >
            Every child is assigned a verified healthcare professional who monitors progress through digital biomarkers and creates personalized lifestyle prescriptions.
          </motion.p>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: 'Real-Time Monitoring',
                desc: 'Doctors see accurate biomarker data from games, not arbitrary scores.',
                icon: '📊',
              },
              {
                title: 'Smart Prescriptions',
                desc: 'AI-generated lifestyle recommendations mapped to Ayurvedic doshas.',
                icon: '💊',
              },
              {
                title: 'Secure Communication',
                desc: 'Doctor-to-patient chat with AI safety monitoring.',
                icon: '💬',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-ayur-gold/20 hover:shadow-lg transition"
                variants={itemVariants}
              >
                <span className="text-4xl block mb-4">{item.icon}</span>
                <h4 className="font-playfair text-lg font-bold text-ayur-slate mb-2">
                  {item.title}
                </h4>
                <p className="font-body text-sm text-ayur-slate/70">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="relative py-20 px-6 bg-gradient-to-r from-ayur-slate to-ayur-olive text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3
            className="font-playfair text-4xl font-bold mb-6"
            variants={itemVariants}
          >
            Ready to Begin the Journey?
          </motion.h3>
          <motion.p className="font-body text-lg mb-8 opacity-90" variants={itemVariants}>
            Parents: Register your child and get assigned a verified doctor.
            <br />
            Doctors: Join our network of specialists.
          </motion.p>
          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            variants={itemVariants}
          >
            <Link
              to="/register"
              className="px-8 py-4 bg-ayur-gold text-ayur-slate font-body font-bold rounded-full hover:bg-white transition shadow-lg"
            >
              Register Now
            </Link>
            <button className="px-8 py-4 border-2 border-white text-white font-body font-bold rounded-full hover:bg-white/10 transition">
              Contact Support
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-ayur-slate text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-playfair text-lg font-bold mb-4">Nayanthara</h4>
            <p className="font-body text-sm text-white/70">Blending ancient wisdom with modern science.</p>
          </div>
          <div>
            <h4 className="font-body font-bold text-sm mb-4">Quick Links</h4>
            <ul className="font-body text-sm text-white/70 space-y-2">
              <li><Link to="/login" className="hover:text-white">Login</Link></li>
              <li><Link to="/register" className="hover:text-white">Register</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-body font-bold text-sm mb-4">Company</h4>
            <ul className="font-body text-sm text-white/70 space-y-2">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-body font-bold text-sm mb-4">Support</h4>
            <ul className="font-body text-sm text-white/70 space-y-2">
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center font-body text-sm text-white/60">
          <p>&copy; 2025 Nayanthara. All rights reserved. Building a healthier future for neuro-diverse children.</p>
        </div>
      </footer>
    </main>
  );
}
