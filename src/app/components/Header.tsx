import { Menu, X, ChevronDown, ChevronRight, Droplets, Info, Package, Award, Phone, Heart, Users } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Button } from './ui/button';
import { Sheet, SheetContent } from './ui/sheet';

const NAV = [
  { name: 'About', href: '#about', icon: Info },
  { name: 'Products', href: '#products', icon: Package },
  { name: 'Quality', href: '#quality', icon: Award },
  {
    name: 'Impact',
    icon: Heart,
    dropdown: [
      { name: 'Sustainability', href: '#sustainability' },
      { name: 'Community', href: '#community' },
      { name: 'Global Reach', href: '#global' },
    ],
  },
  { name: 'Testimonials', href: '#testimonials', icon: Users },
  { name: 'Contact', href: '#contact', icon: Phone },
];

export function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <motion.header
      className="sticky top-0 z-50 pt-4 pb-2 px-4 sm:px-6 bg-[length:100%_200px] bg-no-repeat"
      style={{ backgroundImage: 'var(--uba-bg-subtle)' }}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.nav
        className="uba-nav-float flex flex-wrap items-center justify-between gap-3"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <motion.a href="#home" className="flex items-center gap-2 shrink-0" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Droplets className="w-7 h-7 text-[var(--uba-gold)]" />
          <span className="text-xl sm:text-2xl font-bold text-[var(--uba-dark)] tracking-tight">
            Nestlé Pure Life
          </span>
        </motion.a>

        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV.map((item) =>
            item.dropdown ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-0.5 px-3 py-2 text-[var(--uba-muted)] hover:text-[var(--uba-dark)] rounded-lg transition-colors text-sm font-medium">
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="min-w-[160px]">
                  {item.dropdown.map((d) => (
                    <DropdownMenuItem key={d.name} asChild>
                      <a href={d.href}>{d.name}</a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-[var(--uba-muted)] hover:text-[var(--uba-dark)] rounded-lg transition-colors text-sm font-medium"
              >
                {item.name}
              </a>
            )
          )}
        </div>

        <div className="hidden lg:block">
          <Button className="uba-btn-primary text-sm" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>

        <motion.button
          type="button"
          className="lg:hidden p-2.5 rounded-xl text-[var(--uba-dark)] hover:bg-[var(--uba-gold)]/10 transition-colors"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open menu"
          whileTap={{ scale: 0.95 }}
        >
          <Menu className="w-6 h-6" />
        </motion.button>
      </motion.nav>

      <Sheet open={drawerOpen} onOpenChange={setDrawerOpen}>
        <SheetContent
          side="right"
          className="w-full max-w-[320px] sm:max-w-sm p-0 flex flex-col border-0 bg-white shadow-2xl [&>button]:hidden"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-[var(--uba-gold)]/10 to-transparent">
              <span className="text-xl font-bold text-[var(--uba-dark)] tracking-tight flex items-center gap-2">
                <Droplets className="w-5 h-5 text-[var(--uba-gold)]" />
                Nestlé Pure Life
              </span>
              <motion.button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="p-2 rounded-lg text-[var(--uba-muted)] hover:bg-black/5 hover:text-[var(--uba-dark)] transition-colors"
                aria-label="Close menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            <nav className="flex-1 overflow-y-auto py-4 px-4">
              <ul className="space-y-0.5">
                {NAV.map((item, i) => (
                  <li key={item.name}>
                    {item.dropdown ? (
                      <>
                        <div className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-[var(--uba-dark)] bg-[var(--uba-gold)]/10">
                          <item.icon className="w-4 h-4 text-[var(--uba-gold)] shrink-0" />
                          {item.name}
                        </div>
                        <ul className="mt-1 ml-4 pl-4 border-l-2 border-[var(--uba-gold)]/20 space-y-0.5">
                          {item.dropdown.map((d, j) => (
                            <motion.li
                              key={d.name}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.05 * (i + j) + 0.1 }}
                            >
                              <a
                                href={d.href}
                                onClick={() => setDrawerOpen(false)}
                                className="flex items-center gap-2 py-2.5 pl-3 rounded-lg text-sm text-[var(--uba-muted)] hover:bg-[var(--uba-gold)]/10 hover:text-[var(--uba-dark)] transition-colors"
                              >
                                <ChevronRight className="w-4 h-4 text-[var(--uba-gold)] opacity-70" />
                                {d.name}
                              </a>
                            </motion.li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <motion.li
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * i + 0.1 }}
                      >
                        <a
                          href={item.href}
                          onClick={() => setDrawerOpen(false)}
                          className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-[var(--uba-dark)] hover:bg-[var(--uba-gold)]/10 transition-colors"
                        >
                          <item.icon className="w-4 h-4 text-[var(--uba-gold)] shrink-0" />
                          {item.name}
                        </a>
                      </motion.li>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="p-4 pt-2 border-t border-gray-100">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Button className="uba-btn-primary w-full flex items-center justify-center gap-2 py-4" asChild>
                  <a href="#contact" onClick={() => setDrawerOpen(false)}>
                    <Phone className="w-5 h-5" />
                    Get In Touch
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </motion.header>
  );
}
