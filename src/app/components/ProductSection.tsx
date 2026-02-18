import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Droplets, ShoppingCart, Waves, Sparkles } from 'lucide-react';

import img1 from '../Assets/waterbottles.jpg';
import img2 from '../Assets/nestle2.jpg';
import img3 from '../Assets/nestle3.jpg';
import img4 from '../Assets/wtaerbottles2.jpg';
import img5 from '../Assets/viewwater.jpg';
import img6 from '../Assets/drinking2.jpg';

const PRODUCTS = [
  { name: 'Pure Life 0.5L & 1.5L', tag: 'On-the-go', price: 'From Rs. 40', image: img1, desc: 'Perfect for daily hydration' },
  { name: 'Pure Life 1.5L Pack', tag: 'Family favourite', price: 'From Rs. 120', image: img2, desc: 'Best seller nationwide' },
  { name: 'Premium Still & Sparkling', tag: 'Premium range', price: 'From Rs. 80', image: img3, desc: 'Enhanced mineral taste' },
  { name: 'Bulk Bottles Range', tag: 'Office & home', price: 'From Rs. 250', image: img4, desc: '5L & 19L options' },
  { name: 'Natural Source Water', tag: 'Pure source', price: 'From Rs. 60', image: img5, desc: '12-step purified' },
  { name: 'Healthy Hydration', tag: 'Everyday choice', price: 'From Rs. 45', image: img6, desc: 'Trusted by millions' },
];

function ProductCard({ product, index }: { product: typeof PRODUCTS[0]; index: number }) {
  return (
    <motion.div
      className="group relative h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative h-full flex flex-col rounded-3xl overflow-hidden backdrop-blur-sm bg-white/70 border border-white/30 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
        {/* Image container with zoom effect */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          {/* Tag with icon */}
          <div className="flex items-center gap-1.5 mb-2">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
              {product.tag}
            </span>
          </div>

          <h3 className="text-lg font-bold text-gray-800 mb-1">{product.name}</h3>
          <p className="text-sm text-gray-600 mb-3">{product.desc}</p>

          {/* Price and CTA */}
          <div className="mt-auto">
            <p className="text-xl font-bold text-blue-600 mb-3">{product.price}</p>
            <Button
              className="w-full rounded-full bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:shadow-lg transition-all gap-2"
              size="sm"
              asChild
            >
              <a href="#contact">
                <ShoppingCart className="w-4 h-4" />
                Order Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProductSection() {
  // Floating droplets background
  const droplets = [...Array(8)].map((_, i) => ({
    id: i,
    size: 16 + i * 4,
    left: `${(i * 12) % 100}%`,
    delay: i * 0.2,
    duration: 5 + i,
  }));

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white">
      {/* Floating water droplets */}
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 backdrop-blur-sm text-blue-700 text-sm font-medium mb-4 border border-white/50">
            <Droplets className="w-4 h-4" />
            Our Range
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
              Products With Pure Care
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every bottle is backed by our 12-step purification and quality promise.
          </p>
          <div className="flex justify-center mt-4">
            <Waves className="w-8 h-8 text-blue-400 animate-pulse" />
          </div>
        </motion.div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Button
            className="px-8 py-6 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white text-lg shadow-lg hover:shadow-xl transition-all"
            asChild
          >
            <a href="#contact">View All Products & Bulk Orders</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}