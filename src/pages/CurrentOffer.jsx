import { useState, useEffect } from "react";
import { APPLY_FORM_URL } from "../config";
import StickyMobileCTA from "../components/common/StickyMobileCTA";

const DEADLINE = new Date("2026-06-15T23:59:59");
const SPOTS_LEFT = 8;
const ORIGINAL_PRICE = 350;
const DISCOUNT_PRICE = 210;
const DISCOUNT_PCT = 40;

function useCountdown() {
  const calc = () => {
    const diff = Math.max(0, DEADLINE.getTime() - Date.now());
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function CountBox({ value, label }) {
  return (
    <div className="flex flex-col items-center bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-3 min-w-[68px]">
      <span className="text-3xl sm:text-4xl font-black text-white leading-none tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-white/60 text-xs mt-1 font-medium">{label}</span>
    </div>
  );
}

const painPoints = [
  "تريد الدراسة في إيطاليا لكن لا تعرف من أين تبدأ وكل ما تقرأه يعارض ما قبله",
  "اللغة الإيطالية تبدو عقبة لا يمكن تجاوزها قبل أن تبدأ أصلاً",
  "تخشى رفض التأشيرة بعد أشهر من التعب والوثائق والمال",
  "سبق وحاولت ثم توقفت لأن الخطوات كانت ضائعة ومتناقضة",
  "ترى أصدقاءك يدرسون في أوروبا وتتساءل بصدق: لماذا ليس أنا؟",
];

// 3 testimonials — each with a different fear so every prospect sees themselves (Video 1 & 2)
// Specific outcomes stated: not "I loved it" but "got visa in X weeks" (Video 5)
const testimonials = [
  {
    initials: "KM",
    name: "كريم م.",
    location: "الجزائر العاصمة ← ميلانو",
    fear: "كان يظن أن القبول سيأخذ وقتاً طويلاً",
    quote: "قدّمنا له على الجامعة المناسبة، وحصل على القبول في أسبوع واحد فقط، وهذا كان أسرع مما توقع.",
    result: "قبول جامعي خلال أسبوع",
  },
  {
    initials: "SB",
    name: "سارة ب.",
    location: "وهران ← بولونيا",
    fear: "كانت تبحث عن منحة مناسبة مع القبول ولم تكن تعرف من أين تبدأ",
    quote: "قدمنا لها على الخيار المناسب، وحصلت على القبول والمنحة معاً في 10 أيام فقط.",
    result: "قبول ومنحة في 10 أيام",
  },
  {
    initials: "AK",
    name: "أمين ك.",
    location: "قسنطينة ← تورينو",
    fear: "كان متردداً بسبب كثرة البرامج ولم يعرف أين يقدم",
    quote: "عرفنا أين نرسل الملف، وقدّمنا على أكثر من برنامج. خلال شهر واحد فقط حصل على أكثر من قبول.",
    result: "أكثر من قبول في شهر واحد",
  },
];

// FAQ = handle every objection before the final CTA (Video 2)
// So the call is easy: they arrive pre-sold, not asking IF but HOW (Video 2)
const faqs = [
  {
    q: "لا أعرف الإيطالية — هل يمكنني الدراسة هناك؟",
    a: "نعم. نُرشدك إلى برامج تُدرَّس بالكامل بالإنجليزية — خاصة في الهندسة وعلوم الحاسوب والاقتصاد. بالتوازي نوفر لك دورة إيطالية A1 مجانية ضمن الحزمة. لا حاجز لغوي يوقف مسارك.",
  },
  {
    q: "ماذا يحدث تحديداً في الاستشارة المجانية؟",
    a: "30 دقيقة نقيّم فيها ملفك الأكاديمي، نُرشّح لك 3 جامعات إيطالية مناسبة مع تفسير السبب لكل اختيار، وتخرج بخطة طريق مكتوبة وسعر شفاف. بعدها أنت تقرر — بدون أي ضغط.",
  },
  {
    q: "ماذا لو رُفضت تأشيرتي الإيطالية؟",
    a: "رفض التأشيرة نادر جداً حين يكون الملف مُحضَّراً بشكل صحيح — وهذا تخصصنا. لو حدث بسبب نقص من طرفنا، نُصلح الملف ونساعدك على إعادة التقديم مجاناً. لم نترك طالباً وحيداً أمام هذه الحالة.",
  },
  {
    q: "لماذا الآن؟ ألا يمكنني التقديم السنة القادمة؟",
    a: "يمكنك — لكن: هذه الدفعة الأخيرة هذا الموسم. الخصم 40% ينتهي 15 يونيو. التأشيرة الإيطالية تحتاج وقتاً — من يبدأ اليوم يلتحق في أكتوبر. من ينتظر يبدأ رحلته في 2027.",
  },
  {
    q: "كم تكلّف خدماتكم؟ وهل الخصم حقيقي؟",
    a: `الخصم ${DISCOUNT_PCT}% حقيقي ومحدود بالدفعة الأخيرة. الرسوم كانت €${ORIGINAL_PRICE} وأصبحت €${DISCOUNT_PRICE} لمن يسجّل قبل 15 يونيو. الاستشارة مجانية تماماً — تعرّف ثم قرّر بدون أي ضغط.`,
  },
  {
    q: "هل أنتم وكالة موثوقة؟",
    a: "500+ طالب أوصلناهم إلى أوروبا، 98% منهم حصلوا على تأشيرتهم. الاستشارة مجانية — لا تخاطر بشيء سوى 30 دقيقة من وقتك.",
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-5 text-right gap-4 group"
      >
        <span className="font-semibold text-slate-900 text-base leading-snug group-hover:text-indigo-600 transition-colors">
          {q}
        </span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all ${open ? "bg-indigo-600 rotate-180" : "bg-slate-100 group-hover:bg-indigo-100"}`}>
          <svg className={`w-4 h-4 ${open ? "text-white" : "text-slate-400 group-hover:text-indigo-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="pb-5 pl-12">
          <p className="text-slate-600 text-base leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function CurrentOffer() {
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <>
      {/* ── STICKY BAR ──────────────────────────────────────────────── */}
      <div className="sticky top-16 lg:top-[68px] z-40 bg-amber-500 text-white py-2.5 px-4 text-center text-sm font-bold shadow-lg">
        <span className="inline-block w-2 h-2 bg-white rounded-full ml-2 mb-0.5 animate-pulse" />
        🔥 الدفعة الأخيرة — {SPOTS_LEFT} أماكن فقط · خصم {DISCOUNT_PCT}% · ينتهي 15 يونيو 2026
        <a
          href={APPLY_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mr-3 bg-white text-amber-600 text-xs font-black px-3 py-1 rounded-lg hover:bg-amber-50 transition-colors inline-block"
        >
          احجز مجاناً
        </a>
      </div>

      {/* ════════════════════════════════════════════════════════════
          SECTION 1 — EMOTION
          Video 3: top of page = pure emotion. Curiosity headline,
          aspiration, not features. Don't reveal the HOW.
      ════════════════════════════════════════════════════════════ */}

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="relative bg-white overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full blob-indigo opacity-70" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full blob-violet opacity-50" />
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, #4F46E5 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left: pure emotion — headline, aspiration, CTA */}
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 mb-6">
                <span className="text-xl">🇮🇹</span>
                <span className="text-amber-700 text-sm font-black">الدفعة الأخيرة — إيطاليا أكتوبر 2026</span>
              </div>

              {/* Video 3 curiosity rule: don't tell them WHAT — tell them what it's NOT */}
              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black text-slate-900 leading-[1.15] mb-5">
                كيف التحق{" "}
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #009246, #CE2B37)" }}>
                  500+ طالب جزائري
                </span>
                {" "}بأفضل الجامعات الإيطالية —{" "}
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}>
                  بدون إيطالية، بدون رفض، في 90 يوماً
                </span>
              </h1>

              {/* Video 3: sub-headline expands on the hook + "what it's not" curiosity */}
              <p className="text-lg text-slate-600 leading-relaxed mb-3">
                ليست المنحة، ليست الدراسة الذاتية لسنوات، وليست الحظ —
              </p>
              <p className="text-lg text-slate-500 leading-relaxed mb-8">
                شاهد الفيديو أدناه لترى بالضبط كيف نُحوّل ملفك الجزائري إلى قبول إيطالي ثم تأشيرة في يدك.
              </p>

              <a
                href={APPLY_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-lg px-10 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-indigo-200 hover:-translate-y-0.5 mb-5"
              >
                احجز استشارتك المجانية — 30 دقيقة
                <svg className="w-5 h-5 rtl-flip" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>

              <div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm">
                {["مجاني وبدون التزام", "500+ طالب نجح معنا", "98% نسبة قبول التأشيرة"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: scarcity card + social proof quote */}
            <div className="hidden lg:flex flex-col gap-4">
              <div className="bg-amber-50 border-2 border-amber-200 rounded-3xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-amber-800 font-black text-sm uppercase tracking-wide">الدفعة الأخيرة — مكان محدود</span>
                </div>
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-slate-400 text-lg line-through">€{ORIGINAL_PRICE}</span>
                  <span className="text-3xl font-black text-amber-700">€{DISCOUNT_PRICE}</span>
                  <span className="bg-red-500 text-white text-xs font-black px-2 py-0.5 rounded-full">خصم {DISCOUNT_PCT}%</span>
                </div>
                <p className="text-amber-700 text-sm mb-3">
                  تبقّى <strong className="text-2xl text-red-600">{SPOTS_LEFT}</strong> أماكن فقط من أصل 15
                </p>
                <div className="w-full bg-amber-200 rounded-full h-2.5 mb-4">
                  <div className="bg-red-500 h-2.5 rounded-full" style={{ width: `${((15 - SPOTS_LEFT) / 15) * 100}%` }} />
                </div>
                <a
                  href={APPLY_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-black text-sm px-4 py-3 rounded-xl transition-all"
                >
                  احجز مكانك الآن — مجاناً
                </a>
              </div>

              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
                <div className="flex gap-0.5 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-slate-600 text-sm leading-relaxed mb-4">
                  "وكالة النجاح أوصلتني من الجزائر العاصمة إلى ميلانو في أقل من 4 أشهر. الآن في سنتي الثانية في البوليتكنيك."
                </blockquote>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-sm flex-shrink-0">
                    KM
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">كريم م.</div>
                    <div className="text-xs text-indigo-600 font-medium">الجزائر العاصمة ← بوليتكنيك ميلانو</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PAIN POINTS — qualify the reader ────────────────────────── */}
      {/* Video 4: speak to one specific person. Video 3: emotion still, this filters who stays. */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">هل يصفك أحد هذه المواقف؟</h2>
          <p className="text-slate-500 mb-8">إذا أجبت بـ "نعم" على أي منها — فالفيديو أدناه لك</p>
          <div className="space-y-3 text-right">
            {painPoints.map((point, i) => (
              <div key={i} className="flex items-center gap-4 bg-white border border-slate-100 rounded-2xl px-5 py-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-sm">✕</span>
                <p className="text-slate-700 text-base font-medium">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 2 — LOGIC
          Video 1: the VIDEO is the selling mechanism. "You're going
          to convince them, talk about your track record, your solution,
          essentially sell to them and present some value in this video."
          Video 5: specific outcome the prospect can point to.
      ════════════════════════════════════════════════════════════ */}

      {/* ── VIDEO — the core selling mechanism ──────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
              قبل أن تحجز — شاهد هذا أولاً
            </h2>
            <p className="text-slate-500">
              10 دقائق تُريك بالضبط كيف نصل بك من الجزائر إلى جامعة إيطالية — ومن نحن، وما الذي سيحدث بعد مكالمتك
            </p>
          </div>

          {/* Video placeholder — replace the div below with your iframe/video embed */}
          <div className="relative rounded-3xl overflow-hidden bg-slate-900 aspect-video flex items-center justify-center mb-8 shadow-2xl">
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 60%, #4c1d95 100%)" }} />
            <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

            <div className="relative z-10 flex flex-col items-center gap-5 text-center px-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl">
                <svg className="w-8 h-8 text-indigo-600" style={{ transform: "translateX(-2px)" }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-black text-xl mb-1">شاهد كيف نصل بك إلى إيطاليا</p>
                <p className="text-white/60 text-sm">سيتم إضافة الفيديو قريباً</p>
              </div>
              <span className="bg-white/20 border border-white/30 text-white/80 text-sm px-4 py-1.5 rounded-full">
                ~10 دقائق · مجاني تماماً
              </span>
            </div>

            <div className="absolute bottom-5 right-5 text-4xl">🇮🇹</div>
          </div>

          {/* What the video covers — Video 1: talk about track record + solution + value */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { icon: "📊", text: "كيف أوصلنا 500+ طالب جزائري إلى إيطاليا وما الذي جعل 98% منهم ينجحون" },
              { icon: "🗺️", text: "الخطوات الثلاث الفعلية من ملفك الآن إلى يوم وصولك إلى الجامعة" },
              { icon: "🎯", text: "كيف نختار الجامعة المناسبة لملفك وما الذي يجعل تأشيرتك مضمونة" },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl px-5 py-4 flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <p className="text-slate-600 text-sm leading-snug">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={APPLY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-base px-10 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-indigo-200 hover:-translate-y-0.5 mb-3"
            >
              جاهز؟ احجز استشارتك المجانية الآن
              <svg className="w-4 h-4 rtl-flip" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <p className="text-slate-400 text-sm">مجاني · 30 دقيقة · بدون التزام</p>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS — proof with specific outcomes ──────────────── */}
      {/* Video 1: testimonials after CTA. Video 5: specific number/result, not generic praise. */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              قصص طلابنا في إيطاليا
            </h2>
            <p className="text-slate-500 mt-3">نتائج واضحة، بلغة بسيطة، ومن دون مبالغة</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="gradient-indigo px-6 py-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center font-black text-sm flex-shrink-0">
                        {t.initials}
                      </div>
                      <div>
                        <p className="font-black text-sm">{t.name}</p>
                        <p className="text-white/70 text-xs">{t.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  {/* Their fear = different prospects self-identify */}
                  <div className="bg-rose-50 border border-rose-100 rounded-xl px-4 py-3 mb-4">
                    <p className="text-rose-600 text-xs font-bold mb-1 uppercase tracking-wide">كان أكبر خوفه</p>
                    <p className="text-slate-600 text-sm leading-snug">{t.fear}</p>
                  </div>
                  <div className="flex gap-0.5 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-slate-600 text-sm leading-relaxed mb-4">"{t.quote}"</blockquote>
                  {/* Specific result they can point to (Video 5) */}
                  <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-2">
                    <p className="text-emerald-700 text-xs font-bold">✓ النتيجة: {t.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ — handle every objection before the final pitch ──────── */}
      {/* Video 2: "by the time they get on the call, they're not asking IF but HOW" */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-slate-900 mb-3">الأسئلة التي تمنعك من البدء</h2>
            <p className="text-slate-500">إجابات مباشرة حتى تصل إلى المكالمة جاهزاً لا مترদ্দداً</p>
          </div>
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm px-6">
            {faqs.map((f, i) => (
              <FAQItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 3 — URGENCY / FEAR
          Video 3: bottom of page = urgency & scarcity.
          Cost of inaction made explicit so fence-sitters act.
      ════════════════════════════════════════════════════════════ */}

      {/* ── COUNTDOWN + FINAL CTA ───────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #4C1D95 100%)" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">الوقت المتبقي حتى إغلاق التسجيل</p>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">15 يونيو 2026 — آخر موعد للانضمام</h2>

          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-10">
            <CountBox value={days} label="يوم" />
            <span className="text-white/40 text-3xl font-black">:</span>
            <CountBox value={hours} label="ساعة" />
            <span className="text-white/40 text-3xl font-black">:</span>
            <CountBox value={minutes} label="دقيقة" />
            <span className="text-white/40 text-3xl font-black">:</span>
            <CountBox value={seconds} label="ثانية" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-5">
              <p className="text-white/60 text-sm mb-2">السعر الحالي</p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-white/40 text-lg line-through">€{ORIGINAL_PRICE}</span>
                <span className="text-amber-300 font-black text-3xl">€{DISCOUNT_PRICE}</span>
              </div>
              <p className="text-white/50 text-xs mt-1">ينتهي 15 يونيو · بعده يرتفع السعر</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-5">
              <p className="text-white/60 text-sm mb-2">الأماكن المتبقية</p>
              <div className="w-full bg-white/20 rounded-full h-2.5 mb-2">
                <div className="bg-red-400 h-2.5 rounded-full" style={{ width: `${((15 - SPOTS_LEFT) / 15) * 100}%` }} />
              </div>
              <p className="text-white font-black text-2xl">
                <span className="text-red-400">{SPOTS_LEFT}</span> / 15 مكاناً
              </p>
            </div>
          </div>

          {/* Cost of inaction — Video 3: fear/urgency pushes fence-sitters */}
          <p className="text-white/55 text-sm leading-relaxed max-w-lg mx-auto mb-10">
            من يتأخر حتى يوليو يفوت دفعة 2026 كاملة ويبدأ رحلته من الصفر في 2027 — سنة كاملة من حياته الأكاديمية في الانتظار.
          </p>

          <a
            href={APPLY_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white hover:bg-slate-50 text-indigo-700 font-black text-lg px-10 py-5 rounded-2xl transition-all hover:shadow-2xl hover:shadow-black/30 hover:-translate-y-1 mb-5"
          >
            احجز استشارتي المجانية الآن
            <svg className="w-5 h-5 rtl-flip" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          <div className="flex flex-wrap items-center justify-center gap-5">
            {["مجاني وبدون التزام", "98% نسبة قبول التأشيرة", "500+ طالب نجح"].map((g) => (
              <span key={g} className="flex items-center gap-1.5 text-white/50 text-sm">
                <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {g}
              </span>
            ))}
          </div>
        </div>
      </section>

      <StickyMobileCTA label="احجز مكانك — مجاناً" />
    </>
  );
}
