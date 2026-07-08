import { motion } from "framer-motion";

export default function JournalEntries() {
  return (
    <div className="relative w-full max-w-[580px] mx-auto flex flex-col items-end">
      
      {/* 1. White Card: Journal Entries Auditing */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white border border-[#B3C2C9] rounded-[16px] shadow-xl py-6 w-full md:w-[92%] z-10 relative transition-all duration-300"
        style={{
          fontFamily: "'Inter', sans-serif"
        }}
      >
        {/* Card Header - No bottom border as requested */}
        <div className="flex items-center gap-3 mb-5 px-6">
          <svg width="18" height="13" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#008146] shrink-0">
            <path d="M1.5 2.5H2.5M1.5 7.5H2.5M1.5 12.5H2.5M5.5 2.5H18.5M5.5 7.5H18.5M5.5 12.5H18.5" stroke="#008146" strokeWidth="2.2" strokeLinecap="round"/>
          </svg>
          <div className="w-[1px] h-5 bg-[#E2E2E2]"></div>
          <h3 className="text-[20px] font-bold text-[#00141e] tracking-tight">
            Journal Entries
          </h3>
        </div>

        {/* Journal Entries Grid Table - Full width, touching borders */}
        <div className="border-y border-[#CCD6DB] bg-white relative w-full overflow-x-auto custom-scrollbar">
          <table className="w-full border-collapse border-spacing-0 text-left text-[11px] sm:text-[13px] font-sans table-auto">
            <thead>
              <tr className="bg-[#F9FAFB] border-b border-[#CCD6DB] font-semibold text-[#1B1B1B] h-11">
                <th className="w-8 sm:w-12 px-1 sm:px-3 text-center bg-[#F4F6F8] border-r border-[#CCD6DB] font-semibold text-slate-700"></th>
                <th className="px-2 sm:px-3 border-r border-[#CCD6DB] font-semibold text-slate-800 text-left whitespace-nowrap">Outlier</th>
                <th className="px-2 sm:px-3.5 border-r border-[#CCD6DB] font-semibold text-slate-800 text-left whitespace-nowrap">Account</th>
                <th className="px-2 sm:px-3.5 border-r border-[#CCD6DB] font-semibold text-slate-800 text-left whitespace-nowrap">Entity or Fund</th>
                <th className="px-3 sm:px-6 text-right font-semibold text-slate-800 whitespace-nowrap">Debit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#CCD6DB]">
              {/* Row 1: Salaries */}
              <tr className="h-12 hover:bg-slate-50/50 transition-colors">
                <td className="w-8 sm:w-12 px-1 sm:px-3 text-center bg-[#F4F6F8] border-r border-[#CCD6DB] font-normal text-slate-900">1</td>
                <td className="p-0 border-r border-[#CCD6DB] w-[90px] sm:w-[110px] h-full align-middle">
                  <div className="w-full h-full min-h-[48px] flex items-stretch bg-[#4D45C9]">
                    <span className="w-8 sm:w-10 flex items-center justify-center font-bold text-[12px] sm:text-[14px] text-white shrink-0">M</span>
                    <span className="w-[1px] bg-white/20"></span>
                    <span className="flex-1 flex items-center justify-center font-normal text-white px-1 sm:px-2 whitespace-nowrap tracking-wide">Multiple</span>
                  </div>
                </td>
                <td className="px-2 sm:px-3.5 border-r border-[#CCD6DB] text-slate-900 font-normal whitespace-nowrap">5121--Salaries</td>
                <td className="px-2 sm:px-3.5 border-r border-[#CCD6DB] text-slate-900 font-normal whitespace-nowrap">100-Operating</td>
                <td className="px-3 sm:px-6 text-right text-slate-900 font-normal whitespace-nowrap">9,000.00</td>
              </tr>

              {/* Row 2: Professional Fees */}
              <tr className="h-12 hover:bg-slate-50/50 transition-colors">
                <td className="w-8 sm:w-12 px-1 sm:px-3 text-center bg-[#F4F6F8] border-r border-[#CCD6DB] font-normal text-slate-900">2</td>
                <td className="p-0 border-r border-[#CCD6DB] w-[90px] sm:w-[110px] h-full align-middle">
                  <div className="w-full h-full min-h-[48px] flex items-stretch bg-[#61235F]">
                    <span className="w-8 sm:w-10 flex items-center justify-center font-bold text-[12px] sm:text-[14px] text-white shrink-0">C</span>
                    <span className="w-[1px] bg-white/20"></span>
                    <span className="flex-1 flex items-center justify-center font-normal text-white px-1 sm:px-2 whitespace-nowrap tracking-wide">Coding</span>
                  </div>
                </td>
                <td className="px-2 sm:px-3.5 border-r border-[#CCD6DB] text-slate-900 font-normal whitespace-nowrap">5204--Professional Fees</td>
                <td className="px-2 sm:px-3.5 border-r border-[#CCD6DB] text-slate-900 font-normal whitespace-nowrap">100-Operating</td>
                <td className="px-3 sm:px-6 text-right text-slate-900 font-normal whitespace-nowrap">1,000.00</td>
              </tr>

              {/* Row 3: Consulting Fees */}
              <tr className="h-12 hover:bg-slate-50/50 transition-colors">
                <td className="w-8 sm:w-12 px-1 sm:px-3 text-center bg-[#F4F6F8] border-r border-[#CCD6DB] font-normal text-slate-900">3</td>
                <td className="p-0 border-r border-[#CCD6DB] w-[90px] sm:w-[110px] h-full align-middle">
                  <div className="w-full h-full min-h-[48px] flex items-stretch bg-[#136F8D]">
                    <span className="w-8 sm:w-10 flex items-center justify-center font-bold text-[12px] sm:text-[14px] text-white shrink-0">A</span>
                    <span className="w-[1px] bg-white/20"></span>
                    <span className="flex-1 flex items-center justify-center font-normal text-white px-1 sm:px-2 whitespace-nowrap tracking-wide">Amount</span>
                  </div>
                </td>
                <td className="px-2 sm:px-3.5 border-r border-[#CCD6DB] text-slate-900 font-normal whitespace-nowrap">5203--Consulting Fees</td>
                <td className="px-2 sm:px-3.5 border-r border-[#CCD6DB] text-slate-900 font-normal whitespace-nowrap">100-Operating</td>
                <td className="px-3 sm:px-6 text-right text-slate-900 font-normal whitespace-nowrap flex justify-end items-center h-12">-</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Total Display */}
        <div className="mt-4 flex justify-end text-[#1B1B1B] font-sans text-xs pr-6">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-slate-800 text-[14px]">Total:</span>
            <span className="font-bold text-[15px] tracking-tight text-black">10,000.00</span>
          </div>
        </div>
      </motion.div>

      {/* 2. Dark Card: Sage Copilot Assistance Panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="w-full md:w-[75%] relative z-20 self-start mt-6 md:-mt-[56px] p-[1.5px] rounded-[14px] shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
        style={{
          background: "linear-gradient(145deg, rgba(82,231,235,0.7) 0%, rgba(135,53,209,0.7) 50%, rgba(0,214,57,0.7) 100%)"
        }}
      >
        <div className="bg-gradient-to-br from-[#41454e]/95 via-[#23252a]/95 to-[#1a1b1f]/95 backdrop-blur-[12px] rounded-[13px] p-5 w-full h-full text-white pb-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
          {/* Title Copy */}
          <h4 className="text-[17px] font-bold text-white font-sans mb-4 tracking-wide shadow-black/50 drop-shadow-md">
            Review unusual historical matches
          </h4>

          {/* List Items */}
          <div className="space-y-4">
            
            {/* Item 1 */}
            <div className="flex items-start gap-4">
              <div className="h-8 w-8 rounded-[4px] bg-[#4D45C9] text-white font-bold text-[15px] flex items-center justify-center shrink-0 shadow-md">
                M
              </div>
              <p className="text-[14px] font-normal leading-[1.3] text-white/90 font-sans tracking-wide">
                This <strong className="text-white font-bold">Account, Amount</strong> & <strong className="text-white font-bold">Department</strong> combination is unusual
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-4">
              <div className="h-8 w-8 rounded-[4px] bg-[#61235F] text-white font-bold text-[15px] flex items-center justify-center shrink-0 shadow-md">
                C
              </div>
              <p className="text-[14px] font-normal leading-[1.3] text-white/90 font-sans tracking-wide">
                This <strong className="text-white font-bold">Account</strong> with this <strong className="text-white font-bold">Department</strong> combination is unusual
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-4">
              <div className="h-8 w-8 rounded-[4px] bg-[#136F8D] text-white font-bold text-[15px] flex items-center justify-center shrink-0 shadow-md">
                A
              </div>
              <p className="text-[14px] font-normal leading-[1.3] text-white/90 font-sans tracking-wide mt-1">
                This <strong className="text-white font-bold">Amount</strong> is unusual
              </p>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
