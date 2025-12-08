import React from 'react';
import { motion } from 'framer-motion';
import { Network, Lightbulb, Factory } from 'lucide-react';
import { GlowingEffect } from '../components/ui/glowing-effect';

const MagicCard = ({ children, className }: { children?: React.ReactNode, className?: string }) => {
    return (
        <div className={`group relative h-full rounded-3xl border border-slate-200 bg-white p-2 ${className}`}>
             <GlowingEffect
              blur={0}
              borderWidth={3}
              spread={80}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="relative z-10 h-full overflow-hidden rounded-xl bg-white p-8">
                {children}
            </div>
        </div>
    );
};

export const Ecosystem: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen text-slate-900 relative">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 z-0 bg-dot-slate-200 mask-[radial-gradient(ellipse_at_top,white,transparent)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full border border-violet-200 bg-violet-50 text-violet-700 text-sm font-bold"
          >
            The Infrastructure
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6">
            The <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-500 to-blue-600">Ecosystem</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Three interconnected pillars powering the complete journey of inclusive innovation from identifying real needs to designing solutions and delivering them to the community.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
            {/* Hub */}
            <MagicCard className="">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="w-32 h-32 rounded-3xl bg-violet-50 flex items-center justify-center text-violet-600 shadow-sm border border-violet-100">
                            <Network size={48} />
                        </div>
                    </div>
                    <div className="w-full md:w-2/3">
                        <h2 className="text-3xl font-black text-slate-900 mb-4">STRIDE Hub</h2>
                        <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                            The central intelligence unit of the ecosystem. The STRIDE Hub drives knowledge creation, builds digital and technological platforms, and orchestrates strategic partnerships across all stakeholders. It acts as the connecting force between real-world problems and the innovators who can solve them.
                        </p>
                        <div className="flex flex-wrap gap-2">
                             {["Strategy", "Partnerships", "Knowledge Management"].map((tag, i) => (
                                 <span key={i} className="px-3 py-1 bg-violet-50 text-violet-700 rounded-lg text-sm font-semibold border border-violet-100">{tag}</span>
                             ))}
                        </div>
                    </div>
                </div>
            </MagicCard>

            {/* Labs */}
             <MagicCard className="">
                <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="w-32 h-32 rounded-3xl bg-cyan-50 flex items-center justify-center text-cyan-600 shadow-sm border border-cyan-100">
                            <Lightbulb size={48} />
                        </div>
                    </div>
                    <div className="w-full md:w-2/3 space-y-5">
                        <div>
                            <h2 className="text-3xl font-black text-slate-900 mb-4">Stride Innovation Centres</h2>
                            <p className="text-slate-600 mb-3 text-lg leading-relaxed">
                                Nested within partner colleges, Innovation Centres are the creative engines where students, engineers, and PwDs collaborate to transform real-world challenges into meaningful solutions through participatory design and rapid experimentation.
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Operating as living labs, these centres nurture empathy-driven innovation, exposing students to real user contexts while empowering PwDs as co-creators, not just end-users.
                            </p>
                        </div>
                            <div className="flex flex-wrap gap-2">
                                {["Research & Development", "Prototyping", "Design Thinking"].map((tag, i) => (
                                 <span key={i} className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-lg text-sm font-semibold border border-cyan-100">{tag}</span>
                             ))}
                        </div>
                    </div>
                </div>
            </MagicCard>

            {/* Studios */}
            <MagicCard className="">
               <div className="flex flex-col md:flex-row gap-8 items-center">
                   <div className="w-full md:w-1/3 flex justify-center">
                       <div className="w-32 h-32 rounded-3xl bg-fuchsia-50 flex items-center justify-center text-fuchsia-600 shadow-sm border border-fuchsia-100">
                           <Factory size={48} />
                       </div>
                   </div>
                   <div className="w-full md:w-2/3 space-y-5">
                       <div>
                         <h2 className="text-3xl font-black text-slate-900 mb-4">STRIDE Maker Studios</h2>
                         <p className="text-slate-600 mb-3 text-lg leading-relaxed">
                           Community-rooted micro-factories where inclusive ideas become high-quality assistive devices. Equipped with 3D printers, adaptive tools, and quality-assured workflows, these accessible workplaces manufacture and test Innovation Centre designs to ensure durability, safety, and user comfort.
                         </p>
                         <p className="text-slate-600 text-lg leading-relaxed">
                           Beyond production, Maker Studios create pathways to dignity and livelihood, offering structured employment, training, and mentorship for neurodivergent and disabled individuals while building hubs of craftsmanship and community empowerment.
                         </p>
                       </div>
                       <div className="flex flex-wrap gap-2">
                            {['Manufacturing', 'Distribution', 'Employment'].map((tag, i) => (
                                <span key={i} className="px-3 py-1 bg-fuchsia-50 text-fuchsia-700 rounded-lg text-sm font-semibold border border-fuchsia-100">{tag}</span>
                            ))}
                       </div>
                   </div>
               </div>
           </MagicCard>
        </div>
      </div>
    </div>
  );
};