import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TopBar from "../home/components/TopBar";
import Footer from "../home/components/Footer";
import SignUpModal from "../home/components/SignUpModal";
import BottomNav from "../home/components/BottomNav";
import { MrBean9Word, renderWithMrBean9 } from "@/utils/renderMrBean9";
import { strategyPageMeta, strategySections } from "@/mocks/strategyBlogContent";

export default function StrategyPage() {
  const [showModal, setShowModal] = useState(false);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const prev = document.title;
    document.title =
      "Online Pokies & Slots Strategy Guide | How to Play | MrBean9 Australia";
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <main className="min-h-screen bg-brand-bg wood-bg font-nunito text-base text-white">
      <TopBar
        onLoginClick={() => setShowModal(true)}
        onRegisterClick={() => setShowModal(true)}
      />

      <div className="mx-auto max-w-7xl px-3 py-4 pb-24 md:px-6 md:py-6 md:pb-8 lg:pb-10">
        <nav
          className="mb-4 text-xs text-white/70 md:text-sm"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="font-semibold text-amber-200/90 hover:text-amber-100">
            Home
          </Link>
          <span className="mx-2 text-white/40">/</span>
          <span className="text-white/90">Guides / Strategy</span>
        </nav>

        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
          {/* Table of contents — desktop sticky */}
          <aside className="lg:w-56 lg:flex-shrink-0">
            <div className="rounded-xl border border-[#5c4a3d] bg-[#2f241d] p-3 lg:sticky lg:top-24">
              <p className="text-xs font-black uppercase tracking-widest text-white/55 md:text-sm">
                On this page
              </p>
              <ol className="mt-2 space-y-1.5 text-xs leading-snug text-white/85 md:text-sm lg:text-base">
                {strategySections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="hover:text-amber-200 transition-colors"
                    >
                      {i + 1}. {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <article className="min-w-0 flex-1 rounded-xl border border-[#5c4a3d] bg-[#3a2d24] px-4 py-5 shadow-sm sm:px-6 sm:py-7 md:px-8 md:py-9">
            <header className="border-b border-[#5c4a3d] pb-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300/90 md:text-sm">
                {strategyPageMeta.kicker}
              </p>
              <h1 className="mt-2 ux-title-xl text-white md:text-5xl">
                {strategyPageMeta.title}
              </h1>
              <p className="mt-4 ux-subtitle text-white/85 lg:text-xl">
                {strategyPageMeta.subtitle}
              </p>
              <p className="mt-3 text-sm text-white/50 md:text-sm">
                {strategyPageMeta.updatedLabel}
              </p>
            </header>

            <div className="prose-strategy space-y-10 pt-8">
              {strategySections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24 border-b border-[#5c4a3d]/80 pb-10 last:border-b-0 last:pb-0"
                >
                  <h2 className="ux-title-lg text-white">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4 text-md leading-relaxed text-white/90 sm:text-base md:text-base lg:text-lg">
                    {section.paragraphs.map((p, idx) => (
                      <p key={idx}>{renderWithMrBean9(p)}</p>
                    ))}
                  </div>
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="mt-4 list-inside list-disc space-y-2.5 text-md text-white/85 md:text-base lg:text-lg">
                      {section.bullets.map((b, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {renderWithMrBean9(b)}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <footer className="mt-10 rounded-lg border border-[#5c4a3d] bg-[#2f241d] p-4 text-center md:p-6">
              <p className="text-sm text-white/80 md:text-base">
                Ready to explore games with clearer expectations?
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-1 rounded-full bg-brand px-5 py-2.5 text-sm font-black text-white hover:bg-brand-dark md:text-base"
                >
                  Back to <MrBean9Word /> home
                </Link>
                <Link
                  to="/vip"
                  className="inline-flex items-center justify-center rounded-full border border-[#5c4a3d] bg-[#3a2d24] px-5 py-2.5 text-sm font-black text-white hover:border-amber-500/40 md:text-base"
                >
                  VIP program
                </Link>
              </div>
            </footer>
          </article>
        </div>
      </div>

      <Footer onSignUpClick={() => setShowModal(true)} />
      <SignUpModal isOpen={showModal} onClose={() => setShowModal(false)} />

      <BottomNav />

      {showChat && (
        <div className="fixed bottom-20 right-3 z-50 w-[min(100vw-1.5rem,20rem)] rounded-2xl border border-[#5c4a3d] bg-[#3a2d24] sm:right-4 sm:w-80">
          <div className="flex items-center justify-between border-b border-[#5c4a3d] bg-[#2f241d] px-3 py-2.5">
            <span className="text-xs font-black text-white">Live Support</span>
            <button
              type="button"
              onClick={() => setShowChat(false)}
              className="flex h-7 w-7 cursor-pointer items-center justify-center text-white"
              aria-label="Close chat"
            >
              <i className="ri-close-line" />
            </button>
          </div>
          <p className="p-3 text-xs text-white/85">
            {renderWithMrBean9("MrBean9")} support — ask us anything about games or your account.
          </p>
        </div>
      )}
    </main>
  );
}
