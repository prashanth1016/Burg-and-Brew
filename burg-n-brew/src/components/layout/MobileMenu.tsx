'use client';

import { motion } from 'framer-motion';
import { NAV_LINKS, BRAND } from '@/lib/constants';
import { MapPin, Phone } from 'lucide-react';
import { Instagram, Facebook, Twitter } from '@/components/ui/Icons';

interface MobileMenuProps {
  onClose: () => void;
  onNavClick: (href: string) => void;
}

export function MobileMenu({ onClose, onNavClick }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[calc(var(--z-nav)-1)] lg:hidden"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-charcoal/95 backdrop-blur-xl"
        onClick={onClose}
      />

      {/* Content */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        className="absolute right-0 top-0 h-full w-full max-w-sm bg-charcoal border-l border-white/10 flex flex-col pt-20 px-6"
      >
        {/* Nav Links */}
        <nav className="flex flex-col gap-1">
          {NAV_LINKS.map((link, i) => (
            <motion.button
              key={link.href}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
              onClick={() => onNavClick(link.href)}
              className="text-left px-4 py-4 text-xl font-heading font-semibold text-cream/80 hover:text-mustard hover:bg-white/5 rounded-xl transition-all"
            >
              {link.label}
            </motion.button>
          ))}
        </nav>

        {/* Order CTA */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          onClick={() => onNavClick('#menu')}
          className="mt-6 w-full py-4 bg-gradient-to-r from-tomato to-tomato-dark text-white font-heading font-bold text-lg rounded-xl shadow-lg shadow-tomato/20"
        >
          Order Now
        </motion.button>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-auto pb-8"
        >
          <div className="flex items-center gap-2 text-cream/50 text-sm mb-3">
            <MapPin className="w-4 h-4" />
            <span>{BRAND.address.area}, {BRAND.address.city}</span>
          </div>
          <div className="flex items-center gap-2 text-cream/50 text-sm mb-6">
            <Phone className="w-4 h-4" />
            <span>{BRAND.phone}</span>
          </div>

          {/* Social */}
          <div className="flex gap-3">
            {[
              { icon: Instagram, href: BRAND.social.instagram },
              { icon: Facebook, href: BRAND.social.facebook },
              { icon: Twitter, href: BRAND.social.twitter },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-mustard/20 hover:text-mustard transition-all"
              >
                <Icon className="w-5 h-5 text-cream/60" />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
