import { motion } from 'motion/react';

import metaCert from '../Assets/metacertifctae.png';
import metaLogo from '../Assets/metalogo.avif';
import digitalStrategyImg from '../Assets/Effective_Digital_Marketing_Strategy_d9152a4f6b.webp';
import imagesJpeg from '../Assets/images.jpeg';
import images1Jpeg from '../Assets/images (1).jpeg';
import jm2Img from '../Assets/jm2sboggkagjdnrkb7kh.jpg';

type CertItem = { name: string; source: string; image?: string; logo?: string };

const CERTS: CertItem[] = [
  { name: 'Digital Marketing Strategy', source: 'edX · University of Edinburgh', image: digitalStrategyImg },
  { name: 'Social Media Marketing', source: 'Meta · Coursera', image: metaCert, logo: metaLogo },
  { name: 'Marketing', source: 'Wharton ONLINE · Coursera', image: imagesJpeg },
  { name: 'Marketing in a Digital World', source: 'Illinois · Coursera', image: images1Jpeg },
  { name: 'Foundations of Digital Marketing and E-commerce', source: 'Google · Coursera', image: jm2Img },
];

export function Certifications() {
  return (
    <motion.section
      id="certifications"
      className="py-16 bg-gradient-to-b from-white to-gray-50/50"
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
          Certification<span className="highlight">'s</span>
        </motion.h2>
        <motion.p
          className="text-center text-[var(--uba-muted)] mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          Certified by Google, Meta and Top Global Universities.
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
                {c.image ? (
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-[var(--uba-muted)] text-sm">Certificate</span>
                  </div>
                )}
                {c.logo && (
                  <img
                    src={c.logo}
                    alt="Meta"
                    className="absolute top-2 left-2 w-10 h-10 object-contain drop-shadow-sm"
                    loading="lazy"
                  />
                )}
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
