import { SocialIcon } from 'react-social-icons';
import { Button } from './ui/button';
import { motion } from 'motion/react';

import ceoImage from '../Assets/ceo.webp';

const SOCIAL_URLS = [
  'https://instagram.com',
  'https://facebook.com',
  'https://linkedin.com',
  'https://twitter.com',
];

export function Founder() {
  return (
    <motion.section
      id="about-founder"
      className="py-16 bg-gradient-to-b from-white to-[#e0f7ff]/30"
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
          Leadership
        </motion.span>
        <motion.h2
          className="uba-section-title text-center mb-2"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Driven by Our <span className="highlight">Vision</span>
        </motion.h2>
        <motion.p
          className="text-center text-[var(--uba-muted)] mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          Meet the team behind Usama Pure Life&apos;s mission to bring clean water to every home.
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
                alt="Usama Pure Life Regional Director"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
            <div className="flex gap-2 mt-4">
              {SOCIAL_URLS.map((url) => (
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
              Usama Pure Life
            </motion.h3>
            <motion.p
              className="text-[var(--uba-muted)] text-sm"
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Regional Operations
            </motion.p>
            <motion.p
              className="font-semibold text-[var(--uba-dark)] mt-2"
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
            >
              Committed to Quality & Community
            </motion.p>
            <motion.p
              className="text-sm text-[var(--uba-muted)] mt-4 bg-[#e0f7ff]/50 p-4 rounded-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Our team leads water quality initiatives, sustainable packaging innovation, and community clean-water programs across Pakistan, Middle East, and South Asia.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
              <Button className="uba-btn-primary mt-6" asChild>
                <a href="#about">Learn About Our Mission →</a>
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
          &ldquo;Every family deserves access to pure, safe drinking water. That&apos;s not just our business — it&apos;s our purpose.&rdquo;
        </motion.p>
      </div>
    </motion.section>
  );
}
