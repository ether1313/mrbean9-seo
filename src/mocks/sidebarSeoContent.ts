/** Short editorial blocks for left/right sidebars — crawlable text for topical relevance (AU casino / MrBean9). */
export interface SidebarSeoArticle {
  id: string;
  heading: string;
  paragraphs: string[];
}

export const leftSidebarSeoArticles: SidebarSeoArticle[] = [
  {
    id: "au-online-casino-guide",
    heading: "Australian Online Casino Guide",
    paragraphs: [
      "Looking for a trusted online casino in Australia? MrBean9 focuses on AUD-friendly banking, popular pokies and live dealer tables, and clear bonus terms so you know what you are claiming before you play.",
      "From classic slot titles and jackpot games to live baccarat and roulette, Australian players can explore a broad library in one place. Read each game's rules, check bet limits, and use responsible-gambling tools if you want extra control over time and spend.",
    ],
  },
  // Slot strategy / RTP / RNG articles rendered as rich visual cards in SlotRtpRngCards.tsx
];

export const rightSidebarSeoArticles: SidebarSeoArticle[] = [
  {
    id: "licensing-trust-seo",
    heading: "Licensing, Trust & Fair Play",
    paragraphs: [
      "MrBean9 displays recognised licensing and certification partners so you can see how the platform aligns with regulatory expectations. Licensed operators are expected to follow know-your-customer (KYC) steps, anti-fraud measures, and advertising standards.",
      "Pair that with SSL-encrypted payments and transparent promotion rules, and you get a clearer picture of how your data and funds are handled. If anything is unclear, use live support before depositing.",
      "RNG-backed slots and table games are audited in line with supplier and jurisdictional expectations: the goal is unpredictable outcomes per round, not rigged streaks. RTP figures where published describe theoretical payback over huge sample sizes, not a promise for any single sitting.",
    ],
  },
  {
    id: "payments-withdrawals-seo",
    heading: "AUD Payments & Withdrawal Tips",
    paragraphs: [
      "Australian players benefit when casinos support PayID, Osko, major cards and familiar bank rails. MrBean9 lists supported methods so you can match what your everyday banking already uses.",
      "For smoother cashouts, complete verification early, use consistent account names, and check minimum and maximum limits per method. Planning ahead reduces delays when you want winnings sent back to your bank or wallet.",
    ],
  },
];
