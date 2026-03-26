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
        <div className="border-b border-[#5c4a3d] bg-[#1f1812] px-3 py-2.5 lg:px-3.5 lg:py-3">
          <h3 className="text-sm font-black uppercase tracking-wider text-white xl:text-base 2xl:text-lg">
            License & Certifications
          </h3>
        </div>

        <div className="flex flex-col gap-3 p-3 lg:p-3.5">
          {licenseCertifications.map((item) => (
            <div key={item.name} className="rounded-lg border border-[#5c4a3d] bg-[#3a2d24] p-2.5 lg:p-3">
              <div className="flex h-[52px] items-center justify-center overflow-hidden rounded-md bg-[#2f241d] px-2 lg:h-[56px]">
                <img src={item.image} alt={item.name} className="h-[40px] max-w-full object-contain" />
              </div>
              <div className="mt-2 text-sm font-black leading-tight text-white xl:text-base">{item.name}</div>
              <p className="mt-1.5 text-sm leading-relaxed text-white/90 xl:text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-[#5c4a3d] bg-[#2f241d] overflow-hidden">
        <div className="border-b border-[#5c4a3d] bg-[#1f1812] px-3 py-2.5 lg:px-3.5 lg:py-3">
          <h3 className="text-sm font-black uppercase tracking-wider text-white xl:text-base 2xl:text-lg">
            Available Payment Methods
          </h3>
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
            <header className="border-b border-[#5c4a3d] bg-[#1f1812] px-3 py-2.5 lg:px-3.5 lg:py-3">
              <h3
                id={`right-seo-${article.id}`}
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
      </div>
    </aside>
  );
}
