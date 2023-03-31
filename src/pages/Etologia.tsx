import Footer from "@/scenes/footer";
import Navbar from "@/scenes/navbar";
import { SelectedPage } from "@/shared/types";
import { useEffect, useState } from "react";
import image1 from "@/assets/etologia.png";
const Etologia = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    window.scrollTo(0, 0);
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

      <section
        id="etologia"
        className=" rounded-b-2xl  border bg-gray-300 md:pb-0"
      >
        <h1 className="flex w-full items-center justify-center py-40 text-2xl font-bold text-gray-500">
          Etología
        </h1>
      </section>

      <div className="my-10 px-10">
        <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow ">
          <img className="rounded-t-lg" src={image1} alt="etologia" />
          <div className="p-5">
            <p className="mb-3 font-normal text-gray-700 ">
              Prevención, diagnóstico y tratamiento de problemas de
              comportamiento, conductas normales, inaceptables, alteradas y
              problemas de comportamiento.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default Etologia;
