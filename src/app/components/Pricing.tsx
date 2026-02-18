import { GraduationCap, Rocket, Trophy } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

const PLANS = [
  { name: 'Usama Shopify BASIC', tag: 'Perfect For Independent Learners', icon: GraduationCap, desc: 'A practical, self-paced program for independent learners.', features: ['Full A to Z Course Access (Store → Ads → Dropshipping → Suppliers → Setup)', '1 Week WhatsApp Support (voice notes + text only)', 'No calls included', 'Perfect for students who want to learn independently with light support'], price: '15,000 PKR' },
  { name: 'Usama Shopify 2.6', tag: 'Great for guidance & mentorship', icon: Rocket, recommended: true, desc: 'Full A to Z from zero to expert level with longer mentorship.', features: ['Full A to Z Course Access (from zero to expert level)', '4 Weeks WhatsApp Support', '5 Winning Products Provided', 'Great for students who want guidance, product direction and longer mentorship'], price: 'Contact for price' },
  { name: 'Usama Shopify ELITE', tag: 'Best for serious learners', icon: Trophy, desc: 'Complete system training with premium support.', features: ['Full A to Z Course Access (complete system training)', '6 Months WhatsApp Support', '40+ Winning Products Provided', 'Best for serious learners who want long-term mentorship and premium support'], price: 'Contact for price' },
];

export function Pricing() {
  return (
    <motion.section
      className="py-16 bg-gradient-to-b from-gray-50/50 to-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
                  ★ Most Recommended
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
              <p className="text-xs text-[var(--uba-muted)] mb-4">Lifetime Membership</p>
              <p className="text-xs text-[var(--uba-muted)] mb-4">Contact via WhatsApp for details</p>
              <p className="text-xs text-red-600 font-medium mb-4">NOTE: To enroll, pay 50% at enrollment, remaining 50% on launch day.</p>
              <Button className="uba-btn-primary w-full" asChild>
                <a href="https://wa.me/923366789031" target="_blank" rel="noopener noreferrer">Contact via WhatsApp</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
