import { AboutMomentsType, AboutTexts } from "@/shared/types";
import CanCaballero from "@/assets/can-caballero.png";
import Adiestramiento from "@/assets/adiestramiento.png";
import Presentacion from "@/assets/presentacion.png";
import Chiki from "@/assets/chiki.png";
import PerroServicio from "@/assets/servicio.png";

export const aboutMoments: Array<AboutMomentsType> = [
  {
    icon: <img width="450px" height="338px" src={CanCaballero} />,
    title: "CAN CIUDADANO",
    shortDescription:
      "La Prueba del Can Ciudadano tiene por objeto lograr un excelente nivel de comportamiento social...",
    description: (
      <>
        <p className="font-montserrat text-gray-500">
          La Prueba del Can Ciudadano tiene por objeto lograr un excelente nivel
          de comportamiento social, tanto como un adiestramiento básico, con lo
          cual lograran que sus perros sean animales completamente sociables,
          con personas y perros; por lo que no le causara ningún tipo de
          problema cuando salgan a la calle. <br /> <br />
          Parte de estas clases san tenido como base las pruebas del
          Landespolizeischule y de clubs de Europa, ayudaran en las pruebas de
          can ciudadano del Kennel Club Peruano (KCP). <br /> <br />
          Los exámenes serán tomados por el KCP, en la Prueba del Can Ciudadano
          será organizada directamente por el KCP, nosotros solo solicitaremos
          la prueba. Esta Prueba constará de dos partes, con dos escenarios
          diferentes. <br />
          <br />
          Será requisito indispensable para el otorgamiento del certificado de
          CAN CIUDADANO del KCP que los examinadores de la prueba hayan sido
          nombrados por el Consejo Directivo del Kennel Club Peruano. Cuando un
          ejemplar haya superado la Prueba, con el informe favorable (APTO) del
          Examinador, el KCP emitirá el certificado correspondiente. En caso que
          un ejemplar sea calificado desfavorablemente (NO APTO) en una prueba,
          tendrá dos (2) oportunidades más para superarla, siendo el KCP quien
          pondrá las fechas.
        </p>
      </>
    ),
  },
  {
    icon: <img width="450px" height="338px" src={PerroServicio} />,
    title: "PERROS DE SERVICIO",
    shortDescription:
      "Preparamos perros para realizar tareas en beneficio de personas con discapacidad física...",
    description: (
      <>
        <p className="font-montserrat text-gray-500">
          Preparamos perros para realizar tareas en beneficio de personas con
          discapacidad física, sensorial, psiquiátrica, intelectual u otra
          discapacidad mental, <br /> <br /> en el video, Daiquiri nuestra
          primera perra de servicio, cuando caminaba por la calle, si se daba
          cuenta a través del olfato que había una persona con problemas
          emocionales, (tristeza, agobio, pena etc.) <br /> <br /> al percibirlo
          se le acercaba amigablemente y no se separaba de ella hasta que sentía
          su cambio de actitud.
        </p>
      </>
    ),
  },
  {
    icon: <img width="450px" height="338px" src={Presentacion} />,

    title: "PRESENTACION EN EXPOSICIONES",
    shortDescription:
      "Aprendan como presentar su perro en exposiciones, así pasaran momentos agradables en compañía....",
    description: (
      <>
        <p className="font-montserrat text-gray-500">
          Aprendan como presentar su perro en exposiciones, así pasaran momentos
          agradables en compañía de sus mascotas.
        </p>
      </>
    ),
  },
  {
    icon: <img width="450px" height="338px" src={Chiki} />,
    title: "CHIKI FUE UNA ALUMNA",
    shortDescription:
      "Por las regulaciones emitidas recientemente por el Departamento de Transporte de los Estados Unidos....",
    description: (
      <>
        <p>
          Por las regulaciones emitidas recientemente por el Departamento de
          Transporte de los Estados Unidos (DOT), <br /> <br /> solo viajaran en
          cabina perros de servicio con su propietario, esta regla entro en
          vigor el 11 de enero del 2022. <br /> <br /> American Airlines y otras
          líneas aéreas que permitían viajar en cabina a los perros de apoyo
          emocional ahora no podrán hacerlo.
        </p>
      </>
    ),
  },
  {
    icon: <img width="450px" height="338px" src={Adiestramiento} />,
    title: "ADIESTRAMIENTO DE CACHORROS",
    shortDescription:
      "Para evitar que los amos tengan problemas por sus mascotas. Clases a cachorros...",
    description: (
      <>
        <p className="font-montserrat text-gray-500">
          Para evitar que los amos tengan problemas por sus mascotas. <br />{" "}
          <br /> Clases a cachorros entre los 2 meses y 10 meses, <br /> <br />{" "}
          Las clases de socialización para cachorros están dirigidas a cachorros
          entre los 2 meses y 10 meses de edad aproximadamente, <br /> <br />{" "}
          dictadas por un alumno de Ian Dunbar Usamos el método de Ian Dunbar,
          en estas clases pueden participar todos los miembros de la familia en
          el adiestramiento. <br /> <br /> Los cachorros deben traer su
          certificado de vacunación firmado por un MV colegiado.
        </p>
      </>
    ),
  },
];

export const aboutText: Array<AboutTexts> = [
  {
    description:
      "Creador de la Escuela de Perros de ex Guardia Republicana del Perú.",
  },
  {
    description: "Asesor de la Escuela de Perros de la Fuerza Aérea del Perú.",
  },
  {
    description:
      "Creador de la Escuela de Perros de Guerra del Batallón de Municiones 513 del Ejército.",
  },
  {
    description:
      "Creador de la Escuela de Perros de Guerra del Batallón de Municiones 513 del Ejército.",
  },
  {
    description:
      "Creador de la Escuela de Seguridad, Detección de Drogas del Servicio Veterinario del Ejército Peruano. (SVETE).",
  },
  {
    description:
      " Creador del CECADO Centro de Entrenamiento Canino para la Detección de Drogas y Otros de la SUNAD.",
  },
  {
    description: "Creador del Ceo Miguel Iglesias.",
  },
  {
    description: "Creador de la Brigada Canina del Serenazgo de Chorrillos.",
  },
  {
    description: "  Creador de la Brigada Canina del Serenazgo de Barranco.",
  },
];

export const aboutTextParagraph =
  "Si tenemos un juicio buscamos un abogado, si queremos una casa buscamos un ingeniero, para adquirir una mascota hay que buscar un etólogo que asesore en el compañero mas adecuado para la familia. Con más de 40 años de experiencia en la rama. Información adicional Esta pagina fue creada con el único fin de brindar asesoramiento sobre problemas conductuales de las mascotas.";

export const aboutTextFooter: Array<AboutTexts> = [
  {
    description:
      "AEPE Asociación para el Estudio de Perro y su entorno España.",
  },
  {
    description: "VVS Veterinarios de Vida Silvestre Colombia.",
  },
  {
    description: "Verain fur Deusche SchaferHunde Alemania.",
  },
  {
    description: "Deuschdrahthaar del Perú..",
  },
];
