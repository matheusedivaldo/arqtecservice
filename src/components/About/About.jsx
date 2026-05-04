import styles from './About.module.css';

const About = () => {
    return (
        <section className={styles.about} id="sobre">
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Nossa História e Compromisso</h2>
                    <p className={styles.text}>
                        A <strong>Arqtecservice</strong> nasceu com o objetivo de oferecer soluções completas em infraestrutura e tecnologia. Com vasta experiência no mercado, atuamos com foco em <strong>instalação e manutenção</strong>, garantindo que cada projeto seja executado com máxima segurança e precisão técnica.
                    </p>

                    <div className={styles.highlights}>
                        <div className={styles.item}>
                            <h3>Especialização</h3>
                            <p>Forte atuação na <strong>Indústria Gráfica</strong> e no setor de <strong>Construção Civil</strong>.</p>
                        </div>
                        <div className={styles.item}>
                            <h3>Abrangência</h3>
                            <p>Atendimento completo em toda a <strong>Grande São Paulo</strong>, levando eficiência onde você precisar.</p>
                        </div>
                        <div className={styles.item}>
                            <h3>Equipe Técnica</h3>
                            <p>Trabalhamos com profissionais qualificados para entregar desde elétrica geral até automação de ponta.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.stats}>
                    <div className={styles.statBox}>
                        <span className={styles.number}>+XP</span>
                        <p>Anos de experiência na área</p>
                    </div>
                    <div className={styles.statBox}>
                        <span className={styles.number}>SP</span>
                        <p>Atendimento Regional</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;