import { useState } from "react";

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-4 text-right gap-4 group"
      >
        <span className="font-medium text-slate-900 text-sm leading-snug group-hover:text-indigo-600 transition-colors">
          {q}
        </span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-xl bg-slate-100 group-hover:bg-indigo-100 flex items-center justify-center transition-all ${open ? "rotate-180 bg-indigo-100" : ""}`}>
          <svg className={`w-3.5 h-3.5 transition-colors ${open ? "text-indigo-600" : "text-slate-400 group-hover:text-indigo-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="pb-5 pl-12">
          <p className="text-slate-500 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQAccordion({ questions }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 px-5 shadow-sm">
      {questions.map((item, i) => (
        <FAQItem key={i} q={item.q} a={item.a} />
      ))}
    </div>
  );
}
