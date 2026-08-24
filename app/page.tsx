import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutStats from "../components/AboutStats";
import MissionSplit from "../components/MissionSplit";
import CompanyVision from "../components/CompanyVision";
import Approach from "../components/Approach";
import ScholarshipSchools from "../components/ScholarshipSchools";
import Portfolio from "../components/Portfolio";
import ProcessSteps from "../components/ProcessSteps";
import OurPeople from "../components/OurPeople";
import Testimonials from "../components/Testimonials";
import OurSolutions from "../components/OurSolutions";
import FAQAccordion from "../components/FAQAccordion";
import BlogSection from "../components/BlogSection";
import ClosingCTA from "../components/ClosingCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutStats />
      <MissionSplit />
      <CompanyVision />
      <Approach />
      <ScholarshipSchools />
      <Portfolio />
      <ProcessSteps />
      <OurPeople />
      <Testimonials />
      <OurSolutions />
      <FAQAccordion />
      <BlogSection />
      <ClosingCTA />
      <Footer />
    </main>
  );
}
