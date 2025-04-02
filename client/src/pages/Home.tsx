import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

const Home = () => {
  const backToTopBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (backToTopBtnRef.current) {
        if (window.scrollY > 300) {
          backToTopBtnRef.current.classList.remove("opacity-0", "invisible");
          backToTopBtnRef.current.classList.add("opacity-100", "visible");
        } else {
          backToTopBtnRef.current.classList.add("opacity-0", "invisible");
          backToTopBtnRef.current.classList.remove("opacity-100", "visible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Projects />
        <Education />
        <Achievements />
        <Skills />
        <Contact />
        <Footer />
      </motion.div>

      <Button
        ref={backToTopBtnRef}
        variant="default"
        size="icon"
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white opacity-0 invisible transition-all z-50 shadow-lg"
        onClick={scrollToTop}
      >
        <ChevronUp className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Home;
