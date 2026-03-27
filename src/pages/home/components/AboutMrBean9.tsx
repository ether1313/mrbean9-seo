import { useState, useEffect, useRef } from "react";
import { MrBean9CapsWord, mrBean9MarkClassName } from "@/utils/renderMrBean9";

const stats = [
  { value: "250,000+", label: "Active Players", icon: "ri-user-heart-line" },
  { value: "1,500+", label: "Games Available", icon: "ri-gamepad-line" },
  { value: "8+", label: "Years of Trust", icon: "ri-shield-star-line" },
  { value: "5,000+", label: "Daily Winners", icon: "ri-trophy-line" },
  { value: "AUD 5", label: "Min Deposit", icon: "ri-bank-card-line" },
  { value: "24/7", label: "Live Support", icon: "ri-customer-service-2-line" },
];

export default function AboutMrBean9({ onRegisterClick }: { onRegisterClick: () => void }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="about" className="bg-[#3a2d24] border border-[#5c4a3d] rounded-xl overflow-hidden">
      {/* Section Header */}
      <div className="flex items-center gap-2 border-b border-[#5c4a3d] bg-[#2f241d] px-3 py-3 sm:px-5 sm:py-4">
        <div className="flex h-8 w-8 items-center justify-center text-white">
          <i className="ri-information-line text-xl text-white" />
        </div>
        <h2 className="ux-title-md uppercase tracking-wider text-white">
          About <span className={mrBean9MarkClassName}>MrBean9</span>
        </h2>
        <span className="ml-auto rounded-full border border-brand/30 bg-brand/20 px-2 py-0.5 text-[10px] font-black text-white sm:px-2.5 sm:text-xs">
          AUS CASINO
        </span>
      </div>

      {/* Hero Banner */}
      <div className="relative">
        <img
          src="https://readdy.ai/api/search-image?query=cartoon%20mr%20bean%20character%20surrounded%20by%20casino%20games%20slot%20machines%20poker%20cards%20roulette%20wheel%20gold%20coins%20trophy%20celebrating%20in%20a%20luxurious%20Australian%20casino%20environment%20warm%20brown%20gold%20neon%20colors%20vibrant%20festive%20wide%20format%20banner%20illustration%20professional%20polished%20artwork%20with%20dark%20rich%20background&width=900&height=240&seq=about-hero-mrbean9&orientation=landscape"
          alt="About MrBean9 Casino"
          className="h-36 w-full object-cover object-top sm:h-40 md:h-44"
        />
        <div className="absolute inset-0 flex items-center bg-gradient-to-r from-brand/88 via-brand/40 to-transparent px-4 sm:px-6">
          <div>
            <MrBean9CapsWord className="ux-title-xl drop-shadow-md" />
            <div className="ux-title-lg text-white">Australia&apos;s Most Trusted</div>
            <div className="ux-subtitle text-amber-100">Online Entertainment Platform</div>
          </div>
        </div>
      </div>

      {/* About Text */}
      <div className="px-3 py-3 sm:px-5 sm:py-4">
        <p className="ux-desc text-base sm:text-base md:text-lg text-white">
          <span className={mrBean9MarkClassName}>MrBean9</span> is Australia&apos;s premier online entertainment destination, 
          offering over <strong className="text-white">1,500+ casino games</strong> including live baccarat, slots, poker, 
          roulette and exclusive jackpot games. Founded in 2020, we have served over <strong className="text-white">250,000 players</strong> 
          across Australia with a commitment to fair play, instant withdrawals, and exceptional customer experience. 
          Whether you&apos;re a first-timer or seasoned player, <span className={mrBean9MarkClassName}>MrBean9</span> delivers the ultimate casino adventure with 
          a playful Mr Bean twist — fun, friendly, and always rewarding!
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {["Licensed & Regulated", "SSL Encrypted", "Instant Withdrawals", "24/7 AUS Support", "Provably Fair"].map((tag) => (
            <span key={tag} className="rounded-full border border-[#5c4a3d] bg-[#2f241d] px-2 py-1 text-[10px] font-semibold text-white sm:px-2.5 sm:text-xs">
              <i className="ri-checkbox-circle-fill text-[#22c55e] mr-1" />{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-2 px-3 pb-4 sm:px-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`rounded-xl border border-[#5c4a3d] bg-[#2f241d] p-2.5 text-center transition-all duration-700 sm:p-3 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="text-white w-8 h-8 flex items-center justify-center mx-auto mb-1">
              <i className={`${stat.icon} text-white text-lg`} />
            </div>
            <div className="ux-title-md text-white">{stat.value}</div>
            <div className="mt-0.5 text-[10px] font-semibold text-white sm:text-xs md:text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="px-3 pb-4 sm:px-4">
        <button
          onClick={onRegisterClick}
          className="w-full cursor-pointer whitespace-nowrap rounded-xl bg-gradient-to-r from-brand to-brand-light py-2.5 text-xs font-black text-white transition-all hover:from-brand-dark hover:to-brand sm:py-3 sm:text-sm md:text-base"
        >
          <i className="ri-rocket-line mr-2" />JOIN <MrBean9CapsWord /> — REGISTER FREE TODAY
        </button>
      </div>
    </section>
  );
}
