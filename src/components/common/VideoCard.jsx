const categoryColors = {
  university: "bg-indigo-100 text-indigo-700",
  student: "bg-emerald-100 text-emerald-700",
  preparation: "bg-violet-100 text-violet-700",
  visa: "bg-amber-100 text-amber-700",
};

const categoryLabels = {
  university: "جامعة",
  student: "قصة طالب",
  preparation: "تحضير",
  visa: "دليل التأشيرة",
};

const categoryIcons = {
  university: "🏛️",
  student: "🎓",
  preparation: "📚",
  visa: "📄",
};

export default function VideoCard({ video }) {
  const { title, description, category, thumbnailText, duration } = video;

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50 transition-all card-hover group">
      {/* Thumbnail */}
      <div className="relative aspect-video flex items-center justify-center cursor-pointer overflow-hidden" style={{ background: "linear-gradient(135deg, #312E81 0%, #4F46E5 60%, #6D28D9 100%)" }}>
        {/* Dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative z-10 text-center px-6">
          <div className="w-14 h-14 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:bg-white/30 transition-all">
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <p className="text-white/90 font-semibold text-sm leading-snug max-w-[160px] mx-auto">{thumbnailText}</p>
        </div>
        <div className="absolute bottom-2.5 left-2.5 bg-black/50 text-white text-xs px-2 py-0.5 rounded-lg backdrop-blur-sm">
          {duration}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg mb-2.5 ${categoryColors[category]}`}>
          <span>{categoryIcons[category]}</span>
          <span>{categoryLabels[category]}</span>
        </span>
        <h3 className="font-semibold text-slate-900 text-sm leading-snug mb-1.5">{title}</h3>
        <p className="text-slate-500 text-xs leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
