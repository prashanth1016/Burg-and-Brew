import { MenuItem, MenuSection } from '@/types/menu';
import { CateringPackage } from '@/types/catering';

// ─── Brand ───────────────────────────────────────────────
export const BRAND = {
  name: 'Burg N Brew',
  tagline: 'Premium Burgers Crafted Fresh. Delivered with Care.',
  parent: 'CulinaryGrid (OPC) Private Limited',
  address: {
    line1: '39 Kurinji Street',
    line2: 'VGP Shanti Nagar',
    area: 'Pallikaranai',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600100',
    full: '39 Kurinji Street, VGP Shanti Nagar, Pallikaranai, Chennai – 600100',
  },
  phone: '+91 98765 43210',
  whatsapp: '+919876543210',
  email: 'hello@burgnbrew.in',
  hours: 'Open 24 Hours',
  social: {
    instagram: 'https://instagram.com/burgnbrew',
    facebook: 'https://facebook.com/burgnbrew',
    twitter: 'https://twitter.com/burgnbrew',
  },
  maps: 'https://maps.google.com/?q=12.9364,80.2052',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8!2d80.2052!3d12.9364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU2JzExLjAiTiA4MMKwMTInMTguNyJF!5e0!3m2!1sen!2sin!4v1',
};

// ─── Navigation ──────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Catering', href: '#catering' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
] as const;

// ─── Signature Burgers ──────────────────────────────────
const signatureBurgers: MenuItem[] = [
  {
    id: 'sb-1',
    name: 'The Crown Jewel',
    description: 'Double grilled chicken patty, aged cheddar, caramelized onions, truffle mayo, artisan brioche bun',
    price: 349,
    image: '/images/crown-jewel.png',
    category: 'signature-burgers',
    dietary: 'non-veg',
    spiceLevel: 2,
    calories: 680,
    isSignature: true,
    isBestseller: true,
    addOns: [
      { id: 'ao-1', name: 'Extra Cheese', price: 40 },
      { id: 'ao-2', name: 'Extra Patty', price: 80 },
      { id: 'ao-3', name: 'Bacon Strips', price: 60 },
      { id: 'ao-4', name: 'Jalapeños', price: 30 },
    ],
  },
  {
    id: 'sb-2',
    name: 'Smoky BBQ Beast',
    description: 'Crispy fried chicken, smoky BBQ sauce, coleslaw, pickled jalapeños, sesame bun',
    price: 299,
    image: '/images/smoky-bbq-beast.png',
    category: 'signature-burgers',
    dietary: 'non-veg',
    spiceLevel: 3,
    calories: 720,
    isSignature: true,
    addOns: [
      { id: 'ao-1', name: 'Extra Cheese', price: 40 },
      { id: 'ao-2', name: 'Extra Patty', price: 80 },
      { id: 'ao-5', name: 'Onion Rings', price: 50 },
    ],
  },
  {
    id: 'sb-3',
    name: 'Garden Royale',
    description: 'Grilled paneer patty, avocado spread, sun-dried tomatoes, mixed greens, multigrain bun',
    price: 279,
    image: '/images/garden-royale.png',
    category: 'signature-burgers',
    dietary: 'veg',
    spiceLevel: 1,
    calories: 520,
    isSignature: true,
    isNew: true,
    addOns: [
      { id: 'ao-1', name: 'Extra Cheese', price: 40 },
      { id: 'ao-6', name: 'Grilled Mushrooms', price: 50 },
    ],
  },
  {
    id: 'sb-4',
    name: 'Fiery Inferno',
    description: 'Spicy grilled chicken, ghost pepper sauce, pepper jack cheese, crispy onions, charcoal bun',
    price: 329,
    image: '/images/fiery-inferno.png',
    category: 'signature-burgers',
    dietary: 'non-veg',
    spiceLevel: 3,
    calories: 650,
    isSignature: true,
    addOns: [
      { id: 'ao-1', name: 'Extra Cheese', price: 40 },
      { id: 'ao-2', name: 'Extra Patty', price: 80 },
    ],
  },
];

