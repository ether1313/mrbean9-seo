import { useCallback, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

interface TopBarProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

const SECTION_FLASH_CLASS = "section-nav-flash";
const SECTION_FLASH_MS = 1400;

/** Full page load to SPA root (respects Vite `base` / subpath deploy). */
const APP_ROOT = import.meta.env.BASE_URL;

function clearAllSectionFlashes() {
  document.querySelectorAll(`.${SECTION_FLASH_CLASS}`).forEach((node) => {
    node.classList.remove(SECTION_FLASH_CLASS);
  });
}

export default function TopBar({ onLoginClick, onRegisterClick }: TopBarProps) {
  const location = useLocation();
  const flashTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scrollToSectionWithFlash = useCallback((href: string) => {
    const id = href.startsWith("#") ? href.slice(1) : "";
    const el = id ? document.getElementById(id) : null;
    if (!el) return;

    if (flashTimeoutRef.current) {
      clearTimeout(flashTimeoutRef.current);
      flashTimeoutRef.current = null;
    }
    clearAllSectionFlashes();

    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", href);

    requestAnimationFrame(() => {
      el.classList.add(SECTION_FLASH_CLASS);
      flashTimeoutRef.current = setTimeout(() => {
        el.classList.remove(SECTION_FLASH_CLASS);
        flashTimeoutRef.current = null;
      }, SECTION_FLASH_MS);
    });
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
      if (location.pathname === "/" && to === "/") {
        e.preventDefault();
        scrollToSectionWithFlash("#home");
        return;
      }
      if (location.pathname === "/" && to.startsWith("/#")) {
        const hash = to.slice(1);
        const id = hash.slice(1);
        if (document.getElementById(id)) {
          e.preventDefault();
          scrollToSectionWithFlash(hash);
        }
      }
    },
    [location.pathname, scrollToSectionWithFlash]
  );

  const navItems = [
    { icon: "ri-home-5-line", label: "HOME", to: "/" },
    { icon: "ri-gamepad-line", label: "SLOTS", to: "/#games" },
    { icon: "ri-gift-line", label: "PROMOTIONS", to: "/#promotions" },
    { icon: "ri-lightbulb-line", label: "STRATEGY", to: "/guides/strategy" },
    { icon: "ri-vip-crown-line", label: "VIP", to: "/vip" },
    { icon: "ri-article-line", label: "BLOG", to: "/blog" },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-[#d7d7d7] bg-white text-black shadow-sm">
      <div className="mx-auto flex max-w-[1600px] items-center justify-center px-3 py-2 md:px-4 md:py-2.5">
        <a
          href={APP_ROOT}
          aria-label="MrBean9 — Home"
          title="Home"
          onClick={(e) => {
            e.preventDefault();
            window.location.assign(APP_ROOT);
          }}
          className="flex min-w-0 cursor-pointer justify-center rounded-md outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-black/25"
        >
          <div className="flex h-9 max-w-[min(200px,52vw)] items-center justify-center sm:h-10 md:h-11">
            <img
              src="/mrbean9.png"
              alt="MrBean9"
              className="max-h-full w-full object-contain object-center pointer-events-none"
            />
          </div>
        </a>
      </div>

      <div className="flex gap-2 border-t border-[#e5e5e5] bg-white px-3 py-2 md:px-4 xl:hidden">
        <button
          type="button"
          onClick={onLoginClick}
          className="flex-1 cursor-pointer rounded-lg border border-[#c8c8c8] bg-white py-2 text-xs font-black text-black sm:text-sm"
        >
          LOGIN
        </button>
        <button
          type="button"
          onClick={onRegisterClick}
          className="flex-1 cursor-pointer rounded-lg border border-[#c8c8c8] bg-[#FFD700] py-2 text-xs font-black text-black sm:text-sm"
        >
          REGISTER
        </button>
      </div>

      <nav className="hidden items-center justify-center gap-1 border-t border-[#e5e5e5] bg-white px-4 py-2 xl:flex">
        {navItems.map(({ icon, label, to }) => (
          <Link
            key={label}
            to={to}
            onClick={(e) => handleNavClick(e, to)}
            className={`flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-2 text-xs font-bold text-black hover:bg-[#f2f2f2] xl:text-sm ${
              (label === "STRATEGY" && location.pathname === "/guides/strategy") ||
              (label === "VIP" && location.pathname === "/vip") ||
              (label === "BLOG" && location.pathname === "/blog")
                ? "bg-[#ececec]"
                : ""
            }`}
          >
            <i className={`${icon} text-sm`} />
            {label}
          </Link>
        ))}
        <div className="ml-3 flex items-center gap-2 border-l border-[#e0e0e0] pl-4">
          <button
            type="button"
            onClick={onLoginClick}
            className="cursor-pointer rounded-lg border border-[#c8c8c8] bg-white px-3 py-2 text-xs font-black text-black xl:text-sm"
          >
            LOGIN
          </button>
          <button
            type="button"
            onClick={onRegisterClick}
            className="cursor-pointer rounded-lg border border-[#c8c8c8] bg-[#FFD700] px-3 py-2 text-xs font-black text-black xl:text-sm"
          >
            REGISTER
          </button>
        </div>
      </nav>
    </header>
  );
}
