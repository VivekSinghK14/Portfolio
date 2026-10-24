import Navbar from "@/component/Navbar";
import Header from "@/component/Header";
import About from "@/component/About";
import Skills from "@/component/Skills";
import Work from "@/component/Work";
import Projects from "@/component/Projects";
import Education from "@/component/Education";
import Contact from "@/component/Contact";
import Footer from "@/component/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <About />
        <Skills />
        <Work />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
