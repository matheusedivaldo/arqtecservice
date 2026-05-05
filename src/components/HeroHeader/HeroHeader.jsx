import React, { useState, useEffect } from 'react';
import styles from './HeroHeader.module.css';
import logo from '../../assets/logos/logo-arqtecservice-monob.svg';
import banner from '../../assets/banners/banner01.webp';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';

const HeroHeader = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const whatsappUrl = "https://wa.me/5511981200957?text=Olá,%20vim%20através%20do%20site%20e%20gostaria%20de%20saber%20mais%20detalhes.%20Quero%20solicitar%20um%20orçamento!";
    const instagramUrl = "https://www.instagram.com/arqtecservice_/";

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <section className={styles.wrapper} id="home">
            <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
                <div className={styles.topBar}>
                    <div className={styles.container}>
                        <div className={styles.contactInfo}>
                            <a href="mailto:arqtecservice@gmail.com" className={styles.topLink}>
                                <FaEnvelope /> arqtecservice@gmail.com
                            </a>
                            <a href={whatsappUrl} target="_blank" rel="noreferrer" className={styles.topLink}>
                                <FaPhoneAlt /> 11 98120-0957
                            </a>
                        </div>
                        <div className={styles.socialIcons}>
                            <a href={instagramUrl} target="_blank" rel="noreferrer" className={styles.topLink}>
                                <FaInstagram size={18} />
                            </a>
                            <a href={whatsappUrl} target="_blank" rel="noreferrer" className={styles.topLink}>
                                <FaWhatsapp size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                <nav className={styles.mainNav}>
                    <div className={styles.container}>
                        <img src={logo} alt="Arqtecservice" className={styles.logo} />
                        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Menu">
                            {isMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navActive : ''}`}>
                            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                            <li><a href="#sobre" onClick={toggleMenu}>Sobre</a></li>
                            <li><a href="#servicos" onClick={toggleMenu}>Serviços</a></li>
                            <li><a href="#contato" onClick={toggleMenu}>Contato</a></li>
                        </ul>
                    </div>
                </nav>
            </header>

            <div className={styles.hero}>
                <img src={banner} className={styles.bgImage} alt="Instalações Arqtecservice" />
                <div className={styles.overlay}></div>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>
                            <span className={styles.titleTop}>Instalações</span>
                            <span className={styles.titleMain}>Elétrica & Automação</span>
                        </h1>
                        <p className={styles.subtitle}>
                            Manutenção e instalação especializada para indústria gráfica e construção civil em toda a Grande São Paulo.
                        </p>
                        <div className={styles.ctaArea}>
                            <a href={whatsappUrl} target="_blank" rel="noreferrer" className={styles.btnPrimary}>
                                Solicitar Orçamento
                            </a>
                            <a href="#servicos" className={styles.btnSecondary}>
                                Nossos Serviços
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroHeader;