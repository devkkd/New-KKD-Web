import Hero from "@/components/Hero";

import StatsSection from "@/components/StatsSection";
import TruthSection from "@/components/Truthsection";
import BusinessOutcomesSection from "@/components/BusinessOutcomesSection";
import PortfolioSection from "@/components/Portfoliosection";
import GlobalPartnersSection from "@/components/GlobalPartnersSection";
import SixDisciplinesSection from "@/components/Sixdisciplinessection";
import IndustriesSection from "@/components/IndustriesSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import TrustedTechnologyPartners from "@/components/TrustedTechnologyPartners";
import TechnologyStackSection from "@/components/TechnologyStackSection";
import TestimonialsSection from "@/components/Testimonialssection";
import ContactQuerySection from "@/components/Contactquerysection";
import AwardsSection from "@/components/AwardsSection";
import InsightsSection from "@/components/InsightsSection";
import FAQSection from "@/components/FAQSection";

import WebsiteLoaderWrapper from "@/components/WebsiteLoaderWrapper";

export default function Home() {
  return (
    <>
      <main>
        <Hero />

        <StatsSection />

        <TruthSection />

        <BusinessOutcomesSection />

        <PortfolioSection />

        <GlobalPartnersSection />

        <SixDisciplinesSection />

        <IndustriesSection />

        <HowWeWorkSection />

        <TrustedTechnologyPartners />

        <TechnologyStackSection />

        <div
          style={{
            width: "100%",
            height: "1px",
            background: "#D7DFEB",
            margin: 0,
            padding: 0,
          }}
          aria-hidden="true"
        />

        <TestimonialsSection />

        <ContactQuerySection />

        <AwardsSection />

        <InsightsSection />

        <FAQSection />
      </main>

      <WebsiteLoaderWrapper />
    </>
  );
}