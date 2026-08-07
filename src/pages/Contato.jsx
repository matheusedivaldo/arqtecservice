import React from 'react';
import PageBanner from '../components/PageBanner/PageBanner';
import Contact from '../components/Contact/Contact';
import usePageMeta from '../hooks/usePageMeta';

const Contato = () => {
    usePageMeta({
        title: 'Contato | Solicite um Orçamento - Arqtecservice',
        description:
            'Fale com a Arqtecservice pelo WhatsApp, e-mail ou formulário e solicite um orçamento para elétrica, automação e manutenção industrial.',
        path: '/contato',
    });

    return (
        <>
            <PageBanner
                eyebrow="Fale Conosco"
                title="Vamos Conversar?"
                subtitle="Preencha o formulário abaixo ou fale direto pelo WhatsApp — retornamos rapidamente."
            />
            <Contact />
        </>
    );
};

export default Contato;
