import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AccessibilityProvider } from './context/AccessibilityContext';

// Lazy load all pages for code splitting
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Ecosystem = lazy(() => import('./pages/Ecosystem').then(m => ({ default: m.Ecosystem })));
const Products = lazy(() => import('./pages/Products').then(m => ({ default: m.Products })));
const Community = lazy(() => import('./pages/Community').then(m => ({ default: m.Community })));
const GetInvolved = lazy(() => import('./pages/GetInvolved').then(m => ({ default: m.GetInvolved })));
const Gallery = lazy(() => import('./pages/Gallery').then(m => ({ default: m.Gallery })));
const Media = lazy(() => import('./pages/Media').then(m => ({ default: m.Media })));
const News = lazy(() => import('./pages/News').then(m => ({ default: m.News })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const TermsOfService = lazy(() => import('./pages/TermsOfService').then(m => ({ default: m.TermsOfService })));
const JoinUs = lazy(() => import('./pages/JoinUs').then(m => ({ default: m.JoinUs })));
const Internships = lazy(() => import('./pages/Internships').then(m => ({ default: m.Internships })));

// Lazy load heavy components
const StrideAI = lazy(() => import('./components/StrideAI').then(m => ({ default: m.StrideAI })));
const AccessibilityWidget = lazy(() => import('./components/AccessibilityWidget').then(m => ({ default: m.AccessibilityWidget })));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-slate-200 border-t-slate-900 rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-slate-600 font-medium">Loading...</p>
    </div>
  </div>
);

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
      <h1 className="text-6xl font-black bg-clip-text text-transparent bg-linear-to-r from-violet-600 to-fuchsia-600 mb-4">Designathon 2026</h1>
      <p className="text-xl text-slate-600">Coming Soon. Get ready to innovate!</p>
    </div>
  </div>
);

// 404 Not Found page
const NotFound = () => (
  <div className="bg-slate-50 min-h-screen flex items-center justify-center text-slate-900 relative">
    <div className="absolute inset-0 z-0 bg-dot-slate-200 mask-[radial-gradient(ellipse_at_top,white,transparent)] pointer-events-none" />

    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-6 leading-[0.9]"
      >
        404
        <br />
        <span className="text-transparent bg-clip-text bg-linear-to-b from-cyan-400 to-blue-600 animate-gradient">Not Found.</span>
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
          <main className="grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/ecosystem" element={<Ecosystem />} />
                <Route path="/products" element={<Products />} />
                <Route path="/community" element={<Community />} />
                <Route path="/get-involved" element={<GetInvolved />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/media" element={<Media />} />
                <Route path="/news" element={<News />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/join" element={<JoinUs />} />
                <Route path="/internships" element={<Internships />} />
                <Route path="/designathon" element={<Designathon />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <Suspense fallback={null}>
            <StrideAI />
            <AccessibilityWidget />
          </Suspense>
        </div>
      </Router>
    </AccessibilityProvider>
  );
}

export default App;