export type DietaryType = 'veg' | 'non-veg' | 'egg';
export type SpiceLevel = 0 | 1 | 2 | 3;

export interface AddOn {
  id: string;
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: MenuCategory;
  dietary: DietaryType;
  spiceLevel: SpiceLevel;
  calories: number;
  isSignature?: boolean;
  isBestseller?: boolean;
  isNew?: boolean;
  addOns?: AddOn[];
  customizations?: string[];
}

export type MenuCategory =
  | 'signature-burgers'
  | 'classic-burgers'
  | 'sandwiches'
  | 'wraps'
  | 'brownies'
  | 'milkshakes'
  | 'sides'
  | 'party-boxes';

export interface MenuSection {
  id: string;
  title: string;
  subtitle: string;
  category: MenuCategory;
  image: string;
  items: MenuItem[];
}
