import { Trophy, Rocket, TrendingUp, Award } from 'lucide-react';
import { motion } from 'motion/react';

const ITEMS = [
  { icon: Trophy, value: '500+', label: 'Shopify Stores Launched' },
  { icon: Rocket, value: '500+', label: 'Meta Ad Campaigns' },
  { icon: TrendingUp, value: '$750M+', label: 'Client Revenue Generated' },
  { icon: Award, value: 'Meta', label: 'Verified Expert' },
];

export function Stats() {
  return (
    <motion.section
      id="why-us"
      className="py-16 bg-gradient-to-b from-white to-[#fefce8]/30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          className="uba-section-title text-center mb-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The <span className="highlight">Usama Shopify Promise</span>
        </motion.h2>
        <motion.p
          className="text-center text-[var(--uba-muted)] max-w-xl mx-auto mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Practical systems, proven results. Follow the program, do the work, and build a repeatable eCommerce business.
        </motion.p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.label}
              className="uba-card p-6 text-center"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -6, scale: 1.03 }}
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[var(--uba-gold)]/15 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-[var(--uba-gold)]" />
              </div>
              <span className="block text-xl font-bold text-[var(--uba-gold)]">{item.value}</span>
              <p className="text-sm text-[var(--uba-muted)] mt-1">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
