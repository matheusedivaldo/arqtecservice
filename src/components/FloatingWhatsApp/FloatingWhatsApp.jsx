import React from 'react';
import styles from './FloatingWhatsApp.module.css';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
    const whatsappUrl = "https://wa.me/5511981200957?text=Olá!%20Estou%20no%20site%20da%20Arqtecservice%20e%20gostaria%20de%20solicitar%20um%20orçamento.";

    return (
        <div className={styles.container}>
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.button}
            >
                <div className={styles.tooltip}>Fale Conosco</div>
                <div className={styles.iconWrapper}>
                    <FaWhatsapp size={32} />
                </div>
            </a>
        </div>
    );
};

export default FloatingWhatsApp;