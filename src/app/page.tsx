import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowWeWork from "@/components/HowWeWork";
import WhoWeAre from "@/components/WhoWeAre";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import BookACall from "@/components/BookACall";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowWeWork />
      <WhoWeAre />
      <WhyChooseUs />
      <Services />
      <Team />
      <FAQ />
      <BookACall />
      <Footer />
    </main>
  );
}