// ─── Classic Burgers ────────────────────────────────────
const classicBurgers: MenuItem[] = [
  {
    id: 'cb-1',
    name: 'Classic Chicken Burger',
    description: 'Juicy grilled chicken patty, fresh lettuce, tomato, mayo, soft bun',
    price: 179,
    image: '/images/classic-chicken-burger.png',
    category: 'classic-burgers',
    dietary: 'non-veg',
    spiceLevel: 1,
    calories: 450,
    isBestseller: true,
    addOns: [
      { id: 'ao-1', name: 'Extra Cheese', price: 40 },
      { id: 'ao-2', name: 'Extra Patty', price: 80 },
    ],
  },
  {
    id: 'cb-2',
    name: 'Veggie Delight',
    description: 'Crispy aloo tikki patty, fresh vegetables, mint chutney, sesame bun',
    price: 149,
    image: '/images/veggie-delight.png',
    category: 'classic-burgers',
    dietary: 'veg',
    spiceLevel: 1,
    calories: 380,
    addOns: [
      { id: 'ao-1', name: 'Extra Cheese', price: 40 },
    ],
  },
  {
    id: 'cb-3',
    name: 'Cheese Melt Burger',
    description: 'Double cheese, grilled chicken, caramelized onions, house special sauce',
    price: 229,
    image: '/images/cheese-melt-burger.png',
    category: 'classic-burgers',
    dietary: 'non-veg',
    spiceLevel: 1,
    calories: 560,
    addOns: [
      { id: 'ao-1', name: 'Extra Cheese', price: 40 },
      { id: 'ao-2', name: 'Extra Patty', price: 80 },
    ],
  },
];

// ─── Sandwiches ─────────────────────────────────────────
const sandwiches: MenuItem[] = [
  {
    id: 'sw-1',
    name: 'Grilled Chicken Club',
    description: 'Triple-layered grilled chicken, bacon, lettuce, tomato, mayo, toasted bread',
    price: 249,
    image: '/images/sandwich-collection.png',
    category: 'sandwiches',
    dietary: 'non-veg',
    spiceLevel: 1,
    calories: 520,
    isBestseller: true,
    addOns: [
      { id: 'ao-1', name: 'Extra Cheese', price: 40 },
      { id: 'ao-7', name: 'Avocado', price: 60 },
    ],
  },
  {
    id: 'sw-2',
    name: 'Paneer Tikka Sandwich',
    description: 'Spiced paneer tikka, bell peppers, onions, mint mayo, grilled sourdough',
    price: 219,
    image: '/images/sandwich-collection.png',
    category: 'sandwiches',
    dietary: 'veg',
    spiceLevel: 2,
    calories: 480,
    addOns: [
      { id: 'ao-1', name: 'Extra Cheese', price: 40 },
    ],
  },
  {
    id: 'sw-3',
    name: 'Mediterranean Veggie',
    description: 'Hummus, grilled vegetables, feta, olives, sun-dried tomatoes, focaccia',
    price: 229,
    image: '/images/sandwich-collection.png',
    category: 'sandwiches',
    dietary: 'veg',
    spiceLevel: 0,
    calories: 420,
    isNew: true,
    addOns: [
      { id: 'ao-7', name: 'Avocado', price: 60 },
    ],
  },
  {
    id: 'sw-4',
    name: 'Smoked Chicken & Cheese',
    description: 'Smoked chicken breast, swiss cheese, honey mustard, arugula, ciabatta',
    price: 269,
    image: '/images/sandwich-collection.png',
    category: 'sandwiches',
    dietary: 'non-veg',
    spiceLevel: 0,
    calories: 490,
    addOns: [
      { id: 'ao-1', name: 'Extra Cheese', price: 40 },
    ],
  },
];

