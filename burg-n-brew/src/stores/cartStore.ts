'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartStore } from '@/types/cart';
import { MenuItem, AddOn } from '@/types/menu';
import { generateId } from '@/lib/utils';
import { COUPONS } from '@/lib/constants';

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      // State
      items: [],
      couponCode: null,
      couponDiscount: 0,
      deliveryFee: 40,
      isOpen: false,

      // Actions
      addItem: (menuItem: MenuItem, addOns: AddOn[] = [], customizations: string[] = []) => {
        const state = get();
        const existingIndex = state.items.findIndex(
          (item) =>
            item.menuItem.id === menuItem.id &&
            JSON.stringify(item.selectedAddOns) === JSON.stringify(addOns) &&
            JSON.stringify(item.customizations) === JSON.stringify(customizations)
        );

        if (existingIndex >= 0) {
          const newItems = [...state.items];
          newItems[existingIndex] = {
            ...newItems[existingIndex],
            quantity: newItems[existingIndex].quantity + 1,
          };
          set({ items: newItems });
        } else {
          set({
            items: [
              ...state.items,
              {
                id: generateId(),
                menuItem,
                quantity: 1,
                selectedAddOns: addOns,
                customizations,
              },
            ],
          });
        }
      },

      removeItem: (cartItemId: string) => {
        set({ items: get().items.filter((item) => item.id !== cartItemId) });
      },

      updateQuantity: (cartItemId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(cartItemId);
          return;
        }
        set({
          items: get().items.map((item) =>
            item.id === cartItemId ? { ...item, quantity } : item
          ),
        });
      },

      applyCoupon: (code: string) => {
        const coupon = COUPONS[code.toUpperCase()];
        if (!coupon) return false;

        const subtotal = get().getSubtotal();
        if (subtotal < coupon.minOrder) return false;

        const discount =
          coupon.type === 'percent'
            ? Math.round((subtotal * coupon.discount) / 100)
            : coupon.discount;

        set({ couponCode: code.toUpperCase(), couponDiscount: discount });
        return true;
      },

      removeCoupon: () => {
        set({ couponCode: null, couponDiscount: 0 });
      },

      clearCart: () => {
        set({ items: [], couponCode: null, couponDiscount: 0 });
      },

      toggleCart: () => set({ isOpen: !get().isOpen }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),

      getSubtotal: () => {
        return get().items.reduce((total, item) => {
          const addOnsPrice = item.selectedAddOns.reduce((sum, a) => sum + a.price, 0);
          return total + (item.menuItem.price + addOnsPrice) * item.quantity;
        }, 0);
      },

      getGST: () => {
        return Math.round(get().getSubtotal() * 0.05);
      },

      getTotal: () => {
        const state = get();
        return state.getSubtotal() + state.getGST() + state.deliveryFee - state.couponDiscount;
      },

      getItemCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0);
      },
    }),
    {
      name: 'burg-n-brew-cart',
      partialize: (state) => ({
        items: state.items,
        couponCode: state.couponCode,
        couponDiscount: state.couponDiscount,
      }),
    }
  )
);
