import styles from './Clients.module.css';

const Clients = () => {
    // Lista de exemplo - depois é só trocar pelos logos reais na pasta assets
    const clientLogos = [
        { id: 1, name: 'Cliente 1', src: 'https://placehold.co/200x100?text=Industria+1' },
        { id: 2, name: 'Cliente 2', src: 'https://placehold.co/200x100?text=Grafica+A' },
        { id: 3, name: 'Cliente 3', src: 'https://placehold.co/200x100?text=Construtora' },
        { id: 4, name: 'Cliente 4', src: 'https://placehold.co/200x100?text=Comercio' },
        { id: 5, name: 'Cliente 5', src: 'https://placehold.co/200x100?text=Industria+2' },
    ];

    return (
        <section className={styles.clients} id="clientes">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Empresas que Confiam</h2>
                    <div className={styles.divider}></div>
                </div>

                <div className={styles.logoGrid}>
                    {clientLogos.map((client) => (
                        <div key={client.id} className={styles.logoWrapper}>
                            <img src={client.src} alt={client.name} className={styles.logo} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;