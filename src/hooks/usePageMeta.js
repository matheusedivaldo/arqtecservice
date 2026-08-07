import { useEffect } from 'react';

const SITE_URL = 'https://arqtecservice.com.br';
const DEFAULT_TITLE = 'Arqtecservice | Elétrica, Automação e Manutenção Industrial em SP';
const DEFAULT_DESCRIPTION =
    'Instalações elétricas, automação residencial, CFTV, controle de acesso e infraestrutura industrial e civil. Atendemos toda a Grande São Paulo e Interior. Solicite um orçamento pelo WhatsApp.';

function setMetaTag(attr, key, content) {
    let el = document.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
    }
    el.setAttribute('content', content);
}

export default function usePageMeta({ title, description, path = '/' }) {
    useEffect(() => {
        const fullTitle = title || DEFAULT_TITLE;
        const desc = description || DEFAULT_DESCRIPTION;
        const url = `${SITE_URL}${path}`;

        document.title = fullTitle;
        setMetaTag('name', 'description', desc);
        setMetaTag('property', 'og:title', fullTitle);
        setMetaTag('property', 'og:description', desc);
        setMetaTag('property', 'og:url', url);
        setMetaTag('name', 'twitter:title', fullTitle);
        setMetaTag('name', 'twitter:description', desc);

        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', url);
    }, [title, description, path]);
}
