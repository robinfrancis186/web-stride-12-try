import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-20"
        >
          <span className="text-cyan-600 font-bold tracking-widest uppercase text-sm mb-2 block">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">
            About <span className="gradient-text">STRIDE</span>
          </h1>
          <div className="text-xl text-slate-600 max-w-4xl md:max-w-6xl mx-auto leading-relaxed text-justify space-y-4">
            <p>
              STRIDE (Social Technology and Research for Inclusive Design Excellence) is Kerala's pioneering initiative to create India's first integrated ecosystem for democratic social innovation. Built at the intersection of research, design, and social impact, STRIDE creates India’s first decentralized ecosystem where makers, students, PwDs, institutions, and local communities work together to solve real accessibility challenges.
            </p>
            <p>
              We believe innovation should not be limited to labs or corporations; it should emerge from the lived experiences of people. Through our network of STRIDE Innovation Centres, STRIDE Maker Studios, and the STRIDE central Hub, we enable solutions that are affordable, accessible, locally manufactured, and designed with empathy.
            </p>
            <p>
              STRIDE empowers communities, nurtures the next generation of problem solvers, creates dignified employment opportunities for neurodivergent individuals, and accelerates sustainable social change.
            </p>
            <p>
              Together, we are building an ecosystem where inclusive innovation becomes a way of life, designed in Kerala, built with communities, and made for the world.
            </p>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-10 rounded-3xl border border-slate-200 hover:border-cyan-300 transition-all shadow-xl hover:shadow-cyan-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="w-2 h-8 bg-cyan-500 rounded-full mr-4"></span>
              Our Mission
            </h2>
            <p className="text-slate-600 leading-relaxed relative z-10">
              Our mission is to develop innovative, low-tech assistive devices to improve the lives of persons with disabilities (PwDs), creating practical, inclusive solutions that address real-world challenges.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-10 rounded-3xl border border-slate-200 hover:border-fuchsia-300 transition-all shadow-xl hover:shadow-fuchsia-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="w-2 h-8 bg-fuchsia-500 rounded-full mr-4"></span>
              Our Vision
            </h2>
            <p className="text-slate-600 leading-relaxed relative z-10">
              Pioneering Kerala as India's first Inclusive Innovation Hub by 2026. Revolutionizing the assistive technology landscape to serve the needs of persons with disabilities in the state
            </p>
          </motion.div>
        </div>

        {/* 2030 Goals */}
        <div className="mb-24">
          <div className="flex items-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mr-6">2030 Goals</h2>
            <div className="grow h-px bg-slate-200"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[ 
                { label: "Reduce Import Dependency", sub: "By building strong local manufacturing ecosystems, STRIDE aims to replace costly imported assistive devices with high-quality, Kerala-made alternatives.", color: "violet" },
                { label: "Lower Device Costs", sub: "Through localized design, production, and community-powered manufacturing, STRIDE will make assistive technology significantly more affordable and accessible for everyone who needs it.", color: "cyan" },
                { label: "Create Employment Opportunities", sub: "By 2030, STRIDE will generate sustainable employment for 150+ skilled neurodivergent workers across design, production, quality control, and community distribution.", color: "fuchsia" }
              ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className={`bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-${item.color}-100 transition-all relative overflow-hidden group`}
              >
                <div className={`absolute top-0 right-0 w-40 h-40 bg-${item.color}-100 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:opacity-70 transition-opacity`}></div>
                <h3 className={`text-3xl md:text-4xl font-black text-${item.color}-600 mb-6 leading-tight relative z-10`}>{item.label}</h3>
                <p className="text-slate-600 text-base leading-relaxed relative z-10">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Strategy Section */}
        <div className="bg-slate-900 border border-slate-800 p-10 md:p-16 rounded-[3rem] relative overflow-hidden text-white shadow-2xl">
          <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-violet-600/30 rounded-full blur-[100px]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-8">How We'll Achieve These Goals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Establish Innovation Centres at partner institutions for community-engaged design",
                "Launch STRIDE Maker Studios for community-based manufacturing",
                "Develop quality frameworks and technology platforms through the STRIDE Hub",
                "Foster cross-stakeholder collaboration between academia and industry",
                "Create last-mile distribution networks for accessible device delivery"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mr-4 shrink-0 text-xs font-bold border border-cyan-500/50">
                    {index + 1}
                  </div>
                  <span className="text-slate-300 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};