import Image from "next/image";
import React from "react";
import currentLocation from "@/assets/images/current-location.png";
import { IProperty } from "@/types";

const PropertyCard = ({ property }: { property: IProperty }) => {
  const { location, price, image } = property;
  return (
    <div className="w-full shadow-md rounded-xl mx-auto border border-srPrimary mb-5 lg:mb-0">
      <Image
        width={405}
        height={320}
        alt="Product Image"
        className="w-full h-[320px] object-cover rounded-t-xl"
        src={image}
      />
      <div className="pl-5 pt-[15px] pr-[30px] pb-[23px]">
        <div className="flex gap-[10px] items-center mb-5">
          <Image
            src={currentLocation}
            width={20}
            height={20}
            alt="current location"
          />
          <p className="text-sm font-normal font-[Creato Display] text-srPrimary">
            {location}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <button className="bg-srSecondary hover:bg-srPrimary text-white px-[15px] py-[9px] rounded text-xs font-bold">
            Buy Now
          </button>
          <div className="text-2xl font-bold text-srPrimary">${price}</div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
