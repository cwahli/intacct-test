import { Award, Trophy, Star, ShieldCheck } from "lucide-react";

export default function TrustCredibility() {
  const partners = [
    {
      icon: (
        <svg className="w-12 h-12 text-gray-400" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="24" cy="24" r="20" className="stroke-sage-600/30 fill-sage-50/20" />
          <path d="M16 20h16v12H16z" className="stroke-sage-600" />
          <path d="M20 20v-4a4 4 0 018 0v4" className="stroke-sage-600" />
          <circle cx="24" cy="26" r="2" className="fill-sage-600 stroke-none" />
        </svg>
      ),
      title: "AICPA Preferred",
      description: "The first and only preferred provider of financial applications by the AICPA."
    },
    {
      icon: (
        <div className="relative">
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] font-bold px-1 rounded-full scale-90">#1</div>
          <svg className="w-12 h-12 text-gray-400" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="24" cy="24" r="20" className="stroke-red-600/30 fill-red-50/20" />
            <path d="M16 16l8 16 8-16-8 4-8-4z" className="stroke-red-600" />
          </svg>
        </div>
      ),
      title: "G2 Grid Leader",
      description: "Rated #1 in Customer Satisfaction for Midmarket ERP and Cloud Financials."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-gray-400" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="24" cy="24" r="20" className="stroke-blue-600/30 fill-blue-50/20" />
          <path d="M16 28V16h16v12l-8-4-8 4z" className="stroke-blue-600" />
        </svg>
      ),
      title: "IDC MarketScape",
      description: "Recognized as a Leader in worldwide SaaS and Cloud-enabled finance applications."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-gray-400" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="24" cy="24" r="20" className="stroke-amber-600/30 fill-amber-50/20" />
          <path d="M24 12l3.09 6.26L34 19.27l-5 4.87 1.18 6.88L24 27.77l-6.18 3.25L19 24.14l-5-4.87 6.91-1.01L24 12z" className="stroke-amber-500 fill-amber-100" />
        </svg>
      ),
      title: "TrustRadius Top Rated",
      description: "Consistently chosen as a premier corporate accounting and planning software suite."
    }
  ];

  const stats = [
    { num: "79%", desc: "Average Close Time Reduction" },
    { num: "400h", desc: "Saved Annually on Consolidations" },
    { num: "250%", desc: "Average ROI Within 1 Year" },
    { num: "98%", desc: "Customer Retention & Loyalty Rate" }
  ];

  return (
    <section id="sage-trust" className="py-16 border-y border-gray-100 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Logos & Trust Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {partners.map((p, idx) => (
            <div key={idx} className="flex space-x-4 items-start p-5 bg-white rounded-2xl border border-gray-100 shadow-sm shadow-gray-50 hover:shadow-md transition-shadow">
              <div className="shrink-0">{p.icon}</div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-gray-900 font-display">{p.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Big Statistics Ribbon */}
        <div className="bg-charcoal-900 rounded-3xl p-10 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-charcoal-950/40 border border-charcoal-800">
          {/* Graphic Background Accents */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sage-600/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-sage-700/10 rounded-full blur-2xl" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            {/* Banner Left Title */}
            <div className="max-w-md space-y-3">
              <h3 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight leading-tight text-white">
                Empowered Financial Teams Drive Accelerated Growth.
              </h3>
              <p className="text-sm text-charcoal-300">
                Companies using Sage Business Cloud report profound improvements in close cycles, reporting compliance, and auditing speed.
              </p>
            </div>

            {/* Stats figures */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 divide-x divide-charcoal-800 flex-1">
              {stats.map((s, idx) => (
                <div key={idx} className={`pl-6 ${idx === 0 ? "border-none sm:pl-0" : ""}`}>
                  <span className="block font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-sage-600">
                    {s.num}
                  </span>
                  <span className="block text-xs text-charcoal-300 mt-1 font-medium leading-tight">
                    {s.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
