import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

function App() {
  return (
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
          </Routes>
        </main>
        <Footer />
        <StrideAI />
      </div>
    </Router>
  );
}

export default App;