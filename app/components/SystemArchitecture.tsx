'use client';
import { motion } from 'framer-motion';
import React from 'react';

type Project = {
  title: string;
  tag: string;
  description: string;
  details: React.ReactNode[];
  tech: string[];
  status: 'active' | 'complete' | 'wip' | 'dpd' | 'oh' | 'dp';
};

const statusConfig = {
  active: { label: 'active', color: '#4ade80' },
  complete: { label: 'complete', color: '#60a5fa' },
  wip: { label: 'in progress', color: '#fbbf24' },
  dpd: { label: 'dropped', color: '#f87171' },
  oh: { label: 'on hold', color: '#facc15' },
  dp: { label: 'deprecated', color: '#9ca3af' },
};

const projects: Project[] = [
  {
    title: 'Blue Horizon WT-172',
    tag: 'aeromodelling',
    description: 'Fixed-wing model aircraft, ~1 kg. Inspired by the Cessna 172.',
    details: [
      'Airborne — flight testing in progress',
      'Currently in prototyping stage',
      <>
        Docs:{' '}
        <a href="https://bluehorizonair.vercel.app/" target="_blank" rel="noopener noreferrer"
          className="underline underline-offset-2 transition-colors" style={{ color: '#60a5fa' }}>
          bluehorizonair.vercel.app
        </a>
      </>,
    ],
    tech: ['AFDHS', 'Electronics', 'Aeromodelling'],
    status: 'dpd',
  },
  {
    title: 'YTGet',
    tag: 'software',
    description: 'YouTube video downloader with high-quality output and a proper GUI.',
    details: [
      'Full video download pipeline with quality selection',
      'Designed and built a clean UI from scratch',
      'Implemented robust error handling & retry logic',
    ],
    tech: ['Python', 'Web APIs'],
    status: 'dp',
  },
  {
    title: 'TriSense AutoFan',
    tag: 'hardware',
    description: 'Smart fan that tracks detected persons and adjusts speed with ambient temperature.',
    details: [
      'PIR + temperature sensor fusion',
      'Servo-driven rotation with smooth debouncing',
      'Built, debugged, and shipped in under 1 week',
    ],
    tech: ['Arduino', 'C++', 'Hardware'],
    status: 'complete',
  },
];

export default function SystemArchitecture() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
            <span className="text-xs font-mono px-3 py-1 rounded"
              style={{ color: '#525252', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
              ./projects
            </span>
            <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
          </div>
          <h2 className="text-2xl font-bold text-center" style={{ color: '#e5e5e5' }}>Projects</h2>
        </motion.div>

        <div className="space-y-4">
          {projects.map((project, index) => {
            const status = statusConfig[project.status];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-xl p-6 transition-all duration-300"
                style={{
                  background: 'rgba(22,22,22,0.7)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(12px)',
                }}
                whileHover={{
                  borderColor: 'rgba(74,222,128,0.15)',
                  background: 'rgba(22,22,22,0.9)',
                }}
              >
                {/* Project header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono px-2 py-0.5 rounded"
                        style={{ color: '#525252', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                        {project.tag}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold" style={{ color: '#f5f5f5' }}>{project.title}</h3>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: status.color }} />
                    <span className="text-xs font-mono" style={{ color: status.color }}>{status.label}</span>
                  </div>
                </div>

                <p className="text-sm mb-5" style={{ color: '#737373', lineHeight: '1.6' }}>{project.description}</p>

                {/* Details as terminal output */}
                <div className="rounded-lg p-4 mb-5 font-mono text-xs space-y-1.5"
                  style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.04)' }}>
                  {project.details.map((detail, i) => (
                    <div key={i} className="flex gap-2">
                      <span style={{ color: '#4ade80' }}>›</span>
                      <span style={{ color: '#a3a3a3' }}>{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono px-2 py-0.5 rounded"
                      style={{
                        background: 'rgba(96,165,250,0.06)',
                        border: '1px solid rgba(96,165,250,0.15)',
                        color: '#60a5fa'
                      }}>
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}