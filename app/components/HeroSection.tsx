'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const skills = ['Arduino', 'Python', 'Hardware', 'Node.js', 'bash', 'JavaScript'];

function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 35);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && started && (
        <span className="animate-pulse text-green-400">▋</span>
      )}
    </span>
  );
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(74,222,128,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74,222,128,1) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      />

      {/* Glow blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(ellipse, #4ade80 0%, transparent 70%)' }}
      />

      <div className="relative z-10 w-full max-w-3xl">
        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-xl border overflow-hidden"
          style={{
            background: 'rgba(22,22,22,0.85)',
            borderColor: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06)'
          }}
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(15,15,15,0.6)' }}>
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="ml-2 text-xs" style={{ color: '#525252' }}>harsha@portfolio ~ bash</span>
            <div className="ml-auto flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs" style={{ color: '#4ade80' }}>online</span>
            </div>
          </div>

          {/* Terminal body */}
          <div className="p-6 font-mono text-sm space-y-5">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <span style={{ color: '#4ade80' }}>$ </span>
              <span style={{ color: '#737373' }}>whoami</span>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: '#f5f5f5', letterSpacing: '-0.02em' }}>
                {mounted && <TypingText text="M Harsha Deepan" delay={600} />}
              </h1>
              <p className="mt-2 text-base" style={{ color: '#737373' }}>Hobbyist · Developer · Hardware Enthusiast</p>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
              <div className="mb-3">
                <span style={{ color: '#4ade80' }}>$ </span>
                <span style={{ color: '#737373' }}>cat skills.txt</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4 + i * 0.07 }}
                    className="px-2.5 py-1 rounded text-xs font-mono transition-colors cursor-default"
                    style={{
                      background: 'rgba(74,222,128,0.06)',
                      border: '1px solid rgba(74,222,128,0.15)',
                      color: '#4ade80'
                    }}
                    whileHover={{ background: 'rgba(74,222,128,0.12)', borderColor: 'rgba(74,222,128,0.3)' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.9 }}>
              <span style={{ color: '#4ade80' }}>$ </span>
              <span className="animate-pulse" style={{ color: '#737373' }}>▋</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="mt-10 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-1"
            style={{ color: '#525252' }}
          >
            <span className="text-xs font-mono">scroll</span>
            <svg width="12" height="16" viewBox="0 0 12 16" fill="none">
              <path d="M6 1v14M1 10l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}