import { StaticImageData } from "next/image";

export interface IProperty {
  id: number;
  location: string;
  price: number;
  image: StaticImageData;
}

export interface IMember {
  id: string;
  name: string;
  designation: string;
  image: StaticImageData;
}

export interface IBlog {
  id: string;
  title: string;
  date: string;
  description: string;
  image: StaticImageData;
}
