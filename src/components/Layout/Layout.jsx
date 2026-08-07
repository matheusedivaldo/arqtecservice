import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Navbar from '../HeroHeader/Navbar';
import FloatingWhatsApp from '../FloatingWhatsApp/FloatingWhatsApp';
import Footer from '../Footer/Footer';

const Layout = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="App">
            <Navbar />

            <main>
                <Outlet />
            </main>

            <FloatingWhatsApp />
            <Footer />
        </div>
    );
};

export default Layout;
