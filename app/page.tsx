import FeatureShowCase from "@/components/feature-showcase";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import PricingSection from "@/components/pricing-section";
import Services from "@/components/services";
import ModernTestimonials from "@/components/testimonial-tweeter";

const Home = () => {
  return (
    <main className="px-10">
      <Navbar />
      <HeroSection />
      <FeatureShowCase />
      <Services />
      <ModernTestimonials />
      <Footer />
    </main>
  );
};

export default Home;
