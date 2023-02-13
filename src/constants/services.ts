import { ServiceType } from "@/shared/types";
import image1 from "@/assets/etologia.png";
import image2 from "@/assets/image2.png";
import image6 from "@/assets/canino.png";

export const services: Array<ServiceType> = [
  {
    name: "ETÓLOGIA",
    description:
      "Prevención, diagnóstico y tratamiento de problemas de comportamiento, conductas normales, inaceptables, alteradas.",
    image: image1,
    link: "/etologia"
  },
  {
    name: "TERAPIAS ASISTIDAS CON ANIMALES",
    description:
      "Logra mejorar la calidad emocional y la seguridad con pacientes que han perdido la motivación por enfermedades crónicas. Es efectivo para problemas de atención y aprendizaje, sobre todo en niños. Se planifican objetivos específicos de tratamiento con su médico y su psicólogo.",
    image: image2,
    link: "/terapia"
  },
  {
    name: "ADIESTRAMIENTO CANINO",
    description:
      "Clases teórico, prácticas dirigidas a los propietarios y sus mascotas, también para aquellos que lo quieren ver como una profesión.",
    image: image6,
    link: "/canino"
  },
];
