import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  type: 'text' | 'past-due-block';
  text?: string;
}

export default function PaymentAnalysis() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'msg-1',
      sender: 'ai',
      type: 'past-due-block'
    },
    {
      id: 'msg-2',
      sender: 'user',
      type: 'text',
      text: "Let’s go with your recommendation. Pay with my Chase bank account, with a check using today’s date."
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom when messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMsgId = 'user-' + Date.now();
    const newMsg: Message = {
      id: userMsgId,
      sender: 'user',
      type: 'text',
      text: inputValue.trim()
    };

    setMessages(prev => [...prev, newMsg]);
    const userQuery = inputValue.trim().toLowerCase();
    setInputValue('');

    // Simulate AI response
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      let replyText = "I’ve updated your payment batch and submitted it to the approval workflow. Let me know if you would like me to draft any further payments!";
      
      if (userQuery.includes('status') || userQuery.includes('check')) {
        replyText = "The payment status for PG & E and Rippel Management is now marked as 'Submitted for Approval'. Both are in queue.";
      } else if (userQuery.includes('budget') || userQuery.includes('funds')) {
        replyText = "Your updated budget is £10,500.00, with £0.00 remaining unallocated funds after today's scheduled payments.";
      }

      setMessages(prev => [...prev, {
        id: 'ai-' + Date.now(),
        sender: 'ai',
        type: 'text',
        text: replyText
      }]);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="w-full max-w-[1120px] mx-auto bg-[#f4f6f8] rounded-[24px] p-4 md:p-6 shadow-xl font-sans text-[#1E293B]">
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* LEFT SIDE: Payment Analysis Dashboard */}
        <div className="flex-1 flex flex-col gap-5 min-w-0">
          
          {/* Header */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] tracking-tight">
              Payment analysis dashboard
            </h2>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-4 flex flex-col justify-between shadow-sm min-h-[90px]">
              <span className="text-[20px] md:text-[22px] font-bold text-[#0F172A]">£10,500.00</span>
              <span className="text-xs text-[#64748B] font-medium mt-1">Updated budget</span>
            </div>
            <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-4 flex flex-col justify-between shadow-sm min-h-[90px]">
              <span className="text-[20px] md:text-[22px] font-bold text-[#0F172A]">£10,500.00</span>
              <span className="text-xs text-[#64748B] font-medium mt-1">Payments made today</span>
            </div>
            <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-4 flex flex-col justify-between shadow-sm min-h-[90px]">
              <span className="text-[20px] md:text-[22px] font-bold text-[#0F172A]">£0.00</span>
              <span className="text-xs text-[#64748B] font-medium mt-1">Remaining funds</span>
            </div>
          </div>

          {/* Payments Created Card */}
          <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-4 md:p-5 shadow-sm flex flex-col gap-4">
            <div>
              <h3 className="text-base font-bold text-[#0F172A]">Payments created</h3>
              <p className="text-sm text-[#64748B] mt-0.5">The two following payments are now in the approval workflow.</p>
            </div>

            <div className="bg-[#f8fafc] border border-[#E2E8F0] rounded-xl p-3 text-xs md:text-sm text-[#475569] flex flex-col sm:flex-row gap-4 sm:gap-8">
              <div>• Bank account: <strong className="text-[#0F172A] font-semibold">CHASE</strong></div>
              <div>• Payment method: <strong className="text-[#0F172A] font-semibold">Check</strong></div>
              <div>• Payment date: <strong className="text-[#0F172A] font-semibold">20/07</strong></div>
            </div>

            {/* Responsive Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs md:text-sm border-collapse min-w-[500px]">
                <thead>
                  <tr className="border-b border-[#E2E8F0] text-[#64748B]">
                    <th className="pb-2 font-medium">Payment ID</th>
                    <th className="pb-2 font-medium">Vendor</th>
                    <th className="pb-2 font-medium">Bill reference</th>
                    <th className="pb-2 font-medium">Payment priority</th>
                    <th className="pb-2 font-medium text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F1F5F9] text-[#334155]">
                  <tr className="hover:bg-[#F8FAF1] transition-colors">
                    <td className="py-3 font-semibold text-[#0F172A]">2233</td>
                    <td className="py-3">PG & E</td>
                    <td className="py-3">2233</td>
                    <td className="py-3">
                      <span className="bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded text-[10px] uppercase">High</span>
                    </td>
                    <td className="py-3 text-right font-semibold text-[#0F172A]">£500.00</td>
                  </tr>
                  <tr className="hover:bg-[#F8FAF1] transition-colors">
                    <td className="py-3 font-semibold text-[#0F172A]">2123</td>
                    <td className="py-3">Rippel Manage...</td>
                    <td className="py-3">1243</td>
                    <td className="py-3">
                      <span className="bg-rose-100 text-rose-800 font-bold px-2 py-0.5 rounded text-[10px] uppercase">Urgent</span>
                    </td>
                    <td className="py-3 text-right font-semibold text-[#0F172A]">£10,000.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom Grid: Two Charts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Chart 1: Donut Distribution */}
            <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-4 shadow-sm flex flex-col items-center justify-between min-h-[220px]">
              <div className="relative w-36 h-36 flex items-center justify-center">
                {/* SVG Donut Chart */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
                  {/* Background Track */}
                  <circle cx="80" cy="80" r="60" fill="transparent" stroke="#E2E8F0" strokeWidth="20" />
                  {/* Rippel Management Segment (Green) - 95.23% */}
                  {/* Circumference = 2 * PI * 60 = 376.99 */}
                  {/* Segment: 359 stroke, offset: 0 */}
                  <circle 
                    cx="80" cy="80" r="60" 
                    fill="transparent" 
                    stroke="#52B043" 
                    strokeWidth="20" 
                    strokeDasharray="359 376.99" 
                    strokeDashoffset="0" 
                    className="transition-all duration-1000 ease-out"
                  />
                  {/* PG & E Segment (Orange) - 4.77% */}
                  {/* Segment: 18 stroke, offset: -359 */}
                  <circle 
                    cx="80" cy="80" r="60" 
                    fill="transparent" 
                    stroke="#D66D23" 
                    strokeWidth="20" 
                    strokeDasharray="18 376.99" 
                    strokeDashoffset="-359" 
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                {/* Center text */}
                <div className="absolute text-center">
                  <span className="text-xl font-bold text-[#0F172A]">£10.5k</span>
                  <span className="block text-[9px] text-[#64748B] uppercase tracking-wider font-semibold">Allocated</span>
                </div>
              </div>

              {/* Legend */}
              <div className="flex justify-center gap-6 text-[10px] text-[#64748B] font-semibold mt-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D66D23]"></span>
                  <span>PG & E</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#52B043]"></span>
                  <span>Rippel Management</span>
                </div>
              </div>
            </div>

            {/* Chart 2: Priority Bar Chart */}
            <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-4 shadow-sm flex flex-col justify-between min-h-[220px]">
              <div className="flex-1 flex gap-3 h-[140px] relative pt-2">
                {/* Y Axis Labels */}
                <div className="flex flex-col justify-between text-[10px] text-[#94A3B8] font-medium w-8 text-right h-[110px]">
                  <span>7,500</span>
                  <span>7,500</span>
                  <span>5,000</span>
                  <span>2,500</span>
                  <span>0</span>
                </div>

                {/* Grid & Bars Container */}
                <div className="flex-1 relative h-[110px] border-b border-[#E2E8F0] flex justify-around items-end px-4">
                  {/* Grid Lines */}
                  <div className="absolute inset-x-0 top-0 h-px bg-slate-100 pointer-events-none"></div>
                  <div className="absolute inset-x-0 top-1/4 h-px bg-slate-100 pointer-events-none"></div>
                  <div className="absolute inset-x-0 top-2/4 h-px bg-slate-100 pointer-events-none"></div>
                  <div className="absolute inset-x-0 top-3/4 h-px bg-slate-100 pointer-events-none"></div>

                  {/* Urgent Bar (Green, Tall) - representing 10k, goes to full height */}
                  <div className="flex flex-col items-center z-10 w-12">
                    <div className="bg-[#52B043] rounded-t w-8 h-[100px] transition-all duration-1000 ease-out hover:opacity-90"></div>
                  </div>

                  {/* High Bar (Orange, Small) - representing 500, very small */}
                  <div className="flex flex-col items-center z-10 w-12">
                    <div className="bg-[#D66D23] rounded-t w-8 h-[8px] transition-all duration-1000 ease-out hover:opacity-90"></div>
                  </div>
                </div>
              </div>

              {/* X Axis Labels */}
              <div className="flex justify-around text-[10px] text-[#64748B] font-semibold pl-8 mt-1">
                <span className="w-12 text-center">Urgent</span>
                <span className="w-12 text-center">High</span>
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE: Copilot Chatbot Sidebar */}
        <div className="w-full lg:w-[380px] bg-white border border-[#E2E8F0] rounded-[24px] shadow-lg flex flex-col overflow-hidden min-h-[550px] lg:min-h-[600px]">
          
          {/* Copilot Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#F1F5F9]">
            <div className="flex items-center gap-2">
              {/* Sage Copilot S+ Logo */}
              <div className="w-6 h-6 flex items-center justify-center rounded bg-gradient-to-tr from-[#00D639] via-[#00a3e0] to-[#5c31cf] p-[1.5px]">
                <div className="w-full h-full bg-white rounded-[2px] flex items-center justify-center font-bold text-xs text-[#00D639] leading-none">
                  S⁺
                </div>
              </div>
              <span className="font-bold text-[#0F172A] text-sm">Copilot</span>
            </div>
            <button className="text-[#94A3B8] hover:text-[#475569] transition-colors p-1" aria-label="Close panel">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Chat Messages viewport */}
          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4 bg-[#FFFFFF] max-h-[380px] lg:max-h-[420px]">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                
                {msg.type === 'past-due-block' ? (
                  /* Past Due Block card as per screenshot */
                  <div className="bg-white border border-[#E2E8F0] rounded-[20px] p-4 shadow-sm w-full">
                    <h4 className="font-bold text-[#0F172A] text-xs uppercase tracking-wider mb-2">Past due urgent bills</h4>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-[11px] mb-3">
                        <thead>
                          <tr className="border-b border-[#E2E8F0] text-[#64748B] font-semibold">
                            <th className="pb-1">Bill no.</th>
                            <th className="pb-1">Vendor</th>
                            <th className="pb-1">Due date</th>
                            <th className="pb-1 text-right">Amount</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F1F5F9] text-[#334155]">
                          <tr>
                            <td className="py-2">2233</td>
                            <td className="py-2">PG & E</td>
                            <td className="py-2">01/07</td>
                            <td className="py-2 text-right font-medium">£500.00</td>
                          </tr>
                          <tr>
                            <td className="py-2">2123</td>
                            <td className="py-2">Rippel Manage...</td>
                            <td className="py-2">01/07</td>
                            <td className="py-2 text-right font-medium">£10,000.00</td>
                          </tr>
                          <tr>
                            <td className="py-2">1243</td>
                            <td className="py-2">Full Consulting</td>
                            <td className="py-2">31/07</td>
                            <td className="py-2 text-right font-medium">£9,500.00</td>
                          </tr>
                          <tr>
                            <td className="py-2">2313</td>
                            <td className="py-2">Full Consulting</td>
                            <td className="py-2">31/07</td>
                            <td className="py-2 text-right font-medium">£8,500.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="text-xs text-[#0F172A] border-t border-[#F1F5F9] pt-2 mt-2 leading-relaxed">
                      <strong className="font-bold block text-[#0F172A]">Recommendation:</strong>
                      Pay the two most urgent bills to avoid late fees of £500.
                    </div>
                  </div>
                ) : (
                  /* Standard Chat Bubble */
                  <div className={`max-w-[85%] rounded-[16px] px-3.5 py-2.5 text-xs md:text-sm leading-relaxed shadow-sm ${
                    msg.sender === 'user' 
                      ? 'bg-[#F4F6F8] text-[#1E293B] rounded-br-sm' 
                      : 'bg-white border border-[#E2E8F0] text-[#1E293B] rounded-bl-sm'
                  }`}>
                    {msg.text}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-[#E2E8F0] rounded-[16px] rounded-bl-sm px-4 py-2.5 text-xs text-[#94A3B8] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-[#94A3B8] rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-[#94A3B8] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                  <span className="w-1.5 h-1.5 bg-[#94A3B8] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Copilot Footer Input */}
          <div className="p-4 border-t border-[#F1F5F9] bg-white flex flex-col gap-2 mt-auto">
            <label className="block text-xs font-bold text-[#0F172A]">
              Ask Copilot a question
            </label>
            <div className="relative flex items-center">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full border border-[#E2E8F0] rounded-[12px] pl-3 pr-12 py-3 text-xs md:text-sm focus:outline-none focus:ring-1 focus:ring-[#00D639] focus:border-[#00D639] bg-white text-[#1E293B]"
                placeholder="Type a message..."
              />
              <button 
                onClick={handleSendMessage}
                className="absolute right-2 w-8 h-8 rounded-full bg-[#008146] hover:bg-[#006637] transition-colors flex items-center justify-center text-white cursor-pointer shadow-sm"
                aria-label="Send message"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform rotate-45 -translate-x-[1px] translate-y-[1px]">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
