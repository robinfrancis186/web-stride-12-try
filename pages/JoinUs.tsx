import React from 'react';
import { motion } from 'framer-motion';
import { Heart, School, Code, Handshake, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const JoinCard = ({ icon: Icon, title, description, color, link }: { icon: any, title: string, description: string, color: string, link: string }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden relative"
    >
        <div className={`absolute top-0 right-0 w-32 h-32 bg-${color}-500/5 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500`} />

        <div className={`w-14 h-14 rounded-2xl bg-${color}-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className={`w-7 h-7 text-${color}-600`} />
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 mb-8 leading-relaxed">
            {description}
        </p>

        <Link
            to={link}
            className={`inline-flex items-center font-semibold text-${color}-600 group-hover:gap-2 transition-all`}
        >
            Get Started <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
    </motion.div>
);

export const JoinUs: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight"
                    >
                        Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500">Movement</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600 leading-relaxed"
                    >
                        There's a place for everyone in the STRIDE ecosystem. Choose your path and help us build a more inclusive future.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    <JoinCard
                        icon={Heart}
                        title="Join as a Volunteer"
                        description="Contribute your time and skills to support local chapters, organize events, and mentor students."
                        color="rose"
                        link="/get-involved?role=volunteer"
                    />
                    <JoinCard
                        icon={School}
                        title="Join as a Campus Chapter"
                        description="Start a STRIDE chapter at your institution. Lead innovation, organize workshops, and build a community."
                        color="violet"
                        link="/get-involved?role=campus"
                    />
                    <JoinCard
                        icon={Code}
                        title="Join as a Developer"
                        description="Build open-source assistive tech. Collaborate on hardware and software projects that change lives."
                        color="cyan"
                        link="/get-involved?role=developer"
                    />
                    <JoinCard
                        icon={Handshake}
                        title="Join as a Partner"
                        description="Collaborate with us as an NGO, corporate sponsor, or healthcare provider to scale impact."
                        color="emerald"
                        link="/get-involved?role=partner"
                    />
                </div>

                {/* FAQ / Additional Info */}
                <div className="mt-24 bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-200 shadow-sm">
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Not sure where you fit?</h2>
                        <p className="text-slate-600 mb-8">
                            Don't worry! You can join our community WhatsApp channels and find your way from there.
                        </p>
                        <a
                                href="https://chat.whatsapp.com/YOUR_INVITE_CODE"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl"
                        >
                                Join WhatsApp Channel
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};
