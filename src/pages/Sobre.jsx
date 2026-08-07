import React from 'react';
import PageBanner from '../components/PageBanner/PageBanner';
import About from '../components/About/About';
import usePageMeta from '../hooks/usePageMeta';

const Sobre = () => {
    usePageMeta({
        title: 'Sobre a Arqtecservice | Engenharia Elétrica e Automação em SP',
        description:
            'Conheça a Arqtecservice: engenharia elétrica, automação e manutenção industrial com equipe qualificada NR, atuando na Grande São Paulo e Interior desde 2024.',
        path: '/sobre',
    });

    return (
        <>
            <PageBanner
                eyebrow="Quem Somos"
                title="Sobre a Arqtecservice"
                subtitle="Engenharia que une rigidez técnica industrial à dinâmica da construção civil."
            />
            <About />
        </>
    );
};

export default Sobre;
