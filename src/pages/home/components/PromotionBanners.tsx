import { useState } from "react";
import { promotions } from "../../../mocks/casinoData";

interface PromotionBannersProps {
  onSignUpClick: () => void;
}

export default function PromotionBanners({ onSignUpClick }: PromotionBannersProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="promotions" className="bg-[#120500] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-12 h-0.5 bg-brand" />
            <i className="ri-gift-line text-white text-xl" />
            <div className="w-12 h-0.5 bg-brand" />
          </div>
          <h2 className="font-fredoka text-5xl font-black text-white mb-3">
            Hot <span className="text-white">Promotions</span>
          </h2>
          <p className="text-stone-600 text-lg">Exclusive bonuses and offers for our valued players</p>
        </div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className={`relative rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${
                hoveredId === promo.id ? "border-brand scale-[1.02]" : "border-brand/25"
              }`}
              onMouseEnter={() => setHoveredId(promo.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Background Image */}
              <img
                src={promo.image}
                alt={promo.title}
                className="w-full h-[200px] object-cover object-top"
              />
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${promo.color} opacity-85`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <span className="inline-block bg-brand text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest mb-3">
                    {promo.badge}
                  </span>
                  <h3 className="font-fredoka text-4xl font-black text-white drop-shadow-lg leading-tight">
                    {promo.title}
                  </h3>
                  <p className="text-white font-bold text-lg">{promo.subtitle}</p>
                  <p className="text-white/80 text-sm mt-1">{promo.description}</p>
                </div>
                <button
                  onClick={onSignUpClick}
                  className={`self-start bg-brand text-white font-black px-6 py-2.5 rounded-full text-sm hover:bg-brand-dark transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                    hoveredId === promo.id ? "promo-pulse" : ""
                  }`}
                >
                  {promo.cta} <i className="ri-arrow-right-line" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* VIP Banner */}
        <div className="mt-8 relative rounded-2xl overflow-hidden border border-brand/30">
          <img
            src="https://readdy.ai/api/search-image?query=vip%20casino%20platinum%20gold%20membership%20exclusive%20luxury%20mr%20bean%20character%20in%20crown%20robe%20throne%20vibrant%20rich%20warm%20gold%20tones%20elegant%20opulent%20casino%20vip%20lounge%20wide%20banner%20landscape%20format%20colorful%20premium%20illustration&width=1200&height=200&seq=vip-banner&orientation=landscape"
            alt="VIP Program"
            className="w-full h-[160px] object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3d2000]/95 via-[#3d2000]/70 to-transparent flex items-center px-10 justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <i className="ri-vip-crown-2-fill text-white text-2xl" />
                <span className="text-white font-black text-sm uppercase tracking-widest">Exclusive VIP Program</span>
              </div>
              <h3 className="font-fredoka text-3xl text-white font-black">Join the VIP Club &amp; Unlock Premium Rewards</h3>
              <p className="text-stone-600">Personal account manager, higher limits, exclusive bonuses and much more!</p>
            </div>
            <button
              onClick={onSignUpClick}
              className="hidden md:flex bg-brand text-white font-black px-8 py-4 rounded-full text-lg items-center gap-2 hover:bg-brand-dark cursor-pointer whitespace-nowrap hover:scale-105 transition-all duration-200 flex-shrink-0"
            >
              <i className="ri-vip-crown-line" /> JOIN VIP
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
