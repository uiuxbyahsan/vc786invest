import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ScholarshipSchools from "../components/ScholarshipSchools";
import PortfolioGrid from "../components/PortfolioGrid";
import CoInvestors from "../components/CoInvestors";
import MissionSplit from "../components/MissionSplit";
import ImpactStats from "../components/ImpactStats";
import Approach from "../components/Approach";
import ProcessSteps from "../components/ProcessSteps";
import FoundersGrid from "../components/FoundersGrid";
import ProductsComparison from "../components/ProductsComparison";
import FAQAccordion from "../components/FAQAccordion";
import ClosingCTA from "../components/ClosingCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <ScholarshipSchools />
      <PortfolioGrid />
      <CoInvestors />
      <MissionSplit />
      <ImpactStats />
      <Approach />
      <ProcessSteps />
      <FoundersGrid />
      <ProductsComparison />
      <FAQAccordion />
      <ClosingCTA />
      <Footer />
    </main>
  );
}
