import { Link, useLocation } from "react-router-dom";

const navItems = [
  { icon: "ri-home-5-line", label: "HOME", to: "/" },
  { icon: "ri-gamepad-line", label: "SLOTS", to: "/#games" },
  { icon: "ri-gift-line", label: "BONUS", to: "/#promotions" },
  { icon: "ri-lightbulb-line", label: "STRATEGY", to: "/guides/strategy" },
  { icon: "ri-vip-crown-line", label: "VIP", to: "/vip" },
  { icon: "ri-article-line", label: "BLOG", to: "/blog" },
] as const;

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-[60] border-t border-[#5c4a3d] bg-[#2a2119] pb-[env(safe-area-inset-bottom,0px)] lg:hidden"
      aria-label="Primary"
    >
      <div className="mx-auto grid max-w-lg grid-cols-3 gap-x-0.5 gap-y-2 px-1 py-1 sm:grid-cols-6 sm:gap-x-1">
        {navItems.map(({ icon, label, to }) => {
          const isActive =
            (label === "STRATEGY" && location.pathname === "/guides/strategy") ||
            (label === "VIP" && location.pathname === "/vip") ||
            (label === "BLOG" && location.pathname === "/blog") ||
            (label === "HOME" && location.pathname === "/" && !location.hash) ||
            (label === "SLOTS" && location.pathname === "/" && location.hash === "#games") ||
            (label === "BONUS" && location.pathname === "/" && location.hash === "#promotions");

          return (
            <Link
              key={label}
              to={to}
              className={`flex min-w-0 flex-col items-center justify-center gap-1 rounded-md py-0.5 transition-colors ${
                isActive ? "text-amber-300" : "text-white hover:text-[#ffcf8a]"
              }`}
            >
              <i className={`${icon} text-[15px] leading-none sm:text-base`} />
              <span className="max-w-full truncate text-[9px] font-black uppercase leading-none tracking-tight sm:text-[10px]">
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
