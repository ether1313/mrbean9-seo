import { useState, useEffect, useCallback } from "react";
import { heroSlides } from "../../../mocks/casinoData";
import { renderWithMrBean9 } from "@/utils/renderMrBean9";

interface HeroCarouselProps {
  onSignUpClick: () => void;
}

export default function HeroCarousel({ onSignUpClick }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const prev = () => goTo((current - 1 + heroSlides.length) % heroSlides.length);
  const next = useCallback(() => goTo((current + 1) % heroSlides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = heroSlides[current];

  return (
    <section id="games" className="relative w-full h-[600px] overflow-hidden">
      {/* Background Images */}
      {heroSlides.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover object-top"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${s.color} opacity-75`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-16">
        <div
          key={current}
          className="max-w-xl hero-slide-in"
        >
          <span className="inline-block bg-brand text-white text-xs font-black px-3 py-1.5 rounded-full mb-4 uppercase tracking-widest animate-bounce-badge">
            {slide.badge}
          </span>
          <h1 className="font-fredoka text-7xl font-black text-white mb-2 drop-shadow-2xl leading-tight cartoon-text-stroke">
            {slide.title}
          </h1>
          <h2 className="font-fredoka text-3xl text-white mb-4 drop-shadow-lg">
            {slide.subtitle}
          </h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed max-w-md">
            {renderWithMrBean9(slide.description)}
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={onSignUpClick}
              className="bg-brand text-white font-black text-lg px-8 py-4 rounded-full hover:bg-brand-dark transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap shadow-xl shadow-brand/40 flex items-center gap-2"
            >
              <i className="ri-gamepad-line" />
              {slide.cta}
            </button>
            <button className="border-2 border-white/60 text-white font-bold text-lg px-8 py-4 rounded-full hover:border-brand hover:text-white transition-all duration-200 cursor-pointer whitespace-nowrap backdrop-blur-sm">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>

      {/* Arrow Controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white text-xl hover:bg-brand hover:text-white transition-all duration-200 cursor-pointer flex items-center justify-center"
      >
        <i className="ri-arrow-left-s-line" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white text-xl hover:bg-brand hover:text-white transition-all duration-200 cursor-pointer flex items-center justify-center"
      >
        <i className="ri-arrow-right-s-line" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              i === current ? "w-8 h-3 bg-brand" : "w-3 h-3 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 z-20 text-white/60 text-sm font-bold">
        {current + 1} / {heroSlides.length}
      </div>
    </section>
  );
}
