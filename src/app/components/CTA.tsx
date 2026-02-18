import { Button } from './ui/button';
import { motion } from 'motion/react';

export function CTA() {
  return (
    <motion.section
      id="contact"
      className="py-20 bg-gradient-to-b from-[#f8f7ff] to-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          className="uba-section-title mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ready to Transform Your Digital Presence?
        </motion.h2>
        <motion.p
          className="text-[var(--uba-muted)] mb-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Let&apos;s discuss how we can help you achieve your business goals. Get a free consultation
          and discover the strategies that will take your brand to the next level.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <Button className="uba-btn-primary" asChild>
            <a href="https://wa.me/923366789031" target="_blank" rel="noopener noreferrer">
              Contact Now
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
