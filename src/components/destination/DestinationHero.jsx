import { Link } from "react-router-dom";
import { APPLY_FORM_URL } from "../../config";

export default function DestinationHero({ destination }) {
  const { name, flag, tagline, heroSubtitle, color, colorSecondary, highlights, popularFor } = destination;

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-16">
      {/* Background: white with country-color tint */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-[0.06]" style={{ background: color }} />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full blob-violet" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, #4F46E5 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-slate-400 text-sm mb-10">
          <Link to="/" className="hover:text-slate-600 transition-colors">الرئيسية</Link>
          <span>/</span>
          <Link to="/#destinations" className="hover:text-slate-600 transition-colors">الوجهات</Link>
          <span>/</span>
          <span className="text-slate-600">{name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Content */}
          <div>
            {/* Flag + country header */}
            <div className="flex items-center gap-5 mb-6">
              <div
                className="w-20 h-20 rounded-3xl flex items-center justify-center text-5xl shadow-lg"
                style={{ background: `linear-gradient(135deg, ${color}22, ${colorSecondary}22)`, border: `2px solid ${color}33` }}
              >
                {flag}
              </div>
              <div>
                <div className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-1">وجهة الدراسة</div>
                <h1 className="text-4xl sm:text-5xl font-black text-slate-900 leading-none">
                  الدراسة في {name}
                </h1>
              </div>
            </div>

            {/* Tagline */}
            <p
              className="text-lg font-bold mb-4 leading-snug"
              style={{ color }}
            >
              {tagline}
            </p>

            {/* Description */}
            <p className="text-slate-500 text-base leading-relaxed mb-7 max-w-xl">
              {heroSubtitle}
            </p>

            {/* Popular fields */}
            <div className="flex flex-wrap gap-2 mb-10">
              {popularFor.map((field) => (
                <span
                  key={field}
                  className="bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm px-3 py-1 rounded-lg font-medium"
                >
                  {field}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={APPLY_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base px-7 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-indigo-200"
              >
                قدّم لـ{name} — مجاناً
                <svg className="w-4 h-4 rtl-flip" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right — Quick Facts card */}
          <div>
            <div className="bg-white rounded-3xl border border-slate-100 shadow-lg shadow-slate-100 overflow-hidden">
              {/* Card header with country gradient */}
              <div
                className="px-6 py-4 relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${color}dd, ${colorSecondary}cc)` }}
              >
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
                <div className="relative">
                  <div className="text-white/80 text-xs font-semibold uppercase tracking-wider mb-0.5">معلومات سريعة</div>
                  <div className="text-white font-black text-lg">{flag} {name} في لمحة</div>
                </div>
              </div>

              <div className="p-5 grid grid-cols-2 gap-3">
                {highlights.filter(h => h.title !== "أشهر الجامعات" && h.title !== "آخر موعد التسجيل").map((h) => (
                  <div key={h.title} className="bg-slate-50 rounded-2xl p-4 hover:bg-indigo-50 transition-colors">
                    <div className="text-2xl mb-2">{h.icon}</div>
                    <div className="text-slate-400 text-[11px] leading-tight mb-1">{h.title === "الرسوم تبدأ من" ? "الرسوم تبدأ من (مع المنح)" : h.title}</div>
                    <div className="text-slate-900 font-semibold text-xs leading-snug">{h.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
