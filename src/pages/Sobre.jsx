import React from 'react';
import About from '../components/About/About';
import usePageMeta from '../hooks/usePageMeta';
import styles from './pageSpacer.module.css';

const Sobre = () => {
    usePageMeta({
        title: 'Sobre a Arqtecservice | Engenharia Elétrica e Automação em SP',
        description:
            'Conheça a Arqtecservice: engenharia elétrica, automação e manutenção industrial com equipe qualificada NR, atuando na Grande São Paulo e Interior desde 2024.',
        path: '/sobre',
    });

    return (
        <div className={styles.spacer}>
            <About />
        </div>
    );
};

export default Sobre;
