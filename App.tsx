import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Ecosystem } from './pages/Ecosystem';
import { Products } from './pages/Products';
import { Community } from './pages/Community';
import { GetInvolved } from './pages/GetInvolved';
import { Gallery } from './pages/Gallery';
import { News } from './pages/News';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { JoinUs } from './pages/JoinUs';
import { Internships } from './pages/Internships';
import { StrideAI } from './components/StrideAI';
import { AccessibilityProvider } from './context/AccessibilityContext';
import { AccessibilityWidget } from './components/AccessibilityWidget';

// ScrollToTop component to ensure pages start at top on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Placeholder for Designathon
const Designathon = () => (
  <div className="h-screen flex items-center justify-center bg-slate-50">
    <div className="text-center">
      <h1 className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600 mb-4">Designathon 2026</h1>
      <p className="text-xl text-slate-600">Coming Soon. Get ready to innovate!</p>
    </div>
  </div>
);

// 404 Not Found page
const NotFound = () => (
  <div className="bg-slate-50 min-h-screen flex items-center justify-center text-slate-900 relative">
    <div className="absolute inset-0 z-0 bg-dot-slate-200 [mask-image:radial-gradient(ellipse_at_top,white,transparent)] pointer-events-none" />

    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-6 leading-[0.9]"
      >
        404
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-blue-600 animate-gradient">Not Found.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-8 leading-relaxed"
      >
        Looks like you've wandered off the beaten path. Even our AI couldn't find this one.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <a href="/" className="inline-block px-8 py-4 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors shadow-lg">
          Take Me Home
        </a>
      </motion.div>
    </div>
  </div>
);

function App() {
  return (
    <AccessibilityProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-slate-50">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/ecosystem" element={<Ecosystem />} />
              <Route path="/products" element={<Products />} />
              <Route path="/community" element={<Community />} />
              <Route path="/get-involved" element={<GetInvolved />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/news" element={<News />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/join" element={<JoinUs />} />
              <Route path="/internships" element={<Internships />} />
              <Route path="/designathon" element={<Designathon />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <StrideAI />
          <AccessibilityWidget />
        </div>
      </Router>
    </AccessibilityProvider>
  );
}

export default App;