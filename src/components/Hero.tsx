import React, { useState } from "react";
import { 
  ArrowRight, 
  Play, 
  CheckCircle, 
  HelpCircle, 
  Layers, 
  Globe, 
  Landmark, 
  Sparkles,
  Check,
  RefreshCw,
  ClipboardList
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import JournalEntries from "../Product UI/journal_entries";

interface HeroProps {
  onScrollToTour: () => void;
  onScrollToForm: () => void;
  onSelectIndustry: (id: string) => void;
}

export default function Hero({ onScrollToTour, onScrollToForm, onSelectIndustry }: HeroProps) {
  const [activeOutlier, setActiveOutlier] = useState<string | null>(null);
  const [rowStatus, setRowStatus] = useState<Record<string, "flagged" | "approved">>({
    M: "flagged",
    C: "flagged",
    A: "flagged",
  });
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleIndustryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (val) {
      onSelectIndustry(val);
      onScrollToTour();
    }
  };

  return (
    <section id="sage-hero" className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-b from-[#F2F5F6] via-white to-white overflow-hidden">
      {/* Abstract Background Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-radial from-[#F2F5F6]/50 via-transparent to-transparent -z-10 pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#F2F5F6] rounded-full blur-3xl -z-10 opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Copy Column */}
        <div className="lg:col-span-6 flex flex-col space-y-8">
          <div className="inline-flex items-center space-x-2 bg-[#F0F0F0] border border-[#E2E2E2] px-3.5 py-1.5 rounded-full text-[#474747] text-xs font-bold uppercase tracking-wider w-fit">
            <span className="flex h-2 w-2 rounded-full bg-[#008146] animate-pulse" />
            <span className="font-sans">THE #1 CLOUD FINANCIAL MANAGEMENT PLATFORM</span>
          </div>

          <div className="space-y-4">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight leading-none">
              Sage Intacct. <br />
              <span className="text-[#008146]">
                Financials reimagined.
              </span>
            </h1>
            <p className="text-base text-[#474747] max-w-xl leading-relaxed font-sans">
              Empower your finance team with the automation, speed, and continuous multidimensional reporting needed to scale. Named the first and only preferred financial application by the AICPA.
            </p>
          </div>

          {/* Quick Industry Filter Selector */}
          <div className="bg-white p-5 rounded-2xl shadow-xl shadow-gray-100 border border-[#E2E2E2] max-w-lg">
            <label htmlFor="hero-industry-select" className="block text-xs font-bold text-[#5E5E5E] uppercase tracking-wider mb-2 font-display">
              Start a Tailored Product Tour
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <select
                id="hero-industry-select"
                onChange={handleIndustryChange}
                className="flex-1 bg-[#F2F5F6] border border-[#C6C6C6] text-[#1B1B1B] text-sm px-4 py-3 rounded-full focus:ring-2 focus:ring-[#008146] focus:border-[#008146] outline-none transition-all font-sans"
              >
                <option value="">-- Choose Your Industry --</option>
                <option value="saas">SaaS & Software</option>
                <option value="nonprofit">Nonprofit & Charities</option>
                <option value="healthcare">Healthcare & Clinics</option>
                <option value="professional-services">Professional Services</option>
                <option value="financial-services">Financial & Wealth Management</option>
              </select>
              <button
                onClick={onScrollToTour}
                className="bg-[#008146] text-white font-bold text-sm px-6 py-3 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center space-x-2 group shrink-0 shadow-md hover:shadow-[#008146]/20"
              >
                <span>Explore Tour</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* CTA Links */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onScrollToForm}
              className="bg-black text-white font-bold text-sm px-7 py-3.5 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-black/10"
            >
              Request 1:1 Demo
            </button>
            <button
              onClick={onScrollToTour}
              className="flex items-center space-x-2.5 px-6 py-3.5 bg-white border border-black rounded-full text-sm font-bold text-black hover:scale-[1.02] active:scale-[0.98] hover:bg-gray-50 transition-all duration-200"
            >
              <Play className="w-4 h-4 fill-black text-black" />
              <span>Watch Product Overview</span>
            </button>
          </div>

          {/* Core Trust Seals */}
          <div className="pt-4 flex flex-wrap gap-y-2 gap-x-6 text-xs text-[#5E5E5E] font-sans">
            <div className="flex items-center space-x-1.5">
              <CheckCircle className="w-4 h-4 text-[#008146]" />
              <span>AICPA Preferred</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle className="w-4 h-4 text-[#008146]" />
              <span>#1 G2 Satisfaction Score</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle className="w-4 h-4 text-[#008146]" />
              <span>SOC 1 & SOC 2 Compliant</span>
            </div>
          </div>
        </div>

        {/* Right Dashboard Visualization */}
        <div className="lg:col-span-6 relative flex flex-col justify-center items-center min-h-[640px] w-full bg-[#151517] rounded-[32px] overflow-hidden shadow-2xl p-4 sm:p-8">
          {/* Main Container using flex for natural responsive overlapping */}
          <JournalEntries />
        </div>
      </div>
    </section>
  );
}
