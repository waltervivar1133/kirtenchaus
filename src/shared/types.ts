export enum SelectedPage {
  Home = "inicio",
  About = "nosotros",
  Service = "servicios",
  ContactUs = "contactus",
}

export interface AboutMomentsType {
  icon: JSX.Element;
  title: string;
  shortDescription: string;
  description: JSX.Element;
}

export interface AboutTexts {
  description: string;
}

export interface ServiceType {
  name: string;
  description?: string;
  image: string;
  link:string;
}