// ─── Wraps ──────────────────────────────────────────────
const wraps: MenuItem[] = [
  {
    id: 'wr-1',
    name: 'Chicken Shawarma Wrap',
    description: 'Spiced chicken shawarma, garlic sauce, pickled vegetables, fresh herbs, warm pita',
    price: 229,
    image: '/images/wrap-collection.png',
    category: 'wraps',
    dietary: 'non-veg',
    spiceLevel: 2,
    calories: 480,
    isBestseller: true,
    addOns: [
      { id: 'ao-1', name: 'Extra Cheese', price: 40 },
      { id: 'ao-8', name: 'Extra Sauce', price: 20 },
    ],
  },
  {
    id: 'wr-2',
    name: 'Tandoori Paneer Wrap',
    description: 'Tandoori spiced paneer, crispy onions, mint yogurt, whole wheat wrap',
    price: 199,
    image: '/images/wrap-collection.png',
    category: 'wraps',
    dietary: 'veg',
    spiceLevel: 2,
    calories: 440,
    addOns: [
      { id: 'ao-1', name: 'Extra Cheese', price: 40 },
    ],
  },
  {
    id: 'wr-3',
    name: 'Mexican Chicken Wrap',
    description: 'Spicy grilled chicken, black beans, corn salsa, sour cream, jalapeños, flour tortilla',
    price: 249,
    image: '/images/wrap-collection.png',
    category: 'wraps',
    dietary: 'non-veg',
    spiceLevel: 3,
    calories: 520,
    isNew: true,
    addOns: [
      { id: 'ao-1', name: 'Extra Cheese', price: 40 },
      { id: 'ao-9', name: 'Guacamole', price: 50 },
    ],
  },
  {
    id: 'wr-4',
    name: 'Falafel Wrap',
    description: 'Crispy falafel, hummus, tahini, pickled turnips, fresh vegetables, pita wrap',
    price: 209,
    image: '/images/wrap-collection.png',
    category: 'wraps',
    dietary: 'veg',
    spiceLevel: 1,
    calories: 400,
    addOns: [
      { id: 'ao-8', name: 'Extra Sauce', price: 20 },
    ],
  },
];

// ─── Brownies ───────────────────────────────────────────
const brownies: MenuItem[] = [
  {
    id: 'br-1',
    name: 'Classic Fudge Brownie',
    description: 'Rich, dense chocolate brownie with a crackly top and gooey center',
    price: 129,
    image: '/images/brownies.png',
    category: 'brownies',
    dietary: 'egg',
    spiceLevel: 0,
    calories: 380,
    isBestseller: true,
    addOns: [
      { id: 'ao-10', name: 'Ice Cream Scoop', price: 60 },
      { id: 'ao-11', name: 'Chocolate Sauce', price: 30 },
    ],
  },
  {
    id: 'br-2',
    name: 'Salted Caramel Brownie',
    description: 'Dark chocolate brownie swirled with salted caramel and sea salt flakes',
    price: 149,
    image: '/images/brownies.png',
    category: 'brownies',
    dietary: 'egg',
    spiceLevel: 0,
    calories: 420,
    isSignature: true,
    addOns: [
      { id: 'ao-10', name: 'Ice Cream Scoop', price: 60 },
    ],
  },
  {
    id: 'br-3',
    name: 'Walnut Brownie',
    description: 'Chocolate brownie loaded with crunchy walnuts and chocolate chips',
    price: 159,
    image: '/images/brownies.png',
    category: 'brownies',
    dietary: 'egg',
    spiceLevel: 0,
    calories: 440,
    addOns: [
      { id: 'ao-10', name: 'Ice Cream Scoop', price: 60 },
    ],
  },
  {
    id: 'br-4',
    name: 'Red Velvet Brownie',
    description: 'Velvety red cocoa brownie with cream cheese swirl and white chocolate chips',
    price: 169,
    image: '/images/brownies.png',
    category: 'brownies',
    dietary: 'egg',
    spiceLevel: 0,
    calories: 400,
    isNew: true,
    addOns: [
      { id: 'ao-10', name: 'Ice Cream Scoop', price: 60 },
    ],
  },
];

