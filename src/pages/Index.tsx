import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import TrustBadges from "@/components/landing/TrustBadges";
import HowItWorks from "@/components/landing/HowItWorks";
import FeaturesSection from "@/components/landing/FeaturesSection";
import DemoSection from "@/components/landing/DemoSection";
import ProblemSolution from "@/components/landing/ProblemSolution";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrustBadges />
        <HowItWorks />
        <FeaturesSection />
        <DemoSection />
        <ProblemSolution />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
