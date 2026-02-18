import { Package, Truck, Bike, ShoppingBag, Plane, ShoppingCart, Globe, Building2, Store } from 'lucide-react';
import ReactCountryFlag from 'react-country-flag';
import { motion } from 'motion/react';

const ROW1 = [
  { label: 'AliExpress Dropshipping', name: 'AliExpress', Icon: Package },
  { label: 'Zambeel', name: 'Zambeel', Icon: Building2 },
  { label: 'Markaz', name: 'Markaz', Icon: Store },
  { label: 'Shopify', name: 'Shopify', Icon: ShoppingBag },
  { label: 'DHL Express', name: 'DHL', Icon: Truck },
  { label: 'Gojek', name: 'Gojek', Icon: Bike },
  { label: 'Express Delivery', name: 'Express', Icon: Plane },
  { label: 'WooCommerce', name: 'WooCommerce', Icon: ShoppingCart },
  { label: 'Meta', name: 'Meta', Icon: Globe },
];

const COUNTRIES = [
  { code: 'GB', label: 'UK' },
  { code: 'US', label: 'United States' },
  { code: 'SA', label: 'Saudi Arabia' },
  { code: 'PK', label: 'Pakistan' },
  { code: 'DE', label: 'Germany' },
  { code: 'AE', label: 'UAE' },
  { code: 'FR', label: 'France' },
  { code: 'IT', label: 'Italy' },
  { code: 'ES', label: 'Spain' },
  { code: 'NL', label: 'Netherlands' },
  { code: 'CA', label: 'Canada' },
  { code: 'AU', label: 'Australia' },
  { code: 'SG', label: 'Singapore' },
  { code: 'IN', label: 'India' },
  { code: 'MY', label: 'Malaysia' },
];

function ServiceCard({ item }: { item: (typeof ROW1)[0] }) {
  return (
    <motion.div
      className="uba-partner-card"
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <item.Icon className="w-8 h-8 mb-2 text-[var(--uba-gold)]" />
      <span className="font-bold text-[var(--uba-dark)] text-sm">{item.name}</span>
      <span className="text-xs text-[var(--uba-muted)] text-center px-2 mt-0.5">{item.label}</span>
    </motion.div>
  );
}

function CountryCard({ item }: { item: (typeof COUNTRIES)[0] }) {
  return (
    <motion.div
      className="uba-partner-card"
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <ReactCountryFlag
        countryCode={item.code}
        svg
        style={{ width: '2.5em', height: '2.5em' }}
        title={item.label}
        aria-label={item.label}
        className="mb-2"
      />
      <span className="text-sm font-semibold text-[var(--uba-dark)]">{item.label}</span>
    </motion.div>
  );
}

export function TrustedGlobalSection() {
  const row1Dupe = [...ROW1, ...ROW1];
  const row2Dupe = [...COUNTRIES, ...COUNTRIES];

  return (
    <motion.section
      className="py-16 overflow-hidden bg-gradient-to-b from-white to-[#f8f7ff]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-10">
        <motion.h2
          className="uba-section-title text-center mb-2"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="highlight">Trusted. Global. Fast Setup</span>
        </motion.h2>
        <motion.p
          className="text-center text-[var(--uba-dark)] text-lg"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Scale your <span className="text-[var(--uba-gold)] font-semibold">Shopify</span> brand without anymore hurdles.
        </motion.p>
      </div>
      <div className="space-y-6">
        <div className="uba-scroll-row-wrap">
          <div className="uba-scroll-row uba-scroll-row--left">
            {row1Dupe.map((item, i) => (
              <ServiceCard key={`r1-${i}`} item={item} />
            ))}
          </div>
        </div>
        <div className="uba-scroll-row-wrap">
          <div className="uba-scroll-row uba-scroll-row--right">
            {row2Dupe.map((item, i) => (
              <CountryCard key={`r2-${i}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
