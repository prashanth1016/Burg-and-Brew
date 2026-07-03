'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Clock, Truck, CreditCard, Gift } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';

const features = [
  { icon: Clock, title: 'Order 24/7', desc: 'Anytime, anywhere' },
  { icon: Truck, title: 'Fast Delivery', desc: 'Across Chennai' },
  { icon: CreditCard, title: 'Easy Payment', desc: 'UPI, Cards & Cash' },
  { icon: Gift, title: 'Special Offers', desc: 'Coupons & deals' },
];

export function OnlineOrderingCTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212,160,23,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mustard/10 text-mustard text-xs font-semibold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-mustard animate-pulse" />
              Order Online
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-cream mb-4">
              Skip the Queue.{' '}
              <span className="text-mustard">Order Direct.</span>
            </h2>
            <p className="text-base sm:text-lg text-cream/50 max-w-2xl mx-auto mb-8">
              No middleman, no markup. Order directly from Burg N Brew and enjoy exclusive deals, faster delivery, and the freshest food.
            </p>
          </motion.div>

          {/* Features */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-10">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-4 text-center"
              >
                <feat.icon className="w-8 h-8 text-mustard mx-auto mb-2" />
                <h4 className="text-sm font-heading font-semibold text-cream mb-0.5">
                  {feat.title}
                </h4>
                <p className="text-xs text-cream/40">{feat.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button
              onClick={() => scrollToSection('menu')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-tomato to-tomato-dark text-white font-heading font-bold text-lg rounded-xl shadow-2xl shadow-tomato/30 hover:shadow-tomato/50 transition-all hover:scale-105 active:scale-95"
            >
              <ShoppingBag className="w-5 h-5" />
              Start Ordering Now
            </button>
            <p className="text-xs text-cream/30 mt-3">
              Use code <strong className="text-mustard">WELCOME20</strong> for 20% off your first order
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
