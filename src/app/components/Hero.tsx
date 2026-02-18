import { Droplets } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/button';

import heroImg from '../Assets/waterbottles.jpg';

export function Hero() {
  return (
    <motion.section
      id="home"
      className="py-12 md:py-20 bg-gradient-to-b from-[#e0f7ff] to-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[var(--uba-gold)]/15 mb-6 uba-anim-delay-1">
              <Droplets className="w-8 h-8 text-[var(--uba-gold)]" />
            </div>
            <h1 className="uba-section-title text-3xl sm:text-4xl md:text-5xl leading-tight mb-4 uba-anim-delay-2">
              Nestlé Pure Life — <span className="highlight">Every Drop Matters.</span>
            </h1>
            <p className="text-[var(--uba-muted)] text-lg mb-6 uba-anim-delay-3">
              Refreshing, pure, and trusted by millions worldwide. Nestlé delivers the highest quality drinking water — sourced, purified, and bottled with care for your health and hydration.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start uba-anim-delay-4">
              <Button className="uba-btn-primary" asChild>
                <a href="#products">Explore Products</a>
              </Button>
              <Button variant="outline" className="border-[var(--uba-gold)] text-[var(--uba-gold)] hover:bg-[var(--uba-gold)]/10" asChild>
                <a href="#about">Learn More</a>
              </Button>
            </div>
          </div>
          <motion.div
            className="rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={heroImg}
              alt="Nestlé Pure Life water bottles"
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
