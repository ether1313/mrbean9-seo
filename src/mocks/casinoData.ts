export const gameCategories = ["All", "Slots", "Live Table"];

export const games = [
  {
    id: 1,
    provider: "Ace333",
    category: "Slots",
    rating: 4.8,
    players: "10.1K",
    image: "/images/games/slot/ace333.png",
  },
  {
    id: 2,
    provider: "Booongo",
    category: "Slots",
    rating: 4.7,
    players: "8.2K",
    image: "/images/games/slot/booongo.png",
  },
  {
    id: 3,
    provider: "CQ9",
    category: "Slots",
    rating: 4.6,
    players: "7.4K",
    image: "/images/games/slot/cq9.png",
  },
  {
    id: 4,
    provider: "JILI",
    category: "Slots",
    rating: 4.9,
    players: "15.1K",
    image: "/images/games/slot/jili.png",
  },
  {
    id: 5,
    provider: "Joker",
    category: "Slots",
    rating: 4.5,
    players: "6.9K",
    image: "/images/games/slot/joker.png",
  },
  {
    id: 6,
    provider: "Sexy Baccarat",
    category: "Live Table",
    rating: 4.9,
    players: "20.5K",
    image: "/images/games/live/sexy-baccarat.png",
  },
  {
    id: 7,
    provider: "Dream Gaming",
    category: "Live Table",
    rating: 4.8,
    players: "14.3K",
    image: "/images/games/live/dream-gaming.png",
  },
  {
    id: 8,
    provider: "Playtech",
    category: "Live Table",
    rating: 4.7,
    players: "12.7K",
    image: "/images/games/live/playtech.png",
  },
  {
    id: 9,
    provider: "CT855",
    category: "Live Table",
    rating: 4.8,
    players: "13.4K",
    image: "/images/games/live/ct855.png",
  },
  {
    id: 10,
    provider: "Spade Gaming",
    category: "Live Table",
    rating: 4.9,
    players: "38.7K",
    image: "/images/games/live/spade-gaming.png",
  },
  {
    id: 11,
    provider: "W Casino",
    category: "Live Table",
    rating: 4.8,
    players: "28.7K",
    image: "/images/games/live/wcasino.png",
  },
];

export const sidebarPromos = [
  {
    id: 1,
    title: "DEPOSIT RANDOM ANGPAO",
    subtitle: "Every Deposit Gets You a Surprise Bonus!",
    image: "/images/sidebar/promo-deposit-angpao.png",
  },
  {
    id: 2,
    title: "365 FREE DAYS BONUS",
    subtitle: "Daily Login Bonus Every Day for a Full Year",
    image: "/images/sidebar/promo-365-free-days.png",
  },
  {
    id: 3,
    title: "DAILY EASY STEP · FREE CREDIT",
    subtitle: "Claim up to AUD 100",
    image: "/images/sidebar/promo-daily-free-credit.png",
  },
];

export const liveTransactions = [
  { user: "J***n", action: "Deposit", amount: "+AUD 500", game: "Crown Strike", time: "2s ago" },
  { user: "M***a", action: "Win", amount: "+AUD 1,200", game: "Cash Volcano", time: "5s ago" },
  { user: "R***k", action: "Deposit", amount: "+AUD 200", game: "Sun of Egypt", time: "8s ago" },
  { user: "S***h", action: "Win", amount: "+AUD 3,400", game: "Royal Baccarat", time: "12s ago" },
  { user: "T***y", action: "Deposit", amount: "+AUD 100", game: "Lucky Penny", time: "15s ago" },
];

export const extendedTransactions = [
  { user: "J***n", action: "Deposit", amount: "+AUD 500", game: "WF9", time: "2s ago" },
  { user: "M***a", action: "Win", amount: "+AUD 1,200", game: "LIVE22", time: "5s ago" },
  { user: "R***k", action: "Deposit", amount: "+AUD 200", game: "JILI", time: "8s ago" },
  { user: "S***h", action: "Win", amount: "+AUD 3,400", game: "POKEMON", time: "12s ago" },
  { user: "T***y", action: "Deposit", amount: "+AUD 100", game: "NETP", time: "15s ago" },
  { user: "A***e", action: "Win", amount: "+AUD 850", game: "MRBEAN9", time: "18s ago" },
  { user: "D***n", action: "Deposit", amount: "+AUD 300", game: "JILI", time: "20s ago" },
  { user: "C***s", action: "Win", amount: "+AUD 5,000", game: "IMPERIUM", time: "25s ago" },
  { user: "B***a", action: "Deposit", amount: "+AUD 150", game: "POKEMON", time: "28s ago" },
  { user: "P***k", action: "Win", amount: "+AUD 2,200", game: "LIVE22", time: "32s ago" },
];

/** PAGCOR + CGA only — used in right sidebar and Responsible Gambling section */
export const licenseCertifications = [
  {
    name: "PAGCOR",
    description:
      "The Philippine Amusement and Gaming Corporation regulates lawful casino and entertainment gaming in the Philippines. A PAGCOR-listed operator works under official oversight, licensing rules and compliance standards.",
    image: "/images/right-sidebar/pagcor.png",
  },
  {
    name: "Curacao Gaming Authority (CGA)",
    description:
      "The Curacao Gaming Authority licenses international online gaming under Curacao’s iGaming framework. CGA recognition means the platform is authorised for regulated remote gaming and must follow applicable licensing obligations.",
    image: "/images/right-sidebar/cga.png",
  },
] as const;
