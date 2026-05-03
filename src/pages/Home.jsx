import HomeHero from "../components/home/HomeHero";
import ProofSection from "../components/home/ProofSection";
import HowItWorks from "../components/home/HowItWorks";
import DestinationGrid from "../components/home/DestinationGrid";
import HomeCTA from "../components/home/HomeCTA";
import StickyMobileCTA from "../components/common/StickyMobileCTA";

export default function Home() {
  return (
    <>
      <HomeHero />
      <ProofSection />
      <HowItWorks />
      <DestinationGrid />
      <HomeCTA />
      <StickyMobileCTA label="احجز مكانك — مجاناً" />
    </>
  );
}
