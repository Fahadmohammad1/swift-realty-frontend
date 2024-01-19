import { StaticImageData } from "next/image";

export interface IProperty {
  id: number;
  location: string;
  price: number;
  image: StaticImageData;
}
