import React from 'react';
import styles from './Gallery.module.css';
import galleryData from '../../data/gallery.json';

const Gallery = () => {
    const getImageUrl = (name) => {
        return new URL(`../../assets/gallery/${name}`, import.meta.url).href;
    };

    return (
        <section className={styles.gallery} id="galeria">
            <div className={styles.container}>
                <header className={styles.header}>
                    <span className={styles.label}>Portfólio em Campo</span>
                    <h2 className={styles.title}>Nosso Trabalho <span>em Detalhes</span></h2>
                </header>

                <div className={styles.grid}>
                    {galleryData.map((item) => (
                        <div key={item.id} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img
                                    src={getImageUrl(item.image)}
                                    alt={item.title}
                                    className={styles.image}
                                />
                                <div className={styles.overlay}>
                                    <div className={styles.info}>
                                        <span className={styles.itemTitle}>{item.title}</span>
                                        <div className={styles.accentLine}></div>
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