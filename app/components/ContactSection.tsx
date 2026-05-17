'use client';

import { motion } from 'framer-motion';

const socials = [
  {
    label: 'GitHub',
    handle: '@deepanharsha',
    href: 'https://github.com/deepanharsha',
    color: '#e5e5e5',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    handle: '@notharsha7',
    href: 'https://www.instagram.com/notharsha7',
    color: '#f472b6',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-2a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"/>
      </svg>
    ),
  },
  {
    label: 'X / Twitter',
    handle: '@deepan_harsha',
    href: 'https://x.com/deepan_harsha',
    color: '#e5e5e5',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function ContactSection() {
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
              ./contact
            </span>
            <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
          </div>
          <h2 className="text-2xl font-bold text-center" style={{ color: '#e5e5e5' }}>Let&apos;s Connect</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-xl overflow-hidden"
          style={{
            background: 'rgba(22,22,22,0.7)',
            border: '1px solid rgba(255,255,255,0.06)',
            backdropFilter: 'blur(12px)',
          }}
        >
          {/* Terminal bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(15,15,15,0.6)' }}>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>
            <span className="ml-2 text-xs font-mono" style={{ color: '#525252' }}>contact.sh</span>
          </div>

          <div className="p-6 font-mono text-sm space-y-8">
            {/* Location */}
            <div>
              <div className="mb-3 text-xs" style={{ color: '#525252' }}>
                <span style={{ color: '#4ade80' }}>$ </span>location --current
              </div>
              <div className="flex items-center gap-2" style={{ color: '#a3a3a3' }}>
                <svg className="w-4 h-4 shrink-0" style={{ color: '#4ade80' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                India
              </div>
            </div>

            {/* Email */}
            <div>
              <div className="mb-3 text-xs" style={{ color: '#525252' }}>
                <span style={{ color: '#4ade80' }}>$ </span>contact --email
              </div>
              <motion.a
                href="mailto:harshadeepan11@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-mono transition-all"
                style={{
                  background: 'rgba(74,222,128,0.06)',
                  border: '1px solid rgba(74,222,128,0.15)',
                  color: '#4ade80',
                }}
                whileHover={{
                  background: 'rgba(74,222,128,0.1)',
                  borderColor: 'rgba(74,222,128,0.3)',
                }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                harshadeepan11@gmail.com
              </motion.a>
            </div>

            {/* Social links */}
            <div>
              <div className="mb-4 text-xs" style={{ color: '#525252' }}>
                <span style={{ color: '#4ade80' }}>$ </span>ls ./socials
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {socials.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-3 rounded-lg transition-all"
                    style={{
                      background: 'rgba(0,0,0,0.3)',
                      border: '1px solid rgba(255,255,255,0.05)',
                      color: social.color,
                    }}
                    whileHover={{
                      background: 'rgba(255,255,255,0.04)',
                      borderColor: 'rgba(255,255,255,0.1)',
                      y: -1,
                    }}
                  >
                    {social.icon}
                    <div>
                      <div className="text-xs font-semibold" style={{ color: '#d4d4d4' }}>{social.label}</div>
                      <div className="text-xs" style={{ color: '#525252' }}>{social.handle}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Footer prompt */}
            <div className="pt-2 border-t" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
              <span style={{ color: '#4ade80' }}>$ </span>
              <span className="animate-pulse" style={{ color: '#525252' }}>▋</span>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs mt-10"
          style={{ color: '#404040', fontFamily: 'monospace' }}
        >
          built by harsha · {new Date().getFullYear()}
        </motion.p>
      </div>
    </section>
  );
}