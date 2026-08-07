import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroHeader.module.css';
import logo from '../../assets/logos/logo-arqtecservice-monob.svg';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const whatsappUrl = "https://wa.me/5511981200957?text=Olá, vim através do site e gostaria de um orçamento.";

    const handleConversion = () => {
        if (window.gtag) {
            window.gtag('event', 'conversion', {
                send_to: 'AW-17993154847/ym-ECIHAkbYcEJ-C54ND'
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(prev => {
            document.body.style.overflow = !prev ? 'hidden' : 'auto';
            return !prev;
        });
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.topBar}>
                <div className={styles.container}>
                    <div className={styles.contactInfo}>
                        <a href="mailto:contato.arqtecservice@gmail.com" className={styles.topLink}>
                            <FaEnvelope /> contato.arqtecservice@gmail.com
                        </a>
                        <a href={whatsappUrl} target="_blank" rel="noreferrer" className={styles.topLink}>
                            <FaPhoneAlt /> 11 98120-0957
                        </a>
                    </div>
                    <div className={styles.socialIcons}>
                        <a href="https://www.instagram.com/arqtecservice_/" target="_blank" rel="noreferrer" className={styles.topLink}>
                            <FaInstagram size={14} />
                        </a>
                        <a href={whatsappUrl} target="_blank" rel="noreferrer" className={styles.topLink}>
                            <FaWhatsapp size={14} />
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.navDivider}>
                <svg viewBox="0 0 1440 12" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="0,0 340,0 380,12 420,0 1440,0" fill="none" stroke="rgba(235,114,45,0.35)" strokeWidth="1" />
                </svg>
            </div>

            <nav className={styles.mainNav}>
                <div className={styles.container}>
                    <Link to="/" onClick={closeMenu}>
                        <img src={logo} alt="Arqtecservice" className={styles.logo} />
                    </Link>

                    <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navActive : ''}`}>
                        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                        <li><Link to="/sobre" onClick={closeMenu}>Sobre</Link></li>
                        <li><Link to="/servicos" onClick={closeMenu}>Serviços</Link></li>
                        <li><Link to="/galeria" onClick={closeMenu}>Portfólio</Link></li>
                        <li><Link to="/contato" onClick={closeMenu}>Contato</Link></li>
                        <li className={styles.mobileOnly}>
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noreferrer"
                                className={styles.btnPrimaryPulse}
                                onClick={handleConversion}
                            >
                                Solicitar Orçamento
                            </a>
                        </li>
                    </ul>

                    <button className={styles.hamburger} onClick={toggleMenu} aria-label="Menu">
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
