import { Droplets, Globe, ShieldCheck, Heart } from 'lucide-react';
import { motion } from 'motion/react';

import aboutImg from '../Assets/viewwater.jpg';

const STATS = [
  { icon: Droplets, value: '150+', label: 'Countries Served' },
  { icon: Globe, value: '50+', label: 'Bottling Plants' },
  { icon: ShieldCheck, value: '12-Step', label: 'Purification Process' },
  { icon: Heart, value: '#1', label: 'Bottled Water Brand' },
];

export function GlobalPresence() {
  return (
    <motion.section
      id="about"
      className="py-16 md:py-24 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.h2
              className="uba-section-title mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Purity You Can <span className="highlight">Trust.</span>
            </motion.h2>
            <motion.p
              className="text-[var(--uba-muted)] mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Usama Pure Life is the world&apos;s leading bottled water brand, delivering clean and refreshing hydration to over 150 countries. Every drop goes through a rigorous 12-step quality purification process to ensure the highest safety standards.
            </motion.p>
            <motion.p
              className="text-[var(--uba-muted)] mb-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              From sourcing to bottling, we are committed to sustainability, quality, and community well-being. Our mission is simple — make safe drinking water accessible to every family, every day.
            </motion.p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '150+', label: 'Countries Worldwide' },
                { value: '30+', label: 'Years of Trust' },
                { value: '1B+', label: 'Bottles Sold Yearly' },
                { value: '100%', label: 'Quality Assured' },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  className="uba-card p-4 text-center"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                  whileHover={{ scale: 1.03, y: -2 }}
                >
                  <span className="text-xl font-bold text-[var(--uba-gold)]">{s.value}</span>
                  <p className="text-sm text-[var(--uba-muted)] mt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <motion.div
              className="rounded-2xl overflow-hidden shadow-lg mb-6"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img src={aboutImg} alt="Usama pure water" className="w-full h-auto object-cover" loading="lazy" />
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="uba-card p-5 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[var(--uba-gold)]/15 flex items-center justify-center">
                    <s.icon className="w-6 h-6 text-[var(--uba-gold)]" />
                  </div>
                  <span className="block text-xl font-bold text-[var(--uba-gold)]">{s.value}</span>
                  <p className="text-sm text-[var(--uba-muted)] mt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <motion.div
          className="mt-16 p-6 rounded-xl bg-[#e0f7ff]/60 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-[var(--uba-dark)] font-medium">
            Water is life&apos;s essential foundation.
          </p>
          <p className="text-[var(--uba-dark)] font-bold mt-1">
            Usama Pure Life — committed to bringing safe, clean hydration to every home.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
