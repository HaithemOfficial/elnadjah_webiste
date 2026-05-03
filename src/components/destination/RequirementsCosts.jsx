import { APPLY_FORM_URL } from "../../config";

export default function RequirementsCosts({ destination }) {
  const { name, requirements, costs, easyEntry } = destination;

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Requirements */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="indigo-line" />
              <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">المتطلبات</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6">
              ما تحتاجه للتقديم في {name}
            </h2>

            {easyEntry ? (
              <div className="space-y-3">
                {/* Easy entry banner */}
                <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-2xl px-5 py-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-black text-emerald-800 text-base">شهادة البكالوريا — هذا كل ما تحتاجه</div>
                    <div className="text-emerald-600 text-xs mt-0.5">من أقل الدول الأوروبية متطلبات للقبول الجامعي</div>
                  </div>
                </div>
                {/* Financial qualifier */}
                <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-base font-black">₴</span>
                  </div>
                  <div>
                    <div className="font-black text-amber-800 text-sm">القدرة المالية — لا تقل عن 110 مليون</div>
                    <div className="text-amber-700 text-xs mt-0.5 leading-relaxed">تغطي كل شيء من الإجراءات حتى لحظة وصولك إلى المطار — أكبر بند هو رسوم السنة الدراسية الأولى.</div>
                  </div>
                </div>
                {/* No English cert */}
                <div className="flex items-start gap-3 bg-indigo-50 border border-indigo-100 rounded-2xl px-5 py-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-indigo-600 text-lg">🗣️</span>
                  </div>
                  <div>
                    <div className="font-black text-indigo-800 text-sm">في الغالب لا تحتاج شهادة إنجليزية</div>
                    <div className="text-indigo-600 text-xs mt-0.5 leading-relaxed">معظم الجامعات الليتوانية تقبل بمقابلة أو اختبار داخلي بدلاً من IELTS أو ما يعادله.</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
                {requirements.map((req, i) => (
                  <div key={i} className="flex items-center gap-4 px-5 py-4 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors">
                    <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${req.mandatory ? "bg-indigo-100" : "bg-slate-100"}`}>
                      {req.mandatory ? (
                        <svg className="w-3.5 h-3.5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-slate-400" />
                      )}
                    </span>
                    <span className="text-slate-700 text-sm flex-1">{req.item}</span>
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-lg flex-shrink-0 ${req.mandatory ? "bg-indigo-50 text-indigo-700" : "bg-slate-100 text-slate-500"}`}>
                      {req.mandatory ? "إلزامي" : "اختياري"}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <p className="text-slate-400 text-xs mt-3 leading-relaxed">
              نُرشدك في تجهيز وتقديم جميع الوثائق المطلوبة.
            </p>
          </div>

          {/* Costs */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="indigo-line" />
              <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">التكاليف التقديرية</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6">
              كم تكلّف الدراسة في {name}؟
            </h2>

            <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm mb-4">
              {[
                { label: "الرسوم الجامعية (سنوياً)", value: costs.tuition },
                { label: "السكن (شهرياً)", value: costs.housing },
                { label: "الطعام (شهرياً)", value: costs.food },
                { label: "المواصلات (شهرياً)", value: costs.transport },
                { label: "التأمين الصحي", value: costs.health },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between px-5 py-3.5 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors">
                  <span className="text-slate-500 text-sm">{row.label}</span>
                  <span className="text-slate-900 font-semibold text-sm">{row.value}</span>
                </div>
              ))}
              <div className="flex items-center justify-between px-5 py-4" style={{ background: "linear-gradient(135deg, #EEF2FF, #F5F3FF)" }}>
                <span className="text-slate-900 font-bold text-sm">الإجمالي التقديري الشهري</span>
                <span className="text-indigo-700 font-black text-base">{costs.total}</span>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4 mb-5">
              <p className="text-indigo-800 text-sm leading-relaxed">{costs.notes}</p>
            </div>

            <a
              href={APPLY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
            >
              احصل على تفصيل تكاليفي الشخصية
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
