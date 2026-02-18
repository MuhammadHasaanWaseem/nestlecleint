import { Waves, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/button';

import heroImg from '../Assets/waterbottles.jpg';

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-blue-100 to-white">
      {/* Wave separator at bottom */}
      <div className="absolute bottom-0 left-0 right-0 text-white">
        <svg viewBox="0 0 1440 120" fill="currentColor" preserveAspectRatio="none">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
        </svg>
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 lg:py-28"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left space-y-6"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
                Nestlé Pure Life
              </span>
              <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-blue-500">Every Drop Matters.</span>
                <motion.span
                  className="absolute bottom-2 left-0 w-full h-3 bg-blue-200/50 -z-0 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Experience the purest hydration with naturally balanced minerals. 
              Sourced responsibly and bottled with care for you and the planet.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-blue-600/30 hover:shadow-xl transition-all"
                onClick={() => scrollToSection('products')}
              >
                Shop Now
                <Waves className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-full"
                onClick={() => scrollToSection('services')}
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Hero Image with 3D effect */}
          <motion.div
            className="relative perspective-1000"
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Glowing ring behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full blur-3xl opacity-30 animate-pulse" />

            <div className="relative transform-gpu rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 backdrop-blur-sm">
              <img
                src={heroImg}
                alt="Nestlé Pure Life water bottles"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              {/* Floating badge */}
              <motion.div
                className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg flex items-center gap-2 text-sm font-medium text-blue-800"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Sparkles className="w-4 h-4 text-yellow-500" />
                <span>100% Natural</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}