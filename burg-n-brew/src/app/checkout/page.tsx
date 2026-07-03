'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  ArrowLeft,
  MapPin,
  Truck,
  Store,
  CreditCard,
  Smartphone,
  Wallet,
  Banknote,
  CheckCircle,
  ShoppingBag,
} from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';
import { formatPrice } from '@/lib/utils';
import { DeliveryMethod, PaymentMethod } from '@/types/order';

export default function CheckoutPage() {
  const router = useRouter();
  const {
    items,
    deliveryFee,
    couponDiscount,
    couponCode,
    clearCart,
  } = useCartStore();
  const subtotal = useCartStore((s) => s.getSubtotal());
  const gst = useCartStore((s) => s.getGST());
  const total = useCartStore((s) => s.getTotal());
  const itemCount = useCartStore((s) => s.getItemCount());

  const [step, setStep] = useState(1);
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>('delivery');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('upi');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    addressLine1: '',
    addressLine2: '',
    landmark: '',
    pincode: '',
    specialInstructions: '',
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    clearCart();
    router.push('/order-success');
  };

  if (items.length === 0 && step < 3) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center pt-20">
        <div className="text-center p-8">
          <ShoppingBag className="w-16 h-16 text-charcoal/20 mx-auto mb-4" />
          <h2 className="text-2xl font-heading font-bold text-charcoal mb-2">Cart is empty</h2>
          <p className="text-charcoal/50 mb-6">Add some delicious items before checking out.</p>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-charcoal text-cream font-heading font-semibold rounded-xl hover:bg-charcoal-lighter transition-colors"
          >
            Browse Menu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back */}
        <button
          onClick={() => (step > 1 ? setStep(step - 1) : router.back())}
          className="flex items-center gap-2 text-sm text-charcoal/50 hover:text-charcoal mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        {/* Progress */}
        <div className="flex items-center gap-2 mb-8">
          {['Details', 'Payment', 'Confirm'].map((label, i) => (
            <div key={label} className="flex items-center gap-2 flex-1">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                  step > i + 1
                    ? 'bg-green text-white'
                    : step === i + 1
                    ? 'bg-charcoal text-cream'
                    : 'bg-charcoal/10 text-charcoal/30'
                }`}
              >
                {step > i + 1 ? <CheckCircle className="w-4 h-4" /> : i + 1}
              </div>
              <span
                className={`text-xs font-medium hidden sm:block ${
                  step >= i + 1 ? 'text-charcoal' : 'text-charcoal/30'
                }`}
              >
                {label}
              </span>
              {i < 2 && (
                <div
                  className={`flex-1 h-0.5 rounded ${
                    step > i + 1 ? 'bg-green' : 'bg-charcoal/10'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Form */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl p-6 border border-charcoal/5"
              >
                <h3 className="text-xl font-heading font-bold mb-6">Delivery Details</h3>

                {/* Delivery Method Toggle */}
                <div className="flex gap-3 mb-6">
                  {[
                    { value: 'delivery' as const, icon: Truck, label: 'Delivery' },
                    { value: 'pickup' as const, icon: Store, label: 'Pickup' },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setDeliveryMethod(opt.value)}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-heading font-medium text-sm transition-all ${
                        deliveryMethod === opt.value
                          ? 'bg-charcoal text-cream'
                          : 'bg-charcoal/5 text-charcoal/60 hover:bg-charcoal/10'
                      }`}
                    >
                      <opt.icon className="w-4 h-4" />
                      {opt.label}
                    </button>
                  ))}
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-charcoal/60 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => updateField('fullName', e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-cream/50 rounded-xl border border-charcoal/10 text-sm focus:outline-none focus:border-mustard focus:ring-1 focus:ring-mustard/30 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-charcoal/60 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 bg-cream/50 rounded-xl border border-charcoal/10 text-sm focus:outline-none focus:border-mustard focus:ring-1 focus:ring-mustard/30 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-charcoal/60 mb-1.5">
                      Email (optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-cream/50 rounded-xl border border-charcoal/10 text-sm focus:outline-none focus:border-mustard focus:ring-1 focus:ring-mustard/30 transition-all"
                    />
                  </div>

                  {deliveryMethod === 'delivery' && (
                    <>
                      <div>
                        <label className="block text-xs font-medium text-charcoal/60 mb-1.5">
                          Delivery Address *
                        </label>
                        <input
                          type="text"
                          value={formData.addressLine1}
                          onChange={(e) => updateField('addressLine1', e.target.value)}
                          placeholder="House/Flat number, Street name"
                          className="w-full px-4 py-3 bg-cream/50 rounded-xl border border-charcoal/10 text-sm focus:outline-none focus:border-mustard focus:ring-1 focus:ring-mustard/30 transition-all"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-charcoal/60 mb-1.5">
                            Landmark
                          </label>
                          <input
                            type="text"
                            value={formData.landmark}
                            onChange={(e) => updateField('landmark', e.target.value)}
                            placeholder="Near..."
                            className="w-full px-4 py-3 bg-cream/50 rounded-xl border border-charcoal/10 text-sm focus:outline-none focus:border-mustard focus:ring-1 focus:ring-mustard/30 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-charcoal/60 mb-1.5">
                            Pincode *
                          </label>
                          <input
                            type="text"
                            value={formData.pincode}
                            onChange={(e) => updateField('pincode', e.target.value)}
                            placeholder="600100"
                            className="w-full px-4 py-3 bg-cream/50 rounded-xl border border-charcoal/10 text-sm focus:outline-none focus:border-mustard focus:ring-1 focus:ring-mustard/30 transition-all"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  <div>
                    <label className="block text-xs font-medium text-charcoal/60 mb-1.5">
                      Special Instructions
                    </label>
                    <textarea
                      value={formData.specialInstructions}
                      onChange={(e) => updateField('specialInstructions', e.target.value)}
                      placeholder="Any special requests?"
                      rows={3}
                      className="w-full px-4 py-3 bg-cream/50 rounded-xl border border-charcoal/10 text-sm focus:outline-none focus:border-mustard focus:ring-1 focus:ring-mustard/30 transition-all resize-none"
                    />
                  </div>
                </div>

                <button
                  onClick={() => setStep(2)}
                  disabled={!formData.fullName || !formData.phone}
                  className="w-full mt-6 py-3.5 bg-charcoal text-cream font-heading font-bold rounded-xl hover:bg-charcoal-lighter transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue to Payment
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl p-6 border border-charcoal/5"
              >
                <h3 className="text-xl font-heading font-bold mb-6">Payment Method</h3>

                <div className="space-y-3">
                  {[
                    { value: 'upi' as const, icon: Smartphone, label: 'UPI', desc: 'GPay, PhonePe, Paytm' },
                    { value: 'card' as const, icon: CreditCard, label: 'Credit / Debit Card', desc: 'Visa, Mastercard, RuPay' },
                    { value: 'wallet' as const, icon: Wallet, label: 'Digital Wallet', desc: 'Amazon Pay, Mobikwik' },
                    { value: 'cash' as const, icon: Banknote, label: 'Cash on Delivery', desc: 'Pay when you receive' },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setPaymentMethod(opt.value)}
                      className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all ${
                        paymentMethod === opt.value
                          ? 'border-mustard bg-mustard/5'
                          : 'border-charcoal/10 hover:border-charcoal/20'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        paymentMethod === opt.value ? 'bg-mustard/20' : 'bg-charcoal/5'
                      }`}>
                        <opt.icon className={`w-5 h-5 ${
                          paymentMethod === opt.value ? 'text-mustard' : 'text-charcoal/40'
                        }`} />
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-heading font-semibold">{opt.label}</p>
                        <p className="text-xs text-charcoal/40">{opt.desc}</p>
                      </div>
                      <div className={`ml-auto w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        paymentMethod === opt.value ? 'border-mustard' : 'border-charcoal/20'
                      }`}>
                        {paymentMethod === opt.value && (
                          <div className="w-3 h-3 rounded-full bg-mustard" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setStep(3)}
                  className="w-full mt-6 py-3.5 bg-charcoal text-cream font-heading font-bold rounded-xl hover:bg-charcoal-lighter transition-colors"
                >
                  Review Order
                </button>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl p-6 border border-charcoal/5"
              >
                <h3 className="text-xl font-heading font-bold mb-6">Review & Confirm</h3>

                {/* Order Details */}
                <div className="space-y-3 mb-6">
                  <div className="p-3 rounded-xl bg-cream/50">
                    <p className="text-xs text-charcoal/40 mb-1">Delivery To</p>
                    <p className="text-sm font-medium">{formData.fullName}</p>
                    <p className="text-xs text-charcoal/50">{formData.phone}</p>
                    {deliveryMethod === 'delivery' && formData.addressLine1 && (
                      <p className="text-xs text-charcoal/50 mt-1">{formData.addressLine1}</p>
                    )}
                  </div>
                  <div className="p-3 rounded-xl bg-cream/50">
                    <p className="text-xs text-charcoal/40 mb-1">Payment</p>
                    <p className="text-sm font-medium capitalize">{paymentMethod === 'upi' ? 'UPI' : paymentMethod}</p>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full py-4 bg-gradient-to-r from-tomato to-tomato-dark text-white font-heading font-bold text-lg rounded-xl shadow-lg shadow-tomato/20 hover:shadow-tomato/30 transition-all active:scale-[0.98]"
                >
                  Place Order — {formatPrice(total)}
                </button>
              </motion.div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-5 border border-charcoal/5 sticky top-24">
              <h4 className="text-base font-heading font-bold mb-4">Order Summary</h4>

              <div className="space-y-3 mb-4 max-h-60 overflow-y-auto no-scrollbar">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0">
                      <Image
                        src={item.menuItem.image}
                        alt={item.menuItem.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium truncate">{item.menuItem.name}</p>
                      <p className="text-xs text-charcoal/40">x{item.quantity}</p>
                    </div>
                    <span className="text-xs font-bold">
                      {formatPrice(
                        (item.menuItem.price +
                          item.selectedAddOns.reduce((s, a) => s + a.price, 0)) *
                          item.quantity
                      )}
                    </span>
                  </div>
                ))}
              </div>

              <div className="h-px bg-charcoal/10 my-3" />

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-charcoal/50">Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal/50">Delivery</span>
                  <span>{formatPrice(deliveryFee)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal/50">GST (5%)</span>
                  <span>{formatPrice(gst)}</span>
                </div>
                {couponDiscount > 0 && (
                  <div className="flex justify-between text-green">
                    <span>Discount</span>
                    <span>-{formatPrice(couponDiscount)}</span>
                  </div>
                )}
                <div className="h-px bg-charcoal/10" />
                <div className="flex justify-between font-heading font-bold text-base">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
