import { Trophy, Rocket, TrendingUp, Award } from 'lucide-react';
import { motion } from 'motion/react';

const STATS = [
  { icon: Trophy, value: '500+', label: 'Shopify Stores Launched' },
  { icon: Rocket, value: '500+', label: 'Meta Ad Campaigns' },
  { icon: TrendingUp, value: '$750M+', label: 'Client Revenue Generated' },
  { icon: Award, value: 'Meta', label: 'Verified Expert' },
];

export function GlobalPresence() {
  return (
    <motion.section
      id="about"
      className="py-16 md:py-24 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.h2
              className="uba-section-title mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Building <span className="highlight">Digital Excellence.</span>
            </motion.h2>
            <motion.p
              className="text-[var(--uba-muted)] mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              With 5+ years of global eCommerce experience, we specialize in building scalable brands. We&apos;ve launched 500+ Shopify stores and managed 500+ Meta Ads campaigns, delivering real results across UAE, KSA, Pakistan, and UK.
            </motion.p>
            <motion.p
              className="text-[var(--uba-muted)] mb-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              Our approach is hands-on and results-driven, led personally with CEO-level dedication. From product research to profit scaling, we handle everything. With a proven 99%+ success rate and data-backed strategies, we ensure your brand is positioned for long-term success.
            </motion.p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '5+', label: 'Years Experience' },
                { value: '500+', label: 'Projects Completed' },
                { value: '400+', label: 'Happy Clients' },
                { value: '99%', label: 'Success Rate' },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  className="uba-card p-4 text-center"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                  whileHover={{ scale: 1.03, y: -2 }}
                >
                  <span className="text-xl font-bold text-[var(--uba-gold)]">{s.value}</span>
                  <p className="text-sm text-[var(--uba-muted)] mt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                className="uba-card p-6 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[var(--uba-gold)]/15 flex items-center justify-center">
                  <s.icon className="w-6 h-6 text-[var(--uba-gold)]" />
                </div>
                <span className="block text-xl font-bold text-[var(--uba-gold)]">{s.value}</span>
                <p className="text-sm text-[var(--uba-muted)] mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          className="mt-16 p-6 rounded-xl bg-slate-100/80 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-[var(--uba-dark)] font-medium">
            You don&apos;t waste years learning through trial & error.
          </p>
          <p className="text-[var(--uba-dark)] font-bold mt-1">
            You learn what actually works — proven systems used by professionals globally.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
