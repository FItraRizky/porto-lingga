import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import ProgramList from "@/components/ProgramList";
import Services from "@/components/Services";
import Achievements from "@/components/Achievements";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About />
      <Stats />
      <ProgramList />
      <Services />
      <Achievements />
      <Testimonials />
      <Gallery />
      <Footer />
    </div>
  );
}
