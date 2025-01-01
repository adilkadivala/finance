import FeatureShowCase from "@/components/feature-showcase";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import Testimonials from "@/components/testimonial";

const Home = () => {
  return (
    <main className="px-2 md:px-10">
      <Navbar />
      <HeroSection />
      <FeatureShowCase />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Home;
