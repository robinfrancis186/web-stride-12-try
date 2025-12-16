import React, { useState } from 'react';
import { TextReveal } from '../components/ui/text-reveal';
import { Marquee } from '../components/ui/marquee';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { title } from 'process';
import { image } from 'framer-motion/client';

const newsItems = [
  {
    id: 1,
    title: "STRIDE Forward – Dialogues for Inclusive Innovation",
    date: "October 29, 2025",
    category: "STRIDE Forward",
    excerpt: "Looking for inspiration to build technology that truly makes a difference? Join us for an empowering session with Robin Kanattu Thomas, Founder & CEO of Astrek Innovations, as he shares his journey in developing human-centered assistive technologies that redefine mobility and independence. “The Startup Journey Behind Human-Centered Technology”. Date: 31 October 2025",
    image: "news1.webp" // Tech innovation
  },
  {
    id: 2,
    title: "STRIDE Forward – Dialogues for Inclusive Innovation",
    date: "November 27, 2025",
    category: "STRIDE Forward",
    excerpt: "Join us for an empowering session with Dr. Raheemudheen PK , Clinical Psychologist, Dept. of Health Services, Govt. of Kerala, and also the creator of the Behaviour Vaccine model used widely to promote student well-being. \"Understanding Neurodevelopmental Disorders: Current Trends\". Date: 29 November 2025",
    image: "news2.webp" // Meeting/Handshake context
  },
  {
    id: 3,
    title: "STRIDE Forward – Expert Talk Series",
    date: "19 December 2025",
    category: "STRIDE Forward",
    excerpt: "Join us for an engaging expert session exploring how social entrepreneurship addresses complex social challenges through innovative, sustainable, and impact-driven solutions.\"Social Entrepreneurship: Building Sustainable Solutions for Social Problems.\" Date: 19 December 2025",
    image: "news3.webp"
  }
];

const NewsCard: React.FC<{ item: any }> = ({ item }) => (
  <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
    <div className="h-64 overflow-hidden relative">
      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 flex items-center gap-1 shadow-sm">
        <Tag size={12} className="text-cyan-500" /> {item.category}
      </div>
    </div>
    <div className="p-8 flex flex-col grow">
      <div className="flex items-center text-slate-500 text-sm mb-4 gap-2">
        <Calendar size={14} /> {item.date}
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-cyan-600 transition-colors">{item.title}</h3>
      <p className="text-slate-600 mb-6 leading-relaxed grow">{item.excerpt}</p>
      <button className="text-slate-900 font-bold flex items-center gap-2 group/btn">
        Read Full Story <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </div>
  </div>
);

export const News: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const FILTERS = ['All', 'Community', 'Notifications', 'STRIDE Forward'];

  const FILTER_MAP: Record<string, (category: string) => boolean> = {
    All: () => true,
    Community: (category: string) => {
      const c = category.toLowerCase();
      return c.includes('community');
    },
    Notifications: (category: string) => {
      const c = category.toLowerCase();
      return c.includes('notification');
    },
    'STRIDE Forward': (category: string) => {
      const c = category.toLowerCase();
      return c.includes('stride');
    },
  };

  const filteredNews = newsItems.filter((item) => {
    const matcher = FILTER_MAP[filter] ?? FILTER_MAP.All;
    return matcher(item.category);
  });

  return (
    <div className="bg-slate-50 min-h-screen pt-10">

      {/* Intro with Text Reveal */}
      {/* <section className="bg-white pt-32">
        <TextReveal className="h-[200vh]">
          Staying ahead of the curve. Delivering the latest updates from the world of inclusive innovation.
        </TextReveal>
      </section> */}

      {/* Breaking News Ticker */}
      {/* <section className="bg-slate-900 py-4 border-y border-slate-800">
        <Marquee pauseOnHover className="[--duration:20s]">
          <span className="text-white mx-8 font-medium flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> BREAKING: Smart Cane V2 now available for pre-order</span>
          <span className="text-slate-400 mx-8">|</span>
          <span className="text-white mx-8 font-medium">Designathon 2026 Registration Opens Soon</span>
          <span className="text-slate-400 mx-8">|</span>
          <span className="text-white mx-8 font-medium">New Partnership with IIT Madras Announced</span>
          <span className="text-slate-400 mx-8">|</span>
          <span className="text-white mx-8 font-medium">STRIDE featured in National Innovation Report</span>
          <span className="text-slate-400 mx-8">|</span>
        </Marquee>
      </section> */}

      {/* News Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-4xl font-black text-slate-900 pl-1 md:pl-0">Latest <span className="text-cyan-500">News</span></h2>
            <div className="hidden md:flex gap-2">
              {FILTERS.map((f) => {
                const active = filter === f;
                const className = `px-4 py-2 rounded-full border text-sm font-medium transition-colors ${active ? 'bg-slate-900 text-white border-slate-900' : 'border-slate-200 text-slate-600 hover:bg-slate-100'}`;
                return (
                  <button
                    key={f}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setFilter(f)}
                    className={className}
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile filters: horizontally scrollable chips */}
          <div className="md:hidden -mx-4 overflow-x-auto py-2">
            <div className="flex gap-3 px-4">
              {FILTERS.map((f) => {
                const active = filter === f;
                const className = `px-4 py-2 rounded-full whitespace-nowrap border text-sm font-medium ${active ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200'}`;
                return (
                  <button
                    key={f}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setFilter(f)}
                    className={className}
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredNews.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-linear-to-r from-violet-600 to-fuchsia-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Never Miss an Update</h2>
            <p className="text-violet-100 text-lg mb-10 max-w-xl mx-auto">Subscribe to our newsletter to get the latest news, product releases, and community stories delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="Enter your email" className="grow px-6 py-4 rounded-full text-black bg-white focus:outline-none focus:ring-4 focus:ring-white/30" />
              <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition shadow-lg" onClick={() => alert("Subscribed!")}>Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};