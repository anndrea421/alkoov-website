
import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <LanguageProvider>
      <div className="font-sans bg-brand-dark">
        <Header
          onNavigate={{
            home: () => scrollToSection(homeRef),
            services: () => scrollToSection(servicesRef),
            gallery: () => scrollToSection(galleryRef),
            contact: () => scrollToSection(contactRef),
          }}
        />
        <main>
          <div ref={homeRef}>
            <Hero onCTAClick={() => scrollToSection(contactRef)} />
          </div>
          <div ref={servicesRef}>
            <Services />
          </div>
          <div>
            <WhyChooseUs />
          </div>
          <div>
            <Testimonials />
          </div>
          <div ref={galleryRef}>
            <Gallery />
          </div>
          <div ref={contactRef}>
            <Contact />
          </div>
        </main>
        <Footer onHomeClick={() => scrollToSection(homeRef)} />
      </div>
    </LanguageProvider>
  );
};

export default App;
