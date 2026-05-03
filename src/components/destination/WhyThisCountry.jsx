export default function WhyThisCountry({ destination }) {
  const { name, flag, whyThis, highlights } = destination;

  return (
    <section className="py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 items-start">
          {/* Why */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="indigo-line" />
              <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">لماذا {name}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-7">
              لماذا يختار طلابنا {flag} {name}
            </h2>
            <ul className="space-y-4">
              {whyThis.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="text-slate-600 text-base leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
