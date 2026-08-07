import React from 'react';
import PageBanner from '../components/PageBanner/PageBanner';
import Gallery from '../components/Gallery/Gallery';
import usePageMeta from '../hooks/usePageMeta';

const Galeria = () => {
    usePageMeta({
        title: 'Portfólio de Projetos | Arqtecservice',
        description:
            'Veja projetos realizados pela Arqtecservice em instalações elétricas, automação industrial, quadros de comando e infraestrutura técnica.',
        path: '/galeria',
    });

    return (
        <>
            <PageBanner
                eyebrow="Projetos Realizados"
                title="Nosso Portfólio"
                subtitle="Projetos reais executados em indústrias, comércios e obras civis na Grande São Paulo."
            />
            <Gallery />
        </>
    );
};

export default Galeria;
