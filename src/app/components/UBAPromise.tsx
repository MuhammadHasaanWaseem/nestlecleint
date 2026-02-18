import { CheckCircle, Trophy, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

const CARDS = [
  { icon: CheckCircle, title: 'Proven Systems', desc: 'Step-by-step frameworks that produce results.' },
  { icon: Trophy, title: 'Results-Focused', desc: 'We measure outcomes — revenue, clients, repeatability.' },
  { icon: Globe, title: 'Global Expertise', desc: 'Methods tailored for Pakistan, Gulf, Europe and beyond.' },
];

export function UBAPromise() {
  return (
    <motion.section
      className="py-16 bg-gradient-to-b from-[#fefce8]/20 to-white"
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
          The <span className="highlight">Usama Shopify Promise</span>
        </motion.h2>
        <motion.p
          className="text-center text-[var(--uba-muted)] max-w-xl mx-auto mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Practical systems, proven results. Follow the program, do the work, and build a repeatable eCommerce business.
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
            <a href="#course">Enroll Now</a>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
