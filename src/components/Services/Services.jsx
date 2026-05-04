import styles from './Services.module.css';
import { FaPlug, FaHome, FaIndustry, FaSnowflake } from 'react-icons/fa';

const servicesData = [
    {
        id: 1,
        title: 'Elétrica em Geral',
        description: 'Instalações completas, manutenção preventiva e corretiva para todos os tipos de imóveis.',
        icon: <FaPlug size={40} />
    },
    {
        id: 2,
        title: 'Automação Residencial',
        description: 'Casas inteligentes com controle de iluminação, áudio, segurança e acesso por voz ou smartphone.',
        icon: <FaHome size={40} />
    },
    {
        id: 3,
        title: 'Automação Industrial/Comercial',
        description: 'Soluções avançadas para a indústria gráfica e comércio, otimizando processos e segurança.',
        icon: <FaIndustry size={40} />
    },
    {
        id: 4,
        title: 'Ar-Condicionado Split',
        description: 'Instalação e manutenção técnica de sistemas split, garantindo eficiência energética e conforto.',
        icon: <FaSnowflake size={40} />
    }
];

const Services = () => {
    return (
        <section className={styles.services} id="servicos">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Nossas Soluções</h2>
                    <p className={styles.subtitle}>Oferecemos serviços técnicos especializados com foco em inovação e segurança.</p>
                </div>

                <div className={styles.grid}>
                    {servicesData.map((service) => (
                        <div key={service.id} className={styles.card}>
                            <div className={styles.icon}>{service.icon}</div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDescription}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;