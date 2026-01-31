import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { AudienceSection } from "@/components/landing/AudienceSection";
import { OutcomesSection } from "@/components/landing/OutcomesSection";
import { SkillsSection } from "@/components/landing/SkillsSection";
import { ProgramSection } from "@/components/landing/ProgramSection";
import { AIAdvantageSection } from "@/components/landing/AIAdvantageSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AudienceSection />
        <OutcomesSection />
        <SkillsSection />
        <ProgramSection />
        <AIAdvantageSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
