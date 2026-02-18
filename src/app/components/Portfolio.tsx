import { motion } from 'motion/react';
import { Droplets, Globe, Heart, ExternalLink } from 'lucide-react';
import { Card, CardContent } from './ui/card';

import img1 from '../Assets/waterbottles.jpg';
import img2 from '../Assets/nestle2.jpg';
import img3 from '../Assets/viewwater.jpg';
import img4 from '../Assets/drinking2.jpg';

const CASE_STUDIES = [
  {
    title: 'Clean Water for Rural Pakistan',
    category: 'Community Impact',
    description: 'Nestlé installed water purification plants in 50+ rural villages, providing free access to clean drinking water for over 200,000 people.',
    results: [
      { label: 'Villages Served', value: '50+', icon: Globe },
      { label: 'People Impacted', value: '200K+', icon: Heart },
      { label: 'Daily Liters', value: '100K+', icon: Droplets },
    ],
    industry: 'Social Impact',
    image: img1,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Sustainable Packaging Initiative',
    category: 'Sustainability',
    description: 'Reduced plastic usage by 30% across all bottle formats through innovative lightweight packaging design.',
    results: [
      { label: 'Plastic Reduced', value: '30%', icon: Droplets },
      { label: 'Bottles Recycled', value: '5M+', icon: Globe },
      { label: 'Carbon Offset', value: '40%', icon: Heart },
    ],
    industry: 'Environment',
    image: img2,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'School Hydration Program',
    category: 'Health & Wellness',
    description: 'Partnered with 500+ schools to provide clean drinking water and promote healthy hydration habits among children.',
    results: [
      { label: 'Schools', value: '500+', icon: Globe },
      { label: 'Students', value: '150K+', icon: Heart },
      { label: 'Water Stations', value: '1,200+', icon: Droplets },
    ],
    industry: 'Education',
    image: img3,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Middle East Expansion',
    category: 'Global Growth',
    description: 'Successfully launched premium water products across 12 new markets in the Middle East and North Africa region.',
    results: [
      { label: 'New Markets', value: '12', icon: Globe },
      { label: 'Sales Growth', value: '180%', icon: Droplets },
      { label: 'Brand Recognition', value: '95%', icon: Heart },
    ],
    industry: 'Business Growth',
    image: img4,
    gradient: 'from-orange-500 to-amber-500',
  },
];

export function Portfolio() {
  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="uba-section-title mb-2">Our <span className="highlight">Impact Stories</span></h2>
          <p className="text-lg text-[var(--uba-muted)] max-w-2xl mx-auto">
            Real initiatives making a real difference — from community programs to global sustainability efforts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-gray-200 hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full">
                <div className={`h-1.5 bg-gradient-to-r ${study.gradient}`} />
                <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur text-gray-700 rounded-full text-xs font-medium">
                    {study.category}
                  </span>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[var(--uba-dark)] mb-1">{study.title}</h3>
                  <p className="text-sm text-[var(--uba-muted)] mb-4">{study.industry}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{study.description}</p>
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-200">
                    {study.results.map((result, idx) => (
                      <motion.div key={idx} whileHover={{ scale: 1.05 }} className="text-center">
                        <result.icon className="mx-auto mb-1 text-[var(--uba-gold)]" size={18} />
                        <div className="text-lg font-bold text-gray-900">{result.value}</div>
                        <div className="text-xs text-gray-600">{result.label}</div>
                      </motion.div>
                    ))}
                  </div>
                  <motion.a
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--uba-gold)] hover:underline"
                    whileHover={{ x: 4 }}
                  >
                    <ExternalLink size={16} /> Learn more
                  </motion.a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
