import FAQAccordion from "../common/FAQAccordion";
import { APPLY_FORM_URL } from "../../config";

export default function DestinationFAQ({ destination }) {
  const { name, faq } = destination;

  return (
    <section className="py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <span className="indigo-line" />
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">الأسئلة الشائعة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
            أسئلة حول الدراسة في {name}
          </h2>
          <p className="text-slate-500 text-base mb-8 leading-relaxed">
            أكثر الأسئلة شيوعاً من الطلاب الجزائريين الذين يفكرون في {name} وجهة لهم.
          </p>

          <FAQAccordion questions={faq} />

          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm mb-4">هل لديك سؤال لم يُجَب عنه هنا؟</p>
            <a
              href={APPLY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-indigo-200"
            >
              اسألنا مباشرة — مجاناً
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
