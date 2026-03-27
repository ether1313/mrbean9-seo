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
        <h2 className="ux-title-md uppercase tracking-wider text-white">Payment Methods for Australian Players</h2>
      </div>

      {/* Payment Banner */}
      <div className="relative">
        <img
          src="/images/payment/aus-secure-payment.png"
          alt="Payment Methods"
          className="w-full h-36 sm:h-60 md:h-60 object-fill object-top"
        />
        <div className="absolute inset-0 flex items-center bg-gradient-to-r from-brand/88 via-brand/42 to-transparent px-4 sm:px-6">
          <div>
            <div className="ux-title-md text-white">Fast, Safe &amp; Secure</div>
            <div className="mt-0.5 ux-subtitle text-white">For MrBean9 Online Casino Players</div>
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
            <div className="w-8 h-8 flex items-center justify-center mx-auto">
              <i className={`${s.icon} ${s.color} text-base`} />
            </div>
            <div className={`font-black text-base sm:text-lg md:text-xl ${s.color}`}>{s.value}</div>
            <div className="text-white text-xs font-semibold sm:text-sm md:text-base">{s.label}</div>
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
              <span className={`font-black text-sm uppercase tracking-wider sm:text-base md:text-lg ${cat.color}`}>{cat.category}</span>
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
                    <div className="truncate text-xs font-bold text-white sm:text-sm md:text-base">{method.name}</div>
                    <div className="mt-0.5 text-[10px] leading-snug text-white/90 sm:text-xs md:text-sm">
                      {method.min} – {method.max}
                    </div>
                    <div className="mt-1 inline-flex rounded-full border border-[#22c55e]/35 bg-[#22c55e]/10 px-1.5 py-0.5 text-[10px] font-black leading-none text-[#22c55e] sm:text-xs md:text-sm">
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
          <div className="mb-0.5 text-sm font-black text-[#22c55e] sm:text-base md:text-lg">256-bit SSL Encrypted Transactions</div>
          <p className="ux-desc text-white">
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
