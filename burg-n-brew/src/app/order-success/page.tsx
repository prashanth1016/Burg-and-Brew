'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Home, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { BRAND } from '@/lib/constants';

export default function OrderSuccessPage() {
  const orderId = `BNB-${Date.now().toString().slice(-6)}`;

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center pt-20 pb-12 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-md w-full text-center"
      >
        {/* Success Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', damping: 15, stiffness: 200, delay: 0.2 }}
          className="w-24 h-24 rounded-full bg-green/10 flex items-center justify-center mx-auto mb-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 12, stiffness: 300, delay: 0.4 }}
          >
            <CheckCircle className="w-14 h-14 text-green" />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-3xl sm:text-4xl font-heading font-bold text-charcoal mb-3"
        >
          Order Placed! 🎉
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-charcoal/50 mb-2"
        >
          Your order has been successfully placed and is being prepared.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-sm text-charcoal/40 mb-8"
        >
          Order ID: <strong className="text-charcoal">{orderId}</strong>
        </motion.p>

        {/* Estimated Time */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-2xl p-6 border border-charcoal/5 mb-6"
        >
          <p className="text-xs text-charcoal/40 uppercase tracking-wider mb-1">
            Estimated Delivery
          </p>
          <p className="text-2xl font-heading font-bold text-charcoal">
            30–45 minutes
          </p>
          <p className="text-sm text-charcoal/50 mt-2">
            You&apos;ll receive updates on WhatsApp
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col gap-3"
        >
          <Link
            href="/"
            className="flex items-center justify-center gap-2 py-3.5 bg-charcoal text-cream font-heading font-semibold rounded-xl hover:bg-charcoal-lighter transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <a
            href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
              `Hi! I just placed order ${orderId}. Can I track my order?`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3.5 bg-[#25D366]/10 text-[#25D366] font-heading font-semibold rounded-xl hover:bg-[#25D366]/20 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Track on WhatsApp
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
