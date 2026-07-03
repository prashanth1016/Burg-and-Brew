import { HeroSection } from '@/components/hero/HeroSection';
import { FeaturedMenu } from '@/components/menu/FeaturedMenu';
import { MenuSection } from '@/components/menu/MenuSection';
import { CateringSection } from '@/components/catering/CateringSection';
import { ReviewsSection } from '@/components/reviews/ReviewsSection';
import { GallerySection } from '@/components/gallery/GallerySection';
import { AboutSection } from '@/components/about/AboutSection';
import { OnlineOrderingCTA } from '@/components/ordering/OnlineOrderingCTA';
import { FAQSection } from '@/components/faq/FAQSection';
import { ContactSection } from '@/components/contact/ContactSection';
import { MENU_SECTIONS } from '@/lib/constants';

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Featured Menu Overview */}
      <FeaturedMenu />

      {/* 3-8. Menu Sections */}
      {MENU_SECTIONS.map((section, i) => (
        <div
          key={section.id}
          className={i % 2 === 0 ? 'bg-cream' : 'bg-white'}
        >
          <MenuSection section={section} reverse={i % 2 !== 0} />
        </div>
      ))}

      {/* 9-10. Catering */}
      <CateringSection />

      {/* 11. Reviews */}
      <ReviewsSection />

      {/* 12. Gallery */}
      <GallerySection />

      {/* 13. About */}
      <AboutSection />

      {/* 14. Online Ordering CTA */}
      <OnlineOrderingCTA />

      {/* 15. FAQ */}
      <FAQSection />

      {/* 16. Contact */}
      <ContactSection />
    </>
  );
}