// ─── Milkshakes ─────────────────────────────────────────
const milkshakes: MenuItem[] = [
  {
    id: 'ms-1',
    name: 'Classic Chocolate Shake',
    description: 'Rich chocolate ice cream blended with premium cocoa and whipped cream',
    price: 179,
    image: '/images/milkshakes.png',
    category: 'milkshakes',
    dietary: 'veg',
    spiceLevel: 0,
    calories: 480,
    isBestseller: true,
    addOns: [
      { id: 'ao-12', name: 'Extra Whipped Cream', price: 30 },
      { id: 'ao-13', name: 'Cookie Crumble', price: 40 },
    ],
  },
  {
    id: 'ms-2',
    name: 'Oreo Cookie Shake',
    description: 'Crushed Oreo cookies blended with vanilla ice cream and chocolate drizzle',
    price: 199,
    image: '/images/milkshakes.png',
    category: 'milkshakes',
    dietary: 'veg',
    spiceLevel: 0,
    calories: 520,
    isSignature: true,
    addOns: [
      { id: 'ao-12', name: 'Extra Whipped Cream', price: 30 },
    ],
  },
  {
    id: 'ms-3',
    name: 'Strawberry Dream',
    description: 'Fresh strawberry purée, vanilla ice cream, strawberry syrup, whipped cream',
    price: 189,
    image: '/images/milkshakes.png',
    category: 'milkshakes',
    dietary: 'veg',
    spiceLevel: 0,
    calories: 440,
    addOns: [
      { id: 'ao-12', name: 'Extra Whipped Cream', price: 30 },
    ],
  },
  {
    id: 'ms-4',
    name: 'Caramel Crunch Shake',
    description: 'Caramel ice cream, toffee bits, caramel drizzle, salted pretzel topping',
    price: 219,
    image: '/images/milkshakes.png',
    category: 'milkshakes',
    dietary: 'veg',
    spiceLevel: 0,
    calories: 560,
    isNew: true,
    addOns: [
      { id: 'ao-12', name: 'Extra Whipped Cream', price: 30 },
      { id: 'ao-13', name: 'Cookie Crumble', price: 40 },
    ],
  },
];

// ─── Party Snack Boxes ──────────────────────────────────
const partyBoxes: MenuItem[] = [
  {
    id: 'pb-1',
    name: 'Mini Burger Box (12 pcs)',
    description: 'Assorted mini burgers — chicken & veg, with dipping sauces',
    price: 999,
    image: '/images/featured-menu.png',
    category: 'party-boxes',
    dietary: 'non-veg',
    spiceLevel: 1,
    calories: 1800,
    isBestseller: true,
  },
  {
    id: 'pb-2',
    name: 'Wrap Platter (8 pcs)',
    description: 'Assorted wraps cut into halves, beautifully arranged with dips',
    price: 799,
    image: '/images/featured-menu.png',
    category: 'party-boxes',
    dietary: 'non-veg',
    spiceLevel: 2,
    calories: 1600,
  },
  {
    id: 'pb-3',
    name: 'Brownie Box (6 pcs)',
    description: 'Assorted premium brownies in a gift box',
    price: 599,
    image: '/images/brownies.png',
    category: 'party-boxes',
    dietary: 'egg',
    spiceLevel: 0,
    calories: 2200,
    isNew: true,
  },
  {
    id: 'pb-4',
    name: 'Ultimate Party Pack',
    description: '6 mini burgers + 4 wraps + 4 brownies + 4 milkshakes — the complete celebration',
    price: 1999,
    image: '/images/featured-menu.png',
    category: 'party-boxes',
    dietary: 'non-veg',
    spiceLevel: 1,
    calories: 4800,
    isSignature: true,
  },
];

