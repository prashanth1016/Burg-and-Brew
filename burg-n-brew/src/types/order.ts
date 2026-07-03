import { CartItem } from './cart';

export type DeliveryMethod = 'delivery' | 'pickup';
export type PaymentMethod = 'upi' | 'card' | 'wallet' | 'cash';
export type OrderStatus = 'pending' | 'confirmed' | 'preparing' | 'out-for-delivery' | 'delivered' | 'cancelled';

export interface DeliveryAddress {
  fullName: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  landmark?: string;
  city: string;
  pincode: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  deliveryMethod: DeliveryMethod;
  deliveryAddress?: DeliveryAddress;
  paymentMethod: PaymentMethod;
  subtotal: number;
  deliveryFee: number;
  gst: number;
  discount: number;
  total: number;
  status: OrderStatus;
  createdAt: string;
  estimatedDelivery?: string;
  specialInstructions?: string;
}

export interface CheckoutFormData {
  fullName: string;
  phone: string;
  email?: string;
  addressLine1: string;
  addressLine2?: string;
  landmark?: string;
  city: string;
  pincode: string;
  deliveryMethod: DeliveryMethod;
  paymentMethod: PaymentMethod;
  specialInstructions?: string;
}
