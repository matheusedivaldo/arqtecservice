import React, { useState, useEffect } from 'react';
import styles from './HeroHeader.module.css';
import logo from '../../assets/logos/logo-arqtecservice-monob.svg';
import bannerDesktop from '../../assets/banners/banner-desktop.jpg';
import bannerMobile from '../../assets/banners/banner-mobile.jpg';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';

const HeroHeader = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const whatsappUrl = "https://wa.me/5511981200957?text=Olá, vim através do site e gostaria de um orçamento.";

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = 'auto';
    };

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
                            <a href="https://www.instagram.com/arqtecservice_/" target="_blank" rel="noreferrer" className={styles.topLink}><FaInstagram size={16} /></a>
                            <a href={whatsappUrl} target="_blank" rel="noreferrer" className={styles.topLink}><FaWhatsapp size={16} /></a>
                        </div>
                    </div>
                </div>

                <nav className={styles.mainNav}>
                    <div className={styles.container}>
                        <img src={logo} alt="Arqtecservice" className={styles.logo} />

                        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navActive : ''}`}>
                            <li><a href="#home" onClick={closeMenu}>Home</a></li>
                            <li><a href="#sobre" onClick={closeMenu}>Sobre</a></li>
                            <li><a href="#servicos" onClick={closeMenu}>Serviços</a></li>
                            <li><a href="#contato" onClick={closeMenu}>Contato</a></li>
                            <li className={styles.mobileOnly}>
                                <a href={whatsappUrl} target="_blank" rel="noreferrer" className={styles.btnPrimaryPulse}>Solicitar Orçamento</a>
                            </li>
                        </ul>

                        <button className={styles.hamburger} onClick={toggleMenu}>
                            {isMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </nav>
            </header>

            <div className={styles.hero}>
                <div className={styles.imageLayer}>
                    <img src={bannerDesktop} className={`${styles.bgImage} ${styles.desktopBanner}`} alt="Instalações" />
                    <img src={bannerMobile} className={`${styles.bgImage} ${styles.mobileBanner}`} alt="Instalações" />
                    <div className={styles.overlay}></div>
                </div>

                <div className={styles.content}>
                    <div className={styles.animGroup1}>
                        <span className={styles.badge}>Engenharia & Alta Performance</span>
                    </div>

                    <h1 className={styles.title}>
                        <span className={styles.titleTop}>Instalações</span>
                        <span className={styles.titleMain}>Elétrica & Automação</span>
                    </h1>

                    <p className={styles.subtitle}>
                        Especialistas em manutenção industrial e construção civil em toda a Grande São Paulo.
                    </p>

                    <div className={styles.ctaArea}>
                        <a href={whatsappUrl} target="_blank" rel="noreferrer" className={styles.btnPrimaryPulse}>Solicitar Orçamento</a>
                        <a href="#servicos" className={styles.btnSecondary}>Nossos Serviços</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroHeader;