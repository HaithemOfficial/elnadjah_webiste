const steps = [
  {
    number: "01",
    title: "استشارة مجانية",
    description: "نتحدث معك، نفهم وضعك وأهدافك، ونرى إن كنا الخيار الأنسب لك. مجاناً وبدون أي التزام.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "خطة واضحة وتكلفة شفافة",
    description: "نبني لك خارطة طريق: الدولة، الجامعة، الوثائق المطلوبة، والتكلفة الإجمالية المتوقعة — بدون مفاجآت.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "تحضير الوثائق والترجمات",
    description: "نُرشدك في كل خطوة: تصديق الوثائق،الترجمات المعتمدة، طلبات القبول، رسائل التحفيز. بلا تشويش ولا أوراق مفقودة.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "تحضير المقابلة (إن طُلبت)",
    description: "إن اشترطت الجامعة مقابلة، نُعدّك لها بشكل كامل — أساتذة متخصصون ومنصة تدريبية خاصة حتى تدخل بثقة.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "إرشاد تأشيرة الدراسة",
    description: "نُحضّر ملف تأشيرتك كاملاً ونُرشدك خطوة بخطوة قبل موعد القنصلية حتى تدخل مُستعداً.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "توجيه عند الوصول",
    description: "نرشدك إلى ما يجب فعله بعد الوصول — تصريح الإقامة، التسجيل الجامعي، وفتح حساب بنكي. لن تكون وحدك في اليوم الأول.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="indigo-line" />
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">خطوات العمل</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
            من الجزائر إلى أوروبا في{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}>
              6 خطوات واضحة
            </span>
          </h2>
          <p className="text-slate-500 text-base leading-relaxed">
            نُزيل الغموض والتخمين. كل طالب يحصل على خارطة طريق واضحة وفريق يتابعه حتى الحصول على التأشيرة.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, index) => (
            <div key={step.number} className="group relative bg-white rounded-2xl p-6 border border-slate-100 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50 transition-all card-hover">
              {/* Number + Icon row */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {step.icon}
                </div>
                <span className="text-5xl font-black text-slate-100 group-hover:text-indigo-100 transition-colors leading-none">
                  {step.number}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>

              {/* Connector line for desktop */}
              {index < steps.length - 1 && (index + 1) % 3 !== 0 && (
                <div className="hidden lg:block absolute top-10 -left-2.5 w-5 h-px bg-indigo-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
