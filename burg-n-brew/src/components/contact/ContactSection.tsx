'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Navigation, MessageCircle } from 'lucide-react';
import { Instagram } from '@/components/ui/Icons';
import { BRAND } from '@/lib/constants';

const contactMethods = [
  {
    icon: Phone,
    label: 'Call Us',
    value: BRAND.phone,
    href: `tel:${BRAND.phone}`,
    color: 'text-green',
    bg: 'bg-green/10',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with us',
    href: `https://wa.me/${BRAND.whatsapp}`,
    color: 'text-[#25D366]',
    bg: 'bg-[#25D366]/10',
  },
  {
    icon: Mail,
    label: 'Email',
    value: BRAND.email,
    href: `mailto:${BRAND.email}`,
    color: 'text-mustard',
    bg: 'bg-mustard/10',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@burgnbrew',
    href: BRAND.social.instagram,
    color: 'text-[#E4405F]',
    bg: 'bg-[#E4405F]/10',
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mustard/10 text-mustard text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-mustard" />
            Contact
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-4">
            Get In{' '}
            <span className="text-mustard">Touch</span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal/50 max-w-2xl mx-auto">
            Have a question, want to place a bulk order, or just want to say hi? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left — Info */}
          <div>
            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactMethods.map((method, i) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-charcoal/5 card-premium"
                >
                  <div className={`w-12 h-12 rounded-xl ${method.bg} flex items-center justify-center shrink-0`}>
                    <method.icon className={`w-5 h-5 ${method.color}`} />
                  </div>
                  <div>
                    <p className="text-xs text-charcoal/40 uppercase tracking-wider">{method.label}</p>
                    <p className="text-sm font-heading font-semibold text-charcoal">{method.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Address & Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 rounded-2xl bg-white border border-charcoal/5"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-xl bg-tomato/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-tomato" />
                </div>
                <div>
                  <h4 className="text-sm font-heading font-semibold text-charcoal mb-1">Our Location</h4>
                  <p className="text-sm text-charcoal/50 leading-relaxed">
                    {BRAND.address.full}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-xl bg-green/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-green" />
                </div>
                <div>
                  <h4 className="text-sm font-heading font-semibold text-charcoal mb-1">Business Hours</h4>
                  <p className="text-sm text-charcoal/50">
                    {BRAND.hours} — 7 days a week
                  </p>
                  <span className="inline-flex items-center gap-1 mt-1 text-xs text-green font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
                    Open now
                  </span>
                </div>
              </div>

              <a
                href={BRAND.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-charcoal text-cream font-heading font-semibold text-sm rounded-xl hover:bg-charcoal-lighter transition-colors"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
            </motion.div>
          </div>

          {/* Right — Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden h-[400px] lg:h-full min-h-[400px] border border-charcoal/10"
          >
            <iframe
              src={BRAND.mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Burg N Brew Location"
              className="rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
