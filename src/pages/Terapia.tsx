import Footer from "@/scenes/footer";
import Navbar from "@/scenes/navbar";
import { SelectedPage } from "@/shared/types";
import { useEffect, useState } from "react";
import Chiki from "@/assets/chiki.png";
import Image3 from "@/assets/image3.png";
const Terapia = () => {
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
          Terapia
        </h1>
      </section>

      <div className="my-10 grid grid-cols-2 px-10 md:grid-cols-3 md:gap-4 ">
        <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow ">
          <img className="rounded-t-lg" src={Chiki} alt="etologia" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              TERAPIAS ASISTIDAS CON ANIMALES
            </h5>
            <p className="mb-3 font-normal text-gray-700 ">
              Logra mejorar la calidad emocional y la seguridad con pacientes
              que han perdido la motivación por enfermedades crónicas. Es
              efectivo para problemas de atención y aprendizaje, sobre todo en
              niños. Se planifican objetivos específicos de tratamiento con su
              médico y su psicólogo.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow ">
          <img className="rounded-t-lg" src={Image3} alt="etologia" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              ASISTENCIAS ASISTIDAS
            </h5>
            <p className="mb-3 font-normal text-gray-700 ">
              Proceso menos formal que las terapias, únicamente es una visita de
              motivación y alegría. Proporciona oportunidades para la educación,
              deleite y disfrutar de beneficios terapéuticos que mejoran la
              calidad de vida.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow ">
        <iframe  className="rounded-t-lg w-full h-80" src="https://www.youtube.com/embed/wDAs1HKYKXY" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              MASOTERAPIA
            </h5>
            <p className="mb-3 font-normal text-gray-700 ">
              Técnica kinesiológica que se utiliza en animales con problemas de
              comportamiento, como ansiedad por separación, agresividad, estrés,
              entre otros.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terapia;
