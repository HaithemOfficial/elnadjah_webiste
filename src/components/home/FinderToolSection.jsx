export default function FinderToolSection() {
  return (
    <section className="py-14 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-100 rounded-3xl px-8 py-8 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
          <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center">
            <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
          <div className="flex-1 text-center sm:text-right">
            <p className="font-bold text-slate-900 text-base mb-1">لست متأكداً من أي دولة تناسبك؟</p>
            <p className="text-slate-500 text-sm leading-snug">أجب على 5 أسئلة سريعة وستجد أفضل وجهة تناسب ملفك وميزانيتك.</p>
          </div>
          <a
            href="https://finder.elnadjah.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors border border-indigo-100 whitespace-nowrap"
          >
            جرّب الأداة — مجاناً
          </a>
        </div>
      </div>
    </section>
  );
}
