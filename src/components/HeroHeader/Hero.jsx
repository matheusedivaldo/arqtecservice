import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroHeader.module.css';
import bannerDesktop from '../../assets/banners/banner-desktop.jpg';
import bannerMobile from '../../assets/banners/banner-mobile.jpg';

const Hero = () => {
    const whatsappUrl = "https://wa.me/5511981200957?text=Olá, vim através do site e gostaria de um orçamento.";

    const handleConversion = () => {
        if (window.gtag) {
            window.gtag('event', 'conversion', {
                send_to: 'AW-17993154847/ym-ECIHAkbYcEJ-C54ND'
            });
        }
    };

    return (
        <section className={styles.wrapper} id="home">
            <div className={styles.hero}>
                <div className={styles.imageLayer}>
                    <img src={bannerDesktop} className={`${styles.bgImage} ${styles.desktopBanner}`} alt="Instalações elétricas e automação Arqtecservice" fetchPriority="high" />
                    <img src={bannerMobile} className={`${styles.bgImage} ${styles.mobileBanner}`} alt="Instalações elétricas e automação Arqtecservice" fetchPriority="high" />
                    <div className={styles.overlay} />
                    <div className={styles.scanlines} />
                </div>

                <div className={styles.content}>
                    <div className={styles.badgeWrap}>
                        <span className={styles.badgeLine} />
                        <span className={styles.badge}>Engenharia &amp; Alta Performance</span>
                        <span className={styles.badgeLine} />
                    </div>

                    <h1 className={styles.title}>
                        <span className={styles.titleTop}>Instalações</span>
                        <span className={styles.titleMain}>Elétrica &amp; Automação</span>
                    </h1>

                    <p className={styles.subtitle}>
                        Especialistas em manutenção industrial e construção civil em toda a Grande São Paulo.
                    </p>

                    <div className={styles.ctaArea}>
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.btnPrimaryPulse}
                            onClick={handleConversion}
                        >
                            Solicitar Orçamento
                        </a>
                        <Link to="/servicos" className={styles.btnSecondary}>Nossos Serviços</Link>
                    </div>
                </div>

                <div className={styles.heroFooter}>
                    <svg className={styles.lightningDivider} viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <polyline
                            points="0,60 600,60 680,10 720,60 760,10 840,60 1440,60"
                            fill="none"
                            stroke="rgba(235,114,45,0.5)"
                            strokeWidth="1"
                        />
                        <polyline
                            points="700,35 720,8 740,35"
                            fill="none"
                            stroke="rgba(235,114,45,1)"
                            strokeWidth="2"
                        />
                        <circle cx="720" cy="8" r="2.5" fill="var(--color-primary)" />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Hero;
