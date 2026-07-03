'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Shield, Leaf, Clock, Heart, Award, Truck } from 'lucide-react';
import { BRAND } from '@/lib/constants';

const values = [
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Only the finest ingredients — sourced fresh, prepared with passion.',
  },
  {
    icon: Leaf,
    title: 'Fresh & Hygienic',
    description: 'FSSAI certified kitchen with strict quality standards every day.',
  },
  {
    icon: Clock,
    title: '24/7 Service',
    description: 'Order anytime. We are open round the clock, every single day.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Hot, fresh food delivered to your doorstep across Chennai.',
  },
  {
    icon: Heart,
    title: 'Family Friendly',
    description: 'A menu loved by all ages — from kids to grandparents.',
  },
  {
    icon: Shield,
    title: 'Safe & Trusted',
    description: 'Eco-friendly packaging, contactless delivery, and secure payments.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/restaurant-interior.png"
                alt="Burg N Brew restaurant interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 glass-cream rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-mustard to-mustard-dark flex items-center justify-center">
                  <span className="text-2xl font-heading font-bold text-charcoal">B</span>
                </div>
                <div>
                  <p className="text-sm font-heading font-bold text-charcoal">Since 2024</p>
                  <p className="text-xs text-charcoal/50">Chennai&apos;s Premium Choice</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mustard/10 text-mustard text-xs font-semibold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-mustard" />
              Our Story
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-6">
              About{' '}
              <span className="text-mustard">Burg N Brew</span>
            </h2>
            <div className="space-y-4 text-charcoal/60 leading-relaxed">
              <p>
                Born from a passion for extraordinary flavours, <strong className="text-charcoal">Burg N Brew</strong> is Chennai&apos;s answer to the premium burger experience. We don&apos;t just make burgers — we craft edible art.
              </p>
              <p>
                Every patty is grilled to perfection, every bun is freshly baked, and every sauce is house-made. Our obsession with quality extends from our kitchen to your doorstep — with premium packaging that keeps your meal as fresh as when it left our hands.
              </p>
              <p>
                From our signature burgers to artisanal brownies and handcrafted milkshakes, every item on our menu is designed to deliver a moment of pure joy.
              </p>
            </div>
            <p className="mt-6 text-xs text-charcoal/40">
              A Unit of <strong>{BRAND.parent}</strong>
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center p-4 rounded-2xl bg-white border border-charcoal/5 card-premium"
            >
              <div className="w-12 h-12 rounded-xl bg-mustard/10 flex items-center justify-center mx-auto mb-3">
                <value.icon className="w-6 h-6 text-mustard" />
              </div>
              <h4 className="text-sm font-heading font-semibold text-charcoal mb-1">
                {value.title}
              </h4>
              <p className="text-xs text-charcoal/50 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
