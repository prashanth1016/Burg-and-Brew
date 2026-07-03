'use client';

import { BRAND, NAV_LINKS, MENU_SECTIONS } from '@/lib/constants';
import { scrollToSection } from '@/lib/utils';
import { MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';
import { Instagram, Facebook, Twitter } from '@/components/ui/Icons';

export function Footer() {
  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    scrollToSection(id);
  };

  return (
    <footer className="bg-charcoal text-cream/70">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-mustard to-mustard-dark flex items-center justify-center">
                <span className="text-charcoal font-heading font-bold text-lg">B</span>
              </div>
              <div>
                <h3 className="text-lg font-heading font-semibold text-cream">
                  Burg N Brew
                </h3>
                <p className="text-xs text-cream/40">Premium Burgers</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-cream/50 mb-4">
              {BRAND.tagline}
            </p>
            <p className="text-xs text-cream/30">
              A Unit of {BRAND.parent}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-heading font-semibold text-cream uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-sm text-cream/50 hover:text-mustard transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('#menu')}
                className="text-left text-sm text-cream/50 hover:text-mustard transition-colors"
              >
                Order Online
              </button>
            </nav>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-sm font-heading font-semibold text-cream uppercase tracking-wider mb-4">
              Our Menu
            </h4>
            <nav className="flex flex-col gap-2">
              {MENU_SECTIONS.slice(0, 6).map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="text-left text-sm text-cream/50 hover:text-mustard transition-colors"
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-heading font-semibold text-cream uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-mustard shrink-0" />
                <p className="text-sm text-cream/50">{BRAND.address.full}</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-mustard shrink-0" />
                <a
                  href={`tel:${BRAND.phone}`}
                  className="text-sm text-cream/50 hover:text-mustard transition-colors"
                >
                  {BRAND.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-mustard shrink-0" />
                <a
                  href={`mailto:${BRAND.email}`}
                  className="text-sm text-cream/50 hover:text-mustard transition-colors"
                >
                  {BRAND.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-mustard shrink-0" />
                <span className="text-sm text-cream/50">{BRAND.hours}</span>
              </div>

              {/* Social */}
              <div className="flex gap-2 mt-2">
                {[
                  { icon: Instagram, href: BRAND.social.instagram, label: 'Instagram' },
                  { icon: Facebook, href: BRAND.social.facebook, label: 'Facebook' },
                  { icon: Twitter, href: BRAND.social.twitter, label: 'Twitter' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-mustard/20 hover:text-mustard transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-cream/30">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved. A Unit of {BRAND.parent}
          </p>
          <p className="text-xs text-cream/30 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-tomato fill-tomato" /> in Chennai
          </p>
        </div>
      </div>
    </footer>
  );
}
