import React from 'react';
import Hero from '../components/HeroHeader/Hero';
import About from '../components/About/About';
import Solutions from '../components/Solutions/Solutions';
import Partners from '../components/Partners/Partners';
import Gallery from '../components/Gallery/Gallery';
import Contact from '../components/Contact/Contact';
import usePageMeta from '../hooks/usePageMeta';

const Home = () => {
    usePageMeta({ path: '/' });

    return (
        <>
            <Hero />
            <About />
            <Solutions />
            <Partners />
            <Gallery />
            <Contact />
        </>
    );
};

export default Home;
