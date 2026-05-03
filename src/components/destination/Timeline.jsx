import { APPLY_FORM_URL } from "../../config";

export default function Timeline({ destination }) {
  const { name, timeline, timelineNote, timelineUrgency, scholarships } = destination;

  return (
    <section className="py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <span className="indigo-line" />
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">الجدول الزمني</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
            طريقك إلى {name} — خطوة بخطوة
          </h2>
          <p className="text-slate-500 text-base mb-3 leading-relaxed">
            كل خطوة لها ترتيبها. هذا الجدول يساعدك على معرفة ما يجب فعله أولاً حتى لا يفوتك شيء.
          </p>
          {destination.slug === "lithuania" && (
            <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-2.5 mb-8 text-sm text-emerald-700 font-medium">
              <span>✅</span>
              <span>تبدو كثيرة؟ نحن نرشدك في كل خطوة — أنت لا تمشي وحدك.</span>
            </div>
          )}

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line — on right side for RTL */}
            <div className="absolute right-6 top-0 bottom-0 w-0.5 bg-indigo-100" />

            <div className="space-y-4">
              {timeline.map((item, i) => (
                <div key={i} className="relative flex items-start gap-5 pr-16">
                  {/* Circle */}
                  <div className="absolute right-0 w-12 h-12 rounded-full gradient-indigo flex items-center justify-center flex-shrink-0 shadow-md shadow-indigo-200">
                    <span className="text-white font-black text-lg">{i + 1}</span>
                  </div>

                  <div className="bg-white border border-slate-100 rounded-2xl p-4 flex-1 hover:border-indigo-200 hover:shadow-md hover:shadow-indigo-50 transition-all">
                    <p className="text-slate-800 font-medium text-sm leading-relaxed">{item.task}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scholarship note — only for destinations that offer it */}
          {scholarships !== false && (
            <div className="mt-6 flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl px-4 py-3.5 text-sm text-amber-800">
              <span className="text-lg mt-0.5">🎓</span>
              <span>نتقدّم على المنح المتاحة بالتوازي مع كل خطوة — قد تحصل على دراسة مجانية أو برسوم مخفّضة.</span>
            </div>
          )}

          {/* Destination-specific timeline note */}
          {timelineNote && (
            <div className="mt-4 flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-2xl px-4 py-4 text-sm text-slate-700">
              <span className="text-lg mt-0.5 flex-shrink-0">📋</span>
              <span className="leading-relaxed">{timelineNote}</span>
            </div>
          )}

          <div className="mt-4 rounded-2xl p-5 flex items-start gap-3" style={{ background: "linear-gradient(135deg, #EEF2FF, #F5F3FF)", border: "1px solid #C7D2FE" }}>
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-indigo-900 text-sm mb-1">ابدأ اليوم لا غداً</p>
              <p className="text-indigo-800 text-sm leading-relaxed">
                {timelineUrgency || "أكثر سبب يُضيّع الطلاب فيه الدورة هو البدء المتأخر. تصديق الوثائق والحصول على شهادة اللغة يأخذان وقتاً. من يبدأ الآن يصل في الوقت المناسب."}{" "}
                <a href={APPLY_FORM_URL} target="_blank" rel="noopener noreferrer" className="font-semibold underline hover:text-indigo-600">
                  احجز استشارتك الآن وتقدم على الجميع.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
