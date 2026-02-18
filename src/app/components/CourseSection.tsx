import { Droplets, Globe, ShieldCheck, Heart, Leaf, Recycle } from 'lucide-react';
import { motion } from 'motion/react';

const TRUST_ITEMS = [
  { icon: ShieldCheck, title: 'Rigorous Quality Control', desc: 'Over 100 quality checks on every batch before it reaches you' },
  { icon: Globe, title: 'Global Presence', desc: 'Trusted in 150+ countries across every continent' },
  { icon: Droplets, title: '12-Step Purification', desc: 'Industry-leading multi-stage filtration and treatment' },
  { icon: Heart, title: 'Community Impact', desc: 'Clean water access programs benefiting millions' },
  { icon: Leaf, title: 'Sustainable Sourcing', desc: 'Responsible water stewardship at every source' },
  { icon: Recycle, title: 'Eco-Friendly Packaging', desc: 'Recyclable bottles with reduced plastic footprint' },
];

const PRODUCT_RANGE = [
  'Still Water 0.5L', 'Still Water 1.5L', 'Family Size 5L',
  'Home Delivery 19L', 'Sparkling Water', 'Flavoured Water',
];

const STAT_LABELS = ['Bottles Daily', 'Countries', 'Quality Checks', 'Years Trusted'];

export function CourseSection() {
  return (
    <motion.section
      id="community"
      className="py-16 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2 className="uba-section-title text-center mb-2" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Usama Pure Life <span className="highlight">By The Numbers</span>
        </motion.h2>
        <motion.p className="text-center text-[var(--uba-muted)] max-w-2xl mx-auto mb-12" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}>
          From sourcing pristine water to delivering it to your doorstep — every number tells a story of trust, quality, and global impact.
        </motion.p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {['3M+', '150+', '100+', '30+'].map((v, i) => (
            <motion.div key={i} className="uba-card p-4 text-center" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.06 }} whileHover={{ y: -4 }}>
              <span className="text-lg font-bold text-[var(--uba-gold)]">{v}</span>
              <p className="text-xs text-[var(--uba-muted)] mt-1">{STAT_LABELS[i]}</p>
            </motion.div>
          ))}
        </div>

        <motion.h2 className="uba-section-title text-center mb-2" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Why Families Trust <span className="highlight">Usama Pure Life</span>
        </motion.h2>
        <motion.p className="text-center text-[var(--uba-muted)] mb-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.05 }}>
          Pure water backed by science, quality, and decades of trust.
        </motion.p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {TRUST_ITEMS.map((item, i) => (
            <motion.div key={item.title} className="uba-card p-6" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.08 * i }} whileHover={{ y: -5, scale: 1.02 }}>
              <div className="w-11 h-11 rounded-lg bg-[var(--uba-gold)] flex items-center justify-center mb-3">
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-[var(--uba-dark)] mb-1">{item.title}</h3>
              <p className="text-sm text-[var(--uba-muted)]">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.h2 className="uba-section-title text-center mb-2" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Our Complete <span className="highlight">Product Range</span>
        </motion.h2>
        <motion.p className="text-center text-[var(--uba-muted)] max-w-xl mx-auto mb-8" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Whether at home, in the office, or on the go — Usama has the right size for every moment.
        </motion.p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {PRODUCT_RANGE.map((s, i) => (
            <motion.div key={s} className="uba-card p-4 flex items-center gap-3" initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * i }} whileHover={{ x: 4 }}>
              <div className="w-9 h-9 rounded-full bg-[var(--uba-gold)] flex items-center justify-center shrink-0">
                <Droplets className="w-4 h-4 text-white" />
              </div>
              <span className="font-medium text-[var(--uba-dark)]">{s}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
