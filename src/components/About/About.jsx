import React from 'react';
import styles from './About.module.css';
import { FaBolt, FaCogs, FaSnowflake, FaHardHat } from 'react-icons/fa';

const About = () => {
    return (
        <section className={styles.about} id="sobre">
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.textSide}>
                        <span className={styles.label}>Nossa História</span>
                        <h2 className={styles.title}>
                            Soluções Técnicas com <br />
                            <span className={styles.highlight}>Precisão e Segurança</span>
                        </h2>
                        <p className={styles.description}>
                            Fundada em 2024, a <strong>Arqtecservice</strong> consolidou sua atuação na Grande São Paulo como referência em instalações e manutenção. Unimos expertise técnica para atender as demandas rigorosas da <strong>indústria gráfica e da construção civil</strong>.
                        </p>
                    </div>

                    <div className={styles.gridSide}>
                        <div className={styles.card}>
                            <FaBolt className={styles.icon} />
                            <h3>Elétrica Geral</h3>
                            <p>Projetos e manutenções em sistemas elétricos residenciais, comerciais e industriais.</p>
                        </div>

                        <div className={styles.card}>
                            <FaCogs className={styles.icon} />
                            <h3>Automação</h3>
                            <p>Tecnologia avançada aplicada para controle e eficiência em diversos ambientes.</p>
                        </div>

                        <div className={styles.card}>
                            <FaSnowflake className={styles.icon} />
                            <h3>Climatização</h3>
                            <p>Instalação e manutenção especializada em ar-condicionado do tipo Split.</p>
                        </div>

                        <div className={styles.card}>
                            <FaHardHat className={styles.icon} />
                            <h3>Infraestrutura</h3>
                            <p>Suporte completo para obras de construção civil e parques industriais gráficos.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.statsBar}>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>2024</span>
                        <span className={styles.statLabel}>No Mercado</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>100%</span>
                        <span className={styles.statLabel}>Grande SP</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>Nível</span>
                        <span className={styles.statLabel}>Industrial</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;