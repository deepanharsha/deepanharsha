'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-4xl mx-auto">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="relative p-8 rounded-2xl overflow-hidden backdrop-blur-lg border border-gray-800 bg-black/50"
				>
					<div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5" />
					<div className="relative z-10">
						<div className="flex items-center gap-2 mb-6">
							<div className="w-3 h-3 rounded-full bg-red-500" />
							<div className="w-3 h-3 rounded-full bg-yellow-500" />
							<div className="w-3 h-3 rounded-full bg-green-500" />
						</div>
						<div className="font-mono">
							<p className="text-green-500 mb-2">$ contact --info</p>
							<h2 className="text-3xl font-bold mb-8 text-gray-200">Let&apos;s Connect</h2>
							<p className="text-green-500 mb-2">$ location --current</p>
							<div className="flex items-center gap-2 text-gray-300">
								<svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
								</svg>
								<span>India</span>
							</div>
							<p className="text-green-500 mt-8 mb-2">$ contact --email</p>
							<motion.a
								href="mailto:theprojektmakers@gmail.com"
								whileHover={{ scale: 1.02 }}
								className="inline-block px-6 py-3 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20 hover:bg-green-500/20 transition-colors"
							>
								theprojektmakers@gmail.com (Project Related)  <br />
							</motion.a>
							{/*
							<p className="text-green-500 mt-8 mb-2">$ cat resume.pdf</p>
							<motion.a
								href="/path-to-resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ scale: 1.02 }}
								className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20 hover:bg-green-500/20 transition-colors"
							>
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
									<path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
								</svg>
								<span>Download Resume</span>
							</motion.a>
							*/}
							<p className="text-green-500 mt-8 mb-4">$ ls ./social-links</p>
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
								<motion.a
									href="https://github.com/deepanharsha"
									whileHover={{ scale: 1.05 }}
									className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50 group"
								>
									<div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
										<svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
											<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
										</svg>
									</div>
									<div>
										<p className="font-semibold text-gray-200">GitHub</p>
										<p className="text-sm text-gray-400">@deepanharsha</p>
									</div>
								</motion.a>
								
								<motion.a 
								  href="https://www.instagram.com/notharsha7"
								  target="_blank"
								  rel="noopener noreferrer"
								  className="flex items-center gap-3 p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors"
								>
								  <div>
								    <svg 
								      className="w-5 h-5 text-pink-400" 
								      fill="currentColor" 
								      viewBox="0 0 169.063 169.063" 
								      xmlns="http://www.w3.org/2000/svg"
								    >
								      <g>
								        <path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752
								                          c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407
								                          c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752
								                          c17.455,0,31.656,14.201,31.656,31.655V122.407z" />
								        <path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561
								                          C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561
								                          c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z" />
								        <path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78
								                          c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78
								                          C135.661,29.421,132.821,28.251,129.921,28.251z" />
								      </g>
								    </svg>
								  </div>
								  <div>
								    <p className="font-semibold text-gray-200">Instagram</p>
								    <p className="text-sm text-gray-400">@notharsha7</p>
								  </div>
								</motion.a>

								
								<motion.a
									href="https://x.com/deepan_harsha"
									whileHover={{ scale: 1.05 }}
									className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50 group"
								>
									<div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
										<svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
											<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
										</svg>
									</div>
									<div>
										<p className="font-semibold text-gray-200">X</p>
										<p className="text-sm text-gray-400">@deepan_harsha</p>
									</div>
								</motion.a>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
