import { Link } from "react-router-dom";
import StickyMobileCTA from "../components/common/StickyMobileCTA";
import { APPLY_FORM_URL } from "../config";

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "النتائج لا الوعود",
    desc: "نقيس النجاح بمعيار واحد: وصول الطالب إلى بلد وجهته بمكان جامعي حقيقي وإقامة قانونية. لا بعقود موقّعة.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "دائماً في متناول يدك",
    desc: "نحن على واتساب، لا خلف نظام تذاكر. حين يكون لديك سؤال في العاشرة مساءً قبيل موعد القنصلية — نُجيب.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "تقييم صادق",
    desc: "إذا كان ملفك يحتوي على تحديات، نخبرك بها بوضوح ونعطيك خطة لحلّها — لا عروضاً تسويقية تتبعها مفاجآت رفض.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "دعم من البداية للنهاية",
    desc: "لا نغلق ملفك عند حصولك على التأشيرة. نبقى معك حتى تُسجَّل في الجامعة وتحصل على تصريح الإقامة وتستقر في حياتك الجديدة.",
  },
];

const stats = [
  { number: "5", label: "وجهات أوروبية" },
  { number: "3+", label: "سنوات خبرة" },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blob-indigo" />
          <div className="absolute bottom-0 -left-20 w-[300px] h-[300px] rounded-full blob-violet" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: "radial-gradient(circle, #4F46E5 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 rounded-full px-4 py-1.5 mb-6">
              <span className="text-indigo-600 text-sm font-semibold">قصتنا</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 leading-tight">
              نحن طلاب أصبحنا المرشد{" "}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}>
                الذي كنا نتمنى وجوده.
              </span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed">
              وكالة النجاح أسّسها جزائريون مرّوا بتجربة الجامعات الأوروبية بالطريقة الصعبة — وحدهم، في حيرة، ويرتكبون أخطاءً باهظة الثمن. بنينا الوكالة التي كنا نتمنى وجودها.
            </p>
          </div>
        </div>
      </section>

      {/* Story + Stats */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="indigo-line" />
                <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">رسالتنا</span>
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-5">
                إعطاء كل طالب جزائري فرصة حقيقية في أوروبا
              </h2>
              <div className="space-y-4 text-slate-500 text-base leading-relaxed">
                <p>
                  المنظومة الجامعية الأوروبية جيدة فعلاً — رسوم ميسّرة، تعليم عالمي المستوى، ومسار نحو مستقبل لا يحلم به كثيرون في الوطن إلا في أحلامهم. لكن المسار للوصول إليها مُصمَّم ليكون مُربكاً.
                </p>
                <p>
                  تصديق الوثائق. شهادات اللغة. منصات التسجيل الجامعي. مقابلات Campus France. مواعيد القنصليات. تحضير ملف التأشيرة. طلبات تصريح الإقامة. كل خطوة فخ محتمل.
                </p>
                <p>
                  وكالة النجاح وُجدت لإزالة هذا الغموض. فعلنا ذلك مئات المرات. نعرف المواعيد النهائية وصيغ الوثائق وأسئلة المقابلات وتوقعات موظفي القنصلية. نضع هذه المعرفة في خدمة كل طالب نتعامل معه.
                </p>
                <p>
                  عرضنا بسيط:{" "}
                  <strong className="text-slate-900">أنت تركّز على التحضير لمستقبلك، ونحن نتكفّل بإيصالك إليه.</strong>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white rounded-2xl p-7 text-center border border-slate-100 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50 transition-all card-hover">
                  <div
                    className="text-3xl font-black mb-2"
                    style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-slate-500 text-sm leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="indigo-line" />
              <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">قيمنا</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900">كيف نعمل</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.title} className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50 transition-all card-hover">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {v.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-slate-100 rounded-3xl px-8 py-10 flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center text-2xl">
              🤝
            </div>
            <div className="flex-1 text-center lg:text-right">
              <h2 className="font-black text-slate-900 text-2xl mb-2">هل تريد العمل معنا؟</h2>
              <p className="text-slate-500 text-base leading-relaxed">
                نبحث عن أشخاص يؤمنون برسالتنا ويريدون تغيير مسار الطلاب الجزائريين. إذا كنت منهم، تفضّل بالتقديم — المناصب المتاحة ومعلومات التقديم في الصفحة المخصصة.
              </p>
            </div>
            <Link
              to="/careers"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-colors whitespace-nowrap"
            >
              اعرف المناصب المتاحة
              <svg className="w-4 h-4 rtl-flip" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl gradient-hero px-8 py-16 text-center">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/5" />
              <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-white/5" />
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "22px 22px" }}
              />
            </div>
            <div className="relative max-w-xl mx-auto">
              <h2 className="text-3xl font-black text-white mb-5">مستعد للعمل معنا؟</h2>
              <p className="text-white/70 mb-8 text-base leading-relaxed">
                استشارتك الأولى مجانية. أخبرنا بأهدافك وسنخبرك بالضبط كيف يبدو مسارك نحو أوروبا.
              </p>
              <a
                href={APPLY_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-indigo-700 font-black text-base px-10 py-4 rounded-xl transition-all hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-0.5"
              >
                ابدأ استشارتك المجانية
                <svg className="w-5 h-5 rtl-flip" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <StickyMobileCTA label="ابدأ استشارتك المجانية" />
    </>
  );
}
