import styles from './Contact.module.css';
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    return (
        <section className={styles.contact} id="contato">
            <div className={styles.container}>
                <div className={styles.info}>
                    <h2 className={styles.title}>Vamos tirar seu projeto do papel?</h2>
                    <p className={styles.description}>
                        Entre em contato para solicitar um orçamento ou tirar dúvidas sobre nossas soluções em elétrica e automação.
                    </p>

                    <div className={styles.contactList}>
                        <div className={styles.contactItem}>
                            <div className={styles.iconBox}><FaEnvelope /></div>
                            <div>
                                <h4>E-mail</h4>
                                <p>Arqtecservice@gmail.com</p>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <div className={styles.iconBox}><FaMapMarkerAlt /></div>
                            <div>
                                <h4>Área de Atendimento</h4>
                                <p>Toda a Grande São Paulo</p>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <div className={styles.iconBox}><FaWhatsapp /></div>
                            <div>
                                <h4>WhatsApp</h4>
                                <p>Clique no botão ao lado para conversar</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.formCard}>
                    <h3 className={styles.formTitle}>Envie uma mensagem</h3>
                    <form className={styles.form}>
                        <input type="text" placeholder="Seu Nome" className={styles.input} required />
                        <input type="email" placeholder="Seu E-mail" className={styles.input} required />
                        <input type="text" placeholder="Assunto" className={styles.input} required />
                        <textarea placeholder="Como podemos ajudar?" className={styles.textarea} required></textarea>
                        <button type="submit" className={styles.btnSubmit}>Enviar Mensagem</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;