// ─── All Menu Sections ──────────────────────────────────
export const MENU_SECTIONS: MenuSection[] = [
  {
    id: 'signature-burgers',
    title: 'Signature Burgers',
    subtitle: 'Handcrafted masterpieces that define our craft',
    category: 'signature-burgers',
    image: '/images/signature-burger.png',
    items: signatureBurgers,
  },
  {
    id: 'classic-burgers',
    title: 'Classic Burgers',
    subtitle: 'Timeless flavours done right',
    category: 'classic-burgers',
    image: '/images/signature-burger.png',
    items: classicBurgers,
  },
  {
    id: 'sandwiches',
    title: 'Sandwich Collection',
    subtitle: 'Freshly crafted, perfectly toasted',
    category: 'sandwiches',
    image: '/images/sandwich-collection.png',
    items: sandwiches,
  },
  {
    id: 'wraps',
    title: 'Wrap Collection',
    subtitle: 'Bold flavours wrapped to perfection',
    category: 'wraps',
    image: '/images/wrap-collection.png',
    items: wraps,
  },
  {
    id: 'brownies',
    title: 'Brownies',
    subtitle: 'Indulgent, rich & irresistible',
    category: 'brownies',
    image: '/images/brownies.png',
    items: brownies,
  },
  {
    id: 'milkshakes',
    title: 'Milkshakes',
    subtitle: 'Creamy, dreamy & handcrafted',
    category: 'milkshakes',
    image: '/images/milkshakes.png',
    items: milkshakes,
  },
  {
    id: 'party-boxes',
    title: 'Party Snack Boxes',
    subtitle: 'Perfect for celebrations & gatherings',
    category: 'party-boxes',
    image: '/images/featured-menu.png',
    items: partyBoxes,
  },
];

// ─── All Menu Items (flat) ──────────────────────────────
export const ALL_MENU_ITEMS: MenuItem[] = MENU_SECTIONS.flatMap((s) => s.items);

// ─── Catering Packages ──────────────────────────────────
export const CATERING_PACKAGES: CateringPackage[] = [
  {
    id: 'cat-1',
    name: 'Birthday Bash',
    type: 'birthday',
    description: 'Make birthdays unforgettable with our premium burger & dessert catering',
    image: '/images/catering-setup.png',
    minGuests: 20,
    pricePerPerson: 399,
    popular: true,
    includes: [
      '2 Burger varieties (Veg & Non-Veg)',
      '1 Wrap variety',
      'Assorted Brownies',
      '2 Milkshake flavours',
      'Fries & Dips',
      'Premium Packaging',
    ],
    features: ['Custom birthday theme', 'Free cake arrangement', 'Return gifts available', 'Setup & cleanup'],
  },
  {
    id: 'cat-2',
    name: 'Corporate Feast',
    type: 'corporate',
    description: 'Impress clients & teams with our professional catering service',
    image: '/images/catering-setup.png',
    minGuests: 30,
    pricePerPerson: 449,
    includes: [
      '3 Burger varieties',
      '2 Sandwich varieties',
      '1 Wrap variety',
      'Assorted Brownies',
      '3 Milkshake flavours',
      'Fries & Sides',
      'Beverages',
    ],
    features: ['Professional service staff', 'Branded setup', 'Dietary accommodations', 'Invoice billing'],
  },
  {
    id: 'cat-3',
    name: 'Office Lunch',
    type: 'office',
    description: 'Quick, delicious & hassle-free lunch for your team',
    image: '/images/catering-setup.png',
    minGuests: 15,
    pricePerPerson: 299,
    includes: [
      '2 Burger varieties',
      '1 Sandwich variety',
      'Fries',
      '1 Brownie per person',
      'Beverages',
    ],
    features: ['Express delivery', 'Individual packaging', 'Flexible timing', 'Weekly subscription available'],
  },
  {
    id: 'cat-4',
    name: 'School & College Events',
    type: 'school',
    description: 'Fun, safe & kid-friendly menu for school events',
    image: '/images/catering-setup.png',
    minGuests: 50,
    pricePerPerson: 249,
    includes: [
      '2 Mini Burger varieties',
      'Fries & Nuggets',
      'Brownies',
      'Milkshakes',
      'Juice boxes',
    ],
    features: ['Allergen-aware menu', 'Fun packaging', 'Activity kits available', 'Teacher meals included'],
  },
  {
    id: 'cat-5',
    name: 'Grand Function',
    type: 'function',
    description: 'Premium catering for weddings, receptions & large gatherings',
    image: '/images/catering-setup.png',
    minGuests: 100,
    pricePerPerson: 349,
    popular: true,
    includes: [
      '4 Burger varieties',
      '3 Sandwich varieties',
      '2 Wrap varieties',
      'Assorted Brownies & Desserts',
      'Full Milkshake Bar',
      'Fries, Sides & Sauces',
      'Beverages Station',
    ],
    features: ['Dedicated event manager', 'Live counter setup', 'Custom branding', 'Full setup & cleanup'],
  },
];

