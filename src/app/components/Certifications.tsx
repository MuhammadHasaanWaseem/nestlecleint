import { motion } from 'motion/react';

import nestleImg from '../Assets/nestle.jpg';
import nestle2Img from '../Assets/nestle2.jpg';
import nestle3Img from '../Assets/nestle3.jpg';
import waterImg from '../Assets/waterbottles.jpg';
import viewImg from '../Assets/viewwater.jpg';

type CertItem = { name: string; source: string; image: string };

const CERTS: CertItem[] = [
  { name: 'ISO 22000 — Food Safety Management', source: 'International Organization for Standardization', image: nestleImg },
  { name: 'NSF International Certification', source: 'NSF — Water Quality Standards', image: nestle2Img },
  { name: 'IBWA Certified Bottling Plant', source: 'International Bottled Water Association', image: nestle3Img },
  { name: 'WHO Drinking Water Guidelines', source: 'World Health Organization', image: waterImg },
  { name: 'Alliance for Water Stewardship', source: 'AWS — Responsible Water Use', image: viewImg },
];

export function Certifications() {
  return (
    <motion.section
      id="certifications"
      className="py-16 bg-gradient-to-b from-white to-[#e0f7ff]/30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          className="uba-section-title text-center mb-2"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Quality <span className="highlight">Certifications</span>
        </motion.h2>
        <motion.p
          className="text-center text-[var(--uba-muted)] mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          Certified by leading global authorities for water safety and quality.
        </motion.p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTS.map((c, i) => (
            <motion.div
              key={c.name}
              className="uba-card p-6 overflow-hidden"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div className="relative aspect-[4/3] rounded-lg mb-4 bg-gray-100 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="font-semibold text-[var(--uba-dark)]">{c.name}</p>
              <p className="text-xs text-[var(--uba-muted)] mt-1">{c.source}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
