'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote, BadgeCheck, TrendingUp } from 'lucide-react';
import { REVIEWS, STATS } from '@/lib/constants';
import { getInitials } from '@/lib/utils';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-3xl sm:text-4xl font-heading font-bold text-mustard">
      {count.toLocaleString('en-IN')}{suffix}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 sm:py-20 lg:py-24 bg-cream">
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
            Customer Love
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-4">
            What Our Customers{' '}
            <span className="text-mustard">Say</span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal/50 max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear from thousands of happy customers across Chennai.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 sm:mb-16">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-5 rounded-2xl bg-white border border-charcoal/5 shadow-sm"
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="text-sm text-charcoal/50 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-premium bg-white rounded-2xl p-5 sm:p-6 border border-charcoal/5"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className={`w-4 h-4 ${
                      j < review.rating ? 'text-mustard fill-mustard' : 'text-charcoal/10'
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <Quote className="w-6 h-6 text-mustard/20 mb-2" />
              <p className="text-sm text-charcoal/70 leading-relaxed mb-4">
                {review.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-mustard to-mustard-dark flex items-center justify-center text-charcoal text-sm font-bold">
                  {getInitials(review.name)}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-sm font-heading font-semibold text-charcoal">
                      {review.name}
                    </p>
                    {review.verified && (
                      <BadgeCheck className="w-4 h-4 text-green fill-green/10" />
                    )}
                  </div>
                  <p className="text-xs text-charcoal/40">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
