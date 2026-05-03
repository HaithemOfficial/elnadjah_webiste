export default function TestimonialCard({ testimonial }) {
  const { name, origin, destination, university, program, quote, rating } = testimonial;

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const avatarColors = [
    "bg-indigo-100 text-indigo-700",
    "bg-violet-100 text-violet-700",
    "bg-blue-100 text-blue-700",
    "bg-emerald-100 text-emerald-700",
    "bg-amber-100 text-amber-700",
    "bg-rose-100 text-rose-700",
  ];
  const colorIndex = name.charCodeAt(0) % avatarColors.length;

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50 transition-all card-hover flex flex-col gap-4">
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: rating }).map((_, i) => (
          <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-slate-600 text-sm leading-relaxed flex-1">
        "{quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0 ${avatarColors[colorIndex]}`}>
          {initials}
        </div>
        <div className="min-w-0">
          <div className="font-semibold text-slate-900 text-sm leading-tight">{name}</div>
          <div className="text-xs text-slate-400 mt-0.5 truncate">{origin} ← {destination}</div>
          <div className="text-xs text-indigo-600 font-medium mt-0.5 truncate">{program} · {university}</div>
        </div>
      </div>
    </div>
  );
}
