import { Link } from "react-router-dom";
import { destinations } from "../../data/destinations";
import { APPLY_FORM_URL } from "../../config";

const logoUrl = new URL("../../../logo white no bg.png", import.meta.url).href;

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden ring-1 ring-white/10">
                <img src={logoUrl} alt="وكالة النجاح" className="w-6 h-6 object-contain" />
              </div>
              <div>
                <div className="font-bold text-base leading-tight">وكالة النجاح</div>
                <div className="text-xs text-white/40 leading-tight">الدراسة في أوروبا</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              نساعد الطلاب الجزائريين على بناء مستقبلهم في أوروبا — من أول استشارة حتى يوم وصولهم.
            </p>
            <div className="flex gap-2">
              <a
                href="https://www.instagram.com/el.nadjah/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-pink-600 rounded-xl flex items-center justify-center transition-colors"
                title="إنستغرام"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@elnadjah.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-slate-600 rounded-xl flex items-center justify-center transition-colors"
                title="تيك توك"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.53V6.76a4.84 4.84 0 01-1.02-.07z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@elnadjah.education"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-red-600 rounded-xl flex items-center justify-center transition-colors"
                title="يوتيوب"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/el.nadjah.travel.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors"
                title="فيسبوك"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-wider text-white/30 mb-5">الوجهات</h3>
            <ul className="space-y-3">
              {destinations.filter((d) => !d.inactive).map((d) => (
                <li key={d.id}>
                  <Link
                    to={`/destinations/${d.slug}`}
                    className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2"
                  >
                    <span>{d.flag}</span>
                    <span>الدراسة في {d.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-wider text-white/30 mb-5">روابط سريعة</h3>
            <ul className="space-y-3">
              {[
                { to: "/", label: "الرئيسية" },
                { to: "/about", label: "من نحن" },
                { to: "/careers", label: "انضم إلى الفريق" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/60 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={APPLY_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  قدّم الآن
                </a>
              </li>
              <li>
                <a
                  href="https://finder.elnadjah.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 text-sm transition-colors flex items-center gap-1.5"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  أداة اختيار الوجهة
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-wider text-white/30 mb-5">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/60">
                <span className="mt-0.5 text-base">📧</span>
                <a href="mailto:elnadjah.agency@gmail.com" className="hover:text-white transition-colors break-all">
                  elnadjah.agency@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/60">
                <span className="mt-0.5 text-base">💬</span>
                <span>واتساب — الجزائر</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/60">
                <span className="mt-0.5 text-base">🕐</span>
                <span>الأحد–الخميس، 9ص–8م</span>
              </li>
            </ul>
            <div className="mt-6">
              <a
                href={APPLY_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors"
              >
                ابدأ تسجيلك
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} وكالة النجاح. جميع الحقوق محفوظة.
          </p>
          <p className="text-white/30 text-xs">
            نساعد الطلاب الجزائريين على بناء مستقبلهم في أوروبا.
          </p>
        </div>
      </div>
    </footer>
  );
}
