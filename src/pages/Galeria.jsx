import React from 'react';
import Gallery from '../components/Gallery/Gallery';
import usePageMeta from '../hooks/usePageMeta';
import styles from './pageSpacer.module.css';

const Galeria = () => {
    usePageMeta({
        title: 'Portfólio de Projetos | Arqtecservice',
        description:
            'Veja projetos realizados pela Arqtecservice em instalações elétricas, automação industrial, quadros de comando e infraestrutura técnica.',
        path: '/galeria',
    });

    return (
        <div className={styles.spacer}>
            <Gallery />
        </div>
    );
};

export default Galeria;
