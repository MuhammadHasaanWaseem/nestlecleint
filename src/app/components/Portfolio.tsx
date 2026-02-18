import { motion } from 'motion/react';
import { TrendingUp, ShoppingCart, Users, ExternalLink } from 'lucide-react';
import { Card, CardContent } from './ui/card';

import qfBlogImg from '../Assets/QF-Blog_Social-Media-Marketing_-Complete-Guide-for-Advertisers-2024_1920x1080.jpg';
import newEditImg from '../Assets/new_edit3.width-600.format-jpeg.jpegquality-97.jpg';
import jm2Img from '../Assets/jm2sboggkagjdnrkb7kh.jpg';
import imagesJpeg from '../Assets/images.jpeg';

const CASE_STUDIES = [
  {
    title: 'Luxury Fashion Brand',
    category: 'E-commerce & Branding',
    description: 'Complete Shopify store redesign with focus on luxury user experience and conversion optimization.',
    results: [
      { label: 'Revenue Increase', value: '240%', icon: TrendingUp },
      { label: 'Conversion Rate', value: '4.2%', icon: ShoppingCart },
      { label: 'AOV Growth', value: '65%', icon: Users },
    ],
    industry: 'Fashion & Retail',
    image: qfBlogImg,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Tech SaaS Platform',
    category: 'Digital Marketing & SEO',
    description: 'Comprehensive digital marketing strategy focused on lead generation and brand awareness.',
    results: [
      { label: 'Lead Growth', value: '380%', icon: TrendingUp },
      { label: 'Organic Traffic', value: '520%', icon: Users },
      { label: 'Cost Per Lead', value: '-45%', icon: ShoppingCart },
    ],
    industry: 'Technology & SaaS',
    image: newEditImg,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Health & Wellness Store',
    category: 'Shopify Development',
    description: 'Custom Shopify Plus store with subscription model, loyalty program, and personalized shopping.',
    results: [
      { label: 'Monthly Revenue', value: '$250K+', icon: ShoppingCart },
      { label: 'Subscribers', value: '12K+', icon: Users },
      { label: 'Retention Rate', value: '85%', icon: TrendingUp },
    ],
    industry: 'Health & Wellness',
    image: jm2Img,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'International Electronics',
    category: 'Paid Advertising',
    description: 'Multi-channel paid advertising strategy across Google, Meta, and programmatic networks.',
    results: [
      { label: 'ROAS', value: '6.8x', icon: TrendingUp },
      { label: 'Ad Spend', value: '$500K+', icon: ShoppingCart },
      { label: 'New Customers', value: '25K+', icon: Users },
    ],
    industry: 'Consumer Electronics',
    image: imagesJpeg,
    gradient: 'from-orange-500 to-red-500',
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
          <h2 className="uba-section-title mb-2">Success Stories</h2>
          <p className="text-lg text-[var(--uba-muted)] max-w-2xl mx-auto">
            Real results from real businesses. See how we've helped brands achieve exceptional growth.
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
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="text-center"
                      >
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
                    <ExternalLink size={16} /> View case study
                  </motion.a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-[var(--uba-muted)] mb-6">Want to see more case studies and detailed breakdowns?</p>
          <motion.a
            href="#contact"
            className="uba-btn-primary inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Portfolio
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
