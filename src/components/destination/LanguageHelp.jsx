import { APPLY_FORM_URL } from "../../config";

export default function LanguageHelp({ destination }) {
  const { name, languageNote } = destination;

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #312E81 0%, #4F46E5 50%, #6D28D9 100%)" }}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5" />
        <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-white/5" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 mb-5">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span className="text-white/90 text-sm font-semibold">تحضير اللغة</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 leading-tight">
                لا تملك شهادة اللغة بعد؟ لدينا مسار مناسب لك.
              </h2>
              <p className="text-white/70 text-base leading-relaxed mb-6">
                {languageNote}
              </p>
              <ul className="space-y-2.5">
                {[
                  "تقييم مستواك اللغوي في الاستشارة الأولى",
                  "إحالتك إلى برامج تحضير معتمدة",
                  "تدريب على امتحانات DELF / TCF / CILS / IELTS",
                  "الوثائق تُحضَّر بالتوازي — لا وقت ضائع",
                  "جدول زمني مُعدَّل ليتوافق موعد الامتحان مع موعد التقديم",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-white/70 text-sm">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-7 text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-white text-lg mb-2">لا تدع اللغة تعيقك</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  معظم الطلاب الذين ظنّوا أن اللغة عائق للدراسة في {name} وصلوا هناك بعد 8 أشهر. اللغة قابلة للتعلم. الفرصة الآن.
                </p>
                <a
                  href={APPLY_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white hover:bg-slate-50 text-indigo-700 font-bold text-sm py-3.5 px-6 rounded-xl transition-colors"
                >
                  تحدّث معنا عن تحضير اللغة
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
