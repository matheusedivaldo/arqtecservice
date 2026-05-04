import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero} id="home">
            <div className={styles.container}>
                <div className={styles.content}>
                    <span className={styles.badge}>Atendimento em toda grande São Paulo</span>
                    <h1 className={styles.title}>
                        Soluções Inteligentes em <span>Elétrica</span> e <span>Automação</span>
                    </h1>
                    <p className={styles.description}>
                        Especialistas em instalações elétricas, manutenção de ar-condicionado e sistemas de automação para residências, comércios e indústrias gráficas.
                    </p>
                    <div className={styles.actions}>
                        <a href="#servicos" className={styles.btnPrimary}>Conhecer Serviços</a>
                        <a href="https://wa.me/seunumerohere" className={styles.btnSecondary}>Solicitar Orçamento</a>
                    </div>
                </div>

                <div className={styles.visual}>
                    {/* Aqui você pode colocar uma imagem de alta qualidade ou um gráfico tecnológico */}
                    <div className={styles.imagePlaceholder}>
                        {/* Sugestão: Uma foto de um painel elétrico moderno ou uma casa inteligente */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;