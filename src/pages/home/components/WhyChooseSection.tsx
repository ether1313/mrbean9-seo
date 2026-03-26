import { useEffect, useRef, useState } from "react";
import { MrBean9Word, mrBean9MarkClassName } from "@/utils/renderMrBean9";

const features = [
  {
    icon: "ri-shield-star-line",
    title: "Licensed & Regulated",
    desc: "Fully licensed under international gaming authority with strict compliance to Australian gambling laws for player protection.",
    color: "text-[#22c55e]",
    bg: "bg-[#22c55e]/10",
    border: "border-[#22c55e]/30",
  },
  {
    icon: "ri-customer-service-2-line",
    title: "24/7 Live Support",
    desc: "Our dedicated Australian support team is online around the clock via Live Chat, WhatsApp, and Telegram.",
    color: "text-[#60a5fa]",
    bg: "bg-[#60a5fa]/10",
    border: "border-[#60a5fa]/30",
  },
  {
    icon: "ri-send-plane-2-line",
    title: "Instant Withdrawals",
    desc: "Same-day withdrawal processing with minimum AUD 25. Funds hit your bank account within 15 minutes on average.",
    color: "text-[#D4A017]",
    bg: "bg-[#D4A017]/10",
    border: "border-[#D4A017]/30",
  },
  {
    icon: "ri-gift-2-line",
    title: "200% Welcome Bonus",
    desc: "Australia&apos;s biggest welcome offer — 200% match bonus on your first deposit, up to AUD 2,000 instantly credited.",
    color: "text-[#ef4444]",
    bg: "bg-[#ef4444]/10",
    border: "border-[#ef4444]/30",
  },
  {
    icon: "ri-gamepad-line",
    title: "1,500+ Premium Games",
    desc: "Curated library of slots, live casino, table games, and jackpots from JILI, PG Soft, Evolution, Boongo and more.",
    color: "text-[#a78bfa]",
    bg: "bg-[#a78bfa]/10",
    border: "border-[#a78bfa]/30",
  },
  {
    icon: "ri-smartphone-line",
    title: "Mobile-Optimised",
    desc: "Play anywhere, anytime on iOS or Android. Smooth gameplay with no app download required — just open and play.",
    color: "text-[#f59e0b]",
    bg: "bg-[#f59e0b]/10",
    border: "border-[#f59e0b]/30",
  },
  {
    icon: "ri-coin-line",
    title: "AUD 5 Min Deposit",
    desc: "Start small with just AUD 5 minimum deposit. No hidden fees, no surprise charges — ever.",
    color: "text-[#22c55e]",
    bg: "bg-[#22c55e]/10",
    border: "border-[#22c55e]/30",
  },
  {
    icon: "ri-trophy-line",
    title: "Weekly Tournaments",
    desc: "Compete in exclusive weekly tournaments with prize pools up to AUD 10,000. New leaderboard every Monday.",
    color: "text-[#D4A017]",
    bg: "bg-[#D4A017]/10",
    border: "border-[#D4A017]/30",
  },
];

export default function WhyChooseSection({ onRegisterClick }: { onRegisterClick: () => void }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="why-choose" className="scroll-mt-20 bg-[#3a2d24] border border-[#5c4a3d] rounded-xl overflow-hidden">
      <div className="flex items-center gap-2 border-b border-[#5c4a3d] bg-[#2f241d] px-3 py-3 sm:px-5 sm:py-4">
        <div className="flex h-8 w-8 items-center justify-center text-white">
          <i className="ri-star-smile-line text-xl text-white" />
        </div>
        <h2 className="text-sm font-black uppercase tracking-wider text-white md:text-base">
          Why Choose <span className={mrBean9MarkClassName}>MrBean9</span>
        </h2>
        <span className="ml-auto rounded-full border border-[#22c55e]/30 bg-[#22c55e]/20 px-2 py-0.5 text-[10px] font-black text-[#22c55e] sm:px-2.5 sm:text-xs">
          TRUSTED PLATFORM
        </span>
      </div>

      {/* Banner */}
      <div className="relative">
        <img
          src="https://readdy.ai/api/search-image?query=cartoon%20mr%20bean%20character%20giving%20thumbs%20up%20standing%20next%20to%20casino%20awards%20trophies%20certificates%20shields%20stars%20gold%20coins%20vibrant%20warm%20brown%20gold%20tones%20champion%20winner%20reliable%20trusted%20casino%20platform%20illustration%20professional%20wide%20banner%20festive%20celebration%20checkmarks&width=900&height=180&seq=why-choose-mrbean9-banner&orientation=landscape"
          alt="Why Choose MrBean9"
          className="h-32 w-full object-cover object-top sm:h-36"
        />
        <div className="absolute inset-0 flex items-center bg-gradient-to-r from-brand-dark/92 via-brand-dark/55 to-transparent px-4 sm:px-6">
          <div>
            <div className="text-lg font-black text-amber-100 sm:text-xl md:text-2xl">Australia&apos;s Best</div>
            <div className="text-base font-black text-white sm:text-lg md:text-xl">
              8 Reasons to Pick <MrBean9Word />
            </div>
            <div className="text-xs text-white/75 sm:text-sm">Join 250,000+ happy members today</div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-2 gap-2 p-3 sm:grid-cols-4 sm:gap-3 sm:p-4">
        {features.map((feat, i) => (
          <div
            key={feat.title}
            className={`${feat.bg} border ${feat.border} rounded-xl p-3 transition-all duration-700 hover:-translate-y-1 cursor-default ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#2f241d] border border-[#5c4a3d] mb-2 shadow-sm">
              <i className={`${feat.icon} ${feat.color} text-lg`} />
            </div>
            <div className={`mb-1 text-xs font-black leading-tight sm:text-sm ${feat.color}`}>{feat.title}</div>
            <p
              className="text-[10px] leading-relaxed text-white sm:text-xs md:text-sm md:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: feat.desc }}
            />
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="px-3 pb-4 sm:px-4">
        <div className="flex items-center justify-between gap-3 rounded-xl border border-brand/25 bg-[#2f241d] hover:bg-[#423227] p-3 sm:p-4">
          <div className="min-w-0">
            <div className="text-sm font-black text-[#fdf5e6f2] md:text-base">Ready to Experience It Yourself?</div>
            <div className="mt-0.5 text-xs text-white sm:text-sm">No fees. No downloads. Just pure casino fun.</div>
          </div>
          <button
            onClick={onRegisterClick}
            className="flex-shrink-0 cursor-pointer whitespace-nowrap rounded-xl bg-brand px-4 py-2 text-xs font-black text-[#fdf5e6f2] shadow-sm transition-all hover:bg-[#2f241d] sm:px-5 sm:py-2.5 sm:text-sm"
          >
            <i className="ri-arrow-right-line mr-1" />JOIN FREE
          </button>
        </div>
      </div>
    </section>
  );
}
