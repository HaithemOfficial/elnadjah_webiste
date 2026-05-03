import { Link } from "react-router-dom";
import { destinations } from "../../data/destinations";
import { APPLY_FORM_URL } from "../../config";

export default function DestinationGrid() {
  const activeDestinations = destinations.filter((d) => !d.inactive);
  const inactiveDestinations = destinations.filter((d) => d.inactive);
  const featuredDestinations = activeDestinations.slice(0, 2);
  const remainingDestinations = [...activeDestinations.slice(2), ...inactiveDestinations];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="indigo-line" />
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">الوجهات</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">
            5 دول أوروبية —{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}>
              وجهة لكل ملف.
            </span>
          </h2>
          <p className="text-slate-500 text-base leading-relaxed">
            كل وجهة لها مزاياها الخاصة. نساعدك على الاختيار بناءً على أهدافك وميزانيتك وملفك — لا بناءً على ما هو شائع فحسب.
          </p>
        </div>

        {/* Featured destinations — 2-column top row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          {featuredDestinations.map((dest) => (
            <Link
              key={dest.id}
              to={`/destinations/${dest.slug}`}
              className="group relative overflow-hidden rounded-3xl bg-white border border-slate-100 hover:shadow-2xl hover:shadow-indigo-100 transition-all block"
            >
              {/* Country color gradient header */}
              <div
                className="h-32 relative flex items-end p-6"
                style={{ background: `linear-gradient(135deg, ${dest.color}ee, ${dest.colorSecondary}cc)` }}
              >
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
                <div className="relative flex items-end gap-4 w-full">
                  <span className="text-6xl drop-shadow-sm">{dest.flag}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-black text-white text-2xl leading-tight">الدراسة في {dest.name}</h3>
                    <p className="text-white/80 text-sm mt-0.5 leading-tight line-clamp-1">{dest.tagline.split(".")[0]}.</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Key stats row */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {dest.highlights.slice(0, 3).map((h) => (
                    <div key={h.title} className="bg-slate-50 rounded-xl p-3 text-center">
                      <div className="text-lg mb-1">{h.icon}</div>
                      <div className="text-slate-400 text-[10px] leading-tight mb-0.5">{h.title}</div>
                      <div className="text-slate-800 font-semibold text-[11px] leading-tight">{h.value.split(" ").slice(0, 3).join(" ")}</div>
                    </div>
                  ))}
                </div>

                {/* Field tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {dest.popularFor.slice(0, 4).map((field) => (
                    <span key={field} className="bg-indigo-50 text-indigo-700 text-xs px-3 py-1 rounded-lg font-medium">
                      {field}
                    </span>
                  ))}
                </div>

                {/* CTA row */}
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-indigo-600 text-sm font-semibold group-hover:gap-3 transition-all">
                    اكتشف {dest.name}
                    <svg className="w-4 h-4 rtl-flip" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <span className="text-slate-400 text-xs">{dest.highlights.find(h => h.title.includes("الرسوم"))?.value.split(" ").slice(0, 3).join(" ") ?? ""}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom row — 3 smaller cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {remainingDestinations.map((dest) =>
            dest.inactive ? (
              <div
                key={dest.id}
                className="relative overflow-hidden rounded-2xl bg-white border border-slate-100 opacity-50 cursor-not-allowed"
              >
                <div
                  className="h-20 relative flex items-end px-5 pb-4"
                  style={{ background: `linear-gradient(135deg, ${dest.color}88, ${dest.colorSecondary}66)` }}
                >
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "14px 14px" }} />
                  <div className="relative flex items-end gap-3">
                    <span className="text-4xl drop-shadow-sm grayscale">{dest.flag}</span>
                    <div>
                      <h3 className="font-black text-white text-lg leading-tight">الدراسة في {dest.name}</h3>
                    </div>
                  </div>
                  <span className="absolute top-2 left-2 bg-slate-700 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">مؤقتاً متوقف</span>
                </div>
                <div className="p-5">
                  <p className="text-slate-400 text-xs mb-4 leading-snug line-clamp-2">{dest.tagline.split(".")[0]}.</p>
                  <p className="text-slate-400 text-xs">التسجيل متوقف مؤقتاً. تابعنا للإعلان عن إعادة الفتح.</p>
                </div>
              </div>
            ) : (
            <Link
              key={dest.id}
              to={`/destinations/${dest.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-white border border-slate-100 hover:shadow-xl hover:shadow-indigo-100 transition-all block"
            >
              {/* Color bar top */}
              <div
                className="h-20 relative flex items-end px-5 pb-4"
                style={{ background: `linear-gradient(135deg, ${dest.color}ee, ${dest.colorSecondary}cc)` }}
              >
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "14px 14px" }} />
                <div className="relative flex items-end gap-3">
                  <span className="text-4xl drop-shadow-sm">{dest.flag}</span>
                  <div>
                    <h3 className="font-black text-white text-lg leading-tight">الدراسة في {dest.name}</h3>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <p className="text-slate-400 text-xs mb-4 leading-snug line-clamp-2">{dest.tagline.split(".")[0]}.</p>

                <div className="space-y-2 mb-4">
                  {dest.highlights.slice(0, 2).map((h) => (
                    <div key={h.title} className="flex items-center gap-2">
                      <span className="text-base">{h.icon}</span>
                      <span className="text-slate-500 text-xs">{h.title}:</span>
                      <span className="text-slate-800 text-xs font-medium truncate">{h.value.split(" ").slice(0, 3).join(" ")}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {dest.popularFor.slice(0, 2).map((field) => (
                    <span key={field} className="bg-indigo-50 text-indigo-700 text-[11px] px-2.5 py-0.5 rounded-lg font-medium">
                      {field}
                    </span>
                  ))}
                </div>

                <span className="flex items-center gap-1.5 text-indigo-600 text-sm font-semibold group-hover:gap-3 transition-all">
                  اكتشف {dest.name}
                  <svg className="w-3.5 h-3.5 rtl-flip" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </div>
            </Link>
            )
          )}

        </div>

        {/* Bottom apply CTA */}
        <div className="mt-10 text-center">
          <p className="text-slate-500 text-sm mb-4">لست متأكداً من أي وجهة تناسبك أكثر؟</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://finder.elnadjah.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-indigo-700 font-semibold text-sm px-6 py-3 rounded-xl transition-colors border border-indigo-100"
            >
              أداة اختيار الوجهة
              <svg className="w-4 h-4 rtl-flip" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href={APPLY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
            >
              تحدّث مع مستشار — مجاناً
              <svg className="w-4 h-4 rtl-flip" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
