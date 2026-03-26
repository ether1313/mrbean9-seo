import { sidebarPromos } from "../../../mocks/casinoData";
import { leftSidebarSeoArticles } from "../../../mocks/sidebarSeoContent";
import { renderWithMrBean9 } from "../../../utils/renderMrBean9";
import { SlotStrategyCard, RngExplainerCard } from "./SlotRtpRngCards";

interface LeftSidebarProps {
  onRegisterClick: () => void;
}

export default function LeftSidebar({ onRegisterClick }: LeftSidebarProps) {
  return (
    <aside className="flex min-w-0 w-full flex-col gap-3">
      {sidebarPromos.map((promo) => (
        <div
          key={promo.id}
          className="group relative cursor-pointer overflow-hidden rounded-xl border border-[#5c4a3d] transition-all duration-300 hover:border-app-tan/50"
          onClick={onRegisterClick}
        >
          <img
            src={promo.image}
            alt={promo.title}
            className="h-[140px] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ))}

      <div className="flex flex-col gap-3" aria-label="Casino guides and tips">
        {leftSidebarSeoArticles.map((article) => (
          <article
            key={article.id}
            className="overflow-hidden rounded-xl border border-[#5c4a3d] bg-[#2f241d]"
          >
            <header className="border-b border-[#5c4a3d] bg-[#1f1812] px-3 py-2.5 lg:px-3.5 lg:py-3">
              <h3
                id={`left-seo-${article.id}`}
                className="text-sm font-black uppercase tracking-wider text-white xl:text-base 2xl:text-lg"
              >
                {article.heading}
              </h3>
            </header>
            <div className="space-y-2.5 p-3 lg:p-3.5 lg:space-y-3">
              {article.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm leading-relaxed text-white/90 xl:text-base"
                >
                  {renderWithMrBean9(paragraph)}
                </p>
              ))}
            </div>
          </article>
        ))}

        {/* Rich visual cards for Slot Strategy / RTP / RNG */}
        <SlotStrategyCard />
        <RngExplainerCard />
      </div>

    </aside>
  );
}
