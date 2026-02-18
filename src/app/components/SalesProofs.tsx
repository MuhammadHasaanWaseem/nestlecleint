import { motion } from 'motion/react';

import img1 from '../Assets/nestle2.jpg';
import img2 from '../Assets/nestle3.jpg';
import img3 from '../Assets/drinking2.jpg';
import img4 from '../Assets/drinkiung.jpg';

const PROOFS = [
  { title: 'Pure Life 1.5L — Family Favourite', metric: 'Best Seller', sub: 'Trusted across Pakistan', image: img1 },
  { title: 'Premium Bottled Water Range', metric: '#1 Brand', sub: 'In bottled water category', image: img2 },
  { title: 'Healthy Hydration for Everyone', metric: '150+ Countries', sub: 'Global availability', image: img3 },
  { title: 'Clean Water, Better Lives', metric: '1B+ Bottles', sub: 'Delivered annually', image: img4 },
];

function ProofCard({ p }: { p: (typeof PROOFS)[0] }) {
  return (
    <motion.div
      className="product-showcase-card p-0 overflow-hidden"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <div className="product-card-image aspect-video bg-gray-100">
        <img src={p.image} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="p-5">
        <p className="font-semibold text-[var(--uba-dark)] text-sm leading-tight">{p.title}</p>
        <p className="text-[var(--uba-gold)] font-bold mt-1 text-lg">{p.metric}</p>
        <p className="text-xs text-[var(--uba-muted)] mt-1">{p.sub}</p>
      </div>
    </motion.div>
  );
}

export function SalesProofs() {
  const proofsDupe = [...PROOFS, ...PROOFS];

  return (
    <motion.section
      id="sales-proofs"
      className="py-20 bg-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-10">
        <motion.span
          className="uba-badge block w-fit mx-auto mb-2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          Our Products
        </motion.span>
        <motion.h2
          className="uba-section-title text-center mb-2"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          Product <span className="highlight">Showcase</span>
        </motion.h2>
        <motion.p
          className="text-center text-[var(--uba-muted)]"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          See what makes Nestlé Pure Life the choice of millions.
        </motion.p>
      </div>
      <div className="uba-scroll-row-wrap">
        <div className="uba-scroll-row uba-scroll-row--left uba-scroll-row-sales">
          {proofsDupe.map((p, i) => (
            <ProofCard key={`proof-${i}`} p={p} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
