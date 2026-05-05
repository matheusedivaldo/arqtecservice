import React, { useState } from 'react';
import styles from './Solutions.module.css';
import servicesData from '../../data/services.json';
import defaultImg from '../../assets/services/services_01.jpg';
import { FaSearch } from 'react-icons/fa';

const Solutions = () => {
    const whatsappUrl = "https://wa.me/5511981200957?text=Olá,%20vim%20através%20do%20site%20da%20Arqtecservice%20e%20gostaria%20de%20solicitar%20um%20orçamento.";
    const [searchTerm, setSearchTerm] = useState('');
    const [showAll, setShowAll] = useState(false);
    const INITIAL_DISPLAY_COUNT = 9;

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
                    <span className={styles.label}>Soluções</span>
                    <h2 className={styles.title}>Tecnologia e Performance para sua Infraestrutura</h2>
                </header>

                <div className={styles.searchBar}>
                    <FaSearch className={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="Pesquisar soluções (ex: automação, elétrica, CFTV)..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className={styles.grid}>
                    {displayedServices.map((service) => (
                        <div key={service.id} className={styles.card}>
                            <div className={styles.imageBox}>
                                <img src={defaultImg} alt={service.title} className={styles.image} />
                            </div>
                            <div className={styles.info}>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardText}>{service.description}</p>
                                <a href={whatsappUrl} target="_blank" rel="noreferrer" className={styles.btnMore}>
                                    Saber mais
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {displayedServices.length === 0 && searchTerm && (
                    <div className={styles.noResults}>
                        Nenhuma solução encontrada para "{searchTerm}". <br />
                        Tente outro termo ou entre em contato direto.
                    </div>
                )}

                {!searchTerm && !showAll && servicesData.length > INITIAL_DISPLAY_COUNT && (
                    <div className={styles.loadMoreContainer}>
                        <button onClick={() => setShowAll(true)} className={styles.btnPrimary}>
                            Ver todas as soluções
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Solutions;