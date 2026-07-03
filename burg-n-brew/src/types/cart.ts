import { AddOn, MenuItem } from './menu';

export interface CartItem {
  id: string;
  menuItem: MenuItem;
  quantity: number;
  selectedAddOns: AddOn[];
  customizations: string[];
  specialInstructions?: string;
}

export interface CartState {
  items: CartItem[];
  couponCode: string | null;
  couponDiscount: number;
  deliveryFee: number;
  isOpen: boolean;
}

export interface CartActions {
  addItem: (item: MenuItem, addOns?: AddOn[], customizations?: string[]) => void;
  removeItem: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  getSubtotal: () => number;
  getGST: () => number;
  getTotal: () => number;
  getItemCount: () => number;
}

export type CartStore = CartState & CartActions;
