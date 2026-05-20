import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import './index.css';

import HeroHeader from './components/HeroHeader/HeroHeader';
import About from './components/About/About';
import Solutions from './components/Solutions/Solutions';
import Partners from './components/Partners/Partners';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp/FloatingWhatsApp';
import Footer from './components/Footer/Footer';

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace('/', '');

    if (!path) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    const element = document.getElementById(path);

    if (element) {
      setTimeout(() => {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    }
  }, [location]);

  return (
    <div className="App">
      <HeroHeader />

      <main>
        <About />
        <Solutions />
        <Partners />
        <Gallery />
        <Contact />
      </main>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sobre" element={<HomePage />} />
      <Route path="/servicos" element={<HomePage />} />
      <Route path="/contato" element={<HomePage />} />
    </Routes>
  );
}

export default App;