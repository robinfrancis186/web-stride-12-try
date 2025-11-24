import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { ArrowRight, Globe, Activity, Cpu, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ShinyButton } from '../components/ShinyButton';
import { ThreeDMarquee } from '../components/ui/3d-marquee';
import { GlowingEffect } from '../components/ui/glowing-effect';
import { Carousel, Card } from '../components/ui/apple-cards-carousel';

// --- DATA FOR COMPONENTS ---

// 1. Marquee Images - EXTENDED LIST TO FIX BLANK SPACES
// Theme: Prosthetics, Accessibility, Labs, Diverse Teams, Futurism
const baseImages = [
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80", // Robotic technology
  "https://images.unsplash.com/photo-1609619385002-f40f6c69f785?auto=format&fit=crop&w=800&q=80", // Wheelchair accessibility
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80", // Cyberpunk tech
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80", // Lab equipment
  "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&w=800&q=80", // 3D Printer
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80", // Professional woman
  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80", // Braille / Tactile
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80", // Teamwork
  "https://images.unsplash.com/photo-1589254065878-42c9da9e2f58?auto=format&fit=crop&w=800&q=80", // Robot Hand
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80", // Digital Code
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80", // AI technology
  "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80", // Coding
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80", // Global Network
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80", // Engineering
  "https://images.unsplash.com/photo-1504384308090-c54be3853f9d?auto=format&fit=crop&w=800&q=80", // Lab Workshop
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80", // Diverse Meeting
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80", // Medical technology
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80", // Community
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80", // Technology workspace
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80", // Microchip
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80", // Mechanics
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80", // Strategy
  "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80", // Unity
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80", // Laptop coding
  "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=800&q=80", // Workspace
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80", // Conference
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80", // Students
];

// Tripling the array to ensure high density in the 3D grid
const marqueeImages = [...baseImages, ...baseImages, ...baseImages];

// 2. Glowing Grid Items
interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`min-h-[14rem] list-none ${area}`}
    >
      <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-2 md:rounded-3xl md:p-3 shadow-sm hover:shadow-xl transition-all duration-300 group">
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
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 bg-white/50 backdrop-blur-sm group-hover:bg-white/80 transition-colors">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-slate-200 bg-slate-50 p-2 group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 font-sans text-xl font-semibold text-slate-900 md:text-2xl">
                {title}
              </h3>
              <div className="font-sans text-sm text-slate-600 md:text-base leading-relaxed">
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.li>
  );
};

// 3. Carousel Content
const CarouselContent = ({ title, text }: { title: string, text: string }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {title}
        </span>{" "}
        {text}
      </p>
    </div>
  );
};

const carouselData = [
  {
    category: "Step 1: Ideate",
    title: "Innovation Centres",
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop", // Students collaborating
    content: <CarouselContent title="Where it begins." text="Labs within colleges where students and PwDs co-create solutions. We bridge the gap between academic projects and real-world needs." />,
  },
  {
    category: "Step 2: Build",
    title: "STRIDE Studios",
    src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop", // Manufacturing/Lab
    content: <CarouselContent title="Made by the community." text="Distributed micro-factories that manufacture devices. Employing PwDs to build the very tech that empowers them." />,
  },
  {
    category: "Step 3: Distribute",
    title: "The Hub",
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop", // Digital network/team
    content: <CarouselContent title="Connecting the dots." text="The central nervous system managing knowledge, quality control, and partnerships across the entire ecosystem." />,
  },
  {
    category: "Impact",
    title: "Real Stories",
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop", // Professional in wheelchair
    content: <CarouselContent title="Changing Lives." text="Over 5,000 lives touched through affordable, accessible technology. From smart canes to custom prosthetics." />,
  },
  {
    category: "Future",
    title: "Join the Movement",
    src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800&auto=format&fit=crop", // Hands together
    content: <CarouselContent title="Be a part of it." text="Whether you are a maker, a donor, or an institution, your contribution builds a more inclusive world." />,
  },
];


