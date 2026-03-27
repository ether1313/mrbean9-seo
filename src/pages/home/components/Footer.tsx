import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { liveTransactions } from "../../../mocks/casinoData";
import { MrBean9Word } from "@/utils/renderMrBean9";

interface FooterProps {
  onSignUpClick: () => void;
}

/** Only routes / home sections that exist in this app */
const footerColumns: {
  title: string;
  links: { label: ReactNode; to: string }[];
}[] = [
  {
    title: "Support",
    links: [
      { label: "Payment Methods", to: "/#payments" },
      { label: "Responsible Gaming", to: "/#responsible" },
      { label: "FAQ", to: "/#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: (
          <>
            About MrBean9
          </>
        ),
        to: "/#about",
      },
      { label: "Strategy", to: "/guides/strategy" },
      { label: "VIP Program", to: "/vip" },
      { label: "Blog", to: "/blog" },
    ],
  },
];

const paymentIcons = [
  { icon: "ri-visa-line", label: "Visa" },
  { icon: "ri-mastercard-line", label: "Mastercard" },
  { icon: "ri-bit-coin-line", label: "Bitcoin" },
  { icon: "ri-bank-card-line", label: "Bank Transfer" },
];

export default function Footer({ onSignUpClick }: FooterProps) {
  return (
    <footer className="border-t border-brand/15 bg-white pb-16 text-black lg:pb-0">
      {/* Live Transactions Ticker */}
      <div className="border-y border-[#e5e5e5] bg-white px-4 py-2.5 sm:px-6 sm:py-3">
        <div className="mx-auto flex max-w-6xl items-center gap-3 sm:gap-4">
          <div className="flex flex-shrink-0 items-center gap-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-[#22c55e]" />
            <span className="text-xs font-black uppercase tracking-widest text-[#22c55e] sm:text-sm">LIVE</span>
          </div>
          <div className="min-w-0 flex-1 overflow-hidden">
            <div className="flex gap-8 transaction-ticker">
              {[...liveTransactions, ...liveTransactions].map((tx, i) => (
                <span key={i} className="flex items-center gap-2 whitespace-nowrap text-[11px] text-black sm:text-xs md:text-sm">
                  <span className="font-semibold text-black">{tx.user}</span>
                  <span className={tx.action === "Win" ? "font-bold text-emerald-300" : "font-bold text-app-gold"}>{tx.amount}</span>
                  <span className="text-black">on {tx.game}</span>
                  <span className="text-black">{tx.time}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="px-4 py-10 sm:px-6 sm:py-14 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-4">
            {/* Brand Column */}
            <div>
              <img
                src="https://static.readdy.ai/image/b513b5b4a847779ee65de1525456761b/3e7d794a921fbb935d6c5077d8b85caf.png"
                alt="MrBean9 Casino"
                className="h-16 object-contain mb-4"
              />
              <p className="mb-6 text-sm leading-relaxed text-stone-600 md:text-base">
                MrBean9 is Australia&apos;s premier online casino platform. Experience world-class gaming entertainment with the charm of everyone&apos;s favourite cartoon character.
              </p>
              {/* Social Icons */}
              <div className="flex gap-3 mb-6">
                {[
                  { icon: "ri-facebook-fill", href: "https://mrbean9.com/RFMRBEAN9SEO" },
                  { icon: "ri-twitter-x-fill", href: "https://mrbean9.com/RFMRBEAN9SEO" },
                  { icon: "ri-instagram-line", href: "https://mrbean9.com/RFMRBEAN9SEO" },
                  { icon: "ri-youtube-fill", href: "https://mrbean9.com/RFMRBEAN9SEO" },
                  { icon: "ri-telegram-fill", href: "https://mrbean9.com/RFMRBEAN9SEO" },
                ].map(({ icon, href }) => (
                  <a
                    key={icon}
                    href={href}
                    rel="nofollow"
                    className="w-9 h-9 flex items-center justify-center bg-brand-surface border border-brand/25 rounded-full text-stone-600 hover:text-stone-900 hover:border-brand transition-all duration-200 cursor-pointer"
                  >
                    <i className={icon} />
                  </a>
                ))}
              </div>
              {/* Age Restriction */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center border-2 border-[#D42B2B] rounded-full flex-shrink-0">
                  <span className="text-[#D42B2B] font-black text-xs">18+</span>
                </div>
                <span className="text-stone-600 text-xs">Players must be 18 or older to register and play.</span>
              </div>
            </div>

            {/* Link columns — only real pages / home sections */}
            {footerColumns.map(({ title, links }) => (
              <div key={title}>
                <h4
                  id={title.toLowerCase()}
                  className="mb-4 block text-sm font-black uppercase tracking-widest text-black md:mb-5 md:text-base"
                >
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className="group flex cursor-pointer items-center gap-2 text-sm text-black transition-colors duration-200 hover:text-stone-700 md:text-base"
                      >
                        <i className="ri-arrow-right-s-line text-black transition-colors group-hover:text-black" />
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Sign Up CTA Banner */}
          <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-brand/20 bg-brand-cream p-6 sm:mt-12 sm:p-8 md:flex-row md:gap-6">
            <div className="text-center md:text-left">
              <h3 className="mb-1 font-fredoka text-xl font-black text-stone-900 sm:text-2xl md:text-3xl">Ready to Start Winning?</h3>
              <p className="text-sm text-stone-600 md:text-base">
                Join MrBean9 today and claim your 200% Welcome Bonus!
              </p>
            </div>
            <button
              onClick={onSignUpClick}
              className="flex flex-shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-brand px-8 py-3 text-base font-black text-white transition-all duration-200 hover:scale-105 hover:bg-brand-dark active:scale-95 sm:px-10 sm:py-4 sm:text-lg"
            >
              <i className="ri-user-add-line" /> SIGN UP NOW
            </button>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-6 border-t border-brand/15">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-center text-xs text-stone-500 md:text-left md:text-sm">
                &copy; 2026 MrBean9 Online Casino. All rights reserved. Gambling can be addictive. Play responsibly.
              </p>
              {/* Payment Icons */}
              <div className="flex items-center gap-3">
                {paymentIcons.map(({ icon, label }) => (
                  <div
                    key={label}
                    className="w-10 h-10 flex items-center justify-center bg-white border border-[#d7d7d7] rounded-lg text-black hover:text-black hover:border-black transition-colors cursor-pointer"
                    title={label}
                  >
                    <i className={`${icon} text-lg`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
