import { Lightbulb, Rocket, ShoppingBag, Building2 } from 'lucide-react';
import { motion } from 'motion/react';

const MODULES = [
  { icon: Lightbulb, title: 'Product Research Mastery', items: [
    { name: 'Trending Product Discovery', desc: 'Find viral products before competitors' },
    { name: 'Niche Analysis & Validation', desc: 'Deep market research techniques' },
    { name: 'Competitor Benchmarking', desc: 'Analyze competitor strategies' },
    { name: 'Demand Forecasting', desc: 'Predict market trends accurately' },
  ]},
  { icon: Rocket, title: 'Meta Ads Optimization', items: [
    { name: 'Campaign Architecture', desc: 'Advanced audience segmentation' },
    { name: 'Creative Testing Framework', desc: 'High-converting ad creatives' },
    { name: 'Pixel Setup & Tracking', desc: 'Data driven measurement' },
    { name: 'ROAS Scaling Strategies', desc: 'Sustainable profitable growth' },
  ]},
  { icon: ShoppingBag, title: 'Shopify Store Optimization', items: [
    { name: 'Store Design Principles', desc: 'Psychology-driven conversions' },
    { name: 'Funnel Optimization', desc: 'Minimize drop-off' },
    { name: 'Product Page Mastery', desc: 'High-converting pages & design' },
    { name: 'Analytics & Reporting', desc: 'Data-driven decisions' },
  ]},
  { icon: Building2, title: 'Dropshipping Account Setup', items: [
    { name: 'Platform & Account Creation', desc: 'Shopify, Meta, business manager setup' },
    { name: 'Payments & Verification', desc: 'Payouts, policies, verification approvals' },
    { name: 'Suppliers & Fulfillment', desc: 'Product sourcing and fulfillment workflows' },
    { name: 'Testing & Quality Checks', desc: 'Order flow, returns, and shipping tests' },
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
          Complete system covering everything from product research to global scaling
        </motion.p>
        <motion.h2 className="uba-section-title text-center mb-2" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}>
          What You&apos;ll <span className="highlight">Master</span>
        </motion.h2>
        <motion.p className="text-center text-[var(--uba-muted)] mb-12" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          Complete system covering everything from product research to global scaling
        </motion.p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MODULES.map((m, i) => (
            <motion.div
              key={m.title}
              className="uba-card p-6"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
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
