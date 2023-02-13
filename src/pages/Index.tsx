import About from "@/scenes/about";
import Footer from "@/scenes/footer";
import Services from "@/scenes/services";
import Home from "@/scenes/home";
import Navbar from "@/scenes/navbar";
import { SelectedPage } from "@/shared/types";
import React, { useEffect, useState } from "react";

const Index = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <About setSelectedPage={setSelectedPage} />
      <Services setSelectedPage={setSelectedPage} />

      <Footer />
    </div>
  );
};

export default Index;
