'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_IMAGES } from '@/lib/constants';

const CATEGORIES = [
  { label: 'All', value: 'all' },
  { label: 'Food', value: 'food' },
  { label: 'Kitchen', value: 'kitchen' },
  { label: 'Events', value: 'events' },
  { label: 'Packaging', value: 'packaging' },
] as const;

export function GallerySection() {
  const [filter, setFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    filter === 'all'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === filter);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const navigateLightbox = (dir: number) => {
    if (lightboxIndex === null) return;
    const newIndex =
      (lightboxIndex + dir + filteredImages.length) % filteredImages.length;
    setLightboxIndex(newIndex);
  };

  return (
    <section id="gallery" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mustard/10 text-mustard text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-mustard" />
            Gallery
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-4">
            A Feast for{' '}
            <span className="text-mustard">The Eyes</span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal/50 max-w-2xl mx-auto">
            Take a peek inside our kitchen, our food, and the experiences we create.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-4 py-2 text-sm font-medium rounded-xl transition-all ${
                filter === cat.value
                  ? 'bg-charcoal text-cream shadow-md'
                  : 'bg-charcoal/5 text-charcoal/60 hover:bg-charcoal/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="masonry-grid">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, i) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer card-premium"
                onClick={() => openLightbox(i)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-500 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredImages[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[var(--z-modal)] bg-charcoal/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-3 rounded-full bg-white/10 text-cream hover:bg-white/20 transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox(-1);
              }}
              className="absolute left-4 p-3 rounded-full bg-white/10 text-cream hover:bg-white/20 transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].alt}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
              />
              <p className="text-center text-cream/60 text-sm mt-3">
                {filteredImages[lightboxIndex].alt}
              </p>
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox(1);
              }}
              className="absolute right-4 p-3 rounded-full bg-white/10 text-cream hover:bg-white/20 transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
