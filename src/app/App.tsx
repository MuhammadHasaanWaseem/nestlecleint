import { useState, useEffect } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GlobalPresence } from './components/GlobalPresence';
import { TrustedGlobalSection } from './components/TrustedGlobalSection';
import { Stats } from './components/Stats';
import { UBAPromise } from './components/UBAPromise';
import { MetaResults } from './components/MetaResults';
import { SalesProofs } from './components/SalesProofs';
import { Certifications } from './components/Certifications';
import { CourseSection } from './components/CourseSection';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { Founder } from './components/Founder';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <GlobalPresence />
        <TrustedGlobalSection />
        <Stats />
        <UBAPromise />
        <MetaResults />
        <SalesProofs />
        <Certifications />
        <CourseSection />
        <Services />
        <Pricing />
        <Founder />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
