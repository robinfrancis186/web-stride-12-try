import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { ArrowRight, Globe, Activity, Cpu, Users, Zap, Heart, Target, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ShinyButton } from '../components/ShinyButton';
import { ThreeDMarquee } from '../components/ui/3d-marquee';
import { GlowingEffect } from '../components/ui/glowing-effect';
import { Carousel, Card } from '../components/ui/apple-cards-carousel';

// --- DATA FOR COMPONENTS ---

// 1. Marquee Images
const baseImages = [
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
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80", // Robotic technology
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
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    content: <CarouselContent title="Where it begins." text="Labs within colleges where students and PwDs co-create solutions. We bridge the gap between academic projects and real-world needs." />,
  },
  {
    category: "Step 2: Build",
    title: "STRIDE Studios",
    src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
    content: <CarouselContent title="Made by the community." text="Distributed micro-factories that manufacture devices. Employing PwDs to build the very tech that empowers them." />,
  },
  {
    category: "Step 3: Distribute",
    title: "The Hub",
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    content: <CarouselContent title="Connecting the dots." text="The central nervous system managing knowledge, quality control, and partnerships across the entire ecosystem." />,
  },
];

// 4. Stats Data
const stats = [
  { label: "Members", value: "4,000+", icon: Users },
  { label: "Campuses", value: "40+", icon: SchoolIcon },
  { label: "Prototypes", value: "200+", icon: Lightbulb },
  { label: "Impact Projects", value: "30+", icon: Target },
];

function SchoolIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m4 6 8-4 8 4" />
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
      <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" />
      <path d="M18 5v17" />
      <path d="M6 5v17" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  );
}

