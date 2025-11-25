import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Calendar, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const InternshipRole = ({ title, type, location, duration, description }: { title: string, type: string, location: string, duration: string, description: string }) => (
    <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <h3 className="text-xl font-bold text-slate-900">{title}</h3>
            <span className="px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-sm font-medium w-fit">{type}</span>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-6">
            <div className="flex items-center gap-1"><MapPin size={16} /> {location}</div>
            <div className="flex items-center gap-1"><Clock size={16} /> {duration}</div>
        </div>
        <p className="text-slate-600 mb-6 leading-relaxed">{description}</p>
        <Link to="/join" className="text-violet-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
            Apply Now <ArrowRight size={16} />
        </Link>
    </div>
);

export const Internships: React.FC = () => {
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
                        STRIDE <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">Internships</span>
                    </motion.h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Launch your career in social innovation. Work on projects that matter.
                    </p>
                </div>

                {/* Benefits */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {[
                        "Mentorship from Industry Experts",
                        "Real-world Project Experience",
                        "Certificate of Completion",
                        "Networking Opportunities",
                        "Flexible Remote/Hybrid Options",
                        "Potential for Full-time Role"
                    ].map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm"
                        >
                            <CheckCircle className="text-cyan-500 w-6 h-6 flex-shrink-0" />
                            <span className="font-medium text-slate-700">{benefit}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Open Roles */}
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Open Positions</h2>
                <div className="space-y-6">
                    <InternshipRole
                        title="Frontend Developer Intern"
                        type="Engineering"
                        location="Remote / Kerala"
                        duration="3-6 Months"
                        description="Build accessible web interfaces for our community platform. Experience with React and Tailwind CSS required."
                    />
                    <InternshipRole
                        title="Product Design Intern"
                        type="Design"
                        location="Remote"
                        duration="3 Months"
                        description="Design user-centric experiences for assistive technology products. Conduct user research and create prototypes."
                    />
                    <InternshipRole
                        title="Community Manager Intern"
                        type="Operations"
                        location="Hybrid"
                        duration="6 Months"
                        description="Help manage our growing community of 4000+ members. Organize events, moderate discussions, and support chapters."
                    />
                </div>

            </div>
        </div>
    );
};
