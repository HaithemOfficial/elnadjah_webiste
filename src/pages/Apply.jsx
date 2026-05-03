import { useState } from "react";
import { destinations } from "../data/destinations";
import StickyMobileCTA from "../components/common/StickyMobileCTA";

const languageLevels = ["None / Beginner", "A1 – A2", "B1", "B2", "C1 – Native"];
const timelines = ["As soon as possible", "Next intake (6–8 months)", "Next year", "I'm still exploring"];

export default function Apply() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    country: "Algeria",
    destination: "",
    level: "",
    language: "",
    timeline: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — replace with real form handler (Formspree, EmailJS, etc.)
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen gradient-hero flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-3xl p-10 text-center shadow-2xl">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-2xl font-black text-slate-900 mb-3">Application Received!</h2>
          <p className="text-gray-600 text-base leading-relaxed mb-2">
            Thank you, <strong>{form.name}</strong>. We have received your application and will contact you on WhatsApp within <strong>24 hours</strong>.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Check your WhatsApp for our first message. If you don't hear from us within 24 hours, email us at elnadjah.agency@gmail.com.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-left">
            <p className="text-amber-900 text-sm font-semibold mb-1">While You Wait:</p>
            <p className="text-amber-800 text-sm">Use our Destination Finder to explore your best options based on your profile.</p>
          </div>
          <a
            href="https://finder.elnadjah.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm py-3 rounded-xl transition-colors"
          >
            🧭 Try the Destination Finder
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="gradient-hero pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-400/15 border border-amber-400/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-amber-400 text-sm font-medium">Free Consultation — No Commitment</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5 max-w-3xl mx-auto leading-tight">
            Start Your Application. Get Your Path to Europe.
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Fill out the form below. Our team will contact you on WhatsApp within 24 hours with a personalized assessment of your profile and next steps.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Trust sidebar */}
            <div className="lg:col-span-1 space-y-5">
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-slate-900 text-base mb-4">What Happens Next</h3>
                <ol className="space-y-3">
                  {[
                    "We review your profile within 24 hours",
                    "We contact you on WhatsApp",
                    "We schedule a free consultation call",
                    "You receive a personalized plan and quote",
                    "You decide — no pressure, no commitment",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-400 text-slate-900 text-xs font-black flex items-center justify-center">
                        {i + 1}
                      </span>
                      <span className="text-gray-600 text-sm leading-snug">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-slate-900 text-base mb-4">Why Students Choose Us</h3>
                <ul className="space-y-2.5">
                  {[
                    "98% visa approval rate",
                    "500+ students placed in Europe",
                    "Full support until arrival",
                    "Language prep included",
                    "No hidden fees",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-gray-600 text-sm">
                      <span className="text-amber-400 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <div className="text-2xl mb-2">🧭</div>
                <p className="text-amber-900 font-semibold text-sm mb-1">Not Sure Which Country?</p>
                <p className="text-amber-800 text-xs leading-relaxed mb-3">
                  Use our free Destination Finder tool first to discover your best match.
                </p>
                <a
                  href="https://finder.elnadjah.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-xs py-2.5 rounded-lg transition-colors"
                >
                  Try the Finder →
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <h2 className="font-black text-slate-900 text-2xl mb-1">Application Form</h2>
                <p className="text-gray-500 text-sm mb-7">Free. Takes 3 minutes. We reply within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-1.5">Full Name *</label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                    />
                  </div>

                  {/* Email + WhatsApp */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-800 mb-1.5">Email Address *</label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-800 mb-1.5">WhatsApp Number *</label>
                      <input
                        required
                        name="whatsapp"
                        value={form.whatsapp}
                        onChange={handleChange}
                        placeholder="+213 XXX XXX XXX"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  {/* Country + Destination */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-800 mb-1.5">Your Country *</label>
                      <select
                        required
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition bg-white"
                      >
                        <option value="Algeria">Algeria 🇩🇿</option>
                        <option value="Morocco">Morocco 🇲🇦</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-800 mb-1.5">Target Destination</label>
                      <select
                        name="destination"
                        value={form.destination}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition bg-white"
                      >
                        <option value="">Not sure yet</option>
                        {destinations.map((d) => (
                          <option key={d.id} value={d.name}>
                            {d.flag} {d.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Education level */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-1.5">Current Education Level *</label>
                    <select
                      required
                      name="level"
                      value={form.level}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition bg-white"
                    >
                      <option value="">Select level</option>
                      <option>Final year of high school (Terminale / 3ème AS)</option>
                      <option>Baccalauréat obtained — not yet enrolled in university</option>
                      <option>1st or 2nd year university</option>
                      <option>Bachelor's degree obtained</option>
                      <option>Master's level or above</option>
                    </select>
                  </div>

                  {/* Language level */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-1.5">Language Level (French / Italian / English / Spanish) *</label>
                    <select
                      required
                      name="language"
                      value={form.language}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition bg-white"
                    >
                      <option value="">Select level</option>
                      {languageLevels.map((l) => (
                        <option key={l}>{l}</option>
                      ))}
                    </select>
                    <p className="text-gray-400 text-xs mt-1">If you don't have a certificate yet, that's okay — we help with this.</p>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-1.5">When Do You Want to Start? *</label>
                    <select
                      required
                      name="timeline"
                      value={form.timeline}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition bg-white"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-1.5">Anything else you want to share?</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Your field of study, specific questions, concerns, anything..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-amber-400 hover:bg-amber-300 disabled:bg-amber-200 text-slate-900 font-black text-base py-4 rounded-xl transition-all hover:scale-[1.01] disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Submit Application — We Reply in 24h
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-gray-400 text-xs text-center">
                    By submitting, you agree to be contacted by El Nadjah Agency via WhatsApp and email. No spam, ever.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StickyMobileCTA label="Submit Application" />
    </>
  );
}
