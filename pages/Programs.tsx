import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Code, Users, Lightbulb } from 'lucide-react';
import { GlowingEffect } from '../components/ui/glowing-effect';

const ProgramCard = ({ title, description, icon: Icon, link, color }: { title: string, description: string, icon: any, link: string, color: string }) => (
    <Link to={link} className="block relative h-full">
        <div className="relative h-full rounded-3xl border border-slate-200 bg-white p-2 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
            <GlowingEffect
                blur={0}
                borderWidth={3}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                variant="default"
            />
            <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-2xl p-8 bg-white/50 backdrop-blur-sm group-hover:bg-white/80 transition-colors">
                <div className={`w-14 h-14 rounded-2xl bg-${color}-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 text-${color}-600`} />
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                        {description}
                    </p>
                </div>

                <div className={`flex items-center font-semibold text-${color}-600 group-hover:gap-2 transition-all`}>
                    Explore Program <ArrowRight className="w-4 h-4 ml-1" />
                </div>
            </div>
        </div>
    </Link>
);

export const Programs: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight"
                    >
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500">Programs</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600 leading-relaxed"
                    >
                        Structured pathways for innovation, learning, and impact. Choose your journey within the STRIDE ecosystem.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                        <ProgramCard
                            title="Internships"
                            description="Gain hands-on experience working on real-world assistive technology projects. Mentorship from industry experts included."
                            icon={Briefcase}
                            link="/internships"
                            color="violet"
                        />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                        <ProgramCard
                            title="Designathon"
                            description="Our flagship annual hackathon. 48 hours of intense innovation to solve specific accessibility challenges."
                            icon={Lightbulb}
                            link="/designathon"
                            color="cyan"
                        />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                        <ProgramCard
                            title="Campus Chapters"
                            description="Lead the movement at your university. Organize workshops, build prototypes, and foster a culture of inclusion."
                            icon={Users}
                            link="/community" // Linking to community for now as it fits
                            color="fuchsia"
                        />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                        <ProgramCard
                            title="Developer Fellowship"
                            description="For advanced coders and makers. Contribute to our open-source core and build the digital infrastructure of STRIDE."
                            icon={Code}
                            link="/join"
                            color="emerald"
                        />
                    </motion.div>
                </div>

            </div>
        </div>
    );
};
