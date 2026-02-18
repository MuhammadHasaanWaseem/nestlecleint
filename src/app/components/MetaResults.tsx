import { motion } from 'motion/react';

import waterImg from '../Assets/wtaerbottles2.jpg';
import nestleImg from '../Assets/nestle.jpg';

export function MetaResults() {
  return (
    <motion.section
      id="work-meta"
      className="py-16 bg-gradient-to-b from-[#e0f7ff] to-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.span
          className="uba-badge block w-fit mb-2"
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Our Impact
        </motion.span>
        <motion.h2
          className="uba-section-title mb-2"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          Making a <span className="highlight">Difference</span>
        </motion.h2>
        <motion.p
          className="text-[var(--uba-muted)] mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Nestlé Pure Life is committed to providing clean, safe drinking water and promoting healthy hydration habits across the globe.
        </motion.p>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            className="uba-card p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ boxShadow: '0 12px 40px rgba(0,0,0,0.1)' }}
          >
            <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
              <img
                src={waterImg}
                alt="Nestlé water bottles production"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-center font-medium text-[var(--uba-dark)] mt-4">3 Million+ Bottles Produced Daily</p>
          </motion.div>
          <motion.div
            className="uba-card p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            whileHover={{ boxShadow: '0 12px 40px rgba(0,0,0,0.1)' }}
          >
            <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
              <img
                src={nestleImg}
                alt="Nestlé Pure Life branding"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-center font-medium text-[var(--uba-dark)] mt-4">Trusted by Millions of Families</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
