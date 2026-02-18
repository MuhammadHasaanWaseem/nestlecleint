import { Button } from './ui/button';
import { motion } from 'motion/react';

export function CTA() {
  return (
    <motion.section
      id="contact"
      className="py-20 bg-gradient-to-b from-[#e0f7ff] to-white"
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
          Ready to Experience <span className="highlight">Pure Hydration?</span>
        </motion.h2>
        <motion.p
          className="text-[var(--uba-muted)] mb-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Whether you&apos;re looking for home delivery, business supply, or just want to learn more about our products — we&apos;d love to hear from you.
        </motion.p>
        <motion.div className="flex flex-wrap gap-4 justify-center" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <Button className="uba-btn-primary" asChild>
            <a href="tel:+923001234567">Call Us Now</a>
          </Button>
          <Button variant="outline" className="border-[var(--uba-gold)] text-[var(--uba-gold)] hover:bg-[var(--uba-gold)]/10" asChild>
            <a href="#products">View Products</a>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
