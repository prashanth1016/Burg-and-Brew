'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { scrollToSection } from '@/lib/utils';
import { MENU_SECTIONS } from '@/lib/constants';

export function FeaturedMenu() {
  const categories = MENU_SECTIONS.map((s) => ({
    id: s.id,
    title: s.title,
    image: s.image,
    count: s.items.length,
  }));

  return (
    <section id="menu" className="py-16 sm:py-20 lg:py-24 bg-white">
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
            Our Menu
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-4">
            Explore Our{' '}
            <span className="text-mustard">Premium</span> Menu
          </h2>
          <p className="text-base sm:text-lg text-charcoal/50 max-w-2xl mx-auto">
            From handcrafted burgers to indulgent brownies — every item is made fresh, with premium ingredients and love.
          </p>
        </motion.div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {categories.map((cat, i) => (
            <motion.button
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => scrollToSection(cat.id)}
              className="group relative aspect-[3/4] sm:aspect-square rounded-2xl overflow-hidden card-premium"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-sm sm:text-base font-heading font-semibold text-cream leading-tight mb-1">
                  {cat.title}
                </h3>
                <p className="text-xs text-cream/50">
                  {cat.count} items
                </p>
              </div>
              {/* Hover glow */}
              <div className="absolute inset-0 bg-mustard/0 group-hover:bg-mustard/10 transition-colors duration-500" />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
