import { MessageCircle } from 'lucide-react';
import { SocialIcon } from 'react-social-icons';
import { useState } from 'react';
import { motion } from 'motion/react';

const QUICK_LINKS_LEFT = [
  { label: 'Certifications', href: '#certifications' },
  { label: 'Sales Proof', href: '#sales-proofs' },
  { label: 'Meta Results', href: '#work-meta' },
  { label: 'Client Reviews', href: '#testimonials' },
];
const QUICK_LINKS_RIGHT = [
  { label: 'About Us', href: '#about' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Team', href: '#about-founder' },
  { label: 'Course', href: '#course' },
];

const SOCIAL_URLS = [
  'https://wa.me/923366789031',
  'https://instagram.com',
  'https://facebook.com',
  'https://linkedin.com',
];

export function Footer() {
  const [email, setEmail] = useState('');

  return (
    <motion.footer
      className="bg-[#1e293b] text-gray-300 pt-16 pb-8"
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
            <p className="text-sm max-w-xs">
              Building digital excellence with proven success across UAE, KSA, Pakistan, UK and more.
            </p>
            <p className="mt-3 text-sm">
              CEO & Founder: <span className="text-[var(--uba-gold)] font-semibold">Usama Amir Khosa</span>
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
                    className="block hover:text-[var(--uba-gold)] transition-colors"
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
                    className="block hover:text-[var(--uba-gold)] transition-colors"
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
              href="https://wa.me/923366789031"
              className="flex items-center gap-2 text-sm hover:text-[var(--uba-gold)] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 text-green-400 shrink-0" />
              WhatsApp Support
            </a>
            <p className="text-sm mt-2 text-gray-400">Response Time: Within 24 hours</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <p className="text-sm mb-3">Subscribe to our newsletter</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--uba-gold)] focus:border-transparent"
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
          className="pt-8 mt-10 border-t border-gray-600 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p>© 2026 Usama Shopify. All rights reserved.</p>
          <p>Website developed by Usama Shopify</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
