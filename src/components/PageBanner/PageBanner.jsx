import React from 'react';
import styles from './PageBanner.module.css';

const PageBanner = ({ eyebrow, title, subtitle }) => {
    return (
        <section className={styles.banner}>
            <div className={styles.container}>
                {eyebrow && (
                    <div className={styles.badgeWrap}>
                        <span className={styles.badgeLine} />
                        <span className={styles.badge}>{eyebrow}</span>
                        <span className={styles.badgeLine} />
                    </div>
                )}
                <h1 className={styles.title}>{title}</h1>
                {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            </div>
        </section>
    );
};

export default PageBanner;
