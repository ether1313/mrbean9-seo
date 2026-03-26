import { useState, useEffect, useCallback } from "react";
import { heroSlides, games, gameCategories } from "../../../mocks/casinoData";
import { MrBean9CapsWord } from "@/utils/renderMrBean9";
import AboutMrBean9 from "./AboutMrBean9";
import RegistrationSteps from "./RegistrationSteps";
import WhyChooseSection from "./WhyChooseSection";
import PaymentMethods from "./PaymentMethods";
import ResponsibleGambling from "./ResponsibleGambling";
import FAQSection from "./FAQSection";

interface CenterContentProps {
  onRegisterClick: () => void;
}

const badgeColors: Record<string, string> = {
  HOT: "bg-[#D42B2B] text-white",
  NEW: "bg-[#22c55e] text-white",
  JACKPOT: "bg-gradient-to-r from-brand to-brand-light text-white",
  LIVE: "bg-[#ef4444] text-white",
};

export default function CenterContent({ onRegisterClick }: CenterContentProps) {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [favorites, setFavorites] = useState<number[]>([]);

  const goTo = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const next = useCallback(() => goTo((current + 1) % heroSlides.length), [current, goTo]);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  const slide = heroSlides[current];
  const filtered = activeCategory === "All" ? games : games.filter((g) => g.category === activeCategory);

  return (
    <div className="flex min-w-0 flex-1 flex-col gap-3 md:gap-5">
      {/* 1. About MrBean9 */}
      <AboutMrBean9 onRegisterClick={onRegisterClick} />

      {/* 2. Hot Promotions */}
      <div id="promotions" className="scroll-mt-24 bg-[#3a2d24] border border-[#5c4a3d] rounded-xl overflow-hidden">
        <div className="flex items-center justify-between border-b border-[#5c4a3d] bg-[#2f241d] px-3 py-2.5 sm:px-4 sm:py-3">
          <div className="flex items-center gap-2">
            <i className="ri-gift-line text-lg text-white" />
            <span className="text-sm font-black uppercase text-white md:text-base">Hot Promotions</span>
          </div>
        </div>
        <div className="p-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              title: "200% Welcome Bonus",
              sub: "First Deposit Bonus up to AUD 2,000",
              badge: "NEW PLAYER",
              color: "from-[#8B0000] to-[#4A0000]",
              img: "https://readdy.ai/api/search-image?query=cartoon%20casino%20welcome%20bonus%20gift%20box%20gold%20coins%20200%20percent%20bonus%20first%20deposit%20mr%20bean%20character%20excited%20vibrant%20red%20gold%20colors%20festive%20celebration%20promo%20banner&width=400&height=180&seq=promo-c1&orientation=landscape",
            },
            {
              title: "Daily Cashback 0.9%",
              sub: "Get cashback on every bet every day",
              badge: "DAILY",
              color: "from-[#004D1A] to-[#001F0A]",
              img: "https://readdy.ai/api/search-image?query=cartoon%20daily%20cashback%20casino%20coins%20returning%20green%20money%20wallet%20mr%20bean%20happy%20character%20vibrant%20colorful%20daily%20bonus%20casino%20promotion%20cheerful&width=400&height=180&seq=promo-c2&orientation=landscape",
            },
            {
              title: "Weekly Rebate 5%",
              sub: "Every Monday auto-credited bonus",
              badge: "WEEKLY",
              color: "from-[#5A3200] to-[#2A1500]",
              img: "https://readdy.ai/api/search-image?query=cartoon%20weekly%20rebate%20casino%20bonus%20calendar%20coins%20raining%20monday%20bonus%20mr%20bean%20excited%20character%20vibrant%20warm%20tones%20casino%20promotion%20illustration&width=400&height=180&seq=promo-c3&orientation=landscape",
            },
            {
              title: "Referral Bonus",
              sub: "Earn AUD 3 for every friend referred",
              badge: "SHARE",
              color: "from-[#3D0070] to-[#200040]",
              img: "https://readdy.ai/api/search-image?query=cartoon%20referral%20bonus%20friends%20sharing%20casino%20mr%20bean%20character%20pointing%20share%20button%20gold%20coins%20raining%20down%20vibrant%20warm%20tones%20fun%20exciting%20illustration&width=400&height=180&seq=promo-c4&orientation=landscape",
            },
          ].map((promo, idx) => (
            <div
              key={idx}
              className="relative rounded-xl overflow-hidden border border-[#5c4a3d] hover:border-[#8b6b58] transition-all cursor-pointer group shadow-sm"
              onClick={onRegisterClick}
            >
              <img src={promo.img} alt={promo.title} className="w-full h-[130px] object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              <div className={`absolute inset-0 bg-gradient-to-r ${promo.color} opacity-75`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute inset-0 p-3 flex flex-col justify-end">
                <span className="mb-1.5 inline-block self-start rounded-full border border-[#5c4a3d] bg-[#2f241d] px-2 py-0.5 text-[9px] font-black uppercase text-white sm:text-[10px]">
                  {promo.badge}
                </span>
                <div className="text-sm font-black leading-tight text-white drop-shadow-lg sm:text-base">{promo.title}</div>
                <div className="text-[10px] font-semibold text-amber-100 sm:text-xs">{promo.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Popular Games */}
      <div id="games" className="scroll-mt-24 bg-[#3a2d24] border border-[#5c4a3d] rounded-xl overflow-hidden">
        <div className="flex items-center justify-between border-b border-[#5c4a3d] bg-[#2f241d] px-3 py-2.5 sm:px-4 sm:py-3">
          <div className="flex items-center gap-2">
            <i className="ri-gamepad-line text-lg text-white" />
            <span className="text-sm font-black uppercase text-white md:text-base">Popular Games</span>
          </div>
          <a href="#" className="flex cursor-pointer items-center gap-1 text-xs font-bold text-white hover:text-white sm:text-sm">
            View All <i className="ri-arrow-right-line" />
          </a>
        </div>

        {/* Category Tabs */}
        <div className="scrollbar-hide flex gap-1 overflow-x-auto border-b border-[#5c4a3d] bg-[#2f241d] px-2 py-2 sm:px-3">
          {gameCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`cursor-pointer whitespace-nowrap rounded-full px-2.5 py-1.5 text-[10px] font-black transition-all duration-200 sm:px-3 sm:text-xs md:text-sm ${
                activeCategory === cat
                  ? "bg-[#2f241d] text-white border border-[#8b6b58]"
                  : "bg-[#1f1812] text-white border border-[#5c4a3d] hover:border-[#8b6b58] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-2 gap-2 p-2 sm:grid-cols-3 sm:gap-3 sm:p-3 lg:grid-cols-4" data-product-shop>
          {filtered.map((game) => (
            <div
              key={game.id}
              className="group relative bg-[#2f241d] rounded-xl overflow-hidden border border-[#5c4a3d] hover:border-[#8b6b58] transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-32 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setFavorites((p) => p.includes(game.id) ? p.filter((f) => f !== game.id) : [...p, game.id]);
                  }}
                  className={`absolute top-1.5 right-1.5 w-6 h-6 flex items-center justify-center rounded-full cursor-pointer transition-all ${
                    favorites.includes(game.id) ? "bg-[#D42B2B] text-white" : "bg-[#1b1510] text-white"
                  }`}
                >
                  <i className={`${favorites.includes(game.id) ? "ri-heart-fill" : "ri-heart-line"} text-xs`} />
                </button>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#1b1510]">
                  <button
                    onClick={onRegisterClick}
                    className="cursor-pointer whitespace-nowrap rounded-full bg-brand px-3 py-1 text-xs font-black text-white hover:bg-brand-dark sm:px-4 sm:py-1.5 sm:text-sm"
                  >
                    <i className="ri-play-fill" /> PLAY
                  </button>
                </div>
              </div>
                <div className="bg-[#2f241d] p-2">
                <div className="truncate text-[11px] font-bold text-white sm:text-xs md:text-sm">{game.name}</div>
                <div className="mt-0.5 flex items-center justify-between">
                  <span className="text-[9px] text-white sm:text-[10px] md:text-xs">{game.provider}</span>
                  <span className="flex items-center gap-0.5 text-[9px] text-white sm:text-[10px] md:text-xs">
                    <i className="ri-user-line" />{game.players}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* 4. Registration & Account Verification */}
      <RegistrationSteps onRegisterClick={onRegisterClick} />

      {/* 5. Hero Carousel */}
      <div
        id="hero-carousel"
        className="relative w-full overflow-hidden rounded-xl min-h-[200px] h-[220px] sm:min-h-[240px] sm:h-[260px] md:h-[280px] lg:h-[300px]"
      >
        {heroSlides.map((s, i) => (
          <div
            key={s.id}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <img src={s.image} alt={s.title} className="w-full h-full object-cover object-top" />
            <div className={`absolute inset-0 bg-gradient-to-r ${s.color} opacity-70`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        ))}
        {/* Slide content */}
        <div className="relative z-10 flex h-full items-end px-4 pb-4 sm:px-6 sm:pb-6">
          <div key={current} className="hero-slide-in max-w-full">
            <span className="mb-1.5 inline-block rounded-full border border-white/60 bg-[#2f241d] px-2 py-0.5 text-[9px] font-black uppercase tracking-widest text-white sm:mb-2 sm:px-2.5 sm:py-1 sm:text-[10px]">
              {slide.badge}
            </span>
            <h2 className="font-fredoka text-2xl font-black leading-tight text-white drop-shadow-xl sm:text-3xl md:text-4xl lg:text-[2.5rem]">
              {slide.title}
            </h2>
            <p className="text-sm font-bold text-amber-100 drop-shadow-md sm:text-base md:text-lg">{slide.subtitle}</p>
            <div className="mt-2 flex flex-wrap gap-2 sm:mt-3">
              <button
                onClick={onRegisterClick}
                className="cursor-pointer whitespace-nowrap rounded-full border border-[#5c4a3d] bg-[#2f241d] px-4 py-1.5 text-xs font-black text-white transition-all sm:px-5 sm:py-2 sm:text-sm"
              >
                {slide.cta}
              </button>
              <button className="cursor-pointer whitespace-nowrap rounded-full border border-[#5c4a3d] px-4 py-1.5 text-xs font-bold text-white transition-all hover:bg-[#2f241d] sm:px-5 sm:py-2 sm:text-sm">
                MORE INFO
              </button>
            </div>
          </div>
        </div>
        {/* Dots */}
        <div className="absolute bottom-3 right-4 z-20 flex gap-1.5">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${i === current ? "w-5 h-2 bg-white" : "w-2 h-2 bg-white"}`}
            />
          ))}
        </div>
        {/* Arrows */}
        <button onClick={() => goTo((current - 1 + heroSlides.length) % heroSlides.length)} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#2f241d] text-white flex items-center justify-center cursor-pointer hover:bg-[#2f241d] border border-[#5c4a3d] transition-all shadow-sm">
          <i className="ri-arrow-left-s-line" />
        </button>
        <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#2f241d] text-white flex items-center justify-center cursor-pointer hover:bg-[#2f241d] border border-[#5c4a3d] transition-all shadow-sm">
          <i className="ri-arrow-right-s-line" />
        </button>
      </div>

      {/* 6. Why Choose MrBean9 */}
      <WhyChooseSection onRegisterClick={onRegisterClick} />

      {/* 7. Payment Methods for Australian Players */}
      <PaymentMethods onRegisterClick={onRegisterClick} />

      {/* 8. Responsible Gambling & Licenses */}
      <ResponsibleGambling />

      {/* 9. FAQ */}
      <FAQSection onRegisterClick={onRegisterClick} />

      {/* Partnership strip (not in main SEO order) */}
      <div
        className="relative rounded-xl overflow-hidden cursor-pointer border border-[#5c4a3d] hover:border-[#8b6b58] transition-all shadow-sm"
        onClick={onRegisterClick}
      >
        <img
          src="https://readdy.ai/api/search-image?query=cartoon%20mr%20bean%20character%20casino%20crossover%20partnership%20collaboration%20two%20brands%20meeting%20exciting%20vibrant%20warm%20brown%20gold%20tones%20casino%20banner%20wide%20format%20promotional%20announcement%20illustration&width=800&height=120&seq=partner-collab&orientation=landscape"
          alt="Partnership"
          className="w-full h-[100px] object-cover object-top"
        />
        <div className="absolute inset-0 bg-[#1f1812] flex items-center justify-center">
          <div className="text-center">
            <div className="text-lg font-black uppercase tracking-wide sm:text-xl md:text-2xl">
              <MrBean9CapsWord />
              <span className="text-white"> x ME99</span>
            </div>
            <div className="mt-1 text-xs font-semibold text-white sm:text-sm">Exciting New Partnership — Double the Rewards!</div>
          </div>
        </div>
      </div>
    </div>
  );
}
