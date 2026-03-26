interface BottomNavProps {
  onChatClick: () => void;
  onBonusClick?: () => void;
  onHomeClick?: () => void;
}

const Item = ({
  icon,
  label,
  onClick,
  badge,
  active,
}: {
  icon: string;
  label: string;
  onClick?: () => void;
  badge?: boolean;
  active?: boolean;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`relative flex flex-1 flex-col items-center gap-0.5 py-1.5 transition-colors cursor-pointer ${
      active ? "text-[#ff9f43]" : "text-white hover:text-[#ffcf8a]"
    }`}
  >
    <div className="relative flex h-6 w-6 items-center justify-center">
      <i className={`${icon} text-xl`} />
      {badge && (
        <span className="absolute -right-1 -top-0.5 flex h-3.5 min-w-[14px] items-center justify-center rounded-full bg-red-600 px-0.5 text-[7px] font-black text-white">
          !
        </span>
      )}
    </div>
    <span className="max-w-[4.5rem] truncate text-[9px] font-black uppercase tracking-tight">{label}</span>
  </button>
);

export default function BottomNav({ onChatClick, onBonusClick, onHomeClick }: BottomNavProps) {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-[60] border-t border-[#5c4a3d] bg-[#2a2119] pb-[env(safe-area-inset-bottom,0px)] lg:hidden"
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-lg items-stretch justify-around px-1 pt-1">
        <Item icon="ri-home-5-fill" label="Home" onClick={onHomeClick} active />
        <Item icon="ri-history-line" label="History" />
        <Item icon="ri-gift-2-fill" label="Bonus" onClick={onBonusClick} badge />
        <Item icon="ri-customer-service-2-fill" label="Live Chat" onClick={onChatClick} />
        <Item icon="ri-settings-3-fill" label="Settings" />
      </div>
    </nav>
  );
}
