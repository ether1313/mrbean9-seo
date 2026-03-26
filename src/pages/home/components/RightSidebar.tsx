import { licenseCertifications } from "../../../mocks/casinoData";
import { rightSidebarSeoArticles } from "../../../mocks/sidebarSeoContent";
import { renderWithMrBean9 } from "../../../utils/renderMrBean9";

const paymentMethods = [
  { name: "Google Pay", image: "/images/right-sidebar/google-pay.png" },
  { name: "Mastercard", image: "/images/right-sidebar/mastercard.png" },
  { name: "Apple Pay", image: "/images/right-sidebar/apple-pay.png" },
  { name: "Visa", image: "/images/right-sidebar/visa.png" },
  { name: "Speedpay", image: "/images/right-sidebar/speedpay.png" },
  { name: "PayID", image: "/images/right-sidebar/payid.png" },
  { name: "Osko", image: "/images/right-sidebar/osko.png" },
  { name: "Amopay", image: "/images/right-sidebar/amopay.png" },
];

export default function RightSidebar() {
  return (
    <aside className="w-full min-w-0 flex flex-col gap-3">
      <section className="rounded-xl border border-[#5c4a3d] bg-[#2f241d] overflow-hidden">
        <div className="border-b border-[#5c4a3d] bg-[#1f1812] px-3 py-2.5">
          <h3 className="text-[11px] font-black uppercase tracking-wider text-white lg:text-xs xl:text-sm">License & Certifications</h3>
        </div>

        <div className="flex flex-col gap-3 p-3">
          {licenseCertifications.map((item) => (
            <div key={item.name} className="rounded-lg border border-[#5c4a3d] bg-[#3a2d24] p-2.5">
              <div className="flex h-[52px] items-center justify-center overflow-hidden rounded-md bg-[#2f241d] px-2 lg:h-[56px]">
                <img src={item.image} alt={item.name} className="h-[40px] max-w-full object-contain" />
              </div>
              <div className="mt-2 text-[10px] font-black leading-tight text-white lg:text-xs xl:text-sm">{item.name}</div>
              <p className="mt-1.5 text-[10px] leading-relaxed text-white/90 lg:text-xs">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-[#5c4a3d] bg-[#2f241d] overflow-hidden">
        <div className="border-b border-[#5c4a3d] bg-[#1f1812] px-3 py-2.5">
          <h3 className="text-[11px] font-black uppercase tracking-wider text-white lg:text-xs xl:text-sm">Available Payment Methods</h3>
        </div>

        <div className="grid grid-cols-4 gap-2 p-3">
          {paymentMethods.map((method) => (
            <img
              key={method.name}
              src={method.image}
              alt={method.name}
              className="h-[36px] w-full object-contain lg:h-[40px]"
            />
          ))}
        </div>
      </section>

      <div className="flex flex-col gap-3" aria-label="Licensing and banking information">
        {rightSidebarSeoArticles.map((article) => (
          <article
            key={article.id}
            className="overflow-hidden rounded-xl border border-[#5c4a3d] bg-[#2f241d]"
          >
            <header className="border-b border-[#5c4a3d] bg-[#1f1812] px-3 py-2.5">
              <h3
                id={`right-seo-${article.id}`}
                className="text-[11px] font-black uppercase tracking-wider text-white lg:text-xs xl:text-sm"
              >
                {article.heading}
              </h3>
            </header>
            <div className="space-y-2 p-3">
              {article.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[10px] leading-relaxed text-white/90 lg:text-xs"
                >
                  {renderWithMrBean9(paragraph)}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </aside>
  );
}
