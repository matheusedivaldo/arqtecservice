import React, { useEffect, useRef, useState } from 'react';
import styles from './Gallery.module.css';
import galleryData from '../../data/gallery.json';

const Gallery = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const getImageUrl = (name) => {
        return new URL(`../../assets/gallery/${name}`, import.meta.url).href;
    };

    return (
        <section className={`${styles.gallery} ${isVisible ? styles.animate : ''}`} id="galeria" ref={sectionRef}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <div className={styles.titleBox}>
                        <span className={styles.label}>Campo de Atuação</span>
                        <h2 className={styles.title}>Portfólio <span>Técnico</span></h2>
                    </div>
                    <div className={styles.line} />
                </header>

                <div className={styles.stackGrid}>
                    {galleryData.map((item, index) => (
                        <div
                            key={item.id}
                            className={styles.card}
                            style={{ '--delay': `${index * 0.1}s` }}
                        >
                            <div className={styles.cardInner}>
                                <div className={styles.imageBox}>
                                    <img
                                        src={getImageUrl(item.image)}
                                        alt={item.title}
                                        className={styles.image}
                                    />
                                    <div className={styles.cardOverlay}>
                                        <div className={styles.cardContent}>
                                            <span className={styles.category}>Projeto Realizado</span>
                                            <h3 className={styles.itemTitle}>{item.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;