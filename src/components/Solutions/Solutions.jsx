import React, { useState } from 'react';
import styles from './Solutions.module.css';
import servicesData from '../../data/services.json';
import { FaSearch, FaArrowRight } from 'react-icons/fa';

const Solutions = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showAll, setShowAll] = useState(false);
    const INITIAL_DISPLAY_COUNT = 6;

    const generateWhatsAppUrl = (productTitle) => {
        const baseUrl = "https://wa.me/5511981200957";
        const message = `Olá, vim pelo site gostaria de solicitar um orçamento para ${productTitle}.`;
        return `${baseUrl}?text=${encodeURIComponent(message)}`;
    };

    const getImageUrl = (name) => {
        return new URL(`../../assets/services/${name}`, import.meta.url).href;
    };

    const filteredServices = servicesData.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const displayedServices = searchTerm
        ? filteredServices
        : (showAll ? servicesData : servicesData.slice(0, INITIAL_DISPLAY_COUNT));

    return (
        <section className={styles.solutions} id="servicos">
            <div className={styles.container}>
                <header className={styles.header}>
                    <div className={styles.lineBadge}>
                        <span className={styles.label}>Expertise Industrial</span>
                    </div>
                    <h2 className={styles.title}>Nossas <span>Soluções</span> de Engenharia</h2>
                </header>

                <div className={styles.searchContainer}>
                    <div className={styles.searchWrapper}>
                        <div className={styles.searchAccent} />
                        <FaSearch className={styles.searchIcon} />
                        <input
                            type="text"
                            placeholder="O que você está procurando hoje?"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <div className={styles.searchFocusBorder} />
                    </div>
                </div>

                <div className={styles.grid}>
                    {displayedServices.map((service, index) => (
                        <div key={service.id} className={styles.card}>
                            <div className={styles.imageBox}>
                                <div className={styles.indexNumber}>{(index + 1).toString().padStart(2, '0')}</div>
                                <img
                                    src={getImageUrl(service.image)}
                                    alt={service.title}
                                    className={styles.image}
                                    loading="lazy"
                                />
                                <div className={styles.imageOverlay} />
                            </div>
                            <div className={styles.info}>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardText}>{service.description}</p>
                                <a
                                    href={generateWhatsAppUrl(service.title)}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={styles.btnAction}
                                >
                                    Consultar Agora <FaArrowRight />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {displayedServices.length === 0 && (
                    <div className={styles.emptyState}>
                        <p>Nenhuma especificação técnica encontrada para "<strong>{searchTerm}</strong>".</p>
                        <button onClick={() => setSearchTerm('')} className={styles.resetBtn}>Redefinir busca</button>
                    </div>
                )}

                {!searchTerm && !showAll && servicesData.length > INITIAL_DISPLAY_COUNT && (
                    <div className={styles.footerAction}>
                        <button onClick={() => setShowAll(true)} className={styles.loadBtn}>
                            Ver Catálogo Completo
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Solutions;