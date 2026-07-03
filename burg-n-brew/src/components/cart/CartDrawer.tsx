'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Trash2, Tag, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';
import { formatPrice } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    couponCode,
    couponDiscount,
    applyCoupon,
    removeCoupon,
    clearCart,
    deliveryFee,
  } = useCartStore();

  const subtotal = useCartStore((s) => s.getSubtotal());
  const gst = useCartStore((s) => s.getGST());
  const total = useCartStore((s) => s.getTotal());
  const itemCount = useCartStore((s) => s.getItemCount());

  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');

  const handleApplyCoupon = () => {
    if (!couponInput.trim()) return;
    const success = applyCoupon(couponInput.trim());
    if (success) {
      setCouponError('');
      setCouponInput('');
    } else {
      setCouponError('Invalid coupon or minimum order not met');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[var(--z-cart)]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-cream z-[calc(var(--z-cart)+1)] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-charcoal/10">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-charcoal" />
                <h3 className="text-lg font-heading font-semibold">
                  Your Cart
                </h3>
                {itemCount > 0 && (
                  <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-tomato text-white">
                    {itemCount}
                  </span>
                )}
              </div>
              <button
                onClick={closeCart}
                className="p-2 rounded-xl hover:bg-charcoal/5 transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-20 h-20 rounded-full bg-charcoal/5 flex items-center justify-center mb-4">
                    <ShoppingBag className="w-8 h-8 text-charcoal/30" />
                  </div>
                  <h4 className="text-lg font-heading font-semibold text-charcoal/60 mb-2">
                    Your cart is empty
                  </h4>
                  <p className="text-sm text-charcoal/40 mb-6">
                    Add some delicious items to get started
                  </p>
                  <button
                    onClick={closeCart}
                    className="px-6 py-3 bg-charcoal text-cream font-heading font-semibold text-sm rounded-xl hover:bg-charcoal-lighter transition-colors"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      className="flex gap-3 p-3 rounded-xl bg-white shadow-sm border border-charcoal/5"
                    >
                      {/* Image */}
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                        <Image
                          src={item.menuItem.image}
                          alt={item.menuItem.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="flex items-center gap-1.5 mb-0.5">
                              <span className={`badge-${item.menuItem.dietary === 'veg' ? 'veg' : item.menuItem.dietary === 'egg' ? 'egg' : 'nonveg'}`} />
                              <h4 className="text-sm font-heading font-semibold text-charcoal truncate">
                                {item.menuItem.name}
                              </h4>
                            </div>
                            {item.selectedAddOns.length > 0 && (
                              <p className="text-xs text-charcoal/40 truncate">
                                +{item.selectedAddOns.map((a) => a.name).join(', ')}
                              </p>
                            )}
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-1 rounded-lg hover:bg-tomato/10 text-charcoal/30 hover:text-tomato transition-colors shrink-0"
                            aria-label={`Remove ${item.menuItem.name}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm font-bold text-charcoal">
                            {formatPrice(
                              (item.menuItem.price +
                                item.selectedAddOns.reduce((s, a) => s + a.price, 0)) *
                                item.quantity
                            )}
                          </span>

                          {/* Quantity */}
                          <div className="flex items-center gap-1 bg-charcoal/5 rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1.5 rounded-l-lg hover:bg-charcoal/10 transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-sm font-semibold">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1.5 rounded-r-lg hover:bg-charcoal/10 transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Clear Cart */}
                  <button
                    onClick={clearCart}
                    className="text-xs text-charcoal/40 hover:text-tomato transition-colors self-end"
                  >
                    Clear all items
                  </button>
                </div>
              )}
            </div>

            {/* Bottom — Summary */}
            {items.length > 0 && (
              <div className="border-t border-charcoal/10 px-5 py-4 bg-white">
                {/* Coupon */}
                <div className="mb-4">
                  {couponCode ? (
                    <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-green/5 border border-green/20">
                      <div className="flex items-center gap-2">
                        <Tag className="w-4 h-4 text-green" />
                        <span className="text-sm font-medium text-green">{couponCode}</span>
                        <span className="text-xs text-green/60">-{formatPrice(couponDiscount)}</span>
                      </div>
                      <button
                        onClick={removeCoupon}
                        className="text-xs text-charcoal/40 hover:text-tomato"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={couponInput}
                        onChange={(e) => {
                          setCouponInput(e.target.value);
                          setCouponError('');
                        }}
                        placeholder="Enter coupon code"
                        className="flex-1 px-3 py-2 text-sm bg-charcoal/5 rounded-lg border border-charcoal/10 focus:outline-none focus:border-mustard focus:ring-1 focus:ring-mustard/30"
                      />
                      <button
                        onClick={handleApplyCoupon}
                        className="px-4 py-2 bg-charcoal text-cream text-sm font-medium rounded-lg hover:bg-charcoal-lighter transition-colors"
                      >
                        Apply
                      </button>
                    </div>
                  )}
                  {couponError && (
                    <p className="text-xs text-tomato mt-1">{couponError}</p>
                  )}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-charcoal/60">Subtotal</span>
                    <span className="font-medium">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-charcoal/60">Delivery Fee</span>
                    <span className="font-medium">{formatPrice(deliveryFee)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-charcoal/60">GST (5%)</span>
                    <span className="font-medium">{formatPrice(gst)}</span>
                  </div>
                  {couponDiscount > 0 && (
                    <div className="flex justify-between text-sm text-green">
                      <span>Discount</span>
                      <span className="font-medium">-{formatPrice(couponDiscount)}</span>
                    </div>
                  )}
                  <div className="h-px bg-charcoal/10" />
                  <div className="flex justify-between text-base font-heading font-bold">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => {
                      closeCart();
                      window.location.href = '/checkout';
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-tomato to-tomato-dark text-white font-heading font-bold rounded-xl shadow-lg shadow-tomato/20 hover:shadow-tomato/30 transition-all active:scale-[0.98]"
                  >
                    Proceed to Checkout
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={closeCart}
                    className="w-full py-3 text-sm font-medium text-charcoal/60 hover:text-charcoal transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
