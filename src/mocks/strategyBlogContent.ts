/** Long-form strategy guide copy for /guides/strategy (SEO / blog-style). */
export interface StrategySection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export const strategyPageMeta = {
  kicker: "Guides & education",
  title: "Online Pokies & Slots Strategy Guide",
  subtitle:
    "A practical, myth-busting overview of how online pokies work in Australia, what “strategy” can and cannot do, and how to play with clearer expectations.",
  updatedLabel: "Updated for Australian players",
};

export const strategySections: StrategySection[] = [
  {
    id: "how-to-play",
    title: "How to play online pokies (step by step)",
    paragraphs: [
      "Online pokies (slots) are simple on the surface: you choose a game, set your stake per spin, and press spin. Behind that, each title has its own pay table, symbol values, paylines or ways-to-win, and special features such as wilds, scatters, free spins, or bonus rounds.",
      "Before you play for real money, open the in-game help or information panel. There you will see minimum and maximum bets, how wins are calculated, and how features trigger. At MrBean9 you can browse many titles in one place—compare bet limits and mechanics before you commit.",
    ],
    bullets: [
      "Pick a game and read the pay table and rules.",
      "Set coin size or total bet per spin to match your session budget.",
      "Understand whether the game uses fixed paylines, ways, or cluster pays.",
      "Note feature buy or ante-bet options if present—they change cost per round.",
    ],
  },
  {
    id: "rtp-house-edge",
    title: "RTP and house edge explained",
    paragraphs: [
      "RTP (return to player) is usually published as a percentage. It describes the theoretical long-term payback of a game across an enormous number of spins—often simulated or measured by testing labs—not what you will get back in one sitting.",
      "If a pokie lists 96% RTP, it does not mean you receive $96 for every $100 wagered in an hour. Short-term variance dominates: you can finish well above or below that average. The complement of RTP is roughly the house edge over the long run, but neither number predicts your next spin.",
    ],
  },
  {
    id: "volatility",
    title: "Volatility (variance): low, medium, and high",
    paragraphs: [
      "Volatility describes the shape of risk in a game: how often wins tend to occur and how large typical swings can be. Low-volatility pokies often produce smaller, more frequent hits; high-volatility games may go longer between wins but can produce larger peaks when features or rare combinations land.",
      "There is no universal “best” volatility—only what fits your bankroll and how long you want a session to last on average. Many players use lower stakes on high-volatility titles so a dry spell does not end the session immediately.",
    ],
  },
  {
    id: "bankroll-session",
    title: "Bankroll and session planning",
    paragraphs: [
      "The part of pokies play you control is money and time. A common approach is to decide a loss limit and a time limit before you start, and to size each spin as a small fraction of that budget so normal variance does not wipe the balance in a handful of rounds.",
      "Avoid increasing bet size to “recover” losses. RTP and RNG do not owe you a correction after a losing streak; each spin is independent. Chasing losses is one of the fastest ways to exceed a comfortable limit.",
    ],
    bullets: [
      "Decide a fixed entertainment budget in AUD for the session.",
      "Use smaller bets on unfamiliar or high-volatility games.",
      "Take breaks; long continuous play increases impulsive decisions.",
    ],
  },
  {
    id: "paylines-features",
    title: "Paylines, bet multipliers, and feature buys",
    paragraphs: [
      "Some games let you adjust active lines or use bet multipliers that change how features behave. Max-bet buttons can jump your stake sharply—confirm the total cost per spin before you use them.",
      "Feature-buy or bonus-buy options pay upfront for immediate entry to a bonus round where the rules allow it. They increase variance: you can see big swings in fewer spins. Always read the stated cost and rules in the game sheet.",
    ],
  },
  {
    id: "progressive-jackpots",
    title: "Progressive and fixed jackpots",
    paragraphs: [
      "Progressive jackpots grow from contributions across many players until someone wins according to the game rules. The headline prize can be attractive, but base-game RTP and hit frequency may differ from non-progressive titles—check the help file for how the jackpot affects overall maths.",
      "Fixed jackpots still depend on rare outcomes. No pattern of past spins makes a jackpot “due”; certified games use RNGs that do not schedule wins.",
    ],
  },
  {
    id: "myths-rng",
    title: "Myths: hot machines, cold streaks, and timing",
    paragraphs: [
      "Licensed online pokies use a random number generator (RNG) so each spin is an independent trial. The game does not remember that you almost hit a bonus or that someone else just won the jackpot. Outcomes are not balanced to “catch up” after a big payout.",
      "Strategies that claim to predict when a game will pay—based on time of day, number of spins, or previous results on the same session—confuse entertainment with a system. The useful approach is to treat each spin as paid entertainment with a known cost per round.",
    ],
  },
  {
    id: "what-works",
    title: "What actually helps (discipline, not prediction)",
    paragraphs: [
      "You cannot legally or practically change the RNG outcome of a certified game from the player side. What you can do is choose games whose rules and volatility you understand, keep stakes proportionate to your budget, and use responsible-gambling tools where offered.",
      "Bonuses and promotions can extend play time but come with terms—wagering requirements, game weighting, and time limits. Reading those terms is part of a smart approach, not a way to “beat” the casino mathematically in the long run.",
    ],
    bullets: [
      "Compare RTP and volatility where information is available.",
      "Read bonus terms before opting in.",
      "Use deposit limits, reality checks, or self-exclusion if you need them.",
    ],
  },
  {
    id: "responsible-gambling",
    title: "Responsible gambling and when to stop",
    paragraphs: [
      "Gambling should be entertainment, not a way to solve money problems. If play stops feeling fun, or you hide behaviour from people you trust, consider pausing and seeking support. In Australia, resources such as Gambling Help Online and state-based services offer confidential help.",
      "MrBean9 encourages players to stay within personal limits. Set boundaries before you play, and step away if emotions—not a plan—are driving bet sizes.",
    ],
  },
  {
    id: "mrbean9",
    title: "Exploring games at MrBean9",
    paragraphs: [
      "MrBean9 brings together popular pokies, table-style games, and promotions aimed at Australian players using AUD-friendly options. Use this guide alongside each game’s own rules: the combination of clear information and disciplined play is the closest thing to a sustainable “strategy” online pokies can offer.",
    ],
  },
];
