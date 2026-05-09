import React from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/logos/logo-arqtecservice-monob.svg';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const whatsappUrl = "https://wa.me/5511981200957?text=Olá, vim através do site e gostaria de um orçamento.";

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.brandColumn}>
                        <img src={logo} alt="Arqtecservice" className={styles.logo} />
                        <p className={styles.brandDesc}>
                            Excelência em engenharia, instalações elétricas e automação.
                            Soluções de alta performance para indústrias e construção civil.
                        </p>
                        <div className={styles.socialLinks}>
                            <a href="https://www.instagram.com/arqtecservice_/" target="_blank" rel="noreferrer" className={styles.socialBtn}>
                                <FaInstagram /> @arqtecservice_
                            </a>
                        </div>
                    </div>

                    <div className={styles.linkColumn}>
                        <h3>Navegação</h3>
                        <ul>
                            <li><a href="#home"><FaChevronRight /> Home</a></li>
                            <li><a href="#sobre"><FaChevronRight /> Sobre Nós</a></li>
                            <li><a href="#servicos"><FaChevronRight /> Soluções</a></li>
                            <li><a href="#galeria"><FaChevronRight /> Portfólio</a></li>
                            <li><a href="#contato"><FaChevronRight /> Contato</a></li>
                        </ul>
                    </div>

                    <div className={styles.linkColumn}>
                        <h3>Especialidades</h3>
                        <ul>
                            <li><span><FaChevronRight /> Elétrica Industrial</span></li>
                            <li><span><FaChevronRight /> Automação Residencial</span></li>
                            <li><span><FaChevronRight /> Controle de Acesso</span></li>
                            <li><span><FaChevronRight /> CFTV e Monitoramento</span></li>
                            <li><span><FaChevronRight /> Infraestrutura Civil</span></li>
                        </ul>
                    </div>

                    <div className={styles.contactColumn}>
                        <h3>Atendimento</h3>
                        <a href={whatsappUrl} target="_blank" rel="noreferrer" className={styles.contactItem}>
                            <FaWhatsapp /> <span>11 98120-0957</span>
                        </a>
                        <a href="mailto:contato.arqtecservice@gmail.com" className={styles.contactItem}>
                            <FaEnvelope /> <span>contato.arqtecservice@gmail.com</span>
                        </a>
                        <div className={styles.contactItem}>
                            <FaMapMarkerAlt /> <span>Osasco - São Paulo</span>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.bottomContent}>
                        <div className={styles.copyright}>
                            © {currentYear} <strong>Arqtecservice</strong>. Todos os direitos reservados.
                        </div>
                        <div className={styles.developer}>
                            Desenvolvido por <a href="https://matheusedivaldo.com.br/" target="_blank" rel="noreferrer">Matheus Edivaldo</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;