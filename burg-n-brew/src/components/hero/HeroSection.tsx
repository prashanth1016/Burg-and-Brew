'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown, ShoppingBag, UtensilsCrossed, PartyPopper } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth - 0.5) * 20,
        y: (e.clientY / innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative h-screen min-h-[700px] overflow-hidden bg-charcoal flex items-center"
    >
      {/* Background Image with Parallax */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <Image
          src="/images/hero-burger.png"
          alt="Premium gourmet burger by Burg N Brew"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
      </motion.div>

      {/* Mouse-follow Light Effect */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none hidden lg:block"
        style={{
          background: `radial-gradient(600px circle at ${50 + mousePos.x}% ${50 + mousePos.y}%, rgba(212, 160, 23, 0.06), transparent 60%)`,
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="particle animate-float-slow"
            style={{
              width: `${8 + i * 4}px`,
              height: `${8 + i * 4}px`,
              background: `rgba(212, 160, 23, ${0.1 + i * 0.05})`,
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mustard/10 border border-mustard/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
            <span className="text-sm font-medium text-mustard">Open 24 Hours — Order Now</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-cream leading-[1.1] mb-6"
          >
            Crafted Fresh.{' '}
            <br className="hidden sm:block" />
            <span className="text-mustard">Served Hot.</span>{' '}
            <br />
            Loved Every Bite.
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base sm:text-lg text-cream/60 max-w-lg mb-8 leading-relaxed"
          >
            Premium Burgers, Wraps, Sandwiches, Brownies & Catering — Delivered Across Chennai.
          </motion.p>

          {/* CTA Buttons — Glassmorphism Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="glass-dark rounded-2xl p-4 sm:p-5 inline-flex flex-wrap gap-3"
          >
            <button
              onClick={() => scrollToSection('menu')}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-tomato to-tomato-dark text-white font-heading font-semibold rounded-xl hover:shadow-lg hover:shadow-tomato/30 transition-all hover:scale-105 active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              Order Now
            </button>
            <button
              onClick={() => scrollToSection('signature-burgers')}
              className="flex items-center gap-2 px-6 py-3 bg-white/10 text-cream font-heading font-medium rounded-xl hover:bg-white/15 transition-all border border-white/10"
            >
              <UtensilsCrossed className="w-4 h-4" />
              Explore Menu
            </button>
            <button
              onClick={() => scrollToSection('catering')}
              className="flex items-center gap-2 px-6 py-3 bg-mustard/10 text-mustard font-heading font-medium rounded-xl hover:bg-mustard/20 transition-all border border-mustard/20"
            >
              <PartyPopper className="w-4 h-4" />
              Book Catering
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-cream/40 font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-cream/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
