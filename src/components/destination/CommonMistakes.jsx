export default function CommonMistakes({ destination }) {
  const { name, commonMistakes } = destination;

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <span className="indigo-line" />
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">أخطاء شائعة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
            الأخطاء التي تُضيّع قبول {name} (وكيف نمنعها)
          </h2>
          <p className="text-slate-500 text-base mb-8 leading-relaxed">
            رأينا مئات الملفات. هذه أكثر أسباب الرفض أو تفويت المواعيد شيوعاً — وهذا بالضبط لماذا يهم وجود مرشد.
          </p>

          <div className="space-y-3">
            {commonMistakes.map((mistake, i) => (
              <div key={i} className="flex items-start gap-4 bg-slate-50 hover:bg-rose-50 rounded-2xl p-4 border border-slate-100 hover:border-rose-100 transition-all">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 text-xs font-bold">
                  {i + 1}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed flex-1">{mistake}</p>
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-indigo-50 border border-indigo-200 rounded-2xl p-5 flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <p className="text-indigo-800 text-sm leading-relaxed">
              <strong>مهمة وكالة النجاح التأكد من أن أياً من هذه الأخطاء لن تقع عليك.</strong> نتابع كل موعد، نراجع كل وثيقة، ونُحضّرك لكل نقطة تفتيش — حتى يكون ملفك محكماً من اليوم الأول.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
