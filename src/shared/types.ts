export enum SelectedPage {
  Home = "home",
  About = "about",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface AboutType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ServiceType {
  name: string;
  description?: string;
  image: string;
}
