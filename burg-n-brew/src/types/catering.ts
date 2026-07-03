export type CateringType = 'birthday' | 'corporate' | 'office' | 'school' | 'function';

export interface CateringPackage {
  id: string;
  name: string;
  type: CateringType;
  description: string;
  image: string;
  minGuests: number;
  pricePerPerson: number;
  includes: string[];
  features: string[];
  popular?: boolean;
}

export interface CateringEnquiry {
  name: string;
  phone: string;
  email?: string;
  eventType: CateringType;
  guestCount: number;
  eventDate: string;
  venue: string;
  budget?: string;
  message?: string;
}
