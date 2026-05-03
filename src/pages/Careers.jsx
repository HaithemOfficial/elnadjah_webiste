const openings = [
  {
    title: "مستشار قبول جامعي",
    type: "دوام كامل / جزئي",
    location: "عن بُعد — الجزائر",
    desc: "ترافق الطلاب من أول استشارة حتى قبولهم الجامعي. تشرح الخيارات، تُقيّم الملفات، وتُجيب على الأسئلة يومياً.",
    skills: ["خبرة في التعليم العالي أو الدراسة في الخارج", "عربية ممتازة + إنجليزية جيدة", "أسلوب تواصل واضح وصبور"],
  },
  {
    title: "متخصص وثائق وتأشيرات",
    type: "دوام كامل",
    location: "عن بُعد — الجزائر",
    desc: "تتولى تجميع ملفات الطلاب، تصديق الوثائق، الترجمات المعتمدة، وتحضير ملف التأشيرة من الألف إلى الياء.",
    skills: ["معرفة بإجراءات تصديق الوثائق والقنصليات", "دقة عالية في التفاصيل", "قدرة على متابعة عدة ملفات بالتوازي"],
  },
  {
    title: "منسق وسائل التواصل الاجتماعي",
    type: "دوام جزئي",
    location: "عن بُعد",
    desc: "تُنتج وتنشر محتوى يومياً على إنستغرام وتيك توك ويوتيوب. قصص طلاب، نصائح، تغطيات رحلات.",
    skills: ["إبداع في صناعة المحتوى بالعربية", "إلمام بـ Reels وTikTok", "شغف بقصص النجاح"],
  },
];

const perks = [
  { icon: "🌍", label: "عمل عن بُعد بالكامل" },
  { icon: "📈", label: "نمو سريع مع فريق صغير وطموح" },
  { icon: "🎓", label: "تأثير حقيقي — تغيّر مسار طالب كل أسبوع" },
  { icon: "💬", label: "بيئة عمل بالعربية وبدون بيروقراطية" },
];

export default function Careers() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blob-indigo opacity-60" />
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, #4F46E5 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
            <span className="text-indigo-700 text-sm font-semibold">انضم إلى الفريق</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight mb-5">
            ساعدنا في{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}>
              تغيير مسار
            </span>{" "}
            الطلاب الجزائريين
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            وكالة النجاح تنمو — ونبحث عن أشخاص يؤمنون بأن كل طالب جزائري يستحق فرصة حقيقية في أوروبا. إذا كنت منهم، نريد أن نتعرف عليك.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {perks.map((p) => (
              <div key={p.label} className="bg-white border border-slate-100 rounded-2xl p-5 text-center">
                <div className="text-3xl mb-2">{p.icon}</div>
                <p className="text-slate-700 text-sm font-semibold leading-snug">{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-slate-900 mb-8">المناصب المتاحة</h2>
          <div className="space-y-5">
            {openings.map((job) => (
              <div key={job.title} className="bg-white border border-slate-100 hover:border-indigo-200 rounded-3xl p-7 transition-all hover:shadow-lg hover:shadow-indigo-50">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <h3 className="font-black text-slate-900 text-xl">{job.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full">{job.type}</span>
                    <span className="bg-slate-100 text-slate-600 text-xs font-medium px-3 py-1 rounded-full">{job.location}</span>
                  </div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{job.desc}</p>
                <ul className="space-y-1.5">
                  {job.skills.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-slate-600 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white border border-slate-100 rounded-3xl p-10 shadow-sm">
            <div className="text-5xl mb-5">✉️</div>
            <h2 className="text-2xl font-black text-slate-900 mb-3">أرسل لنا طلبك</h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              أرسل سيرتك الذاتية وسطرين تشرح فيهما لماذا تريد الانضمام إلينا. لا نطلب خطاباً رسمياً — نريد أن نعرف شخصيتك الحقيقية.
            </p>
            <a
              href="mailto:elnadjah.agency@gmail.com?subject=طلب انضمام إلى فريق وكالة النجاح"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-indigo-200 mb-4"
            >
              أرسل طلبك عبر البريد
            </a>
            <p className="text-slate-400 text-xs">elnadjah.agency@gmail.com · نردّ على كل الطلبات خلال 5 أيام عمل</p>
          </div>
        </div>
      </section>
    </div>
  );
}
