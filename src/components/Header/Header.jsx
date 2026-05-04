import styles from './Header.module.css';
import logo from '../../assets/logos/logo-arqtecservice.svg'; // Usando o logo original

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="Arqtecservice Logo" className={styles.logo} />
                </div>

                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li><a href="#home">Início</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#servicos">Serviços</a></li>
                        <li><a href="#clientes">Clientes</a></li>
                    </ul>
                </nav>

                <div className={styles.cta}>
                    <a href="https://wa.me/seunumeroaqui" target="_blank" rel="noreferrer" className={styles.btnContact}>
                        Fale Conosco
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;