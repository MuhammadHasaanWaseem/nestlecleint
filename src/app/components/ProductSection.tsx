import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Droplets, ShoppingCart, Sparkles } from 'lucide-react';

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
  // Generate random bubble positions for each card
  const bubbles = [...Array(5)].map((_, i) => ({
    size: 8 + i * 4,
    left: `${20 + i * 15}%`,
    delay: i * 0.2,
  }));

  return (
    <motion.div
      className="group relative h-full perspective-1000"
      initial={{ opacity: 0, y: 30, rotateX: -5 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ scale: 1.02, rotateX: 2, transition: { duration: 0.2 } }}
    >
      {/* Glass card with wave bottom */}
      <div className="relative h-full flex flex-col rounded-[2.5rem] overflow-hidden backdrop-blur-md bg-white/40 border border-white/50 shadow-2xl transition-all duration-500 group-hover:shadow-blue-200/50">
        {/* Animated water wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none">
          <svg
            viewBox="0 0 1440 320"
            className="absolute bottom-0 w-full h-16 text-blue-200/40"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              fillOpacity="0.5"
              d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,181.3C672,181,768,203,864,208C960,213,1056,203,1152,176C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            >
              <animate
                attributeName="d"
                dur="10s"
                values="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,181.3C672,181,768,203,864,208C960,213,1056,203,1152,176C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                       M0,224L48,213.3C96,203,192,181,288,176C384,171,480,181,576,197.3C672,213,768,235,864,224C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                       M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,181.3C672,181,768,203,864,208C960,213,1056,203,1152,176C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>

        {/* Floating bubbles inside card */}
        <div className="absolute inset-0 pointer-events-none">
          {bubbles.map((bubble, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/30 backdrop-blur-sm"
              style={{
                width: bubble.size,
                height: bubble.size,
                left: bubble.left,
                bottom: '-10%',
              }}
              animate={{
                y: ['0%', '-500%'],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 6 + i,
                delay: bubble.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* Image container with zoom and water reflection overlay */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent mix-blend-overlay" />
        </div>

        {/* Content */}
        <div className="relative z-10 p-5 flex flex-col flex-1">
          <div className="flex items-center gap-1.5 mb-2">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
              {product.tag}
            </span>
          </div>

          <h3 className="text-lg font-bold text-gray-800 mb-1">{product.name}</h3>
          <p className="text-sm text-gray-600 mb-3">{product.desc}</p>

          <div className="mt-auto">
            <p className="text-xl font-bold text-blue-600 mb-3">{product.price}</p>
            <Button
              className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all gap-2 border-2 border-white/50"
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
  // Background ripple effect
  const ripples = [...Array(3)].map((_, i) => ({
    id: i,
    size: 200 + i * 100,
    left: `${30 + i * 20}%`,
    delay: i * 2,
  }));

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Large animated ripples in background */}
      <div className="absolute inset-0 pointer-events-none">
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="absolute rounded-full border-2 border-blue-200/20"
            style={{
              width: ripple.size,
              height: ripple.size,
              left: ripple.left,
              top: '50%',
              x: '-50%',
              y: '-50%',
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 8,
              delay: ripple.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Floating droplets (small) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-200/20"
            style={{
              left: `${(i * 8) % 100}%`,
              top: `${(i * 5) % 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i,
              delay: i * 0.3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Droplets size={12 + i} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/70 backdrop-blur-md text-blue-700 text-sm font-medium mb-4 border border-white/60 shadow-lg">
            <Droplets className="w-4 h-4" />
            Liquid Fresh Collection
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Drop by Drop, Pure Joy
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each bottle carries the essence of nature’s finest, purified through 12 steps to deliver crisp, clean hydration.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Button
            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white text-lg shadow-xl hover:shadow-2xl transition-all border-2 border-white/50"
            asChild
          >
            <a href="#contact">Dive Into Full Range</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}