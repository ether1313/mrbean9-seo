import { useState } from "react";
import { MrBean9CapsWord, renderWithMrBean9 } from "@/utils/renderMrBean9";

const faqs = [
  {
    category: "Account & Registration",
    icon: "ri-user-line",
    color: "text-[#D4A017]",
    questions: [
      {
        q: "How do I create a MrBean9 account?",
        a: "Click the Register button, fill in your username, mobile number and password. Verify via SMS OTP and you're ready to play in under 2 minutes. Registration is completely free!",
      },
      {
        q: "Is MrBean9 available in Australia?",
        a: "Yes! MrBean9 is specifically designed for Australian players with AUD currency support, Australian bank transfers, and PayID/Osko instant payment options.",
      },
      {
        q: "How do I verify my identity (KYC)?",
        a: "For withdrawals over AUD 5,000, upload a government-issued photo ID (passport or driver's license) and a proof of address (utility bill or bank statement dated within 3 months).",
      },
    ],
  },
  {
    category: "Bonuses & Promotions",
    icon: "ri-gift-line",
    color: "text-[#22c55e]",
    questions: [
      {
        q: "What is the Welcome Bonus?",
        a: "New players receive a 200% match bonus on their first deposit, up to AUD 2,000. Simply deposit AUD 20 or more to claim. Wagering requirement is 20x the bonus amount.",
      },
      {
        q: "How does the Daily Cashback work?",
        a: "Every day you receive 0.9% cashback on your total bets regardless of wins or losses. The cashback is auto-credited to your account at midnight AEST.",
      },
      {
        q: "Can I get bonuses every week?",
        a: "Yes! The weekly rebate of 5% is credited every Monday based on your previous week's betting turnover. Plus we have monthly competitions, tournaments, and special event bonuses.",
      },
    ],
  },
  {
    category: "Deposits & Withdrawals",
    icon: "ri-bank-card-line",
    color: "text-[#60a5fa]",
    questions: [
      {
        q: "What is the minimum deposit?",
        a: "The minimum deposit at MrBean9 is just AUD 5. We accept debit/credit card, bank transfers (ANZ, CommBank, Westpac, NAB), PayID, Osko, and major cryptocurrencies.",
      },
      {
        q: "How fast are withdrawals processed?",
        a: "Withdrawals are processed within 15 minutes on average. PayID and crypto withdrawals are the fastest. Bank transfers may take up to 1 business day. Minimum withdrawal is AUD 25.",
      },
      {
        q: "Are there any fees on deposits or withdrawals?",
        a: "Absolutely zero fees! MrBean9 does not charge any transaction fees on deposits or withdrawals. However, your bank or crypto network may apply their own standard fees.",
      },
    ],
  },
  {
    category: "Games & Fairness",
    icon: "ri-gamepad-line",
    color: "text-[#f59e0b]",
    questions: [
      {
        q: "Are the games fair and certified?",
        a: "Yes! All games at MrBean9 use certified RNG (Random Number Generator) technology that is tested and audited monthly by eCOGRA, an independent testing agency.",
      },
      {
        q: "What games does MrBean9 offer?",
        a: "We offer 1,500+ games including slots, live baccarat, blackjack, poker, roulette, fish games, and jackpot slots from top providers like JILI, PG Soft, Evolution, and Boongo.",
      },
      {
        q: "Is there a mobile app?",
        a: "MrBean9 is fully optimised for mobile browsers on iOS and Android — no app download needed! Just open mrbean9.com on your mobile browser and play seamlessly.",
      },
    ],
  },
];

