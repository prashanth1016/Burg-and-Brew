import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { StickyOrderButton } from '@/components/layout/StickyOrderButton';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { ToastProvider } from '@/providers/ToastProvider';
import { LenisProvider } from '@/providers/LenisProvider';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Burg N Brew — Premium Burgers Crafted Fresh | Chennai',
  description:
    'Premium burgers, sandwiches, wraps, brownies & milkshakes delivered across Chennai. Order online for fresh, hygienic, gourmet food. Birthday & corporate catering available. A unit of CulinaryGrid (OPC) Private Limited.',
  keywords: [
    'burger delivery Chennai',
    'premium burgers Chennai',
    'Burg N Brew',
    'online food ordering Chennai',
    'catering Chennai',
    'birthday catering',
    'corporate catering Chennai',
    'gourmet burgers',
    'sandwiches',
    'wraps',
    'brownies',
    'milkshakes',
    'Pallikaranai restaurant',
  ],
  authors: [{ name: 'Burg N Brew' }],
  creator: 'CulinaryGrid (OPC) Private Limited',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://burgnbrew.in',
    siteName: 'Burg N Brew',
    title: 'Burg N Brew — Premium Burgers Crafted Fresh',
    description:
      'Premium Burgers, Wraps, Sandwiches, Brownies & Catering — Delivered Across Chennai.',
    images: [
      {
        url: '/images/hero-burger.png',
        width: 1200,
        height: 630,
        alt: 'Burg N Brew Premium Burger',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Burg N Brew — Premium Burgers Crafted Fresh',
    description:
      'Premium Burgers, Wraps, Sandwiches, Brownies & Catering — Delivered Across Chennai.',
    images: ['/images/hero-burger.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL('https://burgnbrew.in'),
};

// Schema.org JSON-LD
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Burg N Brew',
  description:
    'Premium Burgers, Wraps, Sandwiches, Brownies & Catering — Delivered Across Chennai.',
  url: 'https://burgnbrew.in',
  telephone: '+919876543210',
  email: 'hello@burgnbrew.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '39 Kurinji Street, VGP Shanti Nagar',
    addressLocality: 'Pallikaranai',
    addressRegion: 'Chennai',
    postalCode: '600100',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 12.9364,
    longitude: 80.2052,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
  servesCuisine: ['American', 'Fast Food', 'Continental'],
  priceRange: '₹₹',
  image: '/images/hero-burger.png',
  sameAs: [
    'https://instagram.com/burgnbrew',
    'https://facebook.com/burgnbrew',
  ],
  parentOrganization: {
    '@type': 'Organization',
    name: 'CulinaryGrid (OPC) Private Limited',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-cream text-charcoal antialiased">
        <LenisProvider>
          <ToastProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <CartDrawer />
            <FloatingWhatsApp />
            <StickyOrderButton />
          </ToastProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
