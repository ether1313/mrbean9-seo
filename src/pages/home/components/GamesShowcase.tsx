import { useState } from "react";
import { games, gameCategories } from "../../../mocks/casinoData";

interface GamesShowcaseProps {
  onSignUpClick: () => void;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <i
          key={s}
          className={`ri-star-fill text-xs ${s <= Math.round(rating) ? "text-white" : "text-white/20"}`}
        />
      ))}
      <span className="text-stone-600 text-xs ml-1">{rating}</span>
    </div>
  );
}

const badgeColors: Record<string, string> = {
  HOT: "bg-[#D42B2B] text-white",
  NEW: "bg-[#22c55e] text-white",
  JACKPOT: "bg-gradient-to-r from-brand to-brand-light text-white",
  LIVE: "bg-[#ef4444] text-white animate-pulse",
};

export default function GamesShowcase({ onSignUpClick }: GamesShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [favorites, setFavorites] = useState<number[]>([]);

  const filtered = activeCategory === "All" ? games : games.filter((g) => g.category === activeCategory);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]);
  };

  return (
    <section id="slots" className="bg-brand py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center bg-brand/10 rounded-full">
              <i className="ri-gamepad-line text-white text-xl" />
            </div>
            <h2 className="font-fredoka text-4xl font-black text-white">
              Popular <span className="text-white">Games</span>
            </h2>
          </div>
          <a href="#" className="text-white text-sm font-bold flex items-center gap-1 hover:text-white cursor-pointer transition-colors">
            View All Games <i className="ri-arrow-right-line" />
          </a>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {gameCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap cursor-pointer transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-brand text-white shadow-lg shadow-brand/30"
                  : "bg-brand-surface text-stone-600 border border-brand/25 hover:border-brand/50 hover:text-stone-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5" data-product-shop>
          {filtered.map((game) => (
            <div
              key={game.id}
              className="group relative bg-brand-surface rounded-2xl overflow-hidden border border-brand/25 hover:border-brand/60 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              {/* Game Image */}
              <div className="relative overflow-hidden">
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-48 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />


                {/* Favorite button */}
                <button
                  onClick={(e) => { e.stopPropagation(); toggleFavorite(game.id); }}
                  className={`absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 cursor-pointer ${
                    favorites.includes(game.id) ? "bg-[#D42B2B] text-white scale-110" : "bg-black/40 text-white/60 hover:text-white"
                  }`}
                >
                  <i className={favorites.includes(game.id) ? "ri-heart-fill" : "ri-heart-line"} />
                </button>

                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={onSignUpClick}
                    className="bg-brand text-white font-black px-6 py-2.5 rounded-full text-sm hover:bg-brand-dark cursor-pointer whitespace-nowrap transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <i className="ri-play-fill" /> PLAY
                  </button>
                </div>
              </div>

              {/* Game Info */}
              <div className="p-4">
                <h3 className="text-white font-bold text-sm mb-1 truncate">{game.name}</h3>
                <p className="text-stone-600 text-xs mb-2">{game.provider}</p>
                <div className="flex items-center justify-between">
                  <StarRating rating={game.rating} />
                  <span className="text-stone-600 text-xs flex items-center gap-1">
                    <i className="ri-user-line text-[10px]" />{game.players}
                  </span>
                </div>
              </div>

              {/* Play Button */}
              <button
                onClick={onSignUpClick}
                className="w-full bg-gradient-to-r from-brand to-brand-light text-white font-black text-sm py-3 hover:from-brand-dark hover:to-brand transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
              >
                <i className="ri-gamepad-fill" /> PLAY NOW
              </button>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-10">
          <button
            onClick={onSignUpClick}
            className="bg-brand-surface border-2 border-brand text-stone-900 font-black px-12 py-4 rounded-full text-lg hover:bg-brand hover:text-white transition-all duration-200 cursor-pointer whitespace-nowrap hover:scale-105"
          >
            <i className="ri-grid-line mr-2" />
            EXPLORE ALL 1,500+ GAMES
          </button>
        </div>
      </div>
    </section>
  );
}
