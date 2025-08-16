'use client';

import { motion } from 'framer-motion';

export default function SystemArchitecture() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					System Architecture & Projects
				</motion.h2>

				<div className="grid grid-cols-1 gap-8">
					{[
						{
							title: 'Project YTGet',
							description: 'Made a YouTube video downloader which downloads videos in high quality.',
							details: [
								'Implemented video downloading functionality.',
								'Designed a Proper UI.',
								'Prototyped the application architecture.',
								'Implemented Proper Video Quality Importing.',
							],
							tech: ['Python', 'Web APIs'],
						},
						{
							title: 'TriSense AutoFan',
							description: 'Built a Automatic Detection fan which rotates to the detected person and adjusts its speed according to the ambient temperature.',
							details: [
								'Implemented Proper motion detection algorithms.',
								'Added Foolproof mechanisms.',
								'Debugged and Finished project within 1 Week.',
								'Added Debounce and Noise Reduction.',
							],
							tech: ['Arduino', 'C++', 'Hardware'],
						},
					].map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
						>
							<h3 className="text-2xl font-bold mb-4">{project.title}</h3>
							<p className="text-gray-400 mb-6">{project.description}</p>
							<div className="mb-6">
								<h4 className="text-lg font-semibold mb-2">Key Achievements:</h4>
								<ul className="list-disc list-inside space-y-2 text-gray-300">
									{project.details.map((detail, i) => (
										<li key={i}>{detail}</li>
									))}
								</ul>
							</div>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech, i) => (
									<span key={i} className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
