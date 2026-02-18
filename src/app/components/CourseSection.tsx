import { Check, Globe, TrendingUp, Trophy, Rocket, Zap } from 'lucide-react';
import { motion } from 'motion/react';

const TRUST_ITEMS = [
  { icon: Check, title: 'Built on Real Experience', desc: 'Not theory or copied content, proven systems from real stores' },
  { icon: Globe, title: 'Global Case Studies', desc: 'Learn from successful stores across multiple countries' },
  { icon: TrendingUp, title: 'Deep Meta Ads Training', desc: 'Complete Meta advertising mastery with practical examples' },
  { icon: Trophy, title: 'Structured & Beginner-Friendly', desc: 'Step-by-step pathway even if you know nothing' },
  { icon: Rocket, title: 'Earn Through Services', desc: 'Build your own global eCommerce service business' },
  { icon: Zap, title: 'Long-Term Skills', desc: 'Real expertise, not shortcuts or quick hacks' },
];

const BECOME_ITEMS = [
  'Worldwide Store Builder', 'Meta Ads Expert', 'Product Research Specialist',
  'Client & Service Provider', 'Scaling Specialist', 'Global Market Expert',
];

const STAT_LABELS = ['Stores Launched', 'Ad Campaigns', 'Revenue Generated', 'Coverage'];

export function CourseSection() {
  return (
    <motion.section
      id="course"
      className="py-16 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2 className="uba-section-title text-center mb-2" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Master Global <span className="highlight">E-Commerce Domination</span>
        </motion.h2>
        <motion.p className="text-center text-[var(--uba-muted)] max-w-2xl mx-auto mb-12" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}>
          Usama Shopify COURSE 2.6 is a complete, step-by-step eCommerce transformation program. Learn the exact systems used to launch and scale profitable stores worldwide from product research to Meta Ads to global targeting.
        </motion.p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {['500+', '500+', '$750M+', 'Global'].map((v, i) => (
            <motion.div key={i} className="uba-card p-4 text-center" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.06 }} whileHover={{ y: -4 }}>
              <span className="text-lg font-bold text-[var(--uba-gold)]">{v}</span>
              <p className="text-xs text-[var(--uba-muted)] mt-1">{STAT_LABELS[i]}</p>
            </motion.div>
          ))}
        </div>

        <motion.h2 className="uba-section-title text-center mb-2" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Why Students Trust <span className="highlight">Usama Shopify COURSE 2.6</span>
        </motion.h2>
        <motion.p className="text-center text-[var(--uba-muted)] mb-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.05 }}>Built on real experience, real systems, real results.</motion.p>
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
          What You&apos;ll <span className="highlight">Become</span>
        </motion.h2>
        <motion.p className="text-center text-[var(--uba-muted)] max-w-xl mx-auto mb-8" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Upon completing Usama Shopify COURSE 2.6, you&apos;ll transform into a complete eCommerce professional with global expertise.
        </motion.p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {BECOME_ITEMS.map((s, i) => (
            <motion.div key={s} className="uba-card p-4 flex items-center gap-3" initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * i }} whileHover={{ x: 4 }}>
              <div className="w-9 h-9 rounded-full bg-[var(--uba-gold)] flex items-center justify-center shrink-0">
                <span className="text-white text-sm">→</span>
              </div>
              <span className="font-medium text-[var(--uba-dark)]">{s}</span>
            </motion.div>
          ))}
        </div>

        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="uba-section-title mb-2">Why Learn From <span className="highlight">Muhammad Usama</span></h2>
          <p className="text-[var(--uba-muted)]">Learn directly from someone who has proven results.</p>
        </motion.div>
      </div>
    </motion.section>
  );
}
