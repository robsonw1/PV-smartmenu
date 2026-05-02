import HeroSection from "@/components/HeroSection";
import BannerAnimado from "@/components/BannerAnimado";
import TransformExperienceSection from "@/components/TransformExperienceSection";
import BenefitsSection from "@/components/BenefitsSection";
import DemoSection from "@/components/DemoSection";
import AdminPanelSection from "@/components/AdminPanelSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import NotificationCompra from "@/components/NotificationCompra";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BannerAnimado />
      <HeroSection />
      <BenefitsSection />
      <TestimonialsSection />
      <DemoSection />
      <AdminPanelSection />
      <TransformExperienceSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <NotificationCompra />
    </div>
  );
};

export default Index;
