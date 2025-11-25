import React from 'react';
import { TextReveal } from '../components/ui/text-reveal';
import { Marquee } from '../components/ui/marquee';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: "STRIDE Launches Smart Cane V2",
    date: "March 15, 2024",
    category: "Product Launch",
    excerpt: "The new Smart Cane features advanced obstacle detection and haptic feedback, revolutionizing mobility for the visually impaired.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" // Tech innovation
  },
  {
    id: 2,
    title: "Partnership with MIT Innovation Lab",
    date: "March 10, 2024",
    category: "Collaboration",
    excerpt: "A strategic partnership to foster cross-border innovation in assistive technology design and manufacturing.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop" // Meeting/Handshake context
  },
  {
    id: 3,
    title: "Designathon 2024 Winners Announced",
    date: "February 28, 2024",
    category: "Events",
    excerpt: "Team 'Visionary' takes home the grand prize with their affordable braille display prototype.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop" // People celebrating/presenting
  },
  {
    id: 4,
    title: "New Manufacturing Hub in Kochi",
    date: "February 15, 2024",
    category: "Expansion",
    excerpt: "Expanding our footprint with a state-of-the-art facility employing over 50 PwDs.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" // Factory/Lab interior
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
    <div className="p-8 flex flex-col flex-grow">
      <div className="flex items-center text-slate-500 text-sm mb-4 gap-2">
        <Calendar size={14} /> {item.date}
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-cyan-600 transition-colors">{item.title}</h3>
      <p className="text-slate-600 mb-6 leading-relaxed flex-grow">{item.excerpt}</p>
      <button className="text-slate-900 font-bold flex items-center gap-2 group/btn">
        Read Full Story <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </div>
  </div>
);

export const News: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Intro with Text Reveal */}
      <section className="bg-white pt-32">
        <TextReveal className="h-[200vh]">
          Staying ahead of the curve. Delivering the latest updates from the world of inclusive innovation.
        </TextReveal>
      </section>

      {/* Breaking News Ticker */}
      <section className="bg-slate-900 py-4 border-y border-slate-800">
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
      </section>

      {/* News Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-4xl font-black text-slate-900">Latest <span className="text-cyan-500">News</span></h2>
          <div className="hidden md:flex gap-2">
            {['All', 'Product', 'Events', 'Press'].map((filter) => (
              <button key={filter} className="px-4 py-2 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-100 text-sm font-medium transition-colors focus:bg-slate-900 focus:text-white focus:border-slate-900">
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Never Miss an Update</h2>
            <p className="text-violet-100 text-lg mb-10 max-w-xl mx-auto">Subscribe to our newsletter to get the latest news, product releases, and community stories delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="Enter your email" className="flex-grow px-6 py-4 rounded-full text-slate-900 focus:outline-none focus:ring-4 focus:ring-white/30" />
              <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition shadow-lg" onClick={() => alert("Subscribed!")}>Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};