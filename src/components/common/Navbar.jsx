import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { destinations } from "../../data/destinations";
import { APPLY_FORM_URL } from "../../config";

const logoUrl = new URL("../../../logo white no bg.png", import.meta.url).href;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [destOpen, setDestOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDestOpen(false);
  }, [location]);

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? "text-indigo-600" : "text-slate-600 hover:text-slate-900"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[68px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center overflow-hidden ring-1 ring-slate-200/80 group-hover:bg-slate-800 transition-colors">
              <img src={logoUrl} alt="وكالة النجاح" className="w-6 h-6 object-contain" />
            </div>
            <div>
              <div className="font-bold text-base text-slate-900 leading-tight">وكالة النجاح</div>
              <div className="text-[11px] text-slate-400 leading-tight">الدراسة في أوروبا</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            <NavLink to="/" className={navLinkClass} end>
              الرئيسية
            </NavLink>

            {/* Destinations Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDestOpen(!destOpen)}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1"
              >
                الوجهات
                <svg className={`w-4 h-4 transition-transform ${destOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {destOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setDestOpen(false)} />
                  <div className="absolute top-full right-1/2 translate-x-1/2 pt-2 z-20 w-52">
                    <div className="bg-white border border-slate-100 rounded-2xl shadow-xl shadow-slate-200/60 overflow-hidden">
                      {destinations.map((d) =>
                        d.inactive ? (
                          <div
                            key={d.id}
                            className="flex items-center gap-3 px-4 py-2.5 text-slate-400 bg-slate-50 text-sm cursor-not-allowed"
                          >
                            <span className="text-xl grayscale">{d.flag}</span>
                            <span className="font-medium">{d.name}</span>
                            <span className="mr-auto text-[10px] font-bold text-red-400">متوقف</span>
                          </div>
                        ) : (
                          <Link
                            key={d.id}
                            to={`/destinations/${d.slug}`}
                            className="flex items-center gap-3 px-4 py-2.5 text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 transition-colors text-sm"
                          >
                            <span className="text-xl">{d.flag}</span>
                            <span className="font-medium">{d.name}</span>
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>

            <NavLink to="/about" className={navLinkClass}>من نحن</NavLink>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={APPLY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors"
            >
              قدّم الآن
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-slate-700 p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="تبديل القائمة"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100">
          <div className="px-4 py-4 space-y-1">
            <Link to="/" className="block px-3 py-2.5 text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors text-sm font-medium">
              الرئيسية
            </Link>
            <div className="px-3 pt-2 pb-1 text-slate-400 text-xs uppercase tracking-wider font-semibold">الوجهات</div>
            {destinations.map((d) =>
              d.inactive ? (
                <div
                  key={d.id}
                  className="flex items-center gap-3 px-3 py-2.5 text-slate-400 bg-slate-50 rounded-xl transition-colors text-sm cursor-not-allowed"
                >
                  <span className="grayscale">{d.flag}</span>
                  <span>{d.name}</span>
                  <span className="mr-auto text-[10px] font-bold text-red-400">متوقف</span>
                </div>
              ) : (
                <Link
                  key={d.id}
                  to={`/destinations/${d.slug}`}
                  className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors text-sm"
                >
                  <span>{d.flag}</span>
                  <span>{d.name}</span>
                </Link>
              )
            )}
            <Link to="/about" className="block px-3 py-2.5 text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors text-sm font-medium">
              من نحن
            </Link>
            <div className="pt-3 pb-1 space-y-2">
              <a
                href={APPLY_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm px-4 py-3 rounded-xl transition-colors"
              >
                قدّم الآن
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
