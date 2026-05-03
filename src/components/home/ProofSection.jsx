import { testimonialVideos, videoProofs } from "../../data/testimonials";
import VideoCard from "../common/VideoCard";

export default function ProofSection() {
  return (
    <>
      {/* Video Proof */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="indigo-line" />
              <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">دليل حقيقي</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              لا نطلب منك الثقة بنا عمياً.{" "}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}>
                شاهد الدليل.
              </span>
            </h2>
            <p className="text-slate-500 text-base leading-relaxed">
              فرق القبول الجامعي، وصول الطلاب، شرح التأشيرة، كل شيء على الفيديو.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {videoProofs.slice(0, 3).map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="indigo-line" />
                <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">قصص نجاح</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
                طلاب كانوا في نفس مكانك —{" "}
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}>
                  الآن في أوروبا.
                </span>
              </h2>
              <p className="text-slate-500 text-base leading-relaxed">
                كل واحد منهم جاءنا بسؤال وغادر بعرض قبول من جامعة أوروبية.
              </p>
            </div>

            {/* Trust chip */}
            <div className="flex items-center gap-3 bg-indigo-50 border border-indigo-100 rounded-2xl px-6 py-4 lg:flex-shrink-0">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-indigo-600 font-semibold">طلاب جزائريون الآن في أوروبا</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonialVideos.map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
