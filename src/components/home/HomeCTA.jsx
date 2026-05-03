import { APPLY_FORM_URL } from "../../config";

const guarantees = [
  "استشارة مجانية",
  "بدون رسوم مخفية",
  "عقود مباشرة مع أغلب الجامعات",
  "دعم كامل حتى الوصول",
];

export default function HomeCTA() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl gradient-hero px-8 py-16 lg:py-20 text-center">
          {/* Background decorations */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/5" />
            <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-white/5" />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
          </div>

          <div className="relative max-w-2xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 mb-7">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-semibold">أماكن محدودة في كل دورة</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              كل شهر تنتظره هو شهر يتأخر فيه حصولك على التأشيرة.
            </h2>

            <p className="text-white/70 text-base leading-relaxed mb-4 max-w-xl mx-auto">
              تحضير الوثائق وشهادات اللغة وطلبات الجامعات ومواعيد التأشيرة — كلها تحتاج وقتاً. من ينتظر يبدأ من الصفر.
            </p>

            <p className="text-white/50 text-sm mb-10">
              استشارتك الأولى مجانية. لا التزام — فقط أول خطوة.
            </p>

            <a
              href={APPLY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-indigo-700 font-black text-lg px-10 py-4 rounded-xl transition-all hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-0.5"
            >
              تحدّث مع مستشار — مجاناً
              <svg className="w-5 h-5 rtl-flip" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            <div className="flex flex-wrap items-center justify-center gap-5 mt-10">
              {guarantees.map((g) => (
                <span key={g} className="flex items-center gap-1.5 text-white/60 text-sm">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {g}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
