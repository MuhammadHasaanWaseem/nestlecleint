import { Droplets, Package, Crown, Sparkles, Waves } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

import imgEssential from '../Assets/nestle2.jpg';
import imgPremium from '../Assets/waterbottles.jpg';
import imgHome from '../Assets/wtaerbottles2.jpg';

const PLANS = [
  {
    name: 'Pure Life Essential',
    tag: 'For Everyday Hydration',
    icon: Droplets,
    image: imgEssential,
    desc: 'Our classic still water — pure, refreshing, and available in convenient sizes.',
    features: ['0.5L & 1.5L bottle options', '12-step purification', 'Essential mineral balance', 'Available in all retail stores'],
    price: 'From Rs. 40',
  },
  {
    name: 'Pure Life Premium',
    tag: 'Enhanced Hydration',
    icon: Package,
    image: imgPremium,
    recommended: true,
    desc: 'Premium mineral water with enhanced taste and elegant packaging.',
    features: ['Premium glass & PET bottles', 'Enhanced mineral profile', 'Sparkling & still options', 'Home & office delivery available'],
    price: 'From Rs. 80',
  },
  {
    name: 'Pure Life Home',
    tag: 'Bulk Home Supply',
    icon: Crown,
    image: imgHome,
    desc: 'Convenient large-format bottles for families and offices.',
    features: ['5L & 19L gallon formats', 'Dispenser-compatible design', 'Scheduled home delivery', 'Subscription plans available'],
    price: 'From Rs. 250',
  },
];

export function Pricing() {
  // Floating droplets background
  const droplets = [...Array(8)].map((_, i) => ({
    id: i,
    size: 16 + i * 4,
    left: `${(i * 12) % 100}%`,
    delay: i * 0.3,
    duration: 5 + i,
  }));

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white">
      {/* Floating water droplets in background */}
      <div className="absolute inset-0 pointer-events-none">
        {droplets.map((drop) => (
          <motion.div
            key={drop.id}
            className="absolute text-blue-200/20"
            style={{ left: drop.left, top: '-10%' }}
            animate={{
              y: ['0vh', '100vh'],
              rotate: [0, 360],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: drop.duration,
              delay: drop.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <Droplets size={drop.size} />
          </motion.div>
        ))}
      </div>

      {/* Wave separator at top */}
      <div className="absolute top-0 left-0 right-0 rotate-180 text-blue-50">
        <svg viewBox="0 0 1440 120" fill="currentColor" preserveAspectRatio="none">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
              Our Product Lines
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect hydration solution for your lifestyle
          </p>
          <div className="flex justify-center mt-4">
            <Waves className="w-8 h-8 text-blue-400 animate-pulse" />
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Glass card container */}
              <div
                className={`relative h-full flex flex-col rounded-3xl overflow-hidden backdrop-blur-sm bg-white/70 border border-white/30 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${
                  plan.recommended ? 'ring-2 ring-blue-400 shadow-blue-200' : ''
                }`}
              >
                {/* Image section with overlay */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={plan.image}
                    alt={plan.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Recommended badge */}
                  {plan.recommended && (
                    <motion.div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 z-20"
                      initial={{ y: -10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm font-semibold shadow-lg">
                        <Sparkles className="w-4 h-4" />
                        Most Popular
                      </span>
                    </motion.div>
                  )}

                  {/* Header with icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>
                      <p className="text-sm text-blue-600">{plan.tag}</p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                      <plan.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4">{plan.desc}</p>

                  {/* Features list */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 mt-1.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price and CTA */}
                  <div className="mt-auto">
                    <p className="text-2xl font-bold text-blue-600 mb-1">{plan.price}</p>
                    <p className="text-xs text-gray-500 mb-4">Available nationwide</p>
                    <Button
                      className={`w-full rounded-full shadow-md hover:shadow-lg transition-all ${
                        plan.recommended
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white'
                          : 'bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                      }`}
                      asChild
                    >
                      <a href="#contact">Order Now</a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}