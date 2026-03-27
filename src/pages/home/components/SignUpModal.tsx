import { useEffect } from "react";
import { MrBean9Word, mrBean9MarkClassName, renderWithMrBean9 } from "@/utils/renderMrBean9";

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MRBEAN9_CTA_URL = "https://mrbean9.com/RFMRBEAN9SEO";

const stats = [
  { value: "250K+", label: "Players" },
  { value: "4,500+", label: "Games" },
  { value: "AUD 5", label: "Min Deposit" },
  { value: "AUD 28", label: "Min Withdraw" },
];

export default function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-[#2f241d] border border-brand/30 rounded-2xl w-full max-w-lg overflow-hidden modal-enter max-h-[92vh] overflow-y-auto scrollbar-hide shadow-2xl shadow-black/40">
        {/* Gold top stripe */}
        <div className="h-1.5 bg-gradient-to-r from-brand via-[#F5C518] to-[#D4A017]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-[#2f241d] border border-[#5c4a3d] rounded-full text-white hover:text-white hover:border-brand transition-all cursor-pointer"
        >
          <i className="ri-close-line" />
        </button>

        <div className="px-5 pb-5">
          {/* Welcome Text */}
          <div className="text-center py-4 border-b border-[#5c4a3d]">
            <h2 className="font-fredoka text-xl sm:text-2xl font-black text-white leading-tight">
              Welcome to <MrBean9Word />
            </h2>
            <p className="text-white text-[10px] sm:text-xs mt-1">
              Australia&apos;s Premier Online Casino Platform
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-2 py-4 border-b border-[#5c4a3d]">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-white font-black text-sm sm:text-base leading-tight">{s.value}</div>
                <div className="text-white/55 text-[8px] sm:text-[9px] uppercase font-bold mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Promotions Highlight */}
          <div className="py-4 border-b border-[#5c4a3d]">
            <div className="text-white text-[9px] sm:text-[10px] font-black uppercase tracking-widest mb-3 text-center">
              Exclusive Bonuses
            </div>
            <div className="flex flex-col gap-2">
              {[
                { icon: "ri-gift-2-line", text: "200% Welcome Bonus on First Deposit", color: "text-white" },
                { icon: "ri-percent-line", text: "Daily Rollover Rebate 0.9%", color: "text-[#22c55e]" },
                { icon: "ri-calendar-check-line", text: "Weekly Rebate 5% Every Monday", color: "text-white" },
                { icon: "ri-share-line", text: "Earn AUD 3 for Every Referral Share", color: "text-[#22c55e]" },
                { icon: "ri-sun-line", text: "365 Days Free Daily Login Bonus", color: "text-white" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 sm:gap-3 px-2.5 sm:px-3 py-2 bg-[#2f241d] border border-[#5c4a3d] rounded-xl">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center flex-shrink-0">
                    <i className={`${item.icon} text-xs sm:text-sm ${item.color}`} />
                  </div>
                  <span className="text-white text-[10px] sm:text-xs font-semibold">{item.text}</span>
                  <i className="ri-check-line text-[#22c55e] text-[10px] sm:text-xs ml-auto flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="py-4 border-b border-[#5c4a3d]">
            <div className="text-white text-[9px] sm:text-[10px] font-black uppercase tracking-widest mb-3 text-center">
              Supported Payment Methods
            </div>
            <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
              {[
                { icon: "ri-visa-line", label: "Visa" },
                { icon: "ri-mastercard-line", label: "Mastercard" },
                { icon: "ri-bit-coin-line", label: "Bitcoin" },
                { icon: "ri-bank-card-2-line", label: "Bank Transfer" },
                { icon: "ri-paypal-line", label: "PayPal" },
              ].map(({ icon, label }) => (
                <div
                  key={label}
                  title={label}
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-[#2f241d] border border-[#5c4a3d] rounded-xl text-white hover:border-[#8b6b58] hover:text-white transition-all cursor-pointer"
                >
                  <i className={`${icon} text-base sm:text-lg`} />
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="pt-4 grid grid-cols-2 gap-3">
            <a
              href={MRBEAN9_CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onClose()}
              className="flex items-center justify-center gap-1.5 sm:gap-2 bg-[#2f241d] border-2 border-brand text-white font-black py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm hover:bg-brand hover:text-white transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <i className="ri-login-box-line" /> LOGIN
            </a>
            <a
              href={MRBEAN9_CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onClose()}
              className="flex items-center justify-center gap-1.5 sm:gap-2 bg-brand text-white font-black py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm hover:bg-[#2f241d] transition-all duration-200 cursor-pointer whitespace-nowrap shadow-md shadow-brand/20"
            >
              <i className="ri-user-add-line" /> REGISTER NOW
            </a>
          </div>

          {/* 18+ Disclaimer */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center border-2 border-[#D42B2B] rounded-full flex-shrink-0">
              <span className="text-[#D42B2B] font-black text-[8px] sm:text-[9px]">18+</span>
            </div>
            <p className="text-white/65 text-[8px] sm:text-[9px] leading-relaxed">
              Players must be 18 or older. Gambling can be addictive. Play responsibly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
