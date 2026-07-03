'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { NAV_LINKS, BRAND } from '@/lib/constants';
import { useCartStore } from '@/stores/cartStore';
import { cn, scrollToSection } from '@/lib/utils';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openCart, getItemCount } = useCartStore();
  const itemCount = useCartStore((s) => s.items.reduce((c, i) => c + i.quantity, 0));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-[var(--z-nav)] transition-all duration-500',
          scrolled
            ? 'bg-charcoal/95 backdrop-blur-xl shadow-lg'
            : 'bg-transparent'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-mustard to-mustard-dark flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <span className="text-charcoal font-heading font-bold text-lg">B</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-heading font-semibold text-cream leading-none">
                  Burg N Brew
                </h1>
                <p className="text-[10px] text-cream/50 leading-none mt-0.5">
                  Premium Burgers
                </p>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-sm font-medium text-cream/70 hover:text-mustard transition-colors rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Cart */}
              <button
                onClick={openCart}
                className="relative p-2.5 rounded-xl bg-white/10 hover:bg-white/15 transition-all group"
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-5 h-5 text-cream group-hover:text-mustard transition-colors" />
                {itemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-tomato text-white text-[10px] font-bold flex items-center justify-center"
                  >
                    {itemCount}
                  </motion.span>
                )}
              </button>

              {/* Order CTA - Desktop */}
              <button
                onClick={() => handleNavClick('#menu')}
                className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-tomato to-tomato-dark text-white font-heading font-semibold text-sm rounded-xl hover:shadow-lg hover:shadow-tomato/30 transition-all hover:scale-105"
              >
                Order Now
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl bg-white/10 hover:bg-white/15 transition-all"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-cream" />
                ) : (
                  <Menu className="w-5 h-5 text-cream" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            onClose={() => setMobileMenuOpen(false)}
            onNavClick={handleNavClick}
          />
        )}
      </AnimatePresence>
    </>
  );
}
