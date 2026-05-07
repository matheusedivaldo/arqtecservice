import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import styles from './Partners.module.css';
import partnersData from '../../data/partners.json';

const Partners = () => {
    const getImageUrl = (name) => {
        return new URL(`../../assets/partners/${name}`, import.meta.url).href;
    };

    return (
        <section className={styles.partners}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <span className={styles.label}>Confiança</span>
                    <h2 className={styles.title}>Clientes e Parceiros</h2>
                </header>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={2}
                    loop={true}
                    speed={4000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        480: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1200: { slidesPerView: 6 },
                    }}
                    className={styles.swiper}
                >
                    {partnersData.map((partner) => (
                        <SwiperSlide key={partner.id} className={styles.slide}>
                            <div className={styles.logoBox}>
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
        </section>
    );
};

export default Partners;