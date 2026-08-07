import React from 'react';
import Solutions from '../components/Solutions/Solutions';
import usePageMeta from '../hooks/usePageMeta';
import styles from './pageSpacer.module.css';

const Servicos = () => {
    usePageMeta({
        title: 'Serviços | Elétrica, Automação, CFTV e Infraestrutura - Arqtecservice',
        description:
            'Casa inteligente, controle de acesso, CFTV, automação industrial, iluminação e infraestrutura elétrica. Conheça todas as soluções da Arqtecservice.',
        path: '/servicos',
    });

    return (
        <div className={styles.spacer}>
            <Solutions />
        </div>
    );
};

export default Servicos;
