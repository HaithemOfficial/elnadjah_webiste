import { APPLY_FORM_URL } from "../../config";

export default function DestinationCTA({ destination }) {
  const { name, flag } = destination;

  return (
    <section className="py-20 lg:py-28 bg-white">
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
                backgroundSize: "22px 22px",
              }}
            />
          </div>

          <div className="relative max-w-2xl mx-auto">
            <div className="text-6xl mb-6">{flag}</div>

            <h2 className="text-3xl sm:text-4xl font-black text-white mb-5 leading-tight">
              مستعد لبدء رحلتك نحو {name}؟
            </h2>

            <p className="text-white/70 text-base leading-relaxed mb-4 max-w-xl mx-auto">
              لديك المعلومات. تعرف التكاليف والجدول الزمني والمتطلبات. ما تبقى هو قرار البدء.
            </p>

            <p className="text-white/50 text-sm mb-10">
              استشارتك الأولى مجانية وبلا التزام. سنقيّم ملفك وسنخبرك بالضبط كيف يبدو مسارك.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href={APPLY_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-indigo-700 font-black text-base px-10 py-4 rounded-xl transition-all hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-0.5"
              >
                قدّم لـ{name} الآن
                <svg className="w-5 h-5 rtl-flip" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="https://finder.elnadjah.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/20 border border-white/25 text-white font-semibold text-base px-7 py-4 rounded-xl transition-colors"
              >
                قارن الوجهات
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-5">
              {[
                "استشارة مجانية",
                "دعم كامل للوثائق",
                "تحضير التأشيرة مشمول",
                "دعم حتى الوصول",
              ].map((g) => (
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
