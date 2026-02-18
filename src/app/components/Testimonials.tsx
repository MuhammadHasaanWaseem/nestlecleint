import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { motion } from 'motion/react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Ayesha Khan',
      role: 'Mother & Homemaker',
      company: 'Lahore, Pakistan',
      content: 'Usama Pure Life is the only water brand I trust for my family. The taste is always clean and fresh, and I know every bottle meets the highest quality standards. My children love it!',
      rating: 5,
    },
    {
      name: 'Ahmed Al-Mansoor',
      role: 'Hotel Manager',
      company: 'Dubai, UAE',
      content: 'We serve Usama Pure Life exclusively at our hotel. Our guests consistently praise the water quality, and Usama\'s reliable delivery keeps us stocked. A truly premium brand.',
      rating: 5,
    },
    {
      name: 'Dr. Sarah Williams',
      role: 'Nutritionist',
      company: 'London, UK',
      content: 'I recommend Usama Pure Life to my clients because of their rigorous 12-step purification process and balanced mineral content. It\'s water you can genuinely trust.',
      rating: 5,
    },
    {
      name: 'Bilal Hussain',
      role: 'Office Manager',
      company: 'Karachi, Pakistan',
      content: 'The 19L home delivery service is a lifesaver for our office. The water is consistently pure, the delivery is always on time, and the pricing is very competitive. Highly recommended!',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-[#e0f7ff]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="uba-section-title mb-4">
            What People <span className="highlight">Say</span>
          </h2>
          <p className="text-lg text-[var(--uba-muted)] max-w-2xl mx-auto">
            Hear from families, professionals, and businesses who trust Usama Pure Life every day.
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
                  <motion.div className="flex items-start gap-4 mb-4" whileHover={{ scale: 1.05 }}>
                    <Quote className="text-[var(--uba-gold)] flex-shrink-0" size={32} />
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-[var(--uba-gold-light)] fill-[var(--uba-gold)]" size={18} />
                      ))}
                    </div>
                  </motion.div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.content}</p>

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
