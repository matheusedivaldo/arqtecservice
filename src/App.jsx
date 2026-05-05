import React from 'react';
import './index.css';
import About from './components/About/About';
import Solutions from './components/Solutions/Solutions';
import Clients from './components/Clients/Clients';
import Contact from './components/Contact/Contact';
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
        {/* <Clients /> */}
        {/* <Contact /> */}
      </main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}

export default App;