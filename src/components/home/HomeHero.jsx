import { Link, NavLink } from "react-router-dom";
import { APPLY_FORM_URL } from "../../config";
import { destinations } from "../../data/destinations";

const stats = [
  { value: "5", label: "وجهات أوروبية" },
  { value: "مجاني", label: "الاستشارة الأولى" },
  { value: "كامل", label: "الدعم حتى الوصول" },
  { value: "شفاف", label: "عرض السعر" },
];

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full blob-indigo" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full blob-violet" />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, #4F46E5 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: EMOTION first — headline, aspiration, CTA ─────── */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 rounded-full px-4 py-1.5 mb-7">
              <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
              <span className="text-indigo-700 text-sm font-semibold" dir="ltr">الجزائر ← أوروبا · مسار مُجرَّب</span>
            </div>

            {/* Video 3: curiosity headline — specific result + "what it's not"  */}
            {/* Video 5: point to a specific number (90 يوماً)                  */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-slate-900 leading-[1.2] mb-5">
              من الجزائر إلى{" "}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)" }}>
                جامعة أوروبية
              </span>{" "}
              — نرشدك من القبول الجامعي إلى الفيزا.
            </h1>

            {/* Video 3: sub-headline expands on what it's NOT, builds curiosity */}
            {/* Video 4: speak to ONE desire — "الدراسة في أوروبا بدون تعقيد"  */}
            <p className="text-lg text-slate-600 leading-relaxed mb-2">
              ليست صدفة… بل توجيه صحيح.
            </p>
            <p className="text-base text-slate-500 leading-relaxed mb-8">
              نظام مُجرَّب أوصل طلاباً جزائريين إلى إيطاليا وليتوانيا. الاستشارة الأولى مجانية — تتحدث مع متخصص، تخرج بخطة واضحة وعرض سعر شفاف.
            </p>

            {/* Video 1: CTA must say exactly what happens — book a call */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href={APPLY_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-base px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-indigo-200 hover:-translate-y-0.5"
              >
                تحدّث مع مستشار — مجاناً
                <svg className="w-4 h-4 rtl-flip" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            {/* Micro-trust signals */}
            <div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm mb-10">
              {["مجاني وبدون التزام", "عقود مباشرة مع أغلب الجامعات", "مرافقة من الملف حتى الوصول"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>

            {/* Stats — Video 5: specific numbers the prospect can point to */}
            <div className="grid grid-cols-4 gap-4 pt-8 border-t border-slate-100">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl sm:text-3xl font-black text-indigo-600">{s.value}</div>
                  <div className="text-slate-500 text-xs mt-0.5 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: destination cards + current offer urgency ─────── */}
          <div className="hidden lg:flex flex-col gap-3">
            {/* Journey card */}
            <div className="gradient-hero rounded-3xl p-6 text-white">
              <div className="text-sm font-semibold text-white/70 mb-1">مسيرتك</div>
              <div className="text-2xl font-black mb-3" dir="ltr">الجزائر ← أوروبا</div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center text-base">🇩🇿</div>
                <span className="text-white/70 text-sm mx-1">←</span>
                <div className="flex -space-x-2">
                  {destinations.map((d) => (
                    <div key={d.id} className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-base ${d.inactive ? "bg-white/10 border-white/15 opacity-35 grayscale" : "bg-white/20 border-white/30"}`}>{d.flag}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Featured — Italy (current offer) + Lithuania */}
            <div className="grid grid-cols-2 gap-3">
              <NavLink
                to="/current-offer"
                className="group relative flex flex-col gap-2 bg-amber-50 border-2 border-amber-300 hover:border-amber-400 rounded-2xl px-4 py-4 transition-all hover:shadow-lg hover:shadow-amber-100 card-hover overflow-hidden"
              >
                <span className="text-3xl mt-3">🇮🇹</span>
                <div>
                  <div className="font-black text-slate-900 text-base">إيطاليا</div>
                  <div className="text-xs text-amber-700 font-semibold group-hover:text-amber-800 transition-colors">نتقدم لأكثر من جامعة — فرصة قبول أعلى ←</div>
                </div>
              </NavLink>

              <Link
                to="/destinations/lithuania"
                className="group relative flex flex-col gap-2 bg-indigo-50 border-2 border-indigo-200 hover:border-indigo-400 rounded-2xl px-4 py-4 transition-all hover:shadow-lg hover:shadow-indigo-100 card-hover overflow-hidden"
              >
                <span className="text-3xl mt-3">🇱🇹</span>
                <div>
                  <div className="font-black text-slate-900 text-base">ليتوانيا</div>
                  <div className="text-xs text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors">من أعلى فرص التأشيرة في أوروبا الآن ←</div>
                </div>
              </Link>
            </div>

            {/* Other destinations */}
            <div className="grid grid-cols-3 gap-3">
              {destinations.filter((d) => d.slug !== "italy" && d.slug !== "lithuania").map((d) =>
                d.inactive ? (
                  <div
                    key={d.slug}
                    className="relative flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-2xl px-3 py-3 opacity-50 cursor-not-allowed"
                  >
                    <span className="text-xl grayscale">{d.flag}</span>
                    <div>
                      <div className="font-semibold text-slate-500 text-xs">{d.name}</div>
                      <div className="text-[10px] text-red-400 font-semibold">أُغلق التسجيل</div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={d.slug}
                    to={`/destinations/${d.slug}`}
                    className="group flex items-center gap-2 bg-white border border-slate-100 hover:border-indigo-200 rounded-2xl px-3 py-3 transition-all hover:shadow-md hover:shadow-indigo-50 card-hover"
                  >
                    <span className="text-xl">{d.flag}</span>
                    <div>
                      <div className="font-semibold text-slate-900 text-xs">{d.name}</div>
                      <div className="text-[10px] text-slate-400 group-hover:text-indigo-500 transition-colors">اكتشف ←</div>
                    </div>
                  </Link>
                )
              )}
            </div>

            {/* Poland closed urgency note */}
            <div className="flex items-start gap-2 bg-red-50 border border-red-100 rounded-xl px-3 py-2.5 text-xs text-red-600">
              <span className="mt-0.5">⚠️</span>
              <span>فرنسا وإسبانيا وبولندا متوقفة مؤقتاً — إيطاليا وليتوانيا مفتوحتان، لكن الأماكن محدودة.</span>
            </div>

            {/* Trust chip */}
            <div className="flex items-center gap-2 mt-1 px-1">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-slate-500 text-xs">موثوق من طلاب جزائريين في أوروبا</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
