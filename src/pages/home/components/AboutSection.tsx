import { stats } from "../../../mocks/casinoData";
import { MrBean9Word, renderWithMrBean9 } from "@/utils/renderMrBean9";

export default function AboutSection() {
  return (
    <section className="bg-[#120500] py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B0000] rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-brand" />
              <span className="text-white text-sm font-bold uppercase tracking-widest">Australia's #1 Casino</span>
              <div className="w-8 h-0.5 bg-brand" />
            </div>
            <h2 className="font-fredoka text-5xl font-black text-white mb-6 leading-tight">
              About <MrBean9Word />
              <br />
              Online Casino
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              {renderWithMrBean9("MrBean9")} is Australia&apos;s most beloved online casino platform, bringing the fun and charm of everyone&apos;s favourite cartoon character to the world of online gaming. Founded with a mission to deliver world-class entertainment, we offer over 1,500 casino games from top providers including JILI, Boongo, PG Soft, and Evolution.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              From thrilling slot machines to live casino tables with real dealers, {renderWithMrBean9("MrBean9")} ensures a safe, fair, and unforgettable gaming experience with lightning-fast withdrawals and 24/7 customer support.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-brand/10 border border-brand/30 rounded-full px-4 py-2">
                <i className="ri-shield-check-line text-white" />
                <span className="text-[#F5E6C8] text-sm font-semibold">Licensed & Regulated</span>
              </div>
              <div className="flex items-center gap-2 bg-brand/10 border border-brand/30 rounded-full px-4 py-2">
                <i className="ri-secure-payment-line text-white" />
                <span className="text-[#F5E6C8] text-sm font-semibold">Secure Payments</span>
              </div>
              <div className="flex items-center gap-2 bg-brand/10 border border-brand/30 rounded-full px-4 py-2">
                <i className="ri-customer-service-2-line text-white" />
                <span className="text-[#F5E6C8] text-sm font-semibold">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-gradient-to-br from-[#2d1200] to-brand-dark border border-brand/20 rounded-2xl p-6 text-center hover:border-brand/60 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-brand/10 rounded-full mx-auto mb-4 group-hover:bg-brand/20 transition-colors">
                  <i className={`${stat.icon} text-white text-2xl`} />
                </div>
                <div className="font-fredoka text-4xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-stone-600 text-sm font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mr Bean Character Banner */}
        <div className="mt-16 relative rounded-3xl overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=mr%20bean%20cartoon%20character%20sitting%20at%20computer%20playing%20online%20casino%20games%20excited%20happy%20surrounded%20by%20casino%20chips%20cards%20coins%20vibrant%20warm%20brown%20gold%20tones%20colorful%20festive%20atmosphere%20wide%20banner%20format%20funny%20cheerful%20character%20illustration&width=1200&height=280&seq=about-banner&orientation=landscape"
            alt="MrBean9 Casino - Play and Win"
            className="w-full h-[200px] object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand/90 via-brand/45 to-transparent flex items-center px-12">
            <div>
              <h3 className="font-fredoka text-4xl text-white font-black mb-2">Ready to Play?</h3>
              <p className="text-stone-600 text-lg">Join 250,000+ Australian players winning big every day!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
