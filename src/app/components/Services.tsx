import { Droplets, ShieldCheck, Leaf, Package } from 'lucide-react';
import { motion } from 'motion/react';

const MODULES = [
  { icon: Droplets, title: 'Water Purification', items: [
    { name: '12-Step Filtration', desc: 'Multi-stage purification for ultimate purity' },
    { name: 'Mineral Enhancement', desc: 'Essential minerals added for great taste' },
    { name: 'UV & Ozone Treatment', desc: 'Advanced disinfection technology' },
    { name: 'Quality Testing', desc: 'Over 100 quality checks per batch' },
  ]},
  { icon: ShieldCheck, title: 'Quality Assurance', items: [
    { name: 'ISO 22000 Certified', desc: 'International food safety standard' },
    { name: 'Lab Testing', desc: 'Continuous monitoring at every stage' },
    { name: 'Source Protection', desc: 'Protected water sources worldwide' },
    { name: 'Traceability', desc: 'Full supply chain transparency' },
  ]},
  { icon: Leaf, title: 'Sustainability', items: [
    { name: 'Eco-Friendly Bottles', desc: 'Recyclable PET with reduced plastic' },
    { name: 'Carbon Neutral Goals', desc: 'Committed to net-zero by 2050' },
    { name: 'Water Stewardship', desc: 'Responsible water usage practices' },
    { name: 'Community Programs', desc: 'Access to clean water initiatives' },
  ]},
  { icon: Package, title: 'Product Range', items: [
    { name: '0.5L Bottles', desc: 'Perfect for on-the-go hydration' },
    { name: '1.5L Family Size', desc: 'Ideal for home and office' },
    { name: '5L & 19L Gallons', desc: 'Bulk supply for households' },
    { name: 'Sparkling Water', desc: 'Refreshing carbonated option' },
  ]},
];

export function Services() {
  return (
    <motion.section
      id="services"
      className="py-16 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.p className="text-center text-[var(--uba-muted)] mb-2" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          From source to bottle — excellence at every step
        </motion.p>
        <motion.h2 className="uba-section-title text-center mb-2" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}>
          What Makes Us <span className="highlight">Different</span>
        </motion.h2>
        <motion.p className="text-center text-[var(--uba-muted)] mb-12" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          Nestlé Pure Life stands apart through quality, sustainability, and innovation
        </motion.p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 product-perspective">
          {MODULES.map((m, i) => (
            <motion.div
              key={m.title}
              className="product-card-3d p-6"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--uba-gold)] flex items-center justify-center mb-4">
                <m.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-[var(--uba-dark)] mb-4">{m.title}</h3>
              <ul className="space-y-3">
                {m.items.map((item) => (
                  <li key={item.name}>
                    <span className="flex gap-2 text-sm">
                      <span className="text-[var(--uba-gold)]">✓</span>
                      <span className="font-medium text-[var(--uba-dark)]">{item.name}</span>
                    </span>
                    <p className="text-xs text-[var(--uba-muted)] pl-5">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
