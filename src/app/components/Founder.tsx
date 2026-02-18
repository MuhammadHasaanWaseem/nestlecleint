import { SocialIcon } from 'react-social-icons';
import { Button } from './ui/button';
import { motion } from 'motion/react';

import ceoImage from '../Assets/ceo.webp';

const SOCIAL_URLS = [
  'https://wa.me/923366789031',
  'https://instagram.com',
  'https://facebook.com',
  'https://linkedin.com',
];

export function Founder() {
  return (
    <motion.section
      id="about-founder"
      className="py-16 bg-gradient-to-b from-white to-gray-50/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.span
          className="uba-badge block w-fit mx-auto mb-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Meet Our Founder & Team
        </motion.span>
        <motion.h2
          className="uba-section-title text-center mb-2"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Visionaries Driving Our <span className="highlight">Mission</span>
        </motion.h2>
        <motion.p
          className="text-center text-[var(--uba-muted)] mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          Get to know the passionate minds shaping our future and fueling our growth.
        </motion.p>
        <motion.div
          className="uba-card p-6 sm:p-8 flex flex-col md:flex-row gap-8"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="shrink-0">
            <motion.div
              className="w-40 h-40 rounded-2xl overflow-hidden bg-[var(--uba-gold)]/20 shrink-0"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={ceoImage}
                alt="Usama Amir Khosa - Founder"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
            <div className="flex gap-2 mt-4">
              {SOCIAL_URLS.map((url, i) => (
                <motion.a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={url}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SocialIcon url={url} style={{ width: 40, height: 40 }} />
                </motion.a>
              ))}
            </div>
          </div>
          <div>
            <motion.h3
              className="text-2xl font-bold text-[var(--uba-gold)]"
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
            >
              Muhammad Usama
            </motion.h3>
            <motion.p
              className="text-[var(--uba-muted)] text-sm"
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              (Muhammad Usama)
            </motion.p>
            <motion.p
              className="font-semibold text-[var(--uba-dark)] mt-2"
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
            >
              Founder & Head of Global Strategy
            </motion.p>
            <motion.p
              className="text-sm text-[var(--uba-muted)] mt-4 bg-gray-50 p-4 rounded-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Leads brand vision, high-level execution, and global business expansion. Department: Strategy & Brand Development
            </motion.p>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
              <Button className="uba-btn-primary mt-6" asChild>
                <a href="#about-founder">Meet Our Team →</a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
        <motion.p
          className="text-center text-[var(--uba-muted)] italic mt-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          &ldquo;Let&apos;s create something remarkable. Something global. Something lasting.&rdquo;
        </motion.p>
      </div>
    </motion.section>
  );
}
