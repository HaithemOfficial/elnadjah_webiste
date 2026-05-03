import { Link } from "react-router-dom";
import { generalFaqs } from "../data/faqs";
import FAQAccordion from "../components/common/FAQAccordion";
import StickyMobileCTA from "../components/common/StickyMobileCTA";

export default function FAQ() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5">
            Frequently Asked Questions
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about studying in Europe through El Nadjah Agency — from documents to visa to arrival.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {generalFaqs.map((category) => (
            <div key={category.category}>
              <div className="flex items-center gap-3 mb-4">
                <span className="gold-line" />
                <h2 className="text-lg font-black text-slate-900">{category.category}</h2>
              </div>
              <FAQAccordion questions={category.questions} />
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 gradient-navy">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Still Have a Question?
          </h2>
          <p className="text-white/70 text-base mb-8 leading-relaxed">
            Our consultants answer every question during your free first consultation. Book yours now — no commitment, no cost.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/apply"
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-black text-base px-8 py-4 rounded-xl transition-all hover:scale-105"
            >
              Book Free Consultation
            </Link>
            <a
              href="https://finder.elnadjah.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-base px-8 py-4 rounded-xl transition-colors"
            >
              🧭 Find My Destination
            </a>
          </div>
        </div>
      </section>

      <StickyMobileCTA label="Book Free Consultation" />
    </>
  );
}
