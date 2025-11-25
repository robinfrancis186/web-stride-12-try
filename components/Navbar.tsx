import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Ecosystem', path: '/ecosystem' },
    { name: 'Products', path: '/products' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'News', path: '/news' },
    { name: 'Community', path: '/community' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 flex justify-center ${scrolled ? 'pt-4' : 'pt-6'
        }`}
    >
      <div
        className={`w-full max-w-7xl mx-4 rounded-2xl px-6 transition-all duration-300 ${scrolled
          ? 'bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl shadow-slate-200/50 py-3'
          : 'bg-transparent py-4'
          }`}
      >
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-black tracking-tighter group flex items-center gap-2">
              <img src="/stride-logo.png" alt="STRIDE Logo" className="h-12 w-auto" />
              <span className={`transition-colors ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>STRIDE</span>
              <span className="text-cyan-500 group-hover:text-fuchsia-500 transition-colors">.</span>
            </Link>
          </div>

          <div className={`hidden lg:flex space-x-1 items-center rounded-full px-2 py-1 ${scrolled ? '' : 'bg-white/30 backdrop-blur-sm border border-white/40'}`}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative px-3 py-2 rounded-full text-sm font-medium transition-all duration-300"
              >
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-slate-900/5 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={`${location.pathname === link.path
                  ? 'text-cyan-600 font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
                  }`}>
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link to="/get-involved" className={`font-semibold text-sm transition-colors ${scrolled ? 'text-slate-900 hover:text-cyan-600' : 'text-slate-900 hover:text-cyan-600'}`}>
              Contact
            </Link>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-800 hover:text-cyan-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-xl border border-white/40 rounded-2xl shadow-2xl overflow-hidden z-50 lg:hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${location.pathname === link.path
                    ? 'bg-gradient-to-r from-violet-50 to-fuchsia-50 text-violet-700 border border-violet-100'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/get-involved"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};