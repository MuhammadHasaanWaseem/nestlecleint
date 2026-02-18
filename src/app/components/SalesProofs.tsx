import { motion } from 'motion/react';

import img1 from '../Assets/new_edit3.width-600.format-jpeg.jpegquality-97.jpg';
import img2 from '../Assets/jm2sboggkagjdnrkb7kh.jpg';
import img3 from '../Assets/QF-Blog_Social-Media-Marketing_-Complete-Guide-for-Advertisers-2024_1920x1080.jpg';

const PROOFS = [
  { title: 'Private Label Clothing Brand', metric: '46,000 PKR', sub: 'Yesterday · 4 orders', image: img1 },
  { title: '367k PKR Last 7 Days Sale', metric: '367,500 PKR', sub: 'PL Clothing Brand', image: img2 },
  { title: 'Small High Ticket PL Clothing', metric: '530,500 PKR', sub: 'Month to date', image: img3 },
];

function ProofCard({ p }: { p: (typeof PROOFS)[0] }) {
  return (
    <motion.div
      className="uba-sales-proof-card uba-card p-5 overflow-hidden"
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <div className="aspect-video rounded-lg mb-4 bg-gray-100 overflow-hidden">
        <img src={p.image} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <p className="font-semibold text-[var(--uba-dark)] text-sm leading-tight">{p.title}</p>
      <p className="text-[var(--uba-gold)] font-bold mt-1">{p.metric}</p>
      <p className="text-xs text-[var(--uba-muted)] mt-1">{p.sub}</p>
    </motion.div>
  );
}

export function SalesProofs() {
  const proofsDupe = [...PROOFS, ...PROOFS];

  return (
    <motion.section
      id="sales-proofs"
      className="py-16 bg-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8">
        <motion.span
          className="uba-badge block w-fit mx-auto mb-2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          Sales Proofs
        </motion.span>
        <motion.h2
          className="uba-section-title text-center mb-2"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          Sales <span className="highlight">Proofs</span>
        </motion.h2>
        <motion.p
          className="text-center text-[var(--uba-muted)]"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Sales proofs from satisfied clients.
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
