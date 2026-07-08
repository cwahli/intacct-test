import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onScrollToForm: () => void;
  onScrollToTour: () => void;
}

export default function Header({ onScrollToForm, onScrollToTour }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");

  // Links for the top navigation bar (Pure Black)
  const topNavLinks = [
    { name: "Products & Solutions", href: "#" },
    { name: "Accountants", href: "#" },
    { name: "Partners", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Support", href: "#" }
  ];

  // Links for the sub-navigation bar (S4 Background)
  const subNavLinks = [
    { name: "Overview", href: "#product", action: () => { window.scrollTo({ top: 0, behavior: "smooth" }); setActiveTab("Overview"); } },
    { name: "Product capabilities", href: "#scenes", action: () => { onScrollToTour(); setActiveTab("Product capabilities"); } },
    { name: "Extended capabilities", href: "#platform", action: () => { onScrollToTour(); setActiveTab("Extended capabilities"); } },
    { name: "Industry", href: "#benefits", action: () => { onScrollToTour(); setActiveTab("Industry"); } },
    { name: "Partners", href: "#demo", action: () => { onScrollToTour(); setActiveTab("Partners"); } }
  ];

  return (
    <header id="sage-header" className="w-full z-50">
      {/* 1. Top Navigation Header (Pure Black) */}
      <nav className="h-12 bg-black flex items-center border-b border-white/10 relative z-50">
        <div className="max-w-[1280px] w-full mx-auto px-6 md:px-16 flex items-center justify-between">
          <div className="flex items-center gap-10">
            {/* Top Logo Block */}
            <a href="#" className="flex items-center text-white hover:opacity-90 transition-opacity">
              <svg
                className="h-[22px] w-auto text-white"
                viewBox="0 0 57 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.41708 0C2.77068 0 0 2.76154 0 6.30588C0 10.1909 2.77068 11.6912 5.84284 12.6118C8.74991 13.5323 10.1281 14.5543 10.1281 16.5692C10.1281 18.6132 8.60635 20.0483 6.61806 20.0483C4.62259 20.0483 2.89989 18.6132 2.89989 16.4025C2.89989 15.1776 3.47412 14.8659 3.47412 14.1846C3.47412 13.4018 2.93578 12.8219 2.05289 12.8219C1.04798 12.8219 0 14.3586 0 16.5402C0 20.0556 3.00756 22.6432 6.61806 22.6432C10.2644 22.6432 13.0351 19.8816 13.0351 16.3373C13.0351 12.4813 10.2645 10.9519 7.16358 10.0314C4.29241 9.14715 2.90706 8.08892 2.90706 6.07394C2.90706 4.0662 4.3929 2.63107 6.38119 2.63107C8.44125 2.63107 10.0994 4.0952 10.1281 6.11018C10.164 7.03069 10.8028 7.5743 11.5493 7.5743C12.3245 7.5743 13.0351 7.03069 12.9992 6.0377C12.9346 2.52235 9.99887 0 6.41708 0ZM21.0744 22.6069C22.6966 22.6069 23.9456 22.0633 23.9456 20.9689C23.9456 20.1498 23.2709 19.6062 22.6249 19.6062C22.1511 19.6062 21.8138 19.8092 21.0385 19.8092C18.9426 19.8092 17.2917 18.0044 17.2917 15.8879C17.2917 13.6047 18.9785 11.7927 21.1103 11.7927C23.5077 11.7927 25.0295 13.6337 25.0295 16.2938V21.1718C25.0295 22.0271 25.7042 22.6069 26.5153 22.6069C27.2905 22.6069 27.9652 22.0271 27.9652 11.7927V16.1923C27.9652 12.1044 25.1658 9.10366 21.1749 9.10366C17.4567 9.10366 14.3846 12.0029 14.3846 15.8879C14.3846 19.6424 17.428 22.6069 21.0744 22.6069ZM35.9328 31.7468C39.5791 31.7468 42.3498 28.9853 42.3498 25.441C42.3498 21.556 39.5791 20.0556 36.4783 19.1351C33.6071 18.2146 32.2218 17.1926 32.2218 15.1776C32.2218 13.1626 33.7435 11.6985 35.6959 11.6985C37.6913 11.6985 39.4428 13.1336 39.4428 15.3443C39.4428 16.5765 38.8685 16.8809 38.8685 17.5622C38.8685 18.345 39.4069 18.9249 40.2539 18.9249C41.3019 18.9249 42.3498 17.3883 42.3498 15.2066C42.3498 11.6912 39.3136 9.10366 35.6959 9.10366C32.0495 9.10366 29.3147 11.8652 29.3147 15.4095C29.3147 19.2655 32.0495 20.7949 35.1575 21.7154C38.0646 22.5997 39.4428 23.6579 39.4428 25.6729C39.4428 27.7169 37.921 29.1158 35.9686 29.1158C33.8727 29.1158 32.2505 27.6879 32.2218 25.6367C32.1859 24.7161 31.5111 24.2015 30.8005 24.2015C30.0253 24.2015 29.3147 24.7161 29.3506 25.7019C29.3793 29.2607 32.3151 31.7468 35.9328 31.7468ZM50.5901 22.6069C52.4779 22.6069 53.9709 22.0633 55.0117 21.411C56.0238 20.7659 56.4258 20.215 56.4258 19.6062C56.4258 18.9611 55.952 18.3813 55.0763 18.3813C54.0283 18.3813 53.1885 19.9469 50.6188 19.9469C48.3578 19.9469 46.5633 18.1421 46.5633 15.8589C46.5633 13.6047 48.286 11.7637 50.4465 11.7637C52.7794 11.7637 54.0283 13.3003 54.0283 14.2861C54.0283 14.5615 53.8274 14.6992 53.5546 14.6992H50.7193C49.9441 14.6992 49.3699 15.2138 49.3699 15.8952C49.3699 16.6417 49.9441 17.1926 50.7193 17.1926H54.6026C56.0884 17.1926 57 16.4098 57 15.0761C57 11.7347 54.1647 9.11091 50.4107 9.11091C46.6925 9.11091 43.6921 12.1116 43.6921 15.8589C43.6921 19.6062 46.8073 22.6069 50.5901 22.6069Z"
                  fill="currentColor"
                />
              </svg>
            </a>

            {/* Top Navigation Links */}
            <ul className="hidden lg:flex items-center gap-6">
              {topNavLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-[13px] font-medium text-white/90 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-5">
            <button
              className="text-white/90 hover:text-white transition-colors p-1"
              aria-label="Search"
              onClick={onScrollToForm}
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
            <button
              onClick={onScrollToForm}
              className="text-[13px] font-medium text-white hover:text-white/80 border border-white/30 rounded-full px-4 py-1 transition-all"
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* 2. Sub Navigation Header (Sticky, Charcoal Black Background #1B1B1B) */}
      <nav className="sticky top-0 h-[60px] bg-[#1B1B1B] flex items-center border-b border-white/10 z-40">
        <div className="max-w-[1280px] w-full mx-auto px-6 md:px-16 flex items-center justify-between">
          {/* Brand/Product Logo Left Align */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActiveTab("Overview");
            }}
            className="flex items-center gap-3 group"
          >
            {/* Sage Intacct SVG Icon */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:scale-105"
            >
              <rect width="32" height="32" rx="6" fill="black" />
              <path
                d="M16.667 10C17.7716 10 18.667 9.10457 18.667 8C18.667 6.89543 17.7716 6 16.667 6C15.5624 6 14.667 6.89543 14.667 8C14.667 9.10457 15.5624 10 16.667 10Z"
                fill="#00D639"
              />
              <path
                d="M20.667 10.118C20.667 9.59042 19.9557 9.42252 19.7198 9.89443L11.6955 25.9431C11.5292 26.2755 11.771 26.6667 12.1427 26.6667H20.167C20.4431 26.6667 20.667 26.4428 20.667 26.1667V10.118Z"
                fill="white"
              />
            </svg>
            <span className="font-sans text-[18px] font-medium text-white/95">
              Sage Intacct
            </span>
          </a>

          {/* Right Group: Links & Actions */}
          <div className="hidden lg:flex items-center gap-10 flex-1 justify-end">
            <ul className="flex items-center gap-6">
              {subNavLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      item.action();
                    }}
                    className={`text-sm font-medium transition-colors py-5 border-b-2 block ${
                      activeTab === item.name
                        ? "text-white border-[#00D639] font-bold"
                        : "text-white/90 hover:text-white border-transparent"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <span className="text-white/90 hover:text-white transition-colors text-sm font-medium cursor-pointer">
                  •••
                </span>
              </li>
            </ul>

            <div className="flex items-center gap-6">
              <a
                href="tel:1-877-437-7765"
                className="text-sm text-white/90 hover:text-white transition-colors font-medium inline-flex items-center gap-1.5"
              >
                {/* Simple call icon */}
                <svg
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#00D639]"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                1-877-437-7765
              </a>
              <button
                onClick={onScrollToForm}
                className="bg-[#00D639] hover:opacity-90 active:scale-[0.98] text-black font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 border-0"
              >
                Request pricing
              </button>
            </div>
          </div>

          {/* Mobile hamburger menu trigger */}
          <div className="flex items-center space-x-4 lg:hidden">
            <a
              href="tel:1-877-437-7765"
              className="p-2 text-white/90 hover:text-white"
            >
              <Phone className="w-5 h-5 text-[#00D639]" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer (Styled to match S4 #1B1B1B with green accents) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#1B1B1B] border-t border-white/10 py-4 px-6 absolute left-0 w-full shadow-lg overflow-hidden z-40"
          >
            <div className="flex flex-col space-y-4">
              <div className="border-b border-white/10 pb-2">
                <h4 className="text-xs font-semibold text-white/50 tracking-wider uppercase mb-2">Sage Intacct Menu</h4>
                <div className="flex flex-col space-y-3">
                  {subNavLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(false);
                        item.action();
                      }}
                      className={`text-sm py-1 transition-colors ${
                        activeTab === item.name ? "text-[#00D639] font-bold" : "text-white/95 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="border-b border-white/10 pb-2">
                <h4 className="text-xs font-semibold text-white/50 tracking-wider uppercase mb-2">Corporate</h4>
                <div className="grid grid-cols-2 gap-2 pl-1">
                  {topNavLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-xs text-white/80 hover:text-white py-1"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-col space-y-3">
                <a
                  href="tel:1-877-437-7765"
                  className="w-full text-center py-2.5 text-sm font-semibold border border-white/20 rounded-full text-white/90 hover:bg-white/5 transition-all inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#00D639]" />
                  1-877-437-7765
                </a>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onScrollToForm();
                  }}
                  className="w-full text-center bg-[#00D639] text-black py-2.5 text-sm font-bold rounded-full hover:opacity-90 active:scale-[0.98] transition-all"
                >
                  Request pricing
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
