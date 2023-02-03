import { ServiceType } from "@/shared/types";
import image1 from "@/assets/etologia.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/servicio.png";
import image5 from "@/assets/can-caballero.png";
import image6 from "@/assets/canino.png";

export const services: Array<ServiceType> = [
  {
    name: "ETÓLOGIA",
    description:
      "Prevención, diagnóstico y tratamiento de problemas de comportamiento, conductas normales, inaceptables, alteradas.",
    image: image1,
  },
  {
    name: "TERAPIAS ASISTIDAS CON ANIMALES",
    description:
      "Logra mejorar la calidad emocional y la seguridad con pacientes que han perdido la motivación por enfermedades crónicas. Es efectivo para problemas de atención y aprendizaje, sobre todo en niños. Se planifican objetivos específicos de tratamiento con su médico y su psicólogo.",
    image: image2,
  },
  {
    name: "ASISTENCIAS ASISTIDAS",
    description:
      "Proceso menos formal que las terapias, únicamente es una visita. de motivación y alegría.Proporciona oportunidades para la educación, deleite y disfrutar de beneficios terapéuticos que mejoran la calidad de vida.",
    image: image3,
  },
  {
    name: "SOCIALIZACIÓN DE CACHORROS",
    description:
      "Para solucionar problemas conductuales de las mascotas en la interacción con persona y otras mascotas.",
    image: image4,
  },
  {
    name: "MASOTERAPIA",
    description:
      "Técnica kinesiológica que se utiliza en animales con problemas de comportamiento, como ansiedad por separación,agresividad, estrés, entre otros.",
    image: image5,
  },
  {
    name: "ADIESTRAMIENTO CANINO",
    description:
      "Clases teórico, prácticas dirigidas a los propietarios y sus mascotas, también para aquellos que lo quieren ver como una profesión.",
    image: image6,
  },
];
