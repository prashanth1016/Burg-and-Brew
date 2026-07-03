'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MenuSection as MenuSectionType } from '@/types/menu';
import { FoodCard } from './FoodCard';

interface MenuSectionProps {
  section: MenuSectionType;
  reverse?: boolean;
}

export function MenuSection({ section, reverse = false }: MenuSectionProps) {
  return (
    <section id={section.id} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`flex flex-col lg:flex-row items-start lg:items-end gap-6 mb-12 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mustard/10 text-mustard text-xs font-semibold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-mustard" />
              {section.category.replace('-', ' ')}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-3">
              {section.title}
            </h2>
            <p className="text-base sm:text-lg text-charcoal/50 max-w-md">
              {section.subtitle}
            </p>
          </motion.div>

          {/* Section Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-full lg:w-80 h-48 lg:h-56 rounded-2xl overflow-hidden shrink-0 hidden lg:block"
          >
            <Image
              src={section.image}
              alt={section.title}
              fill
              className="object-cover"
              sizes="320px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
          </motion.div>
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {section.items.map((item, i) => (
            <FoodCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
