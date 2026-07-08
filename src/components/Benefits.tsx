import { Layers, ShieldCheck, PieChart, Activity, RefreshCw, Zap } from "lucide-react";
import { motion } from "motion/react";

export default function Benefits() {
  const benefits = [
    {
      icon: Layers,
      title: "Dimensional General Ledger",
      description: "Traditional accounting uses linear chart of accounts, creating thousands of redundant codes. Sage Intacct uses simple base accounts combined with 'dimensions' (location, department, project, customer) to generate infinite reporting views without bloat."
    },
    {
      icon: RefreshCw,
      title: "Continuous Global Consolidation",
      description: "Don't wait until month-end. Consolidate financial metrics across hundreds of distinct business entities, currencies, and tax structures in seconds, with automated real-time foreign currency conversions."
    },
    {
      icon: PieChart,
      title: "Real-Time Role-Based Visuals",
      description: "Give executives, department heads, project managers, and auditors personalized dashboards that unite core financial statements with physical operational KPIs (occupancy, treatments, MRR)."
    },
    {
      icon: ShieldCheck,
      title: "SOC 1 & SOC 2 Enterprise Security",
      description: "Maintain rigid internal controls, audit trails, and segregation of duties. Sage Intacct delivers premium security compliance, automated approval routing, and BAA-supported HIPAA healthcare hosting."
    },
    {
      icon: Zap,
      title: "Procure-to-Pay Automation",
      description: "Streamline accounts payable from purchase request to payment. Automate routing and matching rules, reducing manual transaction errors by up to 90% and securing your cash reserves."
    },
    {
      icon: Activity,
      title: "Scalable API & Cloud Framework",
      description: "Built for integration. Leverage open APIs to connect your CRM (Salesforce preferred partner), HR systems, banking streams, or customized product databases smoothly with the core ledger."
    }
  ];

  return (
    <section id="sage-benefits" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-sage-900 uppercase tracking-widest bg-sage-50 px-3.5 py-1.5 rounded-full inline-block">
            Architectural Differentiation
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Why Midmarket Leaders <br />
            Choose Sage Intacct
          </h2>
          <p className="text-gray-600">
            Engineered by financial experts specifically for high-growth firms, Sage Intacct delivers the depth of traditional ERPs with the agility and instant deployment of modern cloud SaaS.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, idx) => {
            const IconComponent = b.icon;
            return (
              <div
                key={idx}
                className="bg-gray-50/60 hover:bg-white border border-gray-100 hover:border-sage-300 p-8 rounded-3xl transition-all duration-300 hover:shadow-xl hover:shadow-sage-600/5 group flex flex-col justify-between h-full"
              >
                <div className="space-y-4">
                  <div className="bg-sage-50 w-12 h-12 rounded-2xl flex items-center justify-center group-hover:bg-sage-600 transition-colors duration-300">
                    <span className="group-hover:scale-110 transition-transform duration-300 text-sage-600 group-hover:text-charcoal-900">
                      <IconComponent className="w-6 h-6 stroke-[2]" />
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-sage-700 transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
