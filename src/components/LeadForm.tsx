import React, { useState } from "react";
import { Download, CheckCircle, ChevronRight, Play, Lock, Sparkles, RefreshCw } from "lucide-react";
import { motion } from "motion/react";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    industry: "",
    employees: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.company) {
      alert("Please fill in the required fields (First Name, Email, Company).");
      return;
    }

    setIsSubmitting(true);
    // Simulate API registration call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getIndustryName = (id: string) => {
    switch (id) {
      case "saas": return "SaaS & Software";
      case "nonprofit": return "Nonprofit Accounting";
      case "healthcare": return "Healthcare Operations";
      case "professional-services": return "Professional Services";
      case "financial-services": return "Financial Services";
      default: return "Core Enterprise Finance";
    }
  };

  return (
    <section id="sage-form" className="py-24 bg-gradient-to-b from-white to-sage-50/20 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial from-sage-100/10 via-transparent to-transparent pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Informational Column - Left */}
          <div className="lg:col-span-5 p-8 md:p-12 bg-charcoal-900 text-white flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-xs font-bold text-sage-600 uppercase tracking-widest bg-sage-950 border border-sage-900/30 px-3.5 py-1.5 rounded-full inline-block">
                Instant Access Tour
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight leading-tight text-white">
                Get Your Customized Product Tour Now
              </h3>
              <p className="text-charcoal-300 text-xs leading-relaxed">
                Fill out this quick briefing profile to customize your product tour experience. You will gain instant access to interactive dashboards, industry sandbox simulations, and downloadable brochures.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-3 text-xs text-charcoal-300">
                  <CheckCircle className="w-4 h-4 text-sage-600 shrink-0 mt-0.5" />
                  <span>Real-time access to actual system dashboard modules.</span>
                </div>
                <div className="flex items-start space-x-3 text-xs text-charcoal-300">
                  <CheckCircle className="w-4 h-4 text-sage-600 shrink-0 mt-0.5" />
                  <span>Downloadable 12-page PDF Product Tour Briefing.</span>
                </div>
                <div className="flex items-start space-x-3 text-xs text-charcoal-300">
                  <CheckCircle className="w-4 h-4 text-sage-600 shrink-0 mt-0.5" />
                  <span>Direct phone line to our certified systems experts.</span>
                </div>
              </div>
            </div>

            <div className="border-t border-charcoal-800 pt-6 mt-8 flex items-center space-x-2 text-[10px] text-charcoal-400">
              <Lock className="w-3.5 h-3.5 text-charcoal-500 shrink-0" />
              <span>Your privacy is secure. We never sell contact information.</span>
            </div>
          </div>

          {/* Form Action Column - Right */}
          <div className="lg:col-span-7 p-8 md:p-12 relative flex flex-col justify-center">
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700 block">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Jane"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-sage-500 focus:bg-white transition-all text-gray-800"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700 block">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-sage-500 focus:bg-white transition-all text-gray-800"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 block">Business Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane.doe@company.com"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-sage-500 focus:bg-white transition-all text-gray-800"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 block">Company Name *</label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enterprise Corp"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-sage-500 focus:bg-white transition-all text-gray-800"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700 block">Primary Industry *</label>
                    <select
                      name="industry"
                      required
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-sage-500 focus:bg-white transition-all text-gray-800"
                    >
                      <option value="">-- Choose Industry --</option>
                      <option value="saas">SaaS & Software</option>
                      <option value="nonprofit">Nonprofit</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="professional-services">Professional Services</option>
                      <option value="financial-services">Financial Services</option>
                      <option value="general">Other / General Corporate</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700 block">Employee Count</label>
                    <select
                      name="employees"
                      value={formData.employees}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-sage-500 focus:bg-white transition-all text-gray-800"
                    >
                      <option value="">-- Select Size --</option>
                      <option value="1-49">1 - 49 Employees</option>
                      <option value="50-199">50 - 199 Employees</option>
                      <option value="200-999">200 - 999 Employees</option>
                      <option value="1000+">1000+ Employees</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-sage-600 text-charcoal-900 font-extrabold py-3.5 px-6 rounded-xl hover:bg-sage-500 transition-all cursor-pointer flex items-center justify-center space-x-2 shadow-lg shadow-sage-600/10 border-none select-none disabled:bg-sage-400"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      <span>Preparing Custom Resources...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit & Access Product Tour</span>
                      <ChevronRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6 flex flex-col justify-center items-center py-6"
              >
                <div className="w-16 h-16 bg-sage-50 rounded-full flex items-center justify-center text-sage-900 shadow shadow-sage-50">
                  <CheckCircle className="w-9 h-9 stroke-[2.5]" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-display text-2xl font-extrabold text-gray-950">
                    Welcome, {formData.firstName}!
                  </h4>
                  <p className="text-sm text-gray-600 max-w-md">
                    We've customized your access profile for <strong className="text-sage-700">{getIndustryName(formData.industry)}</strong>. Your digital tour materials have been generated successfully.
                  </p>
                </div>

                {/* Simulated Downloads Card */}
                <div className="bg-gray-50 border border-gray-100 p-5 rounded-2xl w-full max-w-md text-left space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-xs font-mono font-bold text-gray-400">YOUR CUSTOM DELIVERY BLOCK</span>
                    <span className="flex h-2 w-2 rounded-full bg-sage-600 animate-pulse" />
                  </div>

                  {/* Resource 1 */}
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <p className="font-bold text-gray-900">Sage Intacct Product Overview (PDF)</p>
                      <p className="text-gray-500 font-mono text-[10px]">Size: 3.4 MB // 12 pages</p>
                    </div>
                    <a
                      href="#"
                      onClick={(e) => { e.preventDefault(); alert("Starting PDF download simulation..."); }}
                      className="bg-sage-600 text-charcoal-900 px-3 py-2 rounded-lg hover:bg-sage-500 transition-all flex items-center space-x-1 font-extrabold shrink-0 shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF</span>
                    </a>
                  </div>

                  {/* Resource 2 */}
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <p className="font-bold text-gray-900">{getIndustryName(formData.industry)} Sandbox</p>
                      <p className="text-gray-500 font-mono text-[10px]">Cloud Sandbox Environment</p>
                    </div>
                    <a
                      href="#"
                      onClick={(e) => { e.preventDefault(); alert(`Redirecting to interactive ${getIndustryName(formData.industry)} Sandbox simulation...`); }}
                      className="bg-charcoal-900 text-white px-3 py-2 rounded-lg hover:bg-sage-600 hover:text-charcoal-900 transition-all flex items-center space-x-1 font-semibold shrink-0 shadow-sm"
                    >
                      <Play className="w-3.5 h-3.5 fill-current text-current" />
                      <span>Sandbox</span>
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-gray-400 hover:text-sage-600 font-medium underline"
                >
                  Need to input different company details? Click here.
                </button>
              </motion.div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
