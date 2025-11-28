import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import ProgramList from "@/components/ProgramList";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

// Lazy load heavy components for better performance
const Achievements = dynamic(() => import("@/components/Achievements"), {
  loading: () => (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="animate-pulse text-white">Loading...</div>
    </div>
  ),
  ssr: true,
});

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="animate-pulse text-white">Loading...</div>
    </div>
  ),
  ssr: true,
});

const Gallery = dynamic(() => import("@/components/Gallery"), {
  loading: () => (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="animate-pulse text-white">Loading...</div>
    </div>
  ),
  ssr: true,
});

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
      <Partners />
      <Gallery />
      <Footer />
    </div>
  );
}
