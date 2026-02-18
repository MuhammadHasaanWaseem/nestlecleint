import { motion } from 'motion/react';
import { Droplets, ShieldCheck, Truck, Heart } from 'lucide-react';

export function Process() {
  const steps = [
    {
      icon: Droplets,
      number: '01',
      title: 'Source & Collect',
      description: 'We source water from carefully selected and protected natural springs and underground wells, ensuring the purest starting point.',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: ShieldCheck,
      number: '02',
      title: 'Purify & Test',
      description: 'Our 12-step purification process includes filtration, UV treatment, ozone disinfection, and over 100 quality tests per batch.',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Truck,
      number: '03',
      title: 'Bottle & Deliver',
      description: 'State-of-the-art bottling lines ensure hygiene and freshness. Our distribution network delivers to 150+ countries worldwide.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Heart,
      number: '04',
      title: 'Care & Sustain',
      description: 'We invest in community water access programs, eco-friendly packaging, and responsible water stewardship for a better future.',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#e0f7ff]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="uba-section-title mb-4">
            From Source to <span className="highlight">Your Glass</span>
          </h2>
          <p className="text-lg text-[var(--uba-muted)] max-w-2xl mx-auto">
            Our journey to bring you the purest water — every step designed with care and precision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[var(--uba-gold)]/30 to-transparent -z-10" />
              )}

              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full"
              >
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[var(--uba-gold)] to-[var(--uba-dark)] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold">{step.number}</span>
                </div>

                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-6`}
                >
                  <step.icon className="text-white" size={32} />
                </motion.div>

                <h3 className="text-xl font-bold text-[var(--uba-dark)] mb-3">{step.title}</h3>
                <p className="text-[var(--uba-muted)] leading-relaxed">{step.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-[var(--uba-gold)] to-[var(--uba-dark)] rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Pure Water. Pure Commitment.
          </h3>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            Every bottle is a promise — of quality, safety, and sustainability. Trust Nestlé Pure Life for your family&apos;s hydration needs.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-blue-100">Quality Tested</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">12-Step</div>
              <div className="text-blue-100">Purification</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">150+</div>
              <div className="text-blue-100">Countries</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
