'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { BRAND } from '@/lib/constants';

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 5000);
    const hideTimer = setTimeout(() => setShowTooltip(false), 12000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const whatsappUrl = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
    "Hi! I'd like to place an order from Burg N Brew 🍔"
  )}`;

  return (
    <div className="fixed bottom-24 sm:bottom-6 right-4 sm:right-6 z-[var(--z-whatsapp)] flex flex-col items-end gap-2">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl shadow-lg border border-gray-100 max-w-[220px]"
          >
            <p className="text-xs text-charcoal font-medium">
              Need help? Chat with us on WhatsApp! 💬
            </p>
            <button
              onClick={() => setShowTooltip(false)}
              className="shrink-0 p-0.5 rounded-full hover:bg-gray-100"
            >
              <X className="w-3 h-3 text-gray-400" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 flex items-center justify-center hover:scale-110 transition-transform animate-pulse-glow"
      >
        <MessageCircle className="w-6 h-6 text-white fill-white" />
        {/* Ping */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-tomato rounded-full border-2 border-white animate-bounce-subtle" />
      </a>
    </div>
  );
}
