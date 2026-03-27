import { useState, useEffect, useCallback } from "react";
import { games, gameCategories } from "../../../mocks/casinoData";
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

const bonusSlides = [
  "/images/bonus/365-bonus.jpg",
  "/images/bonus/birthday-bonus.jpg",
  "/images/bonus/easy-step-bonus.jpg",
  "/images/bonus/referral-bonus.jpg",
];

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

  const next = useCallback(() => goTo((current + 1) % bonusSlides.length), [current, goTo]);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

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
        <div className="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2">
          {[
            "/images/bonus/daily-first-deposit.jpg",
            "/images/bonus/deposit-random-angpao.jpg",
            "/images/bonus/monthly-deposit-ranking.jpg",
            "/images/bonus/welcome-bonus-200.jpg",
          ].map((image, idx) => (
            <div
              key={idx}
              className="relative rounded-xl overflow-hidden border border-[#5c4a3d] hover:border-[#8b6b58] transition-all cursor-pointer group shadow-sm"
              onClick={onRegisterClick}
            >
              <img
                src={image}
                alt={`Hot promotion ${idx + 1}`}
                className="h-[130px] w-full object-fill object-top transition-transform duration-500 group-hover:scale-105"
              />
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
          <div className="flex cursor-pointer items-center gap-1 text-xs font-bold text-white hover:text-white sm:text-sm" onClick={onRegisterClick}>
            View All <i className="ri-arrow-right-line" />
          </div>
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
              onClick={onRegisterClick}
            >
              <div className="relative overflow-hidden">
                <img
                  src={game.image}
                  className="w-full h-32 object-fill object-top group-hover:scale-105 transition-transform duration-500"
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
              </div>
                <div className="bg-[#2f241d] p-2">
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
        {bonusSlides.map((image, i) => (
          <div
            key={image}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <img src={image} alt={`Bonus slide ${i + 1}`} className="w-full h-full object-fill object-top" />
          </div>
        ))}
        {/* Dots */}
        <div className="absolute bottom-3 right-4 z-20 flex gap-1.5">
          {bonusSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${i === current ? "w-5 h-2 bg-[#d4c47b]" : "w-2 h-2 bg-[#434128]"}`}
            />
          ))}
        </div>
        {/* Arrows */}
        <button onClick={() => goTo((current - 1 + bonusSlides.length) % bonusSlides.length)} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#2f241d] text-white flex items-center justify-center cursor-pointer hover:bg-[#2f241d] border border-[#5c4a3d] transition-all shadow-sm">
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
