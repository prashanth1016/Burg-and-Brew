'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart, Plus, Minus, Flame, ShoppingBag, Star, Sparkles } from 'lucide-react';
import { MenuItem, AddOn } from '@/types/menu';
import { formatPrice } from '@/lib/utils';
import { useCartStore } from '@/stores/cartStore';
import { useToast } from '@/providers/ToastProvider';

interface FoodCardProps {
  item: MenuItem;
  index?: number;
}

export function FoodCard({ item, index = 0 }: FoodCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedAddOns, setSelectedAddOns] = useState<AddOn[]>([]);
  const [liked, setLiked] = useState(false);
  const [showAddOns, setShowAddOns] = useState(false);
  const addItem = useCartStore((s) => s.addItem);
  const openCart = useCartStore((s) => s.openCart);
  const { showToast } = useToast();

  const toggleAddOn = (addOn: AddOn) => {
    setSelectedAddOns((prev) =>
      prev.find((a) => a.id === addOn.id)
        ? prev.filter((a) => a.id !== addOn.id)
        : [...prev, addOn]
    );
  };

  const totalPrice =
    (item.price + selectedAddOns.reduce((s, a) => s + a.price, 0)) * quantity;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(item, selectedAddOns);
    }
    showToast(`${item.name} added to cart!`);
    setQuantity(1);
    setSelectedAddOns([]);
    setShowAddOns(false);
  };

  const dietaryClass =
    item.dietary === 'veg' ? 'badge-veg' : item.dietary === 'egg' ? 'badge-egg' : 'badge-nonveg';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group card-premium bg-white rounded-2xl overflow-hidden border border-charcoal/5"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {item.isBestseller && (
            <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-mustard text-charcoal rounded-lg flex items-center gap-1">
              <Star className="w-3 h-3 fill-charcoal" /> Bestseller
            </span>
          )}
          {item.isNew && (
            <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-green text-white rounded-lg flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> New
            </span>
          )}
          {item.isSignature && (
            <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-charcoal text-mustard rounded-lg border border-mustard/30">
              ✦ Signature
            </span>
          )}
        </div>

        {/* Heart */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:scale-110 transition-transform"
          aria-label={`${liked ? 'Remove from' : 'Add to'} favourites`}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${liked ? 'text-tomato fill-tomato' : 'text-charcoal/40'}`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Dietary + Spice */}
        <div className="flex items-center gap-2 mb-2">
          <span className={dietaryClass} />
          {item.spiceLevel > 0 && (
            <div className="flex items-center gap-0.5">
              {[...Array(item.spiceLevel)].map((_, i) => (
                <Flame key={i} className="w-3 h-3 text-tomato fill-tomato" />
              ))}
            </div>
          )}
          <span className="text-[11px] text-charcoal/40 ml-auto">{item.calories} cal</span>
        </div>

        {/* Name + Price */}
        <h4 className="text-base font-heading font-semibold text-charcoal mb-1 leading-tight">
          {item.name}
        </h4>
        <p className="text-xs text-charcoal/50 mb-3 line-clamp-2 leading-relaxed">
          {item.description}
        </p>

        <div className="flex items-center justify-between mb-3">
          <span className="text-lg font-heading font-bold text-charcoal">
            {formatPrice(item.price)}
          </span>
        </div>

        {/* Add-ons Toggle */}
        {item.addOns && item.addOns.length > 0 && (
          <div className="mb-3">
            <button
              onClick={() => setShowAddOns(!showAddOns)}
              className="text-xs text-mustard font-medium hover:underline"
            >
              {showAddOns ? 'Hide' : 'Show'} Add-ons ({item.addOns.length})
            </button>

            {showAddOns && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="mt-2 space-y-1.5"
              >
                {item.addOns.map((addOn) => {
                  const isSelected = selectedAddOns.find((a) => a.id === addOn.id);
                  return (
                    <button
                      key={addOn.id}
                      onClick={() => toggleAddOn(addOn)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-all ${
                        isSelected
                          ? 'bg-mustard/10 border border-mustard/30 text-charcoal'
                          : 'bg-charcoal/5 border border-transparent text-charcoal/60 hover:bg-charcoal/10'
                      }`}
                    >
                      <span>{addOn.name}</span>
                      <span className="font-semibold">+{formatPrice(addOn.price)}</span>
                    </button>
                  );
                })}
              </motion.div>
            )}
          </div>
        )}

        {/* Quantity + Add to Cart */}
        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-xl bg-charcoal/5 border border-charcoal/10">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 hover:bg-charcoal/10 rounded-l-xl transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-9 text-center text-sm font-semibold">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 hover:bg-charcoal/10 rounded-r-xl transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-charcoal text-cream font-heading font-semibold text-sm rounded-xl hover:bg-charcoal-lighter transition-all active:scale-[0.97]"
          >
            <ShoppingBag className="w-4 h-4" />
            Add {formatPrice(totalPrice)}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
