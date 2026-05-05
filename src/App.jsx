import React from 'react';
import './index.css';
import About from './components/About/About';
import Services from './components/Services/Services';
import Clients from './components/Clients/Clients';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import HeroHeader from './components/HeroHeader/HeroHeader';

function App() {
  return (
    <div className="App">
      <HeroHeader />
      <main>
        <About />
        <Services />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;