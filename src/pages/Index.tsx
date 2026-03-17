import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Features from "@/components/Features";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <section className="bg-black h-12 sm:h-16 md:h-20 lg:h-28"></section>
      <Experience />
      <Projects />
      <Features />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
