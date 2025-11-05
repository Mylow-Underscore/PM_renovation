import Hero from "@/components/features/Hero";
import ServicesSection from "@/components/features/ServicesSection";
import StrengthsSection from "@/components/features/StrengthsSection";
import ContactCTA from "@/components/features/ContactCTA";

export default function Home() {
  return (
    <main className="flex-grow">
      <Hero />
      <ServicesSection />
      <StrengthsSection />
      <ContactCTA />
    </main>
  );
}