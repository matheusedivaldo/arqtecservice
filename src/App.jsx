import React from 'react';
import './index.css';
import HeroHeader from './components/HeroHeader/HeroHeader';
import About from './components/About/About';
import Solutions from './components/Solutions/Solutions';
import Partners from './components/Partners/Partners';
import Gallery from './components/Gallery/Gallery';
import FloatingWhatsApp from './components/FloatingWhatsApp/FloatingWhatsApp';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <HeroHeader />
      <main>
        <About />
        <Solutions />
        <Partners />
        <Gallery />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}

export default App;