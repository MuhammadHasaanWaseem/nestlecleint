import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { motion } from 'motion/react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      company: 'United States',
      content: 'Shopify Usama transformed our online presence completely. Within 6 months, our e-commerce revenue increased by 240%. Their team is professional, responsive, and truly understands digital marketing.',
      rating: 5,
    },
    {
      name: 'David Chen',
      role: 'Marketing Director',
      company: 'Singapore',
      content: 'Working with Shopify Usama was a game-changer for our brand. Their paid advertising strategies delivered an impressive 5x ROAS. I highly recommend them for any business serious about growth.',
      rating: 5,
    },
    {
      name: 'Emma Williams',
      role: 'Founder, Luxe Fashion',
      company: 'United Kingdom',
      content: 'The branding and web development services exceeded our expectations. Shopify Usama created a stunning website that perfectly captures our brand identity and converts visitors into customers.',
      rating: 5,
    },
    {
      name: 'Ahmed Al-Rashid',
      role: 'COO, RetailHub',
      company: 'UAE',
      content: 'Outstanding results! Their SEO and content strategy helped us dominate our market segment. Organic traffic increased by 320% in just 8 months. Truly world-class service.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it—hear from businesses we've helped transform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-gray-200 hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <motion.div 
                    className="flex items-start gap-4 mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Quote className="text-[var(--uba-gold)] flex-shrink-0" size={32} />
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-yellow-400" size={18} />
                      ))}
                    </div>
                  </motion.div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {testimonial.content}
                  </p>

                  <div className="flex items-center gap-4">
                    <motion.div 
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 bg-[var(--uba-gold)]/15 rounded-full flex items-center justify-center"
                    >
                      <span className="text-[var(--uba-gold)] font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </motion.div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role} • {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}