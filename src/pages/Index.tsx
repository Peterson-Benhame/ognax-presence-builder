import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Storytelling from "@/components/Storytelling";
import HowItWorks from "@/components/HowItWorks";
import SocialProof from "@/components/SocialProof";
import Portfolio from "@/components/Portfolio";
import TrafficEducation from "@/components/TrafficEducation";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <Hero />
      
      {/* 2. Benefits */}
      <Benefits />
      
      {/* 3. Storytelling */}
      <Storytelling />
      
      {/* 4. How It Works */}
      <HowItWorks />
      
      {/* 5. Social Proof */}
      <SocialProof />
      
      {/* 6. Portfolio */}
      <Portfolio />
      
      {/* 7. Traffic Education */}
      <TrafficEducation />
      
      {/* 8. Pricing */}  
      <Pricing />
      
      {/* 9. FAQ */}
      <FAQ />
      
      {/* 10. Footer with Final CTA */}
      <Footer />
    </div>
  );
};

export default Index;
