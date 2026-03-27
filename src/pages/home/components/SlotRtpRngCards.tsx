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
    desc: "Frequent small wins, longer sessions on same budget.",
    dots: 1,
    accent: "text-white",
    border: "border-emerald-500/40",
  },
  {
    label: "Medium",
    desc: "Balanced hit rate, mix of dry spells and mid pays.",
    dots: 2,
    accent: "text-white",
    border: "border-amber-500/40",
  },
  {
    label: "High",
    desc: "Bigger peak wins, longer gaps between hits.",
    dots: 3,
    accent: "text-white",
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
    <div className="flex items-center gap-2 border-b border-[#5c4a3d] bg-[#1f1812] px-3 py-2.5 lg:gap-2.5 lg:px-3.5 lg:py-3">
      <span className="text-amber-400 [&_svg]:h-[14px] [&_svg]:w-[14px] xl:[&_svg]:h-4 xl:[&_svg]:w-4">{icon}</span>
      <h3 className="text-base font-black uppercase text-white sm:text-base md:text-base">{title}</h3>
    </div>
  );
}

/* ─── Card 1: RTP & Volatility ─── */
export function SlotStrategyCard() {
  return (
    <article className="overflow-hidden rounded-xl border border-[#5c4a3d] bg-[#2f241d]">
      <SectionHeader icon={<TrendingUp size={14} />} title="Slot Strategy, RTP & Volatility" />

      <div className="space-y-3.5 p-3 lg:p-3.5 lg:space-y-4">
        {/* RTP explanation */}
        <p className="ux-desc text-white/85">
          RTP (return to player) is a theoretical long-run average over millions of spins — not a
          session guarantee. Aim for games listing higher RTP where available.
        </p>

        {/* RTP bars */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-1.5">
            <BarChart2 className="h-3.5 w-3.5 shrink-0 text-amber-400 xl:h-4 xl:w-4" />
            <span className="text-xs font-black uppercase tracking-widest text-white/65 xl:text-sm">
              RTP Range Guide
            </span>
          </div>
          {rtpTiers.map((tier) => (
            <div key={tier.label} className="flex items-center gap-2">
              <span className="w-11 shrink-0 text-xs font-bold text-white/75 xl:text-sm">{tier.label}</span>
              <div className="relative h-3 flex-1 overflow-hidden rounded-full bg-white/10 xl:h-3.5">
                <div
                  className={`absolute inset-y-0 left-0 rounded-full ${tier.color}`}
                  style={{ width: `${tier.pct}%` }}
                />
              </div>
              <span className="w-[4.25rem] shrink-0 text-right text-xs text-white/65 xl:text-sm">{tier.range}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#5c4a3d]" />

        {/* Volatility: row1 = dots | label, row2 = description (aligned under label) */}
        <div className="space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-white/65 xl:text-sm">
            Volatility (Variance)
          </span>
          <div className="flex flex-col gap-2">
            {volatilityLevels.map((v) => (
              <div
                key={v.label}
                className={`grid grid-cols-[auto_minmax(0,1fr)] gap-x-2 gap-y-1 rounded-lg border ${v.border} bg-white/5 px-2.5 py-2 lg:gap-x-2.5 lg:px-3 lg:py-2.5 xl:gap-x-3`}
              >
                <div className="flex items-center gap-0.5 self-center" aria-hidden="true">
                  {[1, 2, 3].map((n) => (
                    <div
                      key={n}
                      className={`h-2 w-2 rounded-full ${
                        n <= v.dots ? v.accent.replace("text-", "bg-") : "bg-white/20"
                      }`}
                    />
                  ))}
                </div>
                <p className={`self-center text-xs font-black xl:text-sm ${v.accent}`}>{v.label}</p>
                <p className="col-start-2 min-w-0 text-[10px] leading-snug text-white/70 sm:text-xs md:text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#5c4a3d]" />

        {/* Strategy tips */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-1.5">
            <Lightbulb className="h-3.5 w-3.5 shrink-0 text-amber-400 xl:h-4 xl:w-4" />
            <span className="text-xs font-black uppercase tracking-widest text-white/65 xl:text-sm">
              Practical Tips
            </span>
          </div>
          <ol className="space-y-2">
            {strategyTips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-[10px] font-black text-amber-400 xl:h-6 xl:w-6 xl:text-xs">
                  {i + 1}
                </span>
                <p className="text-[10px] leading-relaxed text-white/85 sm:text-xs md:text-sm">{tip}</p>
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
      <SectionHeader icon={<RefreshCw size={14} />} title="RNG & Independent Spins" />

      <div className="space-y-3 p-3 lg:p-3.5 lg:space-y-4">
        {/* Visual callout */}
        <div className="flex items-center gap-3 rounded-lg border border-amber-500/25 bg-amber-500/10 px-3 py-2.5 lg:px-3.5">
          <div>
            <p className="text-base font-black text-amber-300 sm:text-lg md:text-lg">Each spin is independent.</p>
            <p className="text-[10px] leading-snug text-white/65 sm:text-xs md:text-sm">
              Past results have zero effect on the next outcome.
            </p>
          </div>
        </div>

        {/* Spin diagram: 3 boxes */}
        <div className="flex items-center justify-center gap-1 xl:gap-2">
          {["Spin 1", "Spin 2", "Spin 3"].map((label, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="flex h-9 w-[3.75rem] items-center justify-center rounded-md border border-[#5c4a3d] bg-[#1f1812] text-xs font-black text-white/75 xl:h-10 xl:w-16 xl:text-sm">
                {label}
              </div>
              {i < 2 && (
                <div className="hidden sm:flex flex-col items-center" aria-hidden="true">
                  <span className="mt-[-2px] text-[10px] text-white/30 xl:text-xs">≠</span>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-[10px] leading-snug text-white/50 sm:text-xs md:text-sm">
          Each spin draws a fresh random result — no connection between rounds.
        </p>

        <div className="border-t border-[#5c4a3d]" />

        {/* Facts */}
        <ul className="space-y-2.5">
          {rngFacts.map((fact, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400 xl:h-4 xl:w-4" />
              <p className="text-[10px] leading-relaxed text-white/85 sm:text-xs md:text-sm">{fact}</p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
