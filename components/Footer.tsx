import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Social */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black tracking-tighter text-slate-900">
              STRIDE<span className="text-cyan-500">.</span>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
              Transforming Lives Through Inclusive Innovation. Empowering Communities, Advancing Social Impact, and Fostering Sustainability.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.facebook.com/profile.php?id=61573600790828" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-500 hover:bg-white hover:text-cyan-600 transition-all duration-300 border border-slate-200 shadow-sm hover:scale-110 hover:shadow-md">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-500 hover:bg-white hover:text-cyan-600 transition-all duration-300 border border-slate-200 shadow-sm hover:scale-110 hover:shadow-md">
                <Twitter size={18} />
              </a>
              <a href="https://www.linkedin.com/company/105962303" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-500 hover:bg-white hover:text-cyan-600 transition-all duration-300 border border-slate-200 shadow-sm hover:scale-110 hover:shadow-md">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/stride_kdisc/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-500 hover:bg-white hover:text-cyan-600 transition-all duration-300 border border-slate-200 shadow-sm hover:scale-110 hover:shadow-md">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-slate-900 inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-violet-500 after:to-cyan-500 after:rounded-full">Quick Links</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              {[
                { name: 'About STRIDE', path: '/about' },
                { name: 'Our Ecosystem', path: '/ecosystem' },
                { name: 'Product Catalog', path: '/products' },
                { name: 'Community', path: '/community' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'News & Updates', path: '/news' }
              ].map((item, i) => (
                <li key={i}>
                  <Link to={item.path} className="hover:text-cyan-600 transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-2 transition-all duration-300 h-[1px] bg-cyan-50 mr-0 group-hover:mr-2"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-slate-900 inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-cyan-500 after:to-fuchsia-500 after:rounded-full">Get Involved</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              {['Join as Ambassador', 'Become a Speaker', 'Partner With Us', 'Sponsor Projects'].map((item, i) => (
                <li key={i}>
                  <Link to="/get-involved" className="hover:text-fuchsia-600 transition-colors flex items-center group">
                    {item} <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-slate-900 inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-fuchsia-500 after:to-violet-500 after:rounded-full">Contact Us</h3>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-start group">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center mr-3 flex-shrink-0 group-hover:border-violet-500/50 shadow-sm transition-colors">
                  <MapPin className="text-violet-500" size={16} />
                </div>
                <span>Carmel Towers, Vazhuthacaud,<br />Thiruvananthapuram</span>
              </li>
              <li className="flex items-center group">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center mr-3 flex-shrink-0 group-hover:border-cyan-500/50 shadow-sm transition-colors">
                  <Phone className="text-cyan-500" size={16} />
                </div>
                <span>+91 8714611485</span>
              </li>
              <li className="flex items-center group">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center mr-3 flex-shrink-0 group-hover:border-fuchsia-500/50 shadow-sm transition-colors">
                  <Mail className="text-fuchsia-500" size={16} />
                </div>
                <span>stride@kdisc.kerala.gov.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© 2026 STRIDE. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-cyan-600 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-cyan-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};