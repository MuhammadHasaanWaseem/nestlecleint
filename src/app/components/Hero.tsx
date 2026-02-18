import { MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from './ui/sheet';

const WA_NUMBERS = [
  { num: '+92 336 6789031', href: 'https://wa.me/923366789031' },
  { num: '+92 319 6829220', href: 'https://wa.me/923196829220' },
];

export function Hero() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <motion.section
      id="home"
      className="py-12 md:py-20 bg-gradient-to-b from-[#f8f7ff] to-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-blue-100/80 mb-6 uba-anim-delay-1">
          <span className="text-2xl font-bold text-blue-600">AI</span>
        </div>
        <h1 className="uba-section-title text-3xl sm:text-4xl md:text-5xl leading-tight mb-4 uba-anim-delay-2">
          Usama Shopify AI-Powered Digital Slip <span className="highlight">System.</span>
        </h1>
       

       
      </div>

      <Sheet open={drawerOpen} onOpenChange={setDrawerOpen}>
        <SheetContent
          side="right"
          className="w-full sm:max-w-md p-0 flex flex-col overflow-hidden border-0 bg-white shadow-2xl"
        >
          <div className="flex flex-col h-full">
            <div className="bg-[#075e54] px-6 py-5 flex items-center gap-3 shrink-0">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <SheetHeader className="p-0 text-left">
                <SheetTitle className="text-white font-semibold text-lg">
                Muhammad Usama Shopify &apos;s Team
                </SheetTitle>
                <SheetDescription className="text-white/90 text-sm mt-0.5">
                  To activate your slip, start your brand journey
                </SheetDescription>
              </SheetHeader>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <p className="text-[var(--uba-muted)] text-sm text-center">
                Contact on WhatsApp:
              </p>
              <div className="flex flex-col gap-3">
                <AnimatePresence>
                  {WA_NUMBERS.map((wa, i) => (
                    <motion.a
                      key={wa.num}
                      href={wa.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-4 px-5 rounded-xl bg-[#25D366] text-white font-semibold shadow-lg shadow-green-500/30 hover:bg-[#20bd5a] transition-colors"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.08 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <MessageCircle className="w-5 h-5 shrink-0" />
                      {wa.num}
                    </motion.a>
                  ))}
                </AnimatePresence>
              </div>
              <motion.a
                href="https://wa.me/923366789031"
                target="_blank"
                rel="noopener noreferrer"
                className="uba-btn-primary w-full flex items-center justify-center gap-2 py-4 text-base"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Now
              </motion.a>
            </div>

            <div className="shrink-0 p-6 pt-4 border-t border-gray-100">
              <p className="text-center text-xs text-[var(--uba-muted)] italic">
                Powered by human expertise. Enhanced by Artificial Intelligence.
              </p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </motion.section>
  );
}
