import { useState } from "react";

const steps = [
  {
    step: "01",
    title: "Click Register",
    desc: "Hit the glowing Register button at the top or any Sign Up CTA. Takes just 30 seconds!",
    icon: "ri-cursor-line",
    color: "text-white",
    border: "border-[#8b6b58]",
  },
  {
    step: "02",
    title: "Fill Your Details",
    desc: "Enter your username, email address, mobile number, and create a strong password.",
    icon: "ri-user-add-line",
    color: "text-[#22c55e]",
    border: "border-[#22c55e]/40",
  },
  {
    step: "03",
    title: "Verify Your Account",
    desc: "Confirm via the verification email or OTP SMS sent to your registered mobile number.",
    icon: "ri-shield-check-line",
    color: "text-[#60a5fa]",
    border: "border-[#60a5fa]/40",
  },
  {
    step: "04",
    title: "Make First Deposit",
    desc: "Choose your preferred payment method and deposit a minimum of AUD 5 to activate your account.",
    icon: "ri-bank-card-2-line",
    color: "text-[#f59e0b]",
    border: "border-[#f59e0b]/40",
  },
  {
    step: "05",
    title: "Claim Welcome Bonus",
    desc: "Your 200% welcome bonus is instantly credited — up to AUD 2,000 bonus on first deposit!",
    icon: "ri-gift-2-line",
    color: "text-[#ef4444]",
    border: "border-[#ef4444]/40",
  },
  {
    step: "06",
    title: "Start Playing & Winning",
    desc: "Explore 1,500+ games, place your bets, and start winning real AUD prizes instantly!",
    icon: "ri-trophy-line",
    color: "text-yellow-500",
    border: "border-[#8b6b58]",
  },
];

const verifyItems = [
  { icon: "ri-smartphone-line", title: "Mobile OTP", desc: "Enter the 6-digit OTP sent to your phone for instant identity confirmation." },
  { icon: "ri-user-follow-line", title: "KYC Proof", desc: "Upload a government ID + proof of address for accounts withdrawing over AUD 5,000." },
];

export default function RegistrationSteps({ onRegisterClick }: { onRegisterClick: () => void }) {
  const [activeVerify, setActiveVerify] = useState<number | null>(null);

  return (
    <section id="register" className="bg-[#3a2d24] border border-[#5c4a3d] rounded-xl overflow-hidden">
      <div className="flex items-center gap-2 border-b border-[#5c4a3d] bg-[#2f241d] px-3 py-3 sm:px-5 sm:py-4">
        <div className="flex h-8 w-8 items-center justify-center text-white">
          <i className="ri-account-circle-line text-xl text-white" />
        </div>
        <h2 className="ux-title-md uppercase tracking-wider text-white">Registration &amp; Account Verification</h2>
      </div>

      {/* Registration Banner */}
      <div className="relative">
        <img
          src="/images/registration/register-banner.jpg"
          alt="Register at MrBean9"
          className="h-32 w-full object-fill object-top sm:h-60"
        />
      </div>

      {/* Steps */}
      <div className="px-3 py-3 sm:px-4 sm:py-4">
        <h3 className="mb-3 text-sm font-black uppercase tracking-widest text-white sm:text-base md:text-lg">How to Register — 6 Easy Steps</h3>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
          {steps.map((s) => (
            <div
              key={s.step}
              className={`rounded-xl border bg-[#2f241d] p-2.5 transition-all hover:bg-[#2f241d] sm:p-3 ${s.border}`}
            >
              <div className="flex items-start gap-2 mb-2">
                <span className={`text-[10px] font-black ${s.color} bg-[#2f241d] border ${s.border} rounded-full px-1.5 py-0.5`}>{s.step}</span>
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <i className={`${s.icon} ${s.color} text-base`} />
                </div>
              </div>
              <div className={`mb-1 text-sm font-black sm:text-base md:text-lg ${s.color}`}>{s.title}</div>
              <div className="ux-desc text-white">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Verification Section */}
      <div className="px-3 pb-4 sm:px-4">
        <h3 className="mb-3 text-sm font-black uppercase tracking-widest text-white sm:text-base md:text-lg">Account Verification Methods</h3>
        <div className="grid grid-cols-2 gap-2">
          {verifyItems.map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveVerify(activeVerify === i ? null : i)}
              className={`cursor-pointer rounded-xl border bg-[#2f241d] px-2.5 py-2 text-left transition-all sm:px-3 sm:py-2.5 ${
                activeVerify === i ? "border-brand bg-[#3a2d24] ring-1 ring-brand/35" : "border-[#5c4a3d] hover:border-[#8b6b58]"
              }`}
            >
              <div className="mb-0.5 flex items-center gap-1.5 sm:gap-2">
                <div className="flex h-6 w-6 items-center justify-center text-white sm:h-6.5 sm:w-6.5">
                  <i className={`${item.icon} text-white text-sm sm:text-base`} />
                </div>
                <span className="text-xs font-black text-white sm:text-sm md:text-base">{item.title}</span>
                <i className={`ri-arrow-down-s-line ml-auto text-white/55 transition-transform ${activeVerify === i ? "rotate-180" : ""}`} />
              </div>
              {activeVerify === i && (
                <p className="modal-enter mt-0.5 ux-desc text-white">{item.desc}</p>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex gap-2 px-3 pb-4 sm:px-4">
        <button
          onClick={onRegisterClick}
          className="flex-1 cursor-pointer whitespace-nowrap rounded-xl border border-[#5c4a3d] bg-[#2f241d] py-2 text-xs font-black text-white transition-all hover:bg-[#423227] sm:py-2.5 sm:text-sm"
        >
          <i className="ri-play-line mr-1" />REGISTER NOW
        </button>
        <button 
          onClick={onRegisterClick}
          className="flex-1 cursor-pointer whitespace-nowrap rounded-xl border border-[#5c4a3d] bg-[#2f241d] py-2 text-xs font-bold text-white transition-all hover:bg-[#423227] sm:py-2.5 sm:text-sm">
          <i className="ri-question-line mr-1" />NEED HELP
        </button>
      </div>
    </section>
  );
}
