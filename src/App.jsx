import React from 'react';
import './index.css';
import About from './components/About/About';
import Solutions from './components/Solutions/Solutions';
import Footer from './components/Footer/Footer';
import HeroHeader from './components/HeroHeader/HeroHeader';
import FloatingWhatsApp from './components/FloatingWhatsApp/FloatingWhatsApp';

function App() {
  return (
    <div className="App">
      <HeroHeader />
      <main>
        <About />
        <Solutions />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}

export default App;