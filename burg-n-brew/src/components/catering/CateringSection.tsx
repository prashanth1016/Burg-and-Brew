'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Users, Calculator, MessageCircle, Star, CheckCircle } from 'lucide-react';
import { CATERING_PACKAGES, BRAND } from '@/lib/constants';
import { formatPrice } from '@/lib/utils';

export function CateringSection() {
  return (
    <section id="catering" className="py-16 sm:py-20 lg:py-24 bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mustard/10 text-mustard text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-mustard" />
            Catering Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Catering for Every{' '}
            <span className="text-mustard">Occasion</span>
          </h2>
          <p className="text-base sm:text-lg text-cream/50 max-w-2xl mx-auto">
            From intimate birthday parties to grand corporate events — we bring the Burg N Brew experience to your venue.
          </p>
        </motion.div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {CATERING_PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl overflow-hidden border ${
                pkg.popular
                  ? 'border-mustard/30 bg-gradient-to-b from-mustard/10 to-transparent'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 px-3 py-1 bg-mustard text-charcoal text-[10px] font-bold uppercase rounded-bl-xl">
                  <Star className="w-3 h-3 inline mr-1 fill-charcoal" />
                  Popular
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-heading font-bold mb-1">{pkg.name}</h3>
                <p className="text-sm text-cream/50 mb-4">{pkg.description}</p>

                {/* Price + Min */}
                <div className="flex items-center gap-4 mb-4">
                  <div>
                    <p className="text-2xl font-heading font-bold text-mustard">
                      {formatPrice(pkg.pricePerPerson)}
                    </p>
                    <p className="text-xs text-cream/40">per person</p>
                  </div>
                  <div className="h-8 w-px bg-white/10" />
                  <div className="flex items-center gap-1 text-cream/50">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">Min {pkg.minGuests} guests</span>
                  </div>
                </div>

                {/* Includes */}
                <div className="space-y-1.5 mb-4">
                  {pkg.includes.slice(0, 4).map((item, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-cream/60">
                      <CheckCircle className="w-3.5 h-3.5 text-green shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                  {pkg.includes.length > 4 && (
                    <p className="text-xs text-mustard pl-5">
                      +{pkg.includes.length - 4} more included
                    </p>
                  )}
                </div>

                {/* CTA */}
                <a
                  href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
                    `Hi! I'd like to enquire about the ${pkg.name} catering package for my event.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-tomato to-tomato-dark text-white font-heading font-semibold text-sm rounded-xl hover:shadow-lg hover:shadow-tomato/20 transition-all active:scale-[0.97]"
                >
                  <MessageCircle className="w-4 h-4" />
                  Get WhatsApp Quote
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <Calculator className="w-8 h-8 text-mustard mx-auto mb-3" />
            <h3 className="text-xl font-heading font-semibold mb-2">
              Need a Custom Package?
            </h3>
            <p className="text-sm text-cream/50 mb-4">
              Tell us your guest count, budget, and preferences — we&apos;ll create a bespoke catering plan for you.
            </p>
            <a
              href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
                "Hi! I'd like a custom catering package for my event. Here are the details:"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-mustard text-charcoal font-heading font-bold rounded-xl hover:bg-mustard-light transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Chat with Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