export const Home: React.FC = () => {
  const { scrollY } = useScroll();

  const carouselCards = carouselData.map((card, index) => (
    <Card key={index} card={card} index={index} />
  ));

  return (
    <div className="bg-slate-50 min-h-screen font-sans overflow-x-hidden w-full">

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-dot-slate-200 mask-[radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none" />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-160 bg-violet-500/10 blur-[120px] rounded-full pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 right-0 translate-x-1/3 w-120 h-120 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/ecosystem" className="inline-block px-4 py-1.5 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm text-sm font-medium text-slate-600 mb-8 hover:bg-white hover:border-cyan-300 hover:text-cyan-600 transition-all cursor-pointer">
              ✨ Shaping the future of assistive tech
            </Link>
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-6 leading-[0.9]"
          >
            Build for <br />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-cyan-400 to-blue-600 animate-gradient">EveryBody.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-medium"
          >
            We're building a decentralized ecosystem where makers, communities, and innovators collaborate to create affordable, accessible technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/join">
              <ShinyButton text="Join the Ecosystem" />
            </Link>
            <Link to="/products" className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all flex items-center gap-2 group">
              <span className="group-hover:translate-x-0.5 transition-transform">Explore Catalog</span> <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trusted Partners Logo Grid */}
      <section className="max-w-5xl rounded-3xl mt-6 mx-auto pt-6 px-4 pb-6 md:p-8 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-lg text-black font-medium">Our Government Partners</p>
        </motion.div>
        
        {/* Mobile: Scrolling Marquee */}
        <div className="md:hidden mt-8 relative overflow-hidden">
          <div className="animate-scroll-mobile">
            <div className="flex gap-8 items-center">
              <img src="/1.png" alt="Company 1" className="w-40 h-16 object-contain opacity-85 flex-shrink-0" />
              <img src="/2.png" alt="Company 2" className="w-40 h-16 object-contain opacity-85 flex-shrink-0" />
              <img src="/3.png" alt="Company 3" className="w-40 h-16 object-contain opacity-85 flex-shrink-0" />
              <img src="/4.png" alt="Company 4" className="w-40 h-16 object-contain opacity-85 flex-shrink-0" />
              <img src="/5.png" alt="Company 5" className="w-40 h-16 object-contain opacity-85 flex-shrink-0" />
              <img src="/6.png" alt="Company 6" className="w-40 h-16 object-contain opacity-85 flex-shrink-0" />
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex gap-8 items-center">
              <img src="/1.png" alt="Company 1" className="w-40 h-16 object-contain opacity-85 flex-shrink-0" />
              <img src="/2.png" alt="Company 2" className="w-40 h-16 object-contain opacity-85 flex-shrink-0" />
              <img src="/3.png" alt="Company 3" className="w-40 h-16 object-contain opacity-85 flex-shrink-0" />
              <img src="/4.png" alt="Company 4" className="w-40 h-16 object-contain opacity-85 flex-shrink-0" />
              <img src="/5.png" alt="Company 5" className="w-40 h-16 object-contain opacity-85 flex-shrink-0" />
              <img src="/6.png" alt="Company 6" className="w-40 h-16 object-contain opacity-85 flex-shrink-0" />
            </div>
          </div>
        </div>

        {/* Desktop: Static Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden md:flex gap-6 md:gap-10 justify-center mt-8 flex-wrap items-center"
        >
          <img src="/1.png" alt="Company 1" className="w-50 h-20 object-contain opacity-85 hover:opacity-100 transition-opacity" />
          <img src="/2.png" alt="Company 2" className="w-50 h-20 object-contain opacity-85 hover:opacity-100 transition-opacity" />
          <img src="/3.png" alt="Company 3" className="w-50 h-20 object-contain opacity-85 hover:opacity-100 transition-opacity" />
          <img src="/4.png" alt="Company 4" className="w-50 h-20 object-contain opacity-85 hover:opacity-100 transition-opacity" />
          <img src="/5.png" alt="Company 5" className="w-50 h-20 object-contain opacity-85 hover:opacity-100 transition-opacity" />
          <img src="/6.png" alt="Company 6" className="w-50 h-20 object-contain opacity-85 hover:opacity-100 transition-opacity" />
        </motion.div>
      </section>

      {/* 2. Marquee */}
      {/* <section className="py-12 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-slate-900 z-0"></div>
        <div className="relative z-10 ">
          <h2 className="text-center text-white text-2xl font-bold mb-8 opacity-80 ">Innovation in Motion</h2>
          <div className="mx-auto my-10 max-w-7xl rounded-3xl bg-gray-950/5 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
            <ThreeDMarquee images={baseImages} />
          </div>
        </div>
      </section> */}

      {/* 3. The Challenge (Problem) */}
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
              icon={<Globe className="h-4 w-4" style={{ color: '#c95cd5' }} />}
              title="1 Billion+ People"
              description="Over a billion people globally need assistive products. By 2050, this will rise to 2 billion. Yet, only 1 in 10 have access."
            />
            <GridItem
              area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
              icon={<Activity className="h-4 w-4" style={{ color: '#488fe3' }} />}
              title="High Cost Barrier"
              description="Traditional assistive tech is often prohibitively expensive due to import dependencies and lack of local manufacturing."
            />
            <GridItem
              area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
              icon={<Cpu className="h-4 w-4" style={{ color: '#c95cd5' }} />}
              title="Innovation Gap"
              description="A disconnect between academic research and market needs means prototypes rarely reach users."
            />
            <GridItem
              area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
              icon={<Users className="h-4 w-4" style={{ color: '#488fe3' }} />}
              title="Excluded Voices"
              description="PwDs are often excluded from the design process, resulting in products that don't fit real-world needs."
            />
            <GridItem
              area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
              icon={<Zap className="h-4 w-4" style={{ color: '#c95cd5' }} />}
              title="The Opportunity"
              description="By decentralizing production and democratizing design, we can lower costs and increase access for everyone."
            />
          </ul>
        </div>
      </section>

      {/* 4. The Opportunity & Model */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 md:mb-6">From Charity to <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500">Empowerment</span></h2>
              <p className="text-base md:text-lg text-slate-600 mb-4 md:mb-6 leading-relaxed">
                We are shifting the paradigm. Instead of viewing PwDs as passive beneficiaries, we see them as active co-creators and innovators.
              </p>
              <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8 leading-relaxed">
                Our decentralized model connects student innovators with local communities to solve real problems, creating a sustainable ecosystem of affordable assistive technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm md:text-base">
                  <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 shrink-0">1</div>
                  <span>Co-Creation</span>
                </div>
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm md:text-base">
                  <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 shrink-0">2</div>
                  <span>Open Innovation</span>
                </div>
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm md:text-base">
                  <div className="w-8 h-8 rounded-full bg-fuchsia-100 flex items-center justify-center text-fuchsia-600 shrink-0">3</div>
                  <span>Local Production</span>
                </div>
              </div>
            </div>
            <div className="relative mt-8 md:mt-0">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 rounded-2xl md:rounded-3xl blur-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                alt="Collaboration"
                className="relative rounded-2xl md:rounded-3xl shadow-2xl border border-white/20 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Ecosystem Steps (Carousel) */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 pl-8">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Our Ecosystem</h2>
          <p className="text-slate-600 text-lg max-w-2xl mb-8">
            A comprehensive approach to solving the accessibility crisis.
          </p>
        </div>
        <Carousel items={carouselCards} />
      </section>

      {/* 6. Proof of Impact & Real Stories */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] right-[-20%] w-[50%] h-[50%] bg-cyan-500/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-20%] left-[-20%] w-[50%] h-[50%] bg-violet-500/10 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Proof of Impact</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              We are making a tangible difference in the lives of people and the future of technology.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-[2rem] p-8 flex flex-col justify-center items-start h-48 hover:scale-105 transition-transform duration-300 shadow-xl"
              >
                <div className="text-5xl md:text-6xl font-medium tracking-tighter text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-500 font-medium text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Real Stories */}
          {/* Real Stories */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <p className="text-slate-300 italic">
                "Our campus chapter has transformed the way students think about engineering. It's empathy-driven innovation at its finest."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Join Us CTA */}
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
              <Link to="/join" className="px-10 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-cyan-50 transition-colors shadow-lg shadow-cyan-500/25">
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