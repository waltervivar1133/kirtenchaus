import { LinkType } from "@/shared/types";

export const links: LinkType[] = [
  {
    name: "Servicios",
    submenu: true,
    sublinks: [
      {
        name: "Etologia",
        link: "/etologia",
      },
      {
        name: "Terapia",
        link: "/terapia",
      },
      {
        name: "Adiestramiento",
        link: "/canino",
      },
    ],
  },
];
