import { Phone, Droplets } from 'lucide-react';
import { SocialIcon } from 'react-social-icons';
import { useState } from 'react';
import { motion } from 'motion/react';

const QUICK_LINKS_LEFT = [
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Quality', href: '#quality' },
  { label: 'Certifications', href: '#certifications' },
];
const QUICK_LINKS_RIGHT = [
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Community', href: '#community' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const SOCIAL_URLS = [
  'https://facebook.com/nestlepurelife',
  'https://instagram.com/nestlepurelife',
  'https://twitter.com/nestlepurelife',
  'https://linkedin.com/company/nestle',
];

export function Footer() {
  const [email, setEmail] = useState('');

  return (
    <motion.footer
      className="bg-[#023E8A] text-gray-300 pt-16 pb-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Droplets className="w-6 h-6 text-[var(--uba-gold-light)]" />
              <span className="text-white font-bold text-lg">Usama Pure Life</span>
            </div>
            <p className="text-sm max-w-xs">
              Pure water for a healthier life. Trusted by millions of families in over 150 countries worldwide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
              <div className="space-y-2">
                {QUICK_LINKS_LEFT.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="block hover:text-[var(--uba-gold-light)] transition-colors"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
              <div className="space-y-2">
                {QUICK_LINKS_RIGHT.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="block hover:text-[var(--uba-gold-light)] transition-colors"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * (i + 4) }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <a
              href="tel:+923001234567"
              className="flex items-center gap-2 text-sm hover:text-[var(--uba-gold-light)] transition-colors"
            >
              <Phone className="w-5 h-5 text-[var(--uba-gold-light)] shrink-0" />
              Customer Helpline
            </a>
            <p className="text-sm mt-2 text-gray-400">Available 24/7 for your queries</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Stay Connected</h3>
            <p className="text-sm mb-3">Subscribe for updates & offers</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--uba-gold-light)] focus:border-transparent"
              />
              <motion.button
                type="submit"
                className="px-4 py-3 rounded-lg bg-[var(--uba-gold)] hover:bg-[var(--uba-gold)]/90 text-white text-sm font-semibold transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
            <div className="flex gap-3 mt-4">
              {SOCIAL_URLS.map((url) => (
                <motion.a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={url}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SocialIcon url={url} style={{ width: 40, height: 40 }} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="pt-8 mt-10 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p>© 2026 Usama Pure Life. All rights reserved.</p>
          <p>A Usama Waters Brand</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
