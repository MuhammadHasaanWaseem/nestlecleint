import { ShieldCheck, Droplets, Leaf } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

const CARDS = [
  { icon: ShieldCheck, title: 'Pure & Safe', desc: '12-step purification ensures every drop meets the highest safety standards.' },
  { icon: Droplets, title: 'Great Taste', desc: 'Enhanced with essential minerals for a crisp, refreshing taste you can trust.' },
  { icon: Leaf, title: 'Eco-Conscious', desc: 'Committed to reducing plastic waste and achieving carbon neutrality.' },
];

export function UBAPromise() {
  return (
    <motion.section
      id="sustainability"
      className="py-16 bg-gradient-to-b from-[#e0f7ff]/20 to-white"
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
          The <span className="highlight">Nestlé Promise</span>
        </motion.h2>
        <motion.p
          className="text-center text-[var(--uba-muted)] max-w-xl mx-auto mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Quality water for quality life. Our commitment to purity, sustainability, and community well-being drives everything we do.
        </motion.p>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              className="uba-card p-6 text-center"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[var(--uba-gold)] flex items-center justify-center">
                <c.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-[var(--uba-dark)] mb-2">{c.title}</h3>
              <p className="text-sm text-[var(--uba-muted)]">{c.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div className="text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
          <Button className="uba-btn-primary" asChild>
            <a href="#products">Explore Products</a>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
