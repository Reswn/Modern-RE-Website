import AboutUs from "@/components/AboutUs";
import Faq from "@/components/Faq";
import FeaturedProperties from "@/components/FeaturedProperties";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <FeaturedProperties />
      <Service />
      <AboutUs />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
