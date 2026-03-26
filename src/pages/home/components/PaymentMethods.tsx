import { renderWithMrBean9 } from "@/utils/renderMrBean9";

const paymentMethods = [
  {
    category: "Bank Transfer",
    icon: "ri-bank-line",
    color: "text-white",
    bg: "bg-brand/10",
    methods: [
      { name: "ANZ Bank", min: "AUD 20", max: "AUD 50,000", time: "Instant", icon: "ri-bank-line" },
      { name: "CommBank", min: "AUD 20", max: "AUD 50,000", time: "Instant", icon: "ri-bank-line" },
      { name: "Westpac", min: "AUD 20", max: "AUD 50,000", time: "Instant", icon: "ri-bank-line" },
      { name: "NAB", min: "AUD 20", max: "AUD 50,000", time: "Instant", icon: "ri-bank-line" },
    ],
  },
  {
    category: "Cryptocurrency",
    icon: "ri-bit-coin-line",
    color: "text-[#f59e0b]",
    bg: "bg-[#f59e0b]/10",
    methods: [
      { name: "Bitcoin (BTC)", min: "AUD 5", max: "Unlimited", time: "15 mins", icon: "ri-bit-coin-line" },
      { name: "Ethereum (ETH)", min: "AUD 5", max: "Unlimited", time: "10 mins", icon: "ri-coin-line" },
      { name: "USDT (TRC20)", min: "AUD 5", max: "Unlimited", time: "5 mins", icon: "ri-exchange-dollar-line" },
    ],
  },
  {
    category: "Digital Wallets",
    icon: "ri-wallet-3-line",
    color: "text-[#22c55e]",
    bg: "bg-[#22c55e]/10",
    methods: [
      { name: "PayID", min: "AUD 5", max: "AUD 25,000", time: "Instant", icon: "ri-smartphone-line" },
      { name: "Osko", min: "AUD 5", max: "AUD 25,000", time: "Instant", icon: "ri-flashlight-line" },
    ],
  },
];

export default function PaymentMethods({ onRegisterClick }: { onRegisterClick: () => void }) {
  return (
    <section id="payments" className="bg-[#3a2d24] border border-[#5c4a3d] rounded-xl overflow-hidden">
      <div className="flex items-center gap-2 border-b border-[#5c4a3d] bg-[#2f241d] px-3 py-3 sm:px-5 sm:py-4">
        <div className="flex h-8 w-8 items-center justify-center text-white">
          <i className="ri-secure-payment-line text-xl text-white" />
        </div>
        <h2 className="text-sm font-black uppercase tracking-wider text-white md:text-base">Payment Methods for Australian Players</h2>
      </div>

      {/* Payment Banner */}
      <div className="relative">
        <img
          src="https://readdy.ai/api/search-image?query=cartoon%20mr%20bean%20character%20holding%20multiple%20payment%20cards%20cryptocurrency%20coins%20bitcoin%20bank%20transfer%20wallet%20digital%20payment%20methods%20for%20Australian%20casino%20players%20vibrant%20warm%20brown%20gold%20tones%20wide%20banner%20secure%20payment%20illustration%20cheerful%20festive%20background%20with%20vault%20lock%20shield&width=900&height=160&seq=payment-banner-mrbean9&orientation=landscape"
          alt="Payment Methods"
          className="w-full h-32 object-cover object-top"
        />
        <div className="absolute inset-0 flex items-center bg-gradient-to-r from-brand/88 via-brand/42 to-transparent px-4 sm:px-6">
          <div>
            <div className="text-base font-black leading-tight text-white sm:text-lg md:text-xl">Fast, Safe &amp; Secure Payments</div>
            <div className="mt-0.5 text-xs font-bold text-white sm:text-sm">AUD 5 Min Deposit · AUD 25 Min Withdraw · 0% Fees</div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-0 border-b border-[#5c4a3d]">
        {[
          { label: "Min Deposit", value: "AUD 5", icon: "ri-arrow-down-circle-line", color: "text-[#22c55e]" },
          { label: "Min Withdraw", value: "AUD 25", icon: "ri-arrow-up-circle-line", color: "text-[#F2A530]" },
          { label: "Avg. Speed", value: "15 mins", icon: "ri-time-line", color: "text-[#60a5fa]" },
        ].map((s, i) => (
          <div key={i} className={`text-center py-3 ${i < 2 ? "border-r border-[#5c4a3d]" : ""}`}>
            <div className="w-6 h-6 flex items-center justify-center mx-auto mb-1">
              <i className={`${s.icon} ${s.color} text-base`} />
            </div>
            <div className={`font-black text-sm ${s.color}`}>{s.value}</div>
            <div className="text-white text-[9px] font-semibold">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Payment Categories */}
      <div className="flex flex-col gap-3 p-3 sm:gap-4 sm:p-4">
        {paymentMethods.map((cat) => (
          <div key={cat.category}>
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-7 h-7 flex items-center justify-center ${cat.bg} rounded-lg`}>
                <i className={`${cat.icon} ${cat.color} text-sm`} />
              </div>
              <span className={`font-black text-xs uppercase tracking-wider ${cat.color}`}>{cat.category}</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {cat.methods.map((method) => (
                <div
                  key={method.name}
                  className="bg-[#2f241d] border border-[#5c4a3d] rounded-xl p-2.5 flex items-start gap-2 hover:border-[#8b6b58] transition-all"
                >
                  <div className="w-7 h-7 flex items-center justify-center bg-[#2f241d] rounded-lg flex-shrink-0 mt-0.5">
                    <i className={`${method.icon} ${cat.color} text-sm`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-[10px] font-bold text-white sm:text-xs md:text-sm">{method.name}</div>
                    <div className="mt-0.5 text-[9px] leading-snug text-white/90 sm:text-[10px] md:text-xs">
                      {method.min} – {method.max}
                    </div>
                    <div className="mt-1 inline-flex rounded-full border border-[#22c55e]/35 bg-[#22c55e]/10 px-1.5 py-0.5 text-[9px] font-black leading-none text-[#22c55e] sm:text-[10px]">
                      {method.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Security Note */}
      <div className="mx-3 mb-4 flex items-start gap-3 rounded-xl border border-[#22c55e]/30 bg-[#2f241d] p-3 sm:mx-4">
        <div className="w-8 h-8 flex items-center justify-center bg-[#22c55e]/10 rounded-lg flex-shrink-0">
          <i className="ri-lock-2-line text-[#22c55e] text-base" />
        </div>
        <div>
          <div className="mb-0.5 text-xs font-black text-[#22c55e] sm:text-sm">256-bit SSL Encrypted Transactions</div>
          <p className="text-[10px] leading-relaxed text-white sm:text-xs md:text-sm md:leading-relaxed">
            All financial transactions at {renderWithMrBean9("MrBean9")} are protected by bank-grade 256-bit SSL encryption.{" "}
            Your funds and personal data are 100% secure at all times.
          </p>
        </div>
      </div>

      <div className="px-3 pb-4 sm:px-4">
        <button
          onClick={onRegisterClick}
          className="w-full cursor-pointer whitespace-nowrap rounded-xl border border-[#8b6b58] bg-[#2f241d] py-2 text-xs font-black text-[#fdf5e6f2] transition-all hover:border-brand hover:bg-[#423227] sm:py-2.5 sm:text-sm"
        >
          <i className="ri-deposit-line mr-1" />REGISTER &amp; MAKE YOUR FIRST DEPOSIT
        </button>
      </div>
    </section>
  );
}
