import styles from './Footer.module.css';
import logoBranco from '../../assets/logos/logo-arqtecservice-monob.svg';
import { FaInstagram, FaFacebook, FaLinkedin, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <img src={logoBranco} alt="Arqtecservice Logo" className={styles.logo} />
                    <p className={styles.brandText}>
                        Soluções inovadoras em automação e elétrica para sua residência ou empresa. Atendimento especializado em toda a Grande São Paulo.
                    </p>
                    <div className={styles.socials}>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaLinkedin /></a>
                    </div>
                </div>

                <div className={styles.column}>
                    <h3 className={styles.title}>Navegação</h3>
                    <ul className={styles.links}>
                        <li><a href="#home">Início</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#servicos">Serviços</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3 className={styles.title}>Serviços</h3>
                    <ul className={styles.links}>
                        <li>Elétrica em Geral</li>
                        <li>Automação Residencial</li>
                        <li>Indústria Gráfica</li>
                        <li>Ar-Condicionado</li>
                    </ul>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <div className={styles.bottomContainer}>
                    <p>&copy; 2026 Arqtecservice. Todos os direitos reservados.</p>
                    <button onClick={scrollToTop} className={styles.btnTop}>
                        Voltar ao topo <FaArrowUp />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;