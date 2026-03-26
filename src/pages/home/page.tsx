import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { renderWithMrBean9 } from "@/utils/renderMrBean9";
import TopBar from "./components/TopBar";
import LeftSidebar from "./components/LeftSidebar";
import CenterContent from "./components/CenterContent";
import RightSidebar from "./components/RightSidebar";
import BottomNav from "./components/BottomNav";
import SignUpModal from "./components/SignUpModal";
import Footer from "./components/Footer";

const SECTION_FLASH_CLASS = "section-nav-flash";

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/" || !location.hash || location.hash.length <= 1) return;
    const id = location.hash.slice(1);
    const el = document.getElementById(id);
    if (!el) return;

    const scrollTimer = window.setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      el.classList.add(SECTION_FLASH_CLASS);
    }, 100);
    const removeTimer = window.setTimeout(() => {
      el.classList.remove(SECTION_FLASH_CLASS);
    }, 1600);

    return () => {
      clearTimeout(scrollTimer);
      clearTimeout(removeTimer);
      el.classList.remove(SECTION_FLASH_CLASS);
    };
  }, [location.pathname, location.hash]);

  return (
    <main
      id="home"
      className="min-h-screen bg-brand-bg wood-bg font-nunito text-base text-white"
    >
      {/* Top Bar */}
      <TopBar
        onLoginClick={() => setShowModal(true)}
        onRegisterClick={() => setShowModal(true)}
      />

      {/* Main 3-Column Layout */}
      <div className="mx-auto flex max-w-[1600px] gap-3 px-3 py-3 pb-20 md:gap-4 md:px-5 md:py-4 lg:gap-5 lg:px-6 lg:pb-6">
        {/* Left Sidebar - hidden on mobile */}
        <div className="hidden w-[300px] flex-shrink-0 text-white lg:block">
          <LeftSidebar onRegisterClick={() => setShowModal(true)} />
        </div>

        {/* Center Content — striped panel like app screenshot */}
        <div className="min-w-0 flex-1 rounded-xl border border-[#5c4a3d] bg-[#3a2d24] text-white">
          <div className="px-2 py-3 sm:px-3 sm:py-4 md:px-5 md:py-5 lg:px-6">
            <CenterContent onRegisterClick={() => setShowModal(true)} />
          </div>
        </div>

        {/* Right Sidebar - hidden on mobile/tablet */}
        <div className="hidden w-[272px] flex-shrink-0 text-white lg:block xl:w-[280px]">
          <RightSidebar />
        </div>
      </div>

      {/* Footer */}
      <Footer onSignUpClick={() => setShowModal(true)} />

      {/* Sign Up Modal */}
      <SignUpModal isOpen={showModal} onClose={() => setShowModal(false)} />

      {/* Bottom Navigation */}
      <BottomNav
        onChatClick={() => setShowChat(!showChat)}
        onBonusClick={() => setShowModal(true)}
        onHomeClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />

      {/* Live Chat Window */}
      {showChat && (
        <div className="fixed bottom-20 right-3 z-50 w-[min(100vw-1.5rem,20rem)] sm:right-4 sm:w-80 bg-[#3a2d24] border border-[#5c4a3d] rounded-2xl overflow-hidden modal-enter">
          <div className="flex items-center justify-between px-3 py-2.5 sm:px-4 sm:py-3 bg-[#2f241d] border-b border-[#5c4a3d]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#22c55e] rounded-full animate-pulse" />
              <span className="text-white font-black text-xs sm:text-sm">Live Support</span>
            </div>
            <button
              onClick={() => setShowChat(false)}
              className="text-white hover:text-white cursor-pointer w-7 h-7 flex items-center justify-center"
            >
              <i className="ri-close-line" />
            </button>
          </div>
          <div className="p-3 h-44 sm:p-4 sm:h-48 flex flex-col justify-end">
            <div className="bg-[#2f241d] rounded-xl p-2.5 sm:p-3 mb-2">
              <p className="text-white text-xs sm:text-sm leading-relaxed">
                Hello! Welcome to {renderWithMrBean9("MrBean9")} Live Support. How can we assist you today?
              </p>
              <p className="text-white text-[10px] sm:text-xs mt-1 opacity-90">Support Agent • Just now</p>
            </div>
          </div>
          <div className="px-3 pb-3 flex gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 bg-[#2f241d] border border-[#5c4a3d] text-white text-xs sm:text-sm px-3 py-2 rounded-lg outline-none placeholder:text-white/70"
            />
            <button className="bg-brand text-white w-8 h-8 flex items-center justify-center rounded-lg cursor-pointer hover:bg-brand-dark transition-all flex-shrink-0">
              <i className="ri-send-plane-fill text-sm" />
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
