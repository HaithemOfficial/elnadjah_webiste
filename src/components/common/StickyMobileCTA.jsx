import { APPLY_FORM_URL } from "../../config";

export default function StickyMobileCTA({ label = "قدّم الآن — مجاناً", href }) {
  const applyHref = href || APPLY_FORM_URL;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden sticky-cta-shadow bg-white border-t border-slate-100">
      <div className="p-3">
        <a
          href={applyHref}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm py-3.5 px-4 rounded-xl transition-colors"
        >
          {label}
        </a>
      </div>
    </div>
  );
}
