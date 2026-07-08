import { useState, useRef } from "react";
import { INDUSTRIES_DATA } from "../data";
import { IndustryInfo } from "../types";
import { Check, ShieldAlert, ArrowUpRight, TrendingUp, DollarSign, Calendar, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ProductTourHubProps {
  onScrollToForm: () => void;
  selectedIndustryId: string;
  onSelectIndustry: (id: string) => void;
}

export default function ProductTourHub({ onScrollToForm, selectedIndustryId, onSelectIndustry }: ProductTourHubProps) {
  const activeIndustry = INDUSTRIES_DATA.find((ind) => ind.id === selectedIndustryId) || INDUSTRIES_DATA[0];
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="sage-tour-hub" className="py-24 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Text */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-sage-900 uppercase tracking-widest bg-sage-50 px-3.5 py-1.5 rounded-full inline-block">
            Tailored Industry Solutions
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-charcoal-900 tracking-tight leading-none">
            Explore Your Tailored <br className="hidden sm:inline" />
            Product Tour Dashboard
          </h2>
          <p className="text-gray-600">
            Select your industry sector below to see how Sage Intacct organizes multi-entity ledgers, simplifies dimensional reporting, and accelerates close cycles with customized dashboards.
          </p>
        </div>

        {/* Tab Selection Row */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 p-1.5 bg-charcoal-50 border border-charcoal-100 rounded-2xl max-w-5xl mx-auto">
          {INDUSTRIES_DATA.map((ind) => (
            <button
              key={ind.id}
              onClick={() => onSelectIndustry(ind.id)}
              className={`flex-1 min-w-[150px] text-center px-5 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${
                activeIndustry.id === ind.id
                  ? "bg-sage-600 text-charcoal-900 font-extrabold shadow-lg shadow-sage-600/20"
                  : "text-charcoal-600 hover:text-sage-600 hover:bg-white"
              }`}
            >
              {ind.name}
            </button>
          ))}
        </div>

        {/* Dynamic Industry Presentation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Left Info Column */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono text-sage-900 bg-sage-50 px-2.5 py-1 rounded-md font-bold">
                  SAGE BUSINESS CLOUD // {activeIndustry.name.toUpperCase()}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-extrabold text-charcoal-900 tracking-tight leading-tight">
                  {activeIndustry.tagline}
                </h3>
                <p className="text-charcoal-600 text-sm leading-relaxed">
                  {activeIndustry.description}
                </p>
              </div>

              {/* Core Features list */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase text-charcoal-400 tracking-wider">Key Module Features</h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {activeIndustry.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-xs text-charcoal-700">
                      <span className="p-0.5 bg-sage-100 text-sage-900 rounded mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Customer Testimonial block */}
              <div className="bg-sage-50/50 border border-sage-100/60 p-5 rounded-2xl relative">
                <span className="absolute -top-3 -left-3 text-5xl text-sage-600/20 font-serif leading-none select-none">“</span>
                <p className="text-xs italic text-charcoal-600 relative z-10 leading-relaxed mb-4">
                  {activeIndustry.quote}
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-full bg-sage-800 text-white font-bold flex items-center justify-center text-xs shadow">
                    {activeIndustry.author.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-charcoal-900 leading-tight">{activeIndustry.author}</h5>
                    <p className="text-[10px] text-charcoal-500 leading-none">{activeIndustry.role}, {activeIndustry.company}</p>
                  </div>
                </div>
              </div>

              {/* CTA Action */}
              <button
                onClick={onScrollToForm}
                className="bg-charcoal-900 text-white font-bold text-sm px-6 py-3.5 rounded-full hover:bg-sage-600 hover:text-charcoal-900 transition-all text-center flex items-center justify-center space-x-2 w-fit shadow-lg hover:shadow-sage-600/20 group"
              >
                <span>Request Custom {activeIndustry.name} Demo</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Right Interactive Live Dashboard Rendering */}
            <div className="lg:col-span-7">
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl shadow-charcoal-100 overflow-hidden text-gray-300 select-none">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 rounded-md bg-sage-600 flex items-center justify-center text-[10px] font-bold text-charcoal-900">s</div>
                    <span className="text-xs font-semibold text-white tracking-wide">{activeIndustry.name} Portal v1.2</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[9px] font-mono bg-sage-950 text-sage-600 border border-sage-900/30 px-2 py-0.5 rounded uppercase font-bold">
                      Live Environment
                    </span>
                  </div>
                </div>

                {/* KPI metrics cards based on industry */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  {activeIndustry.metrics.map((met, idx) => (
                    <div key={idx} className="bg-slate-950 border border-slate-800/80 p-2.5 rounded-xl">
                      <span className="text-[8px] font-semibold text-slate-500 block uppercase truncate leading-snug">{met.label}</span>
                      <span className="text-base font-extrabold text-white block mt-0.5">{met.value}</span>
                      <span className="text-[9px] font-mono text-sage-600 font-medium block mt-0.5 leading-none">{met.change}</span>
                    </div>
                  ))}
                </div>

                {/* Multi-Dimensional Ledger Breakdown Panel */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch mb-4">
                  
                  {/* Left-side Ledger Chart List */}
                  <div className="md:col-span-6 bg-slate-950 border border-slate-800/80 p-3.5 rounded-xl flex flex-col justify-between">
                    <div>
                      <h5 className="text-[10px] font-bold text-white tracking-wider uppercase mb-2 flex items-center space-x-1.5">
                        <TrendingUp className="w-3.5 h-3.5 text-sage-600" />
                        <span>Revenue Distribution</span>
                      </h5>
                      <p className="text-[9px] text-slate-400 leading-snug mb-3">
                        Analyzing multidimensional accounts by subsegment categories.
                      </p>
                    </div>

                    {/* Chart Bars */}
                    <div className="space-y-2.5">
                      {activeIndustry.charts.map((bar, idx) => {
                        const values = activeIndustry.charts.map(c => c.value);
                        const maxVal = Math.max(...values);
                        const pct = (bar.value / maxVal) * 100;
                        return (
                          <div key={idx} className="space-y-1">
                            <div className="flex justify-between text-[9px] font-mono text-slate-400">
                              <span className="font-semibold text-slate-300">{bar.label}</span>
                              <span className="text-white">{bar.value}M</span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${pct}%` }}
                                transition={{ duration: 0.5 }}
                                className="h-full bg-sage-600 rounded-full"
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right-side Live Ledger Feed */}
                  <div className="md:col-span-6 bg-slate-950 border border-slate-800/80 p-3.5 rounded-xl flex flex-col justify-between">
                    <div>
                      <h5 className="text-[10px] font-bold text-white tracking-wider uppercase mb-2 flex items-center space-x-1.5">
                        <Calendar className="w-3.5 h-3.5 text-sage-600" />
                        <span>Journal Audit Stream</span>
                      </h5>
                      <p className="text-[9px] text-slate-400 leading-snug mb-3.5">
                        Consolidated ledger inputs posting automatically to global ledger.
                      </p>
                    </div>

                    <div className="space-y-2 text-[9px] font-mono divide-y divide-slate-900">
                      {activeIndustry.id === "saas" && (
                        <>
                          <div className="py-1.5 flex justify-between">
                            <span className="text-slate-400">ARR_RUN_#923 [Contract A]</span>
                            <span className="text-sage-600 font-bold">$12,400 Recurred</span>
                          </div>
                          <div className="py-1.5 flex justify-between">
                            <span className="text-slate-400">ASC_606 [Deferred Post]</span>
                            <span className="text-sage-600 font-bold">$42,500 compliance</span>
                          </div>
                          <div className="py-1.5 flex justify-between">
                            <span className="text-slate-400">CHURN_TRIG [Contract Expiry]</span>
                            <span className="text-slate-300 font-bold">0.0% Churn Rate</span>
                          </div>
                        </>
                      )}
                      {activeIndustry.id === "nonprofit" && (
                        <>
                          <div className="py-1.5 flex justify-between">
                            <span className="text-slate-400">GRANT_POST_#302 [USAID restricted]</span>
                            <span className="text-sage-600 font-bold">$84,000 stewardship</span>
                          </div>
                          <div className="py-1.5 flex justify-between">
                            <span className="text-slate-400">ALLOC_EXEC [Indirect cost rate]</span>
                            <span className="text-sage-600 font-bold">$12,400 completed</span>
                          </div>
                          <div className="py-1.5 flex justify-between">
                            <span className="text-slate-400">FASB_STATUS [958 balance sheet]</span>
                            <span className="text-sage-600 font-bold">100% Compliant</span>
                          </div>
                        </>
                      )}
                      {activeIndustry.id === "healthcare" && (
                        <>
                          <div className="py-1.5 flex justify-between">
                            <span className="text-slate-400">CLINIC_CONSOL [HQ consolidation]</span>
                            <span className="text-sage-600 font-bold">Consolidated (USD)</span>
                          </div>
                          <div className="py-1.5 flex justify-between">
                            <span className="text-slate-400">INTER_COMP [Settle: NW → NE]</span>
                            <span className="text-sage-600 font-bold">$14,200 settled</span>
                          </div>
                          <div className="py-1.5 flex justify-between">
                            <span className="text-slate-400">HIPAA_LOG [Audit Trail BAA]</span>
                            <span className="text-sage-600 font-bold">Secure Access Pass</span>
                          </div>
                        </>
                      )}
                      {activeIndustry.id === "professional-services" && (
                        <>
                          <div className="py-1.5 flex justify-between">
                            <span className="text-slate-400">TIME_POST [Engineering allocation]</span>
                            <span className="text-sage-600 font-bold">42 hours approved</span>
                          </div>
                          <div className="py-1.5 flex justify-between">
                            <span className="text-slate-400">WIP_BILL [Project milestones]</span>
                            <span className="text-sage-600 font-bold">$18,500 invoiced</span>
                          </div>
                          <div className="py-1.5 flex justify-between">
                            <span className="text-slate-400">UTIL_CALC [Consultant load]</span>
                            <span className="text-sage-600 font-bold">76.4% utilization</span>
                          </div>
                        </>
                      )}
                      {activeIndustry.id === "financial-services" && (
                        <>
                          <div className="py-1.5 flex justify-between">
                            <span className="text-slate-400">FX_CONVERT [GBP → USD pool]</span>
                            <span className="text-sage-600 font-bold">Live currency sync</span>
                          </div>
                          <div className="py-1.5 flex justify-between">
                            <span className="text-slate-400">CONSOL_TRIG [42 legal funds]</span>
                            <span className="text-sage-600 font-bold">2.4 min completed</span>
                          </div>
                          <div className="py-1.5 flex justify-between">
                            <span className="text-slate-400">AUDIT_LOG_#SOC2 [PE portfolio]</span>
                            <span className="text-sage-600 font-bold">SOC 2 compliant</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                </div>

                {/* Subheading / Interactive Highlight */}
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-sage-600 shrink-0" />
                    <span className="text-[10px] text-slate-300">
                      Dimensional GL allows tracking financial performance without complex linear accounts.
                    </span>
                  </div>
                  <button onClick={onScrollToForm} className="text-[10px] text-sage-600 hover:underline font-semibold shrink-0">
                    See Modules
                  </button>
                </div>

              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
