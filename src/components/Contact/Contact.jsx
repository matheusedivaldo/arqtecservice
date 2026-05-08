import React, { useState, useEffect, useRef } from 'react';
import styles from './Contact.module.css';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const [formData, setFormData] = useState({
        nome: '',
        whatsapp: '',
        servico: 'Elétrica Geral',
        mensagem: ''
    });

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

    const maskPhone = (value) => {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{4})\d+?$/, '$1');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const formattedValue = name === 'whatsapp' ? maskPhone(value) : value;
        setFormData(prev => ({ ...prev, [name]: formattedValue }));
    };

    const handleSendWhatsApp = (e) => {
        e.preventDefault();
        const numero = "5511981200957";
        const texto = `*NOVA SOLICITAÇÃO DE ORÇAMENTO*%0A%0A` +
            `*Nome:* ${formData.nome}%0A` +
            `*WhatsApp:* ${formData.whatsapp}%0A` +
            `*Serviço:* ${formData.servico}%0A` +
            `*Mensagem:* ${formData.mensagem}%0A%0A` +
            `_Enviado via site Arqtecservice_`;

        window.open(`https://wa.me/${numero}?text=${texto}`, '_blank');
    };

    return (
        <section
            className={`${styles.contact} ${isVisible ? styles.animate : ''}`}
            id="contato"
            ref={sectionRef}
        >
            <div className={styles.container}>
                <div className={styles.contentGrid}>

                    <div className={styles.infoSide}>
                        <div className={styles.statusBadge}>
                            <span className={styles.dot}></span> Atendimento Online
                        </div>
                        <h2 className={styles.title}>Vamos Tirar seu <br /><span>Projeto do Papel?</span></h2>
                        <p className={styles.subtitle}>
                            Atendemos toda a Grande São Paulo e Interior com suporte técnico especializado.
                        </p>

                        <div className={styles.infoCards}>
                            <div className={styles.infoCard}>
                                <div className={styles.iconCircle}><FaWhatsapp /></div>
                                <div className={styles.cardText}>
                                    <h4>WhatsApp</h4>
                                    <p>11 98120-0957</p>
                                </div>
                            </div>
                            <div className={styles.infoCard}>
                                <div className={styles.iconCircle}><FaEnvelope /></div>
                                <div className={styles.cardText}>
                                    <h4>E-mail</h4>
                                    <p>arqtecservice@gmail.com</p>
                                </div>
                            </div>
                            <div className={styles.infoCard}>
                                <div className={styles.iconCircle}><FaMapMarkerAlt /></div>
                                <div className={styles.cardText}>
                                    <h4>Base Operacional</h4>
                                    <p>Osasco, São Paulo</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formSide}>
                        <form onSubmit={handleSendWhatsApp} className={styles.form}>
                            <div className={styles.inputGroup}>
                                <label>Seu Nome Completo</label>
                                <input
                                    type="text"
                                    name="nome"
                                    required
                                    placeholder="João Silva"
                                    value={formData.nome}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label>WhatsApp com DDD</label>
                                <input
                                    type="tel"
                                    name="whatsapp"
                                    required
                                    placeholder="(11) 99999-9999"
                                    value={formData.whatsapp}
                                    onChange={handleChange}
                                    maxLength="15"
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Tipo de Serviço</label>
                                <select name="servico" value={formData.servico} onChange={handleChange}>
                                    <option value="Elétrica Geral">Elétrica Geral</option>
                                    <option value="Automação Residencial">Automação Residencial</option>
                                    <option value="Controle de Acesso">Controle de Acesso</option>
                                    <option value="Câmeras / CFTV">Câmeras / CFTV</option>
                                    <option value="Infraestrutura Industrial">Infraestrutura Industrial</option>
                                    <option value="Outros">Outros</option>
                                </select>
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Detalhes do Projeto</label>
                                <textarea
                                    name="mensagem"
                                    required
                                    placeholder="Como podemos ajudar?"
                                    value={formData.mensagem}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <button type="submit" className={styles.submitBtn}>
                                <FaWhatsapp /> Solicitar via WhatsApp
                            </button>
                            <p className={styles.securityText}>
                                <FaCheckCircle /> Dados protegidos.
                            </p>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;