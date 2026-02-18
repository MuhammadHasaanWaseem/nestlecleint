import { motion } from 'motion/react';
import { Search, Lightbulb, Rocket, BarChart3 } from 'lucide-react';

export function Process() {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Discovery & Research',
      description: 'We begin by deeply understanding your business, target audience, competitors, and market landscape. Our comprehensive research phase ensures we build strategies on solid foundations.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Lightbulb,
      number: '02',
      title: 'Strategy & Planning',
      description: 'Armed with insights, we craft data-driven strategies tailored to your unique goals. Every plan is customized, measurable, and designed to deliver maximum ROI.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Rocket,
      number: '03',
      title: 'Implementation & Launch',
      description: 'Our expert team brings the strategy to life with flawless execution. From design to development to campaign launches, we ensure every detail is perfect.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: BarChart3,
      number: '04',
      title: 'Optimize & Scale',
      description: 'We continuously monitor, analyze, and optimize your campaigns. Using real-time data, we refine strategies to maximize performance and scale your success.',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Proven Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A systematic approach that transforms ambitious goals into measurable results
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
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent -z-10" />
              )}

              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold">{step.number}</span>
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-6`}
                >
                  <step.icon className="text-white" size={32} />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-blue-600 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            Our process is designed to minimize risk and maximize results. Every step is transparent, 
            collaborative, and focused on achieving your business objectives.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-blue-100">Transparent</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">Agile</div>
              <div className="text-blue-100">Methodology</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">Regular</div>
              <div className="text-blue-100">Updates</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
