import Footer from "@/scenes/footer";
import Navbar from "@/scenes/navbar";
import { SelectedPage } from "@/shared/types";
import { useEffect, useState } from "react";
import SevicioDog from "@/assets/servicio.png";
import Adiestramiento from "@/assets/canino.png";
import Presentacion from "@/assets/presentacion.png";
import CanCaballero from "@/assets/can-caballero.png";

const Canino = () => {
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
          Adiestramiento
        </h1>
      </section>

      <div className="grid grid-cols-2 bg-gray-20 py-10 px-10 md:grid-cols-3 md:gap-4">
        <div className="max-w-lg rounded-lg border border-gray-200 bg-white shadow ">
          <img
            className="w-full rounded-t-lg"
            src={SevicioDog}
            alt="etologia"
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              SOCIALIZACIÓN DE CACHORROS
            </h5>
            <p className="text-normal mb-3 font-normal text-gray-700 ">
              Para solucionar problemasconductuales de las mascotas enla
              interacción con persona y otrasmascotas.
            </p>
          </div>
        </div>
        <div className="max-w-lg rounded-lg border border-gray-200 bg-white shadow ">
          <img
            className="w-full rounded-t-lg"
            src={Adiestramiento}
            alt="etologia"
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              ADIESTRAMIENTO CANINO
            </h5>
            <p className="text-normal mb-3 font-normal text-gray-700 ">
              Para evitar que los amos tengan problemas por sus mascotas. Clases
              a cachorros entre los 2 meses y 10 meses. Las clases de
              socialización para cachorros están dirigidas a cachorros entre los
              2 meses y 10 meses de edad aproximadamente, dictadas por un alumno
              de Ian Dunbar Usamos el método de Ian Dunbar, en estas clases
              pueden participar todos los miembros de la familia en el
              adiestramiento. Los cachorros deben traer su certificado de
              vacunación firmado por un MV colegiado.
            </p>
          </div>
        </div>
        <div className="max-w-lg rounded-lg border border-gray-200 bg-white shadow ">
          <img
            className="w-full rounded-t-lg"
            src={Presentacion}
            alt="etologia"
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              PRESENTACIÓN EN EXPOSICIONES
            </h5>
            <p className="text-normal mb-3 font-normal text-gray-700 ">
              Aprendan como presentar su perro en exposiciones, así pasaran
              momentos agradables en compañía de sus mascotas.
            </p>
          </div>
        </div>

        <div className="max-w-lg rounded-lg border border-gray-200 bg-white shadow ">
          <img
            className="w-full rounded-t-lg"
            src={CanCaballero}
            alt="etologia"
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              CAN CIUDADANO
            </h5>
            <p className="text-normal mb-3 font-normal text-gray-700 ">
              La Prueba del Can Cuidadano tiene por objeto lograr un excelente
              nivel de comportamiento social, tanto como un adiestramiento
              básico, con lo cual lograran que sus perros sean animales
              completamente sociables, con personas y perros; por lo que no le
              causara ningún tipo de problema cuando salgan a la calle. Parte de
              estas clases san tenido como base las pruebas del
              Landespolizeischule y de clubs de Europa, ayudaran en las pruebas
              de can ciudadano del Kennel Club Peruano (KCP). Los exámenes serán
              tomados por el KCP, en la Prueba del Can Ciudadano será organizada
              directamente por el KCP, nosotros solo solicitaremos la prueba.
              Esta Prueba constará de dos partes, con dos escenar ios
              diferentes. Será requisito indispensable para el otorgamiento del
              certificado de CAN CIUDADANO del KCP que los examinadores de la
              prueba hayan sido nombrados por el Consejo Directivo del Kennel
              Club Peruano. Cuando un ejemplar haya superado la Prueba, con el
              informe favorable (APTO) del Examinador, el KCP emitirá el
              certificado correspondiente. En caso que un ejemplar sea
              calificado desfavorablemente (NO APTO) en una prueba, tendrá dos
              (2) oportunidades más para superarla, siendo el KCP quien pondrá
              las fechas.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Canino;
