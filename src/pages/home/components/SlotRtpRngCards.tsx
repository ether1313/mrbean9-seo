import { BarChart2, CheckCircle2, Lightbulb, RefreshCw, TrendingUp } from "lucide-react";

/* ─── RTP bar data ─── */
const rtpTiers = [
  { label: "Low", range: "< 95%", pct: 55, color: "bg-red-500/70" },
  { label: "Good", range: "95 – 97%", pct: 78, color: "bg-amber-400/80" },
  { label: "High", range: "97%+", pct: 100, color: "bg-emerald-400/90" },
];

/* ─── Volatility bands ─── */
const volatilityLevels = [
  {
    label: "Low",
    desc: "Frequent small wins — longer sessions on same budget.",
    dots: 1,
    accent: "text-emerald-400",
    border: "border-emerald-500/40",
  },
  {
    label: "Medium",
    desc: "Balanced hit rate — mix of dry spells and mid pays.",
    dots: 2,
    accent: "text-amber-400",
    border: "border-amber-500/40",
  },
  {
    label: "High",
    desc: "Bigger peak wins — longer gaps between hits.",
    dots: 3,
    accent: "text-red-400",
    border: "border-red-500/40",
  },
];

/* ─── Strategy tips ─── */
const strategyTips = [
  "Read the pay table before spinning — know wild, scatter and bonus rules.",
  "Pick a stake size that lets you sustain at least 50–100 spins.",
  "Bonuses extend play time but come with wagering terms — check them first.",
  "Don't raise bets to chase losses; RTP is a long-run average, not a promise.",
];

/* ─── RNG facts ─── */
const rngFacts = [
  "Every spin result is generated the moment you hit the button — prior spins have zero influence.",
  "There is no 'hot' or 'due' cycle in certified RNG software.",
  "Reputable operators use independently tested RNG systems aligned with their licensing requirements.",
];

/* ═══════════════════════════════════════════════════════════════════ */

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-[#5c4a3d] bg-[#1f1812] px-3 py-2.5">
      <span className="text-amber-400">{icon}</span>
      <h3 className="text-[11px] font-black uppercase tracking-wider text-white lg:text-xs xl:text-sm">
        {title}
      </h3>
    </div>
  );
}

/* ─── Card 1: RTP & Volatility ─── */
export function SlotStrategyCard() {
  return (
    <article className="overflow-hidden rounded-xl border border-[#5c4a3d] bg-[#2f241d]">
      <SectionHeader icon={<TrendingUp size={13} />} title="Slot Strategy, RTP & Volatility" />

      <div className="space-y-3.5 p-3">
        {/* RTP explanation */}
        <p className="text-[10px] leading-relaxed text-white/80 lg:text-xs">
          RTP (return to player) is a theoretical long-run average over millions of spins — not a
          session guarantee. Aim for games listing higher RTP where available.
        </p>

        {/* RTP bars */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-1.5">
            <BarChart2 size={11} className="text-amber-400 shrink-0" />
            <span className="text-[9px] font-black uppercase tracking-widest text-white/60 lg:text-[10px]">
              RTP Range Guide
            </span>
          </div>
          {rtpTiers.map((tier) => (
            <div key={tier.label} className="flex items-center gap-2">
              <span className="w-10 shrink-0 text-[9px] font-bold text-white/70 lg:text-[10px]">
                {tier.label}
              </span>
              <div className="relative flex-1 h-3 rounded-full bg-white/10 overflow-hidden">
                <div
                  className={`absolute inset-y-0 left-0 rounded-full ${tier.color}`}
                  style={{ width: `${tier.pct}%` }}
                />
              </div>
              <span className="w-16 shrink-0 text-right text-[9px] text-white/60 lg:text-[10px]">
                {tier.range}
              </span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#5c4a3d]" />

        {/* Volatility */}
        <div className="space-y-1.5">
          <span className="text-[9px] font-black uppercase tracking-widest text-white/60 lg:text-[10px]">
            Volatility (Variance)
          </span>
          <div className="flex gap-1.5">
            {volatilityLevels.map((v) => (
              <div
                key={v.label}
                className={`flex-1 rounded-lg border ${v.border} bg-white/5 p-2`}
              >
                {/* dot indicators */}
                <div className="flex gap-0.5 mb-1.5">
                  {[1, 2, 3].map((n) => (
                    <div
                      key={n}
                      className={`h-1.5 w-1.5 rounded-full ${
                        n <= v.dots ? v.accent.replace("text-", "bg-") : "bg-white/20"
                      }`}
                    />
                  ))}
                </div>
                <p className={`text-[9px] font-black ${v.accent} lg:text-[10px]`}>{v.label}</p>
                <p className="mt-0.5 text-[9px] leading-snug text-white/60">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#5c4a3d]" />

        {/* Strategy tips */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-1.5">
            <Lightbulb size={11} className="text-amber-400 shrink-0" />
            <span className="text-[9px] font-black uppercase tracking-widest text-white/60 lg:text-[10px]">
              Practical Tips
            </span>
          </div>
          <ol className="space-y-1.5">
            {strategyTips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-[9px] font-black text-amber-400">
                  {i + 1}
                </span>
                <p className="text-[9px] leading-relaxed text-white/80 lg:text-[10px]">{tip}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </article>
  );
}

/* ─── Card 2: RNG ─── */
export function RngExplainerCard() {
  return (
    <article className="overflow-hidden rounded-xl border border-[#5c4a3d] bg-[#2f241d]">
      <SectionHeader icon={<RefreshCw size={13} />} title="RNG & Independent Spins" />

      <div className="space-y-3 p-3">
        {/* Visual callout */}
        <div className="flex items-center gap-3 rounded-lg border border-amber-500/25 bg-amber-500/10 px-3 py-2.5">
          <RefreshCw size={22} className="shrink-0 text-amber-400 opacity-80" />
          <div>
            <p className="text-[10px] font-black text-amber-300 lg:text-xs">Each spin is independent.</p>
            <p className="text-[9px] text-white/60 leading-snug lg:text-[10px]">
              Past results have zero effect on the next outcome.
            </p>
          </div>
        </div>

        {/* Spin diagram: 3 boxes */}
        <div className="flex items-center gap-1 justify-center">
          {["Spin 1", "Spin 2", "Spin 3"].map((label, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="flex h-8 w-14 items-center justify-center rounded-md border border-[#5c4a3d] bg-[#1f1812] text-[9px] font-black text-white/70">
                {label}
              </div>
              {i < 2 && (
                <div className="hidden sm:flex flex-col items-center" aria-hidden="true">
                  <span className="text-[8px] text-white/30 mt-[-2px]">≠</span>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-[9px] text-white/40 leading-snug lg:text-[10px]">
          Each spin draws a fresh random result — no connection between rounds.
        </p>

        <div className="border-t border-[#5c4a3d]" />

        {/* Facts */}
        <ul className="space-y-2">
          {rngFacts.map((fact, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle2 size={12} className="mt-0.5 shrink-0 text-emerald-400" />
              <p className="text-[9px] leading-relaxed text-white/80 lg:text-[10px]">{fact}</p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
