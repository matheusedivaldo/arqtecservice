import React from 'react';
import PageBanner from '../components/PageBanner/PageBanner';
import Solutions from '../components/Solutions/Solutions';
import usePageMeta from '../hooks/usePageMeta';

const Servicos = () => {
    usePageMeta({
        title: 'Serviços | Elétrica, Automação, CFTV e Infraestrutura - Arqtecservice',
        description:
            'Casa inteligente, controle de acesso, CFTV, automação industrial, iluminação e infraestrutura elétrica. Conheça todas as soluções da Arqtecservice.',
        path: '/servicos',
    });

    return (
        <>
            <PageBanner
                eyebrow="O Que Fazemos"
                title="Nossos Serviços"
                subtitle="Soluções completas em engenharia elétrica, automação e infraestrutura para indústria e construção civil."
            />
            <Solutions />
        </>
    );
};

export default Servicos;
