import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import TopBar from "./home/components/TopBar";
import Footer from "./home/components/Footer";
import SignUpModal from "./home/components/SignUpModal";
import BottomNav from "./home/components/BottomNav";
import { MrBean9Word, renderWithMrBean9 } from "@/utils/renderMrBean9";
import { blogArticles, blogPageMeta } from "@/mocks/blogArticles";

function formatBlogDate(iso: string) {
  try {
    return new Date(`${iso}T12:00:00`).toLocaleDateString("en-AU", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

export default function BlogPage() {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const prev = document.title;
    document.title = "MrBean9 Blog | Guides, Games & Payments (Australia)";
    return () => {
      document.title = prev;
    };
  }, []);

  /* Deep link: /blog#article-id — scroll after paint (same idea as home hash sections) */
  useEffect(() => {
    if (location.pathname !== "/blog" || !location.hash || location.hash.length <= 1) return;
    const id = location.hash.slice(1);
    const el = document.getElementById(id);
    if (!el) return;

    const scrollTimer = window.setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);

    return () => clearTimeout(scrollTimer);
  }, [location.pathname, location.hash]);

  return (
    <main className="min-h-screen bg-brand-bg wood-bg font-nunito text-base text-white">
      <TopBar
        onLoginClick={() => setShowModal(true)}
        onRegisterClick={() => setShowModal(true)}
      />

      <div className="mx-auto max-w-7xl px-3 py-4 pb-28 sm:pb-24 md:px-6 md:py-6 md:pb-10 lg:pb-12">
        <nav
          className="mb-4 text-xs text-white/70 sm:text-sm md:text-base"
          aria-label="Breadcrumb"
        >
          <Link
            to="/"
            className="font-semibold text-amber-200/90 hover:text-amber-100"
          >
            Home
          </Link>
          <span className="mx-2 text-white/40">/</span>
          <span className="text-white/90">Blog</span>
        </nav>

        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
          <aside className="lg:w-60 lg:flex-shrink-0">
            <div className="rounded-xl border border-[#5c4a3d] bg-[#2f241d] p-3 sm:p-4 lg:sticky lg:top-24">
              <p className="text-xs font-black uppercase tracking-widest text-white/55 sm:text-sm md:text-base">
                On this page
              </p>
              <ol className="mt-2 max-h-[min(50vh,22rem)] space-y-1.5 overflow-y-auto text-xs leading-snug text-white/85 sm:text-sm md:text-base lg:max-h-none lg:overflow-visible">
                {blogArticles.map((a, i) => (
                  <li key={a.id}>
                    <Link
                      to={`/blog#${a.id}`}
                      className="block rounded-md py-0.5 transition-colors hover:text-amber-200"
                    >
                      {i + 1}. {a.title}
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <div className="min-w-0 flex-1 space-y-8 sm:space-y-10">
            <header className="rounded-xl border border-[#5c4a3d] bg-[#3a2d24] px-4 py-5 shadow-sm sm:px-6 sm:py-7 md:px-8 md:py-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300/90 sm:text-sm md:text-base">
                MrBean9 articles
              </p>
              <h1 className="mt-2 text-2xl font-black leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                {blogPageMeta.title}
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base md:text-lg">
                {renderWithMrBean9(blogPageMeta.intro)}
              </p>
              <p className="mt-3 text-xs text-white/50 sm:text-sm md:text-base">
                <MrBean9Word /> · Australia · 18+ only
              </p>
            </header>

            <section aria-labelledby="blog-index-heading">
              <h2
                id="blog-index-heading"
                className="mb-3 text-lg font-black text-white sm:text-xl md:text-2xl"
              >
                All articles
              </h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
                {blogArticles.map((a) => (
                  <Link
                    key={a.id}
                    to={`/blog#${a.id}`}
                    className="group flex flex-col rounded-xl border border-[#5c4a3d] bg-[#2f241d] p-3 transition-all hover:border-[#8b6b58] hover:shadow-md sm:p-4"
                  >
                    <span className="text-[10px] font-black uppercase tracking-widest text-amber-400/90 sm:text-xs md:text-sm">
                      {a.category}
                    </span>
                    <span className="mt-1 text-sm font-black leading-snug text-white group-hover:text-amber-100 sm:text-base md:text-lg">
                      {renderWithMrBean9(a.title)}
                    </span>
                    <span className="mt-2 line-clamp-3 text-xs leading-relaxed text-white/75 sm:text-sm md:text-base">
                      {renderWithMrBean9(a.excerpt)}
                    </span>
                    <span className="mt-auto pt-3 text-[10px] text-white/45 sm:text-xs md:text-sm">
                      {formatBlogDate(a.date)} · {a.readMinutes} min read
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            <div className="space-y-10 sm:space-y-12">
              {blogArticles.map((article) => (
                <article
                  key={article.id}
                  id={article.id}
                  className="scroll-mt-24 rounded-xl border border-[#5c4a3d] bg-[#3a2d24] px-4 py-5 sm:px-6 sm:py-7 md:px-8 md:py-8"
                >
                  <p className="text-xs font-black uppercase tracking-widest text-amber-300/90 sm:text-sm md:text-base">
                    {article.category}
                  </p>
                  <h2 className="mt-2 text-xl font-black leading-tight text-white sm:text-2xl md:text-3xl">
                    {renderWithMrBean9(article.title)}
                  </h2>
                  <p className="mt-2 text-xs text-white/50 sm:text-sm md:text-base">
                    {formatBlogDate(article.date)} · {article.readMinutes} min read
                  </p>
                  <div className="mt-4 space-y-3 text-sm leading-relaxed text-white/90 sm:space-y-4 sm:text-base md:text-lg">
                    {article.paragraphs.map((p, idx) => (
                      <p key={idx}>{renderWithMrBean9(p)}</p>
                    ))}
                  </div>
                  {article.bullets && article.bullets.length > 0 && (
                    <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-white/85 sm:text-base md:text-lg">
                      {article.bullets.map((b, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {renderWithMrBean9(b)}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-6 flex flex-wrap gap-2 border-t border-[#5c4a3d]/80 pt-4">
                    <Link
                      to="/guides/strategy"
                      className="inline-flex items-center rounded-full border border-[#5c4a3d] bg-[#2f241d] px-3 py-1.5 text-xs font-black text-white hover:border-amber-500/40 sm:text-sm md:text-base"
                    >
                      Strategy guide
                    </Link>
                    <Link
                      to="/vip"
                      className="inline-flex items-center rounded-full border border-[#5c4a3d] bg-[#2f241d] px-3 py-1.5 text-xs font-black text-white hover:border-amber-500/40 sm:text-sm md:text-base"
                    >
                      VIP program
                    </Link>
                    <Link
                      to="/"
                      className="inline-flex items-center rounded-full bg-brand px-3 py-1.5 text-xs font-black text-white hover:bg-brand-dark sm:text-sm md:text-base"
                    >
                      Back to home
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer onSignUpClick={() => setShowModal(true)} />
      <SignUpModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <BottomNav />
    </main>
  );
}
