import Announcement from "@/components/index/Announcement";
import ServicesList from "@/components/index/ServicesList";
import ContactBanner from "@/components/index/ContactBanner";
import ContactActions from "@/components/index/ContactActions";
import HeroSection from "@/components/index/HeroSection";
import HowItWorksSteps from "@/components/index/HowItWorksSteps";
import UniqueLearner from "@/components/index/UniqueLearner";
import WhyBrightPath from "@/components/index/WhyBrightPath";
import Hashtags from "@/components/index/Hashtags";

// Keep the dark bg for the whole page
const Index = () => (
  <div className="min-h-screen font-sans bg-brightDark text-white">
    <Announcement />
    <ServicesList />
    <ContactBanner />
    <ContactActions />
    <HeroSection />
    <HowItWorksSteps />
    <UniqueLearner />
    <WhyBrightPath />
    <Hashtags />
  </div>
);

export default Index;