export default function FAQSection({ onRegisterClick }: { onRegisterClick: () => void }) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const currentFaq = faqs[activeCategory];

  return (
    <section id="faq" className="scroll-mt-20 bg-[#3a2d24] border border-[#5c4a3d] rounded-xl overflow-hidden">
      <div className="flex items-center gap-2 border-b border-[#5c4a3d] bg-[#2f241d] px-3 py-3 sm:px-5 sm:py-4">
        <div className="flex h-8 w-8 items-center justify-center">
          <i className="ri-question-answer-line text-xl text-white" />
        </div>
        <h2 className="text-sm font-black uppercase tracking-wider text-white md:text-base">FAQ</h2>
      </div>

      {/* Category Tabs */}
      <div className="flex overflow-x-auto scrollbar-hide border-b border-white/10 bg-brand-dark/35">
        {faqs.map((cat, i) => (
          <button
            key={i}
            onClick={() => { setActiveCategory(i); setOpenQuestion(null); }}
            className={`flex flex-shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap border-b-2 px-3 py-2.5 text-[10px] font-black transition-all sm:px-4 sm:py-3 sm:text-xs md:text-sm ${
              activeCategory === i
                ? `${cat.color} border-current bg-[#2f241d]`
                : "text-white/50 border-transparent hover:text-white"
            }`}
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <i className={`${cat.icon} text-sm`} />
            </div>
            {cat.category}
          </button>
        ))}
      </div>

      {/* Questions Accordion */}
      <div className="flex flex-col gap-2 p-3 sm:p-4">
        {currentFaq.questions.map((item, i) => (
          <div
            key={i}
            className={`border rounded-xl overflow-hidden transition-all ${
              openQuestion === i ? "border-brand/35 bg-[#2f241d]" : "border-[#5c4a3d] bg-[#2f241d]"
            }`}
          >
            <button
              onClick={() => setOpenQuestion(openQuestion === i ? null : i)}
              className="w-full text-left px-4 py-3 flex items-start gap-3 cursor-pointer hover:bg-[#2f241d]/80 transition-all"
            >
              <span className={`mt-0.5 flex-shrink-0 text-xs font-black sm:text-sm ${currentFaq.color}`}>Q{i + 1}</span>
              <span className="flex-1 text-xs font-bold leading-relaxed text-white sm:text-sm md:text-base">
                {renderWithMrBean9(item.q)}
              </span>
              <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                <i className={`ri-arrow-down-s-line text-white/45 transition-transform ${openQuestion === i ? "rotate-180" : ""}`} />
              </div>
            </button>
            {openQuestion === i && (
              <div className="px-4 pb-3 modal-enter">
                <div className="pl-7 border-l-2 border-brand/25">
                  <p className="text-xs leading-relaxed text-white sm:text-sm md:text-base md:leading-relaxed">
                    {renderWithMrBean9(item.a)}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact Support */}
      <div className="mx-3 mb-4 rounded-xl border border-[#5c4a3d] bg-[#2f241d] p-3 sm:mx-4 sm:p-4">
        <div className="mb-3 text-center">
          <div className="text-sm font-black text-white md:text-base">Still have questions?</div>
          <div className="mt-0.5 text-xs text-white sm:text-sm">Our 24/7 support team is ready to help you</div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { icon: "ri-telegram-line", label: "Telegram", color: "text-[#60a5fa]", bg: "bg-[#60a5fa]/10" },
            { icon: "ri-whatsapp-line", label: "WhatsApp", color: "text-[#22c55e]", bg: "bg-[#22c55e]/10" },
            { icon: "ri-chat-4-line", label: "Live Chat", color: "text-[#D4A017]", bg: "bg-[#D4A017]/10" },
          ].map((ch) => (
            <button
              key={ch.label}
              className={`${ch.bg} border border-[#5c4a3d] rounded-xl py-2.5 flex flex-col items-center gap-1 cursor-pointer hover:border-[#8b6b58] transition-all`}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className={`${ch.icon} ${ch.color} text-lg`} />
              </div>
              <span className={`text-[9px] font-black sm:text-[10px] md:text-xs ${ch.color}`}>{ch.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="px-3 pb-4 sm:px-4">
        <button
          onClick={onRegisterClick}
          className="w-full cursor-pointer whitespace-nowrap rounded-xl bg-[#60493b] py-2.5 text-xs font-black text-white shadow-md shadow-brand/20 transition-all hover:bg-[#49372d] sm:py-3 sm:text-sm md:text-base"
        >
          <i className="ri-gamepad-2-line mr-2" />
          START PLAYING AT <MrBean9CapsWord /> — JOIN FREE
        </button>
      </div>
    </section>
  );
}
