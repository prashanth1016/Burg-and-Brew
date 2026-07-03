'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';
import { scrollToSection } from '@/lib/utils';

export function StickyOrderButton() {
  const [visible, setVisible] = useState(false);
  const itemCount = useCartStore((s) => s.items.reduce((c, i) => c + i.quantity, 0));
  const openCart = useCartStore((s) => s.openCart);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-[var(--z-nav)] sm:hidden"
        >
          <div className="glass-dark border-t border-white/10 px-4 py-3 flex items-center gap-3">
            <button
              onClick={() => scrollToSection('menu')}
              className="flex-1 py-3 bg-gradient-to-r from-tomato to-tomato-dark text-white font-heading font-semibold text-sm rounded-xl shadow-lg shadow-tomato/20 active:scale-95 transition-transform"
            >
              Order Now
            </button>
            {itemCount > 0 && (
              <button
                onClick={openCart}
                className="relative py-3 px-4 bg-white/10 text-cream font-heading font-semibold text-sm rounded-xl border border-white/10 active:scale-95 transition-transform"
              >
                <ShoppingBag className="w-5 h-5 inline mr-2" />
                Cart
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-tomato text-white text-[10px] font-bold flex items-center justify-center">
                  {itemCount}
                </span>
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
