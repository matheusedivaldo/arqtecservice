import React from 'react';
import { MapContainer, TileLayer, Circle, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './Contact.module.css';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const Contact = () => {
    const position = [-23.5329, -46.792];
    const RAIO_METROS = 30000;
    const RAIO_KM = RAIO_METROS / 1000;

    const radiusOptions = {
        fillColor: '#eb722d',
        color: '#eb722d',
        weight: 1,
        fillOpacity: 0.2
    };

    return (
        <section className={styles.contact} id="contato">
            <div className={styles.container}>
                <div className={styles.contentGrid}>

                    <div className={styles.detailsSide}>
                        <header className={styles.header}>
                            <span className={styles.label}>Engenharia & Soluções</span>
                            <h2 className={styles.title}>Fale com a <span>Arqtecservice</span></h2>
                            <p className={styles.subtitle}>
                                Atuamos em toda a Grande São Paulo e Interior, levando tecnologia e performance para sua infraestrutura.
                            </p>
                        </header>

                        <div className={styles.infoCards}>
                            <div className={styles.infoCard}>
                                <FaWhatsapp className={styles.infoIcon} />
                                <div>
                                    <h4>WhatsApp</h4>
                                    <p>11 98120-0957</p>
                                </div>
                            </div>
                            <div className={styles.infoCard}>
                                <FaEnvelope className={styles.infoIcon} />
                                <div>
                                    <h4>E-mail</h4>
                                    <p>arqtecservice@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.mapContainer}>
                            <MapContainer center={position} zoom={10} scrollWheelZoom={false} className={styles.map}>
                                <TileLayer
                                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                                />
                                <Marker position={position} />
                                <Circle
                                    center={position}
                                    pathOptions={radiusOptions}
                                    radius={RAIO_METROS}
                                    className="map-pulse"
                                />
                            </MapContainer>
                            <div className={styles.mapBadge}>
                                Raio de atendimento: {RAIO_KM}km
                            </div>
                        </div>
                    </div>

                    <div className={styles.formSide}>
                        <div className={styles.formCard}>
                            <h3 className={styles.formTitle}>Solicitar Orçamento</h3>
                            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                                <div className={styles.inputBox}>
                                    <input type="text" placeholder="Nome Completo" required />
                                </div>
                                <div className={styles.inputBox}>
                                    <input type="email" placeholder="E-mail Corporativo" required />
                                </div>
                                <div className={styles.inputBox}>
                                    <input type="text" placeholder="Telefone / Celular" required />
                                </div>
                                <div className={styles.inputBox}>
                                    <select required defaultValue="">
                                        <option value="" disabled>Área de interesse</option>
                                        <option value="automacao">Automação</option>
                                        <option value="eletrica">Elétrica Industrial/Civil</option>
                                        <option value="ar">Climatização</option>
                                        <option value="cftv">Segurança Eletrônica</option>
                                    </select>
                                </div>
                                <div className={styles.inputBox}>
                                    <textarea placeholder="Como podemos ajudar no seu projeto?" rows="5" required></textarea>
                                </div>
                                <button type="submit" className={styles.btnSubmit}>
                                    Enviar Solicitação
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;