// ─── Reviews ────────────────────────────────────────────
export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
  avatar?: string;
}

export const REVIEWS: Review[] = [
  {
    id: 'r-1',
    name: 'Priya Sharma',
    rating: 5,
    text: 'Absolutely the best burgers in Chennai! The Crown Jewel is a masterpiece. Fresh ingredients, perfectly cooked, and the packaging is so premium. We order every weekend!',
    date: '2 weeks ago',
    verified: true,
  },
  {
    id: 'r-2',
    name: 'Rahul Menon',
    rating: 5,
    text: 'Ordered their catering for our office party — 50 people were blown away. The mini burger box and brownie platters were a massive hit. Professional service!',
    date: '1 month ago',
    verified: true,
  },
  {
    id: 'r-3',
    name: 'Anita Krishnan',
    rating: 5,
    text: "My daughter's birthday catering was perfect. The team handled everything from setup to cleanup. Kids loved the mini burgers and milkshakes. Highly recommend!",
    date: '3 weeks ago',
    verified: true,
  },
  {
    id: 'r-4',
    name: 'Vikram Patel',
    rating: 4,
    text: 'The Smoky BBQ Beast lives up to its name — incredible flavour! Delivery was quick and hot. The only reason for 4 stars is I wish they had more veg options.',
    date: '1 week ago',
    verified: true,
  },
  {
    id: 'r-5',
    name: 'Deepa Sundar',
    rating: 5,
    text: 'Their brownies are to die for! The salted caramel brownie is unlike anything else in the city. Perfect dessert after their wraps. Quality is consistently premium.',
    date: '2 months ago',
    verified: true,
  },
  {
    id: 'r-6',
    name: 'Arjun Reddy',
    rating: 5,
    text: 'Finally a restaurant that delivers the same quality as dining in. The packaging keeps everything fresh and hot. The Chicken Shawarma Wrap is addictive!',
    date: '5 days ago',
    verified: true,
  },
];

