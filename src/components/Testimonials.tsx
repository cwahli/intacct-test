import { useState } from "react";
import { Quote, ArrowRight, Star, TrendingUp, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState(0);

  const stories = [
    {
      company: "Lytx Inc.",
      sector: "SaaS & Software Scale",
      logo: "Lytx.",
      statValue: "3x Growth",
      statLabel: "Revenue scaled without increasing finance staff size",
      quote: "Sage Intacct took our subscription contract billing and ASC 606 revenue recognition from a painful spreadsheet process to a single, audit-ready push button. We closed our books in 2 days and successfully scaled 3x without hiring additional accounting personnel.",
      author: "Sarah Jenkins",
      role: "VP of Finance",
      bgGradient: "from-blue-650 to-blue-800"
    },
    {
      company: "Room to Read",
      sector: "Global NGO / Humanitarian",
      logo: "Room to Read",
      statValue: "400 Hours",
      statLabel: "Saved annually on multi-currency fund tracking",
      quote: "Managing funding across dozens of restricted global grants and multiple currency ledgers was an administrative challenge. Sage Intacct automated our allocations and FASB statements, giving our board and donors absolute stewardship transparency.",
      author: "Marcus Thornton",
      role: "Chief Financial Officer",
      bgGradient: "from-amber-600 to-amber-800"
    },
    {
      company: "Bay Area Care Clinics",
      sector: "Multi-Entity Healthcare Network",
      logo: "Bay Area Care",
      statValue: "28 Clinics",
      statLabel: "Unified under continuous HIPAA consolidation",
      quote: "As we grew from 4 clinics to 28, manual intercompany settlement was stalling our operations. Sage Intacct consolidated our locations instantly, secured BAA protocols for HIPAA, and delivered clinic-by-clinic operating margins in real time.",
      author: "Dr. Evelyn Vance",
      role: "Executive Director",
      bgGradient: "from-emerald-600 to-emerald-800"
    }
  ];

  const current = stories[activeTab];

  return (
    <section id="sage-testimonials" className="py-24 bg-gray-950 text-white overflow-hidden relative">
      {/* Background radial effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-bold text-sage-600 uppercase tracking-widest bg-sage-950 border border-sage-900/30 px-3.5 py-1.5 rounded-full inline-block">
            Customer Success Stories
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-none text-white">
            Loved by Finance Teams, <br />
            Preferred by Auditors
          </h2>
          <p className="text-gray-400 max-w-xl">
            See how high-growth startups, multinational corporations, and leading nonprofit organizations leverage Sage Intacct to make smarter, data-driven financial decisions.
          </p>
        </div>

        {/* Story Tab Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Logo Selector list - Left */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            {stories.map((story, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`p-6 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden group ${
                  activeTab === idx
                    ? "bg-slate-900 border-sage-600/50 shadow-lg shadow-sage-600/5"
                    : "bg-slate-900/40 border-slate-800 hover:bg-slate-900/80 hover:border-slate-700"
                }`}
              >
                {/* Accent line */}
                {activeTab === idx && (
                  <div className="absolute left-0 top-0 h-full w-1.5 bg-sage-600" />
                )}
                
                <span className="text-xs font-semibold text-sage-600 block mb-1">{story.sector}</span>
                <span className="text-lg font-bold text-white block tracking-tight">{story.company}</span>
                <span className="text-xs text-gray-400 mt-2 block leading-snug font-mono group-hover:text-sage-300">
                  {story.statValue} Key Improvement
                </span>
              </button>
            ))}
          </div>

          {/* Testimonial Active Card - Right */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
              >
                {/* Quotes Vector graphic */}
                <Quote className="absolute -top-6 -left-6 w-32 h-32 text-slate-850 opacity-20 pointer-events-none rotate-18" />

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
                  
                  {/* Testimonial Text - Left Col */}
                  <div className="md:col-span-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      {/* Rating stars */}
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-base md:text-lg text-gray-200 leading-relaxed italic">
                        "{current.quote}"
                      </p>
                    </div>

                    <div className="border-t border-slate-800 pt-5">
                      <h4 className="text-sm font-bold text-white leading-tight">{current.author}</h4>
                      <p className="text-xs text-sage-600 mt-0.5">{current.role}, <span className="text-gray-400 font-semibold">{current.company}</span></p>
                    </div>
                  </div>

                  {/* Impact Statistics Card - Right Col */}
                  <div className="md:col-span-4 bg-sage-950 border border-sage-900/30 rounded-2xl p-6 flex flex-col justify-center text-center space-y-3">
                    <div className="bg-sage-900/20 w-11 h-11 rounded-xl flex items-center justify-center mx-auto">
                      <TrendingUp className="w-5 h-5 text-sage-600" />
                    </div>
                    <span className="block font-display text-3xl md:text-4xl font-extrabold text-white">
                      {current.statValue}
                    </span>
                    <span className="block text-[11px] text-charcoal-300 leading-snug">
                      {current.statLabel}
                    </span>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
