import Link from "next/link";
import {
  CircleDollarSign,
  Heart,
  Headset,
  Mail,
  MapPin,
  Phone,
  RefreshCcw,
  Truck,
} from "lucide-react";

const serviceHighlights = [
  {
    title: "Fast Shipping",
    description: "Shipped in 1-3 days",
    Icon: Truck,
  },
  {
    title: "Free Returns",
    description: "Easy 7-day return",
    Icon: RefreshCcw,
  },
  {
    title: "Cash On Delivery",
    description: "Pay when your order arrives",
    Icon: CircleDollarSign,
  },
  {
    title: "Customer Support",
    description: "Phone and email support",
    Icon: Headset,
  },
];

const customerServiceLinks = [
  { label: "Contact Us and Location", href: "/checkout" },
  { label: "Delivery Info", href: "/products" },
  { label: "FAQs", href: "/products?search=faq" },
  { label: "Loyalty Program", href: "/products?sort=discount" },
];

const informationLinks = [
  { label: "About Us", href: "/products" },
  { label: "Return & Refund", href: "/checkout" },
  { label: "Privacy Policy", href: "/products?search=privacy" },
  { label: "Terms & Conditions", href: "/products?search=terms" },
  { label: "Careers", href: "/products?search=careers" },
];

const socialLinks = [
  { label: "Facebook", href: "#", Icon: Heart },
  { label: "Instagram", href: "#", Icon: Heart },
  { label: "LinkedIn", href: "#", Icon: Mail },
  { label: "Twitter", href: "#", Icon: Heart },
];

const paymentMethods = [
  "HBL",
  "VISA",
  "Mastercard",
  "UnionPay",
  "PayFast",
  "easypaisa",
];

export default function SiteFooter() {
  return (
    <footer className="mt-14">
      <div className="border-y border-border bg-surface">
        <div className="section-shell grid grid-cols-2 gap-4 py-6 md:grid-cols-4 md:gap-6">
          {serviceHighlights.map((service) => (
            <article
              key={service.title}
              className="flex items-start gap-3 border-r border-border/80 pr-3 last:border-r-0 last:pr-0"
            >
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                <service.Icon size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">{service.title}</p>
                <p className="text-xs text-muted">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="bg-[var(--footer)] text-white">
        <div className="section-shell grid gap-10 py-10 sm:py-12 lg:grid-cols-4">
          <section>
            <h2 className="text-2xl font-semibold">Contact Details</h2>
            <div className="mt-5 space-y-4 text-sm text-white/75">
              <p className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                156-157, Block 3, Main Boulevard, Karachi, Pakistan
              </p>
              <p className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                Safa Mall, Ziarat Line, Malir Cantonment, Karachi
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                (021) 111-624-333
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                support@libaura.pk
              </p>
              <p>Customer Support: 7 days a week, 9:00am - 10:00pm</p>
            </div>

            <div className="mt-5 flex items-center gap-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white hover:text-[var(--footer)]"
                >
                  <social.Icon size={15} />
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Customer Services</h2>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              {customerServiceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Information</h2>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              {informationLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Subscribe our Newsletter</h2>
            <p className="mt-5 text-sm text-white/80">
              Get the latest offers, launches, and promotions directly in your inbox.
            </p>

            <form className="mt-4 flex overflow-hidden rounded-xl border border-white/20 bg-white/10">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-11 w-full bg-transparent px-4 text-sm text-white placeholder:text-white/60 outline-none"
              />
              <button
                type="submit"
                className="h-11 shrink-0 bg-[#0b66c3] px-5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Subscribe
              </button>
            </form>

            <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.08em]">
              <span className="rounded-lg border border-white/25 px-3 py-1.5 text-white/80">
                Get it on Google Play
              </span>
              <span className="rounded-lg border border-white/25 px-3 py-1.5 text-white/80">
                Download on App Store
              </span>
            </div>
          </section>
        </div>

        <div className="border-t border-white/10">
          <div className="section-shell flex flex-col gap-4 py-4 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
            <p>Copyright 2026 Libaura.pk. All rights reserved.</p>

            <div className="flex flex-wrap items-center gap-2">
              {paymentMethods.map((method) => (
                <span
                  key={method}
                  className="rounded-md border border-white/20 bg-white/10 px-2 py-1 text-xs font-semibold text-white/85"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
