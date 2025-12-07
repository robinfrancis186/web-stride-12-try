// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Calendar, Users, Trophy } from 'lucide-react';

// const LeaderboardItem: React.FC<{ name: string; institute: string; events: number; contributions: number; points: number; rank: number }> = ({ name, institute, events, contributions, points, rank }) => (
//   <motion.div 
//     initial={{ opacity: 0, y: 10 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     whileHover={{ scale: 1.01 }}
//     className={`group relative overflow-hidden bg-white border p-5 rounded-2xl flex items-center justify-between mb-3 transition-all ${
//         rank === 1 ? 'border-yellow-400/50 shadow-lg shadow-yellow-100' : 'border-slate-200 shadow-sm hover:shadow-md'
//     }`}
//   >
//     {rank === 1 && <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 blur-[40px] rounded-full pointer-events-none"></div>}
    
//     <div className="flex items-center space-x-6 relative z-10">
//       <div className={`w-10 h-10 flex items-center justify-center rounded-lg font-black text-lg ${
//           rank === 1 ? 'bg-yellow-100 text-yellow-600' : 
//           rank === 2 ? 'bg-slate-200 text-slate-600' : 
//           rank === 3 ? 'bg-orange-100 text-orange-600' : 'bg-slate-50 text-slate-400'
//       }`}>
//           {rank}
//       </div>
//       <div className="w-12 h-12 rounded-full bg-slate-100 overflow-hidden flex-shrink-0 border border-slate-200">
//           <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`} alt={name} className="w-full h-full object-cover" />
//       </div>
//       <div>
//         <h4 className="font-bold text-slate-900">{name}</h4>
//         <div className="flex items-center gap-2 text-xs text-slate-500">
//             <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-600 font-medium">{institute}</span>
//         </div>
//       </div>
//     </div>

//     <div className="hidden md:flex space-x-8 text-sm text-slate-500">
//          <span className="flex items-center gap-1"><Calendar size={14} className="text-cyan-500"/> <span className="font-semibold text-slate-700">{events}</span> Events</span>
//          <span className="flex items-center gap-1"><Users size={14} className="text-fuchsia-500"/> <span className="font-semibold text-slate-700">{contributions}</span> Contribs</span>
//     </div>

//     <div className="text-right relative z-10 min-w-[80px]">
//         <div className="text-xl font-black text-slate-900 font-mono tracking-tight">{points.toLocaleString()}</div>
//         <div className="text-[10px] font-bold text-slate-400 uppercase">XP</div>
//     </div>
//   </motion.div>
// );

// export const Community: React.FC = () => {
//     const [activeTab, setActiveTab] = useState<'institutes' | 'students'>('institutes');

//   return (
//     <div className="pt-32 pb-20 bg-slate-50 min-h-screen text-slate-900 relative">
//       <div className="absolute inset-0 z-0 bg-dot-slate-200 [mask-image:radial-gradient(ellipse_at_top,white,transparent)] pointer-events-none" />

//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
//         {/* Header */}
//         <div className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-xl">
//             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-yellow-200/40 to-orange-200/40 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            
//             <div className="relative z-10 md:w-2/3">
//                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 text-yellow-700 border border-yellow-200 text-xs font-bold mb-4">
//                     <Trophy size={12} /> Live Standings
//                 </div>
//                 <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Community <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">Leaderboard</span></h1>
//                 <p className="text-slate-600 text-lg">Recognizing the champions driving inclusive innovation forward.</p>
//             </div>
//         </div>

//         {/* Controls */}
//         <div className="flex justify-center mb-10">
//             <div className="bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm inline-flex">
//                 <button 
//                     onClick={() => setActiveTab('institutes')}
//                     className={`px-8 py-3 rounded-xl font-bold transition-all ${activeTab === 'institutes' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
//                 >
//                     Institutes
//                 </button>
//                 <button 
//                     onClick={() => setActiveTab('students')}
//                     className={`px-8 py-3 rounded-xl font-bold transition-all ${activeTab === 'students' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
//                 >
//                     Students
//                 </button>
//             </div>
//         </div>

//         {/* List */}
//         <div className="max-w-4xl mx-auto space-y-2">
//             {activeTab === 'institutes' ? (
//                 <>
//                     <LeaderboardItem name="MIT Innovation Lab" institute="MIT" events={24} contributions={156} points={12450} rank={1} />
//                     <LeaderboardItem name="Stanford Design Hub" institute="Stanford" events={20} contributions={142} points={11200} rank={2} />
//                     <LeaderboardItem name="CET Trivandrum" institute="CET" events={18} contributions={98} points={9850} rank={3} />
//                     <LeaderboardItem name="Model Engineering" institute="MEC" events={15} contributions={85} points={8400} rank={4} />
//                     <LeaderboardItem name="IIT Madras" institute="IITM" events={12} contributions={70} points={7200} rank={5} />
//                 </>
//             ) : (
//                 <>
//                      <LeaderboardItem name="Sarah Chen" institute="MIT" events={12} contributions={45} points={2450} rank={1} />
//                      <LeaderboardItem name="Rahul Verma" institute="CET" events={10} contributions={38} points={2100} rank={2} />
//                      <LeaderboardItem name="Alex Johnson" institute="Stanford" events={9} contributions={32} points={1950} rank={3} />
//                      <LeaderboardItem name="Priya Nair" institute="MEC" events={8} contributions={28} points={1800} rank={4} />
//                      <LeaderboardItem name="David Kim" institute="CMU" events={7} contributions={25} points={1650} rank={5} />
//                 </>
//             )}
//         </div>

//       </div>
//     </div>
//   );
// };



import React from 'react';
import { motion } from 'framer-motion';

// NOTE: The original Community page (leaderboard + controls) was removed from the active export
// and replaced with a lightweight "Coming Soon" hero. If you want the old content preserved,
// it's recommended to keep a copy in a branch or backup file.

export const Community: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen flex items-center justify-center text-slate-900 relative">
            <div className="absolute inset-0 z-0 bg-dot-slate-200 [mask-image:radial-gradient(ellipse_at_top,white,transparent)] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-6 leading-[0.9]"
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-blue-600 animate-gradient">Coming Soon</span>
                    <span className="inline-flex items-baseline ml-3 gap-1" aria-hidden="true">
                        <motion.span
                            className="text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-blue-600 animate-gradient font-black"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
                        >
                            .
                        </motion.span>
                        <motion.span
                            className="text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-blue-600 animate-gradient font-black"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut', delay: 0.12 }}
                        >
                            .
                        </motion.span>
                        <motion.span
                            className="text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-blue-600 animate-gradient font-black"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut', delay: 0.24 }}
                        >
                            .
                        </motion.span>
                    </span>
                    <span className="sr-only">Loading</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-0 leading-relaxed"
                >
                    We're building something great — leaderboards, community features, and more are on the way. Check back soon.
                </motion.p>
            </div>
        </div>
    );
};