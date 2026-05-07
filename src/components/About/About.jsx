import React, { useEffect, useRef } from 'react';
import styles from './About.module.css';
import aboutImg from '../../assets/banners/banner02.jpg';

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.about} id="sobre" ref={sectionRef}>
            <div className={styles.container}>
                <div className={styles.mainGrid}>
                    <div className={styles.textSide}>
                        <div className={styles.header}>
                            <span className={styles.label}>Nossa Identidade</span>
                            <h2 className={styles.title}>
                                Engenharia que <br />
                                <span className={styles.highlight}>Transforma Projetos</span>
                            </h2>
                        </div>

                        <p className={styles.description}>
                            Desde 2024, a <strong>Arqtecservice</strong> redefine o padrão de manutenção técnica. Focamos na convergência entre a <strong>rigidez industrial gráfica</strong> e a <strong>dinâmica da construção civil</strong> em larga escala.
                        </p>

                        <div className={styles.pillars}>
                            <div className={styles.pillar}>
                                <span className={styles.pillarNum}>01</span>
                                <div>
                                    <h4>Qualificação NR</h4>
                                    <p>Equipe preparada para operações de alto risco e complexidade técnica.</p>
                                </div>
                            </div>
                            <div className={styles.pillar}>
                                <span className={styles.pillarNum}>02</span>
                                <div>
                                    <h4>Precisão Técnica</h4>
                                    <p>Diagnósticos assertivos que otimizam o tempo e reduzem custos operacionais.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.visualSide}>
                        <div className={styles.imageFrame}>
                            <div className={styles.blueprintOverlay} />
                            <img src={aboutImg} alt="Engenharia Arqtecservice" className={styles.image} />
                            <div className={styles.experienceCard}>
                                <span className={styles.expYears}>Expertise</span>
                                <span className={styles.expText}>Industrial & Civil</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.statsGrid}>
                    <div className={styles.statBox}>
                        <h3 className={styles.statValue}>2024</h3>
                        <p className={styles.statLabel}>Fundação em SP</p>
                    </div>
                    <div className={styles.statBox}>
                        <h3 className={styles.statValue}>100%</h3>
                        <p className={styles.statLabel}>Grande SP & Interior</p>
                    </div>
                    <div className={styles.statBox}>
                        <h3 className={styles.statValue}>24h</h3>
                        <p className={styles.statLabel}>Suporte Técnico</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;