import React from 'react';

// Importação dos estilos globais
import './index.css';

// Importação dos Componentes
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Clients from './components/Clients/Clients';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* O Header fica fixo no topo conforme configuramos no CSS Module */}
      <Header />

      <main>
        {/* Seção de Impacto Inicial */}
        <Hero />

        {/* Seção sobre a empresa, história e foco industrial */}
        <About />

        {/* Vitrine de serviços com os cards e ícones do React Icons */}
        <Services />

        {/* Prova social com os logos das empresas atendidas */}
        <Clients />

        {/* Área de conversão e contato direto */}
        <Contact />
      </main>

      {/* Rodapé com informações institucionais e links */}
      <Footer />
    </div>
  );
}

export default App;