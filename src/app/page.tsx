import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Discover } from "@/components/Discover";
import { Expertise } from "@/components/Expertise";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InstagramSection } from "@/components/InstagramSection";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Discover />
        <Gallery />
        <Expertise />
        <InstagramSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
