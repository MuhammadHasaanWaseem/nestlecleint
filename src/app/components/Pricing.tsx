import { Droplets, Package, Crown } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

const PLANS = [
  {
    name: 'Pure Life Essential',
    tag: 'For Everyday Hydration',
    icon: Droplets,
    desc: 'Our classic still water — pure, refreshing, and available in convenient sizes.',
    features: ['0.5L & 1.5L bottle options', '12-step purification', 'Essential mineral balance', 'Available in all retail stores'],
    price: 'From Rs. 40',
  },
  {
    name: 'Pure Life Premium',
    tag: 'Enhanced Hydration',
    icon: Package,
    recommended: true,
    desc: 'Premium mineral water with enhanced taste and elegant packaging.',
    features: ['Premium glass & PET bottles', 'Enhanced mineral profile', 'Sparkling & still options', 'Home & office delivery available'],
    price: 'From Rs. 80',
  },
  {
    name: 'Pure Life Home',
    tag: 'Bulk Home Supply',
    icon: Crown,
    desc: 'Convenient large-format bottles for families and offices.',
    features: ['5L & 19L gallon formats', 'Dispenser-compatible design', 'Scheduled home delivery', 'Subscription plans available'],
    price: 'From Rs. 250',
  },
];

export function Pricing() {
  return (
    <motion.section
      className="py-16 bg-gradient-to-b from-[#e0f7ff]/30 to-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2 className="uba-section-title text-center mb-2" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Our <span className="highlight">Product Lines</span>
        </motion.h2>
        <motion.p className="text-center text-[var(--uba-muted)] mb-10" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}>
          Choose the perfect hydration solution for your lifestyle
        </motion.p>
        <div className="grid md:grid-cols-3 gap-6">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`uba-card p-6 relative ${plan.recommended ? 'ring-2 ring-[var(--uba-gold)]' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.12 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {plan.recommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[var(--uba-gold)] text-white text-xs font-medium whitespace-nowrap">
                  ★ Most Popular
                </span>
              )}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-[var(--uba-dark)] text-lg">{plan.name}</h3>
                  <p className="text-sm text-[var(--uba-muted)]">{plan.tag}</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-[var(--uba-gold)]/15 flex items-center justify-center">
                  <plan.icon className="w-5 h-5 text-[var(--uba-gold)]" />
                </div>
              </div>
              <p className="text-sm text-[var(--uba-muted)] mb-4">{plan.desc}</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex gap-2 text-sm text-[var(--uba-dark)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--uba-gold)] shrink-0 mt-1.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="text-lg font-bold text-[var(--uba-gold)]">{plan.price}</p>
              <p className="text-xs text-[var(--uba-muted)] mb-4">Available nationwide</p>
              <Button className="uba-btn-primary w-full" asChild>
                <a href="#contact">Order Now</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