export const Home: React.FC = () => {
  const { scrollY } = useScroll();

  const carouselCards = carouselData.map((card, index) => (
    <Card key={index} card={card} index={index} />
  ));

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-dot-slate-200 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none" />

        {/* Spotlights with Breathing Animation */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-violet-500/10 blur-[120px] rounded-full pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 right-0 translate-x-1/3 w-[30rem] h-[30rem] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white/60 backdrop-blur-sm text-sm font-semibold text-slate-600 mb-8 hover:border-cyan-300 transition-colors shadow-sm cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Shaping the future of assistive tech
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-6 leading-[0.9]"
          >
            Build for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-blue-600 animate-gradient">EveryBody.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-medium"
          >
            STRIDE connects innovation, manufacturing, and community to build a world where technology adapts to people, not the other way around.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/get-involved">
              <ShinyButton text="Join the Ecosystem" />
            </Link>
            <Link to="/products" className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all flex items-center gap-2 group">
              <span className="group-hover:translate-x-0.5 transition-transform">Explore Catalog</span> <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 3D Marquee Section */}
      <section className="py-12 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-slate-900 z-0"></div>
        <div className="relative z-10">
          <h2 className="text-center text-white text-2xl font-bold mb-8 opacity-80">Innovation in Motion</h2>
          {/* Passed a large array to ensure no blank spaces exist in the grid */}
          <ThreeDMarquee images={marqueeImages} />
        </div>
      </section>

      {/* The Challenge - Glowing Grid */}
      <section className="py-24 relative bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">The Challenge</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Why we need a revolution in assistive technology today.</p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
            <GridItem
              area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
              icon={<Globe className="h-4 w-4 text-violet-600" />}
              title="1 Billion+ People"
              description="Over a billion people globally need assistive products. By 2050, this will rise to 2 billion. Yet, only 1 in 10 have access."
            />

            <GridItem
              area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
              icon={<Activity className="h-4 w-4 text-cyan-600" />}
              title="High Cost Barrier"
              description="Traditional assistive tech is often prohibitively expensive due to import dependencies and lack of local manufacturing."
            />

            <GridItem
              area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
              icon={<Cpu className="h-4 w-4 text-orange-600" />}
              title="Innovation Gap"
              description="A disconnect between academic research and market needs means prototypes rarely reach users."
            />

            <GridItem
              area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
              icon={<Users className="h-4 w-4 text-fuchsia-600" />}
              title="Excluded Voices"
              description="PwDs are often excluded from the design process, resulting in products that don't fit real-world needs."
            />

            <GridItem
              area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
              icon={<Zap className="h-4 w-4 text-yellow-500" />}
              title="The Opportunity"
              description="By decentralizing production and democratizing design, we can lower costs and increase access for everyone."
            />
          </ul>
        </div>
      </section>

      {/* The Solution - Apple Cards Carousel */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 pl-8">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Our Ecosystem</h2>
          <p className="text-slate-600 text-lg max-w-2xl mb-8">
            A comprehensive approach to solving the accessibility crisis.
          </p>
        </div>
        <Carousel items={carouselCards} />
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto rounded-[3rem] bg-slate-900 relative overflow-hidden text-center py-20 px-6 shadow-2xl"
        >
          {/* Background Effects */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute top-[-20%] left-[-20%] w-[70%] h-[70%] bg-violet-500/30 blur-[100px] rounded-full origin-center" />
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute bottom-[-20%] right-[-20%] w-[70%] h-[70%] bg-cyan-500/30 blur-[100px] rounded-full origin-center" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
              Ready to make a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">Difference?</span>
            </h2>
            <p className="text-slate-300 text-xl mb-10">
              Whether you are a student, a professional, or an institution, there is a place for you in the STRIDE mission.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/get-involved" className="px-10 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-cyan-50 transition-colors shadow-lg shadow-cyan-500/25">
                Get Involved Now
              </Link>
              <Link to="/about" className="px-10 py-4 rounded-full bg-transparent border border-slate-600 text-white font-bold hover:bg-white/10 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};