import React from 'react';
import { motion } from 'motion/react';

import performanceImg from '../Assets/QF-Blog_Social-Media-Marketing_-Complete-Guide-for-Advertisers-2024_1920x1080.jpg';

const metaLogo = new URL('../Assets/metalogo.avif', import.meta.url).href;

export function MetaResults() {
  return (
    <motion.section
      id="work-meta"
      className="py-16 bg-gradient-to-b from-[#f8f7ff] to-white"
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
          Meta Results
        </motion.span>
        <motion.h2
          className="uba-section-title mb-2 flex flex-wrap items-center gap-3"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          <img
            src={metaLogo}
            alt="Meta"
            className="h-10 w-auto object-contain"
            loading="lazy"
          />
          <span className="highlight">Results</span>
        </motion.h2>
        <motion.p
          className="text-[var(--uba-muted)] mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Meta ads that drive sales, scale brands, and deliver real ROI.
        </motion.p>
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
              src={performanceImg}
              alt="Performance overview — Website purchase 1,000 · Per purchase Rs137.31"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <p className="text-center font-medium text-[var(--uba-dark)] mt-4">No of Purchases: 1000</p>
        </motion.div>
      </div>
    </motion.section>
  );
}
