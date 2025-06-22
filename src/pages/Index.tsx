
import HeroSection from '../components/HeroSection';
import AnnouncementSection from '../components/AnnouncementSection';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import TutoringInfoSection from '../components/TutoringInfoSection';
import FeaturesSection from '../components/FeaturesSection';
import ContactSection from '../components/ContactSection';
import HashtagsSection from '../components/HashtagsSection';

const Index = () => {
  return (
    <div className="min-h-screen font-sans bg-brightDark text-white">
      <HeroSection />
      <AnnouncementSection />
      <ServicesSection />
      <ProcessSection />
      <TutoringInfoSection />
      <FeaturesSection />
      <ContactSection />
      <HashtagsSection />
    </div>
  );
};

export default Index;
