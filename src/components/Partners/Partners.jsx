import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

import styles from './Partners.module.css';
import partnersData from '../../data/partners.json';

const Partners = () => {
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
        return new URL(`../../assets/partners/${name}`, import.meta.url).href;
    };

    const triplePartners = [...partnersData, ...partnersData, ...partnersData];

    return (
        <section
            className={`${styles.partners} ${isVisible ? styles.animate : ''}`}
            ref={sectionRef}
        >
            <div className={styles.container}>
                <header className={styles.header}>
                    <div className={styles.titleWrapper}>
                        <div className={styles.sideLine} />
                        <div className={styles.textBlock}>
                            <span className={styles.label}>Nossa Rede</span>
                            <h2 className={styles.title}>Parceiros <span>Estratégicos</span></h2>
                        </div>
                    </div>
                </header>

                <div className={styles.carouselContainer}>
                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        spaceBetween={20}
                        slidesPerView={3}
                        loop={true}
                        speed={5000}
                        freeMode={true}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            480: { slidesPerView: 4, spaceBetween: 30 },
                            768: { slidesPerView: 5, spaceBetween: 40 },
                            1024: { slidesPerView: 6, spaceBetween: 60 },
                            1440: { slidesPerView: 7, spaceBetween: 80 },
                        }}
                        className={styles.swiper}
                    >
                        {triplePartners.map((partner, index) => (
                            <SwiperSlide key={`${partner.id}-${index}`}>
                                <div className={styles.logoWrapper}>
                                    <img
                                        src={getImageUrl(partner.image)}
                                        alt={partner.name}
                                        className={styles.logo}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Partners;