// ─── FAQ ────────────────────────────────────────────────
export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: 'What areas do you deliver to?',
    answer: 'We currently deliver across Chennai, covering all major areas including Pallikaranai, Velachery, Thoraipakkam, OMR, Adyar, T. Nagar, Anna Nagar, and surrounding localities. Delivery fees may vary based on distance.',
  },
  {
    question: 'What are your operating hours?',
    answer: 'Burg N Brew is open 24 hours, 7 days a week. You can place orders anytime — whether it\'s a late-night craving or an early morning treat!',
  },
  {
    question: 'Do you offer vegetarian options?',
    answer: 'Absolutely! We have a wide range of vegetarian burgers, sandwiches, wraps, and desserts. All items are clearly marked with a green (Veg) or red (Non-Veg) badge on our menu.',
  },
  {
    question: 'How do I place a catering order?',
    answer: 'You can request a catering quote through our website\'s Catering section, send us a WhatsApp message, or call us directly. We recommend booking at least 3 days in advance for small events and 1 week for larger gatherings.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept UPI (GPay, PhonePe, Paytm), Credit/Debit Cards, Digital Wallets, and Cash on Delivery. All online payments are secured with industry-standard encryption.',
  },
  {
    question: 'Can I customize my order?',
    answer: 'Yes! Most items can be customized — add extra cheese, switch out sauces, add toppings, or request special preparations. You can add customizations while adding items to your cart.',
  },
  {
    question: 'Do you offer return gifts and custom boxes?',
    answer: 'Yes, we offer beautifully packaged return gift boxes and custom party boxes. These are perfect for birthdays, weddings, corporate events, and festivals. Contact us for bulk pricing.',
  },
  {
    question: 'Is your food hygienic and safe?',
    answer: 'Food safety is our top priority. Our kitchen follows strict FSSAI guidelines, all staff are trained in food handling, and we use premium, fresh ingredients sourced daily. Our packaging is food-grade and eco-friendly.',
  },
  {
    question: 'Do you have a minimum order value for delivery?',
    answer: 'There is no minimum order value for delivery within a 5km radius. For orders beyond 5km, a minimum order of ₹300 applies. Delivery is free on orders above ₹500.',
  },
  {
    question: 'How can I track my order?',
    answer: 'After placing your order, you\'ll receive a confirmation with a tracking link via SMS and WhatsApp. You can track your order in real-time from preparation to delivery.',
  },
];

// ─── Gallery ────────────────────────────────────────────
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'food' | 'kitchen' | 'events' | 'customers' | 'packaging';
  width: number;
  height: number;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 'g-1', src: '/images/signature-burger.png', alt: 'Premium signature burger', category: 'food', width: 800, height: 600 },
  { id: 'g-2', src: '/images/restaurant-interior.png', alt: 'Modern restaurant interior', category: 'kitchen', width: 800, height: 600 },
  { id: 'g-3', src: '/images/catering-setup.png', alt: 'Birthday catering setup', category: 'events', width: 800, height: 600 },
  { id: 'g-4', src: '/images/sandwich-collection.png', alt: 'Fresh sandwich collection', category: 'food', width: 800, height: 600 },
  { id: 'g-5', src: '/images/premium-packaging.png', alt: 'Premium takeaway packaging', category: 'packaging', width: 800, height: 600 },
  { id: 'g-6', src: '/images/wrap-collection.png', alt: 'Grilled wrap collection', category: 'food', width: 800, height: 600 },
  { id: 'g-7', src: '/images/brownies.png', alt: 'Luxury chocolate brownies', category: 'food', width: 800, height: 600 },
  { id: 'g-8', src: '/images/milkshakes.png', alt: 'Gourmet milkshakes', category: 'food', width: 800, height: 600 },
  { id: 'g-9', src: '/images/featured-menu.png', alt: 'Full menu spread', category: 'food', width: 800, height: 600 },
  { id: 'g-10', src: '/images/hero-burger.png', alt: 'Hero gourmet burger', category: 'food', width: 800, height: 600 },
];

// ─── Stats ──────────────────────────────────────────────
export const STATS = [
  { label: 'Orders Delivered', value: 15000, suffix: '+' },
  { label: 'Happy Customers', value: 8500, suffix: '+' },
  { label: '5-Star Reviews', value: 2400, suffix: '+' },
  { label: 'Events Catered', value: 350, suffix: '+' },
];

// ─── Coupons ────────────────────────────────────────────
export const COUPONS: Record<string, { discount: number; type: 'percent' | 'flat'; minOrder: number; description: string }> = {
  WELCOME20: { discount: 20, type: 'percent', minOrder: 300, description: '20% off on your first order' },
  BURG50: { discount: 50, type: 'flat', minOrder: 500, description: '₹50 off on orders above ₹500' },
  PARTY100: { discount: 100, type: 'flat', minOrder: 1000, description: '₹100 off on party orders above ₹1000' },
};
