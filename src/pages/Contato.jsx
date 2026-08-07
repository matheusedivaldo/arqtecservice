import React from 'react';
import Contact from '../components/Contact/Contact';
import usePageMeta from '../hooks/usePageMeta';
import styles from './pageSpacer.module.css';

const Contato = () => {
    usePageMeta({
        title: 'Contato | Solicite um Orçamento - Arqtecservice',
        description:
            'Fale com a Arqtecservice pelo WhatsApp, e-mail ou formulário e solicite um orçamento para elétrica, automação e manutenção industrial.',
        path: '/contato',
    });

    return (
        <div className={styles.spacer}>
            <Contact />
        </div>
    );
};

export default Contato;
