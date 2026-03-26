import { licenseCertifications } from "../../../mocks/casinoData";
import { renderWithMrBean9 } from "@/utils/renderMrBean9";

const responsibleTools = [
  {
    icon: "ri-time-line",
    title: "Session Time Limits",
    desc: "Set daily or weekly session time limits to control how long you play.",
  },
  {
    icon: "ri-money-dollar-circle-line",
    title: "Deposit Limits",
    desc: "Cap your daily, weekly or monthly deposits to manage your budget.",
  },
  {
    icon: "ri-eye-off-line",
    title: "Self-Exclusion",
    desc: "Temporarily or permanently exclude yourself from the platform at any time.",
  },
  {
    icon: "ri-thermometer-line",
    title: "Reality Check",
    desc: "Receive pop-up reminders about your gambling duration every 30 minutes.",
  },
  {
    icon: "ri-lock-line",
    title: "Cool-Off Period",
    desc: "Take a mandatory 24h–30 day break from gambling whenever you need it.",
  },
  {
    icon: "ri-mental-health-line",
    title: "Problem Gambling Help",
    desc: "Access to Gambling Help Online, Lifeline & Gamblers Anonymous contacts.",
  },
];

const helpLinks = [
  { name: "Gambling Help Online", url: "https://www.gamblinghelponline.org.au/", icon: "ri-external-link-line" },
  { name: "Lifeline Australia — 13 11 14", url: "https://www.lifeline.org.au/131114", icon: "ri-phone-line" },
  { name: "Gamblers Anonymous", url: "https://ga-nsw.org.au/", icon: "ri-group-line" },
  { name: "Beyond Blue", url: "https://www.lifeline.org.au/get-help/national-services/beyond-blue", icon: "ri-heart-pulse-line" },
];

export default function ResponsibleGambling() {
  return (
    <section id="responsible" className="bg-[#3a2d24] border border-[#5c4a3d] rounded-xl overflow-hidden">
      <div className="flex flex-wrap items-center gap-2 border-b border-[#5c4a3d] bg-[#2f241d] px-3 py-3 sm:flex-nowrap sm:px-5 sm:py-4">
        <div className="flex h-8 w-8 items-center justify-center text-white">
          <i className="ri-shield-star-line text-xl text-white" />
        </div>
        <h2 className="min-w-0 flex-1 text-sm font-black uppercase tracking-wider text-white md:text-base">Responsible Gambling &amp; Licenses</h2>
        <span className="ml-auto inline-flex shrink-0 items-center rounded-full border border-brand/35 bg-brand/20 px-2 py-1 text-[9px] font-black leading-none text-white sm:px-2.5 sm:py-0.5 sm:text-xs">
          18+ ONLY
        </span>
      </div>

      {/* Banner */}
      <div className="relative">
        <img
          src="https://readdy.ai/api/search-image?query=cartoon%20mr%20bean%20character%20holding%20shield%20and%20scales%20of%20justice%20casino%20license%20certificate%20award%20secure%20responsible%20gambling%20protection%20safety%20padlock%20checkmark%20certification%20document%20vibrant%20warm%20brown%20gold%20tones%20professional%20wide%20banner%20illustration%20with%20balance%20moderation%20message&width=900&height=160&seq=responsible-gambling-mrbean9&orientation=landscape"
          alt="Responsible Gambling"
          className="h-28 w-full object-cover object-top sm:h-32"
        />
        <div className="absolute inset-0 flex items-center bg-gradient-to-r from-brand/88 via-brand/42 to-transparent px-4 sm:px-6">
          <div>
            <div className="text-base font-black leading-tight text-white sm:text-lg md:text-xl">Play Responsibly</div>
            <div className="mt-0.5 text-xs font-bold text-amber-100 sm:text-sm">Licensed · Regulated · Safe · 18+ Only</div>
          </div>
        </div>
        <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3">
          <span className="inline-flex items-center rounded-full border border-white/80 bg-[#2f241d] px-2.5 py-0.5 text-[10px] font-black leading-none text-white shadow-sm sm:px-3 sm:py-1 sm:text-xs">
            18+
          </span>
        </div>
      </div>

      {/* Responsible Gambling Message */}
      <div className="border-b border-[#5c4a3d] px-3 py-3 sm:px-5 sm:py-4">
        <p className="text-xs leading-relaxed text-white sm:text-sm md:text-base md:leading-relaxed">
          {renderWithMrBean9("MrBean9")} is committed to promoting responsible gambling. We believe gambling should be a fun, 
          entertaining activity — not a way to make money or escape problems. If you feel gambling is 
          negatively affecting your life, please use our responsible gambling tools or seek help.
        </p>
      </div>

      {/* License & Certifications — PAGCOR + CGA only */}
      <div className="px-3 pt-3 sm:px-4 sm:pt-4">
        <h3 className="mb-3 text-xs font-black uppercase tracking-widest text-white sm:text-sm md:text-base">License &amp; Certifications</h3>
        <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {licenseCertifications.map((item) => (
            <div key={item.name} className="rounded-xl border border-[#5c4a3d] bg-[#3a2d24] p-3">
              <div className="flex h-14 items-center justify-center overflow-hidden rounded-lg bg-[#2f241d] px-2 sm:h-16">
                <img src={item.image} alt={item.name} className="h-10 max-w-full object-contain" />
              </div>
              <div className="mt-2 text-[10px] font-black leading-tight text-white sm:text-xs md:text-sm">{item.name}</div>
              <p className="mt-1.5 text-[10px] leading-relaxed text-white/90 sm:text-xs md:text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Responsible Tools */}
        <h3 className="mb-3 text-xs font-black uppercase tracking-widest text-white sm:text-sm md:text-base">Responsible Gambling Tools</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
          {responsibleTools.map((tool) => (
            <div
              key={tool.title}
              className="bg-[#2f241d] border border-[#5c4a3d] rounded-xl p-3 hover:border-[#8b6b58] transition-all"
            >
              <div className="text-[#F2A530] w-7 h-7 flex items-center justify-center mb-2">
                <i className={`${tool.icon} text-white text-base`} />
              </div>
              <div className="mb-1 text-[10px] font-black text-white sm:text-xs md:text-sm">{tool.title}</div>
              <div className="text-[9px] leading-relaxed text-white sm:text-[10px] md:text-xs">{tool.desc}</div>
            </div>
          ))}
        </div>

        {/* Help Resources */}
        <h3 className="mb-3 text-xs font-black uppercase tracking-widest text-white sm:text-sm md:text-base">Need Help? Contact These Services</h3>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {helpLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              rel="nofollow noopener noreferrer"
              className="bg-[#2f241d] border border-[#22c55e]/30 rounded-xl p-2.5 flex items-center gap-2 hover:border-[#22c55e]/60 hover:bg-[#2f241d] transition-all cursor-pointer"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className={`${link.icon} text-[#22c55e] text-sm`} />
              </div>
              <span className="text-[10px] font-bold leading-tight text-white sm:text-xs md:text-sm">{link.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Footer Note */}
      <div className="mx-3 mb-4 rounded-xl border border-[#5c4a3d] bg-[#2f241d] p-3 sm:mx-4">
        <p className="text-center text-[10px] leading-relaxed text-white sm:text-xs md:text-sm">
          <i className="ri-alert-line text-white mr-1" />
          Gambling involves risk. Only gamble with money you can afford to lose. {renderWithMrBean9("MrBean9")} supports responsible gambling 
          practices and offers tools to help you stay in control. <strong className="text-white">18+ only.</strong>
        </p>
      </div>
    </section>
  );
}
