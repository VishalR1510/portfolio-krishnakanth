import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import './index.css'
import { useEffect, useState, Suspense } from "react";
import Preloader from "./components/Preloader";
import useAppReady from "./hooks/useAppReady";
import CustomCursor from "./components/CustomCursor";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import WorkExperiences from "./components/WorkExperiences";
import Footer from "./components/Footer";
import Expertise from "./components/Expertise";
import Portfolio from "./components/Portfolio";
import ContactSection from "./components/ContactSection";

function App() {
  const ready = useAppReady();
  const [ showLoader , setShowLoader ] = useState(true);

  useEffect(() => {
    if (ready) {
      const t = setTimeout(() => setShowLoader(false), 800);
      return () => clearTimeout(t);
    }
  }, [ready]);

  return (
    <>
      { showLoader && <Preloader done = {ready} />}
      <Suspense fallback={null}>
      { ready && 
        <div className="min-h-screen bg-[linear-gradient(45deg,#26143F_0%,#141414_55%)]">
          <CustomCursor />
          <Header />
          <HeroSection />
        </div> }
        <section className="min-h-screen" id="about" style={{background: "#141414"}}>
          <AboutMe />
        </section>
        <div className="w-full h-[200px]" style={{background: "#141414"}} />
        <section className="min-h-screen" id="services" style={{background: "#141414"}}>
          <Services />
        </section>
        <section className="min-h-screen" style={{background : "#141414"}}>
          <WorkExperiences />
        </section>
        <section className="min-h-screen" id = "projects" style={{background : "#141414"}}>
          <Portfolio />
        </section>
        <Expertise />
        <section className="min-h-screen" id = "contact" style={{background : "#141414"}}>
          <ContactSection />
        </section>
        <Footer />


      </Suspense>
    </>
  );

}

export default App
