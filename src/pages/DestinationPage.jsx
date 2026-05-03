import { useParams, Navigate } from "react-router-dom";
import { getDestinationBySlug } from "../data/destinations";
import DestinationHero from "../components/destination/DestinationHero";
import WhyThisCountry from "../components/destination/WhyThisCountry";
import RequirementsCosts from "../components/destination/RequirementsCosts";
import Timeline from "../components/destination/Timeline";
import LanguageHelp from "../components/destination/LanguageHelp";
import CommonMistakes from "../components/destination/CommonMistakes";
import DestinationFAQ from "../components/destination/DestinationFAQ";
import DestinationCTA from "../components/destination/DestinationCTA";
import StickyMobileCTA from "../components/common/StickyMobileCTA";
import { testimonials } from "../data/testimonials";
import TestimonialCard from "../components/common/TestimonialCard";
import VideoCard from "../components/common/VideoCard";

export default function DestinationPage() {
  const { slug } = useParams();
  const destination = getDestinationBySlug(slug);

  if (!destination || destination.inactive) return <Navigate to="/" replace />;

  const relatedTestimonials = testimonials.filter(
    (t) => t.destinationSlug === destination.slug
  );

  return (
    <>
      <DestinationHero destination={destination} />
      <RequirementsCosts destination={destination} />
      <Timeline destination={destination} />
      {/* <LanguageHelp destination={destination} /> */}
      {/* <CommonMistakes destination={destination} /> */}

      {/* Destination testimonials */}
      {relatedTestimonials.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="indigo-line" />
                <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">
                  قصص الطلاب — {destination.name}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                طلاب كانوا في نفس مكانك — الآن في {destination.flag} {destination.name}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedTestimonials.slice(0, 3).map((t) => (
                t.type === "video"
                  ? <VideoCard key={t.id} video={t} />
                  : <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      <DestinationFAQ destination={destination} />
      <WhyThisCountry destination={destination} />
      <DestinationCTA destination={destination} />
      <StickyMobileCTA label={`قدّم لـ${destination.name}`} />
    </>
  );
}
