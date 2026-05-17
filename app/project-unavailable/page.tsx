'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ProjectUnavailable() {
	const [typed, setTyped] = useState('');
	const message = '$ fetch project --status';

	useEffect(() => {
		let i = 0;
		const interval = setInterval(() => {
			setTyped(message.slice(0, i + 1));
			i++;
			if (i >= message.length) clearInterval(interval);
		}, 60);
		return () => clearInterval(interval);
	}, []);

	return (
		<main className="min-h-screen bg-[#1A1A1A] text-white flex items-center justify-center px-4 overflow-hidden">
			{/* subtle background grid */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
			</div>
			<div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-gray-900/20 opacity-40" />

			<div className="relative z-10 max-w-2xl w-full">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: 'easeOut' }}
					className="bg-black/55 backdrop-blur-lg rounded-lg border border-gray-800 p-6 shadow-2xl"
				>
					{/* traffic lights */}
					<div className="flex items-center gap-2 mb-6">
						<div className="w-3 h-3 rounded-full bg-red-500" />
						<div className="w-3 h-3 rounded-full bg-yellow-500" />
						<div className="w-3 h-3 rounded-full bg-green-500" />
						<span className="ml-3 text-xs text-gray-600 font-mono">project-status.sh</span>
					</div>

					<div className="font-mono space-y-4">
						{/* typewriter command */}
						<p className="text-green-500 text-sm">
							{typed}
							<span className="animate-pulse">▌</span>
						</p>

						{/* error block */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1.4, duration: 0.5 }}
							className="border border-red-500/30 rounded-md bg-red-500/5 p-4 space-y-1"
						>
							<p className="text-red-400 text-xs uppercase tracking-widest mb-2">
								ERROR 404 — project not found
							</p>
							<p className="text-2xl font-bold text-gray-100 leading-snug">
								This project is no longer maintained.
							</p>
						</motion.div>

						{/* details */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1.9, duration: 0.5 }}
							className="space-y-3 text-gray-400 text-sm leading-relaxed"
						>
							<p>
								<span className="text-green-500">→</span> The project you&apos;re looking for has been archived or shut down. It may have been an experiment, a side-quest, or something that simply ran its course.
							</p>
							<p>
								<span className="text-green-500">→</span> The repository might still exist on GitHub, but active development, bug fixes, and support have been discontinued.
							</p>
							<p>
								<span className="text-green-500">→</span> Links, APIs, or hosted instances tied to this project may be dead. That&apos;s intentional — not a bug.
							</p>
							<p>
								<span className="text-yellow-500">⚠</span> If you depended on this project for something, you&apos;ll need to find an alternative. Sorry about that.
							</p>
						</motion.div>

						{/* divider */}
						<motion.div
							initial={{ scaleX: 0 }}
							animate={{ scaleX: 1 }}
							transition={{ delay: 2.4, duration: 0.4 }}
							className="border-t border-gray-800 origin-left"
						/>

						{/* footer actions */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 2.6, duration: 0.5 }}
							className="flex flex-col sm:flex-row gap-3 pt-1"
						>
							<Link
								href="/"
								className="flex items-center justify-center gap-2 px-5 py-2.5 bg-green-500/10 text-green-400 rounded-md border border-green-500/20 hover:bg-green-500/20 transition-colors text-sm"
							>
								<span>←</span> back to home
							</Link>
							<a
								href="https://github.com/deepanharsha"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-800/60 text-gray-300 rounded-md border border-gray-700 hover:bg-gray-700/60 transition-colors text-sm"
							>
								<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
								</svg>
								check github anyway
							</a>
							<a
								href="mailto:harshadeepan11@gmail.com"
								className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-800/60 text-gray-300 rounded-md border border-gray-700 hover:bg-gray-700/60 transition-colors text-sm"
							>
								✉ contact me
							</a>
						</motion.div>

						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 3, duration: 0.5 }}
							className="text-gray-600 text-xs pt-1"
						>
							exit code 1 — process terminated
						</motion.p>
					</div>
				</motion.div>
			</div>
		</main>
	);
}
