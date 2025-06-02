import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import DashboardSection from "@/components/DashboardSection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <TeamSection />
        <DashboardSection />
        <StatsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
