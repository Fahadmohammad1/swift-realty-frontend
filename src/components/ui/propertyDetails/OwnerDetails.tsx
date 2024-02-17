"use client";
import React from "react";
import owner1 from "@/assets/images/owner1.png";
import { Rating } from "keep-react";
import Image from "next/image";

const OwnerDetails = () => {
  return (
    <div className="mt-10">
      <h5 className="font-medium text-[28px]">Owner Details</h5>
      <div className="flex ">
        <div className="lg:flex gap-5 items-center">
          <div className="border border-srPrimary rounded">
            <Image
              className="p-[5px] rounded-sm lg:w-[106px] lg:h-[98px]"
              src={owner1}
              width={106}
              height={98}
              alt="avatar"
            />
          </div>
          <div className="">
            <h4 className="font-bold text-xl text-srPrimary">David Rechardo</h4>
            <p className="text-xs font-normal text-mutedText mt-[2px]">
              Traveler/Photographer
            </p>
            <Rating size={14} className="mt-2">
              <Rating.Star color="#00C853" filledType="fill" />
              <Rating.Star color="#00C853" filledType="fill" />
              <Rating.Star color="#00C853" filledType="fill" />
              <Rating.Star color="#00C853" filledType="fill" />
              <Rating.Star color="#00C853" filledType="fill" />
              <span className="text-srExtra text-xs font-bold">[5.0]</span>
            </Rating>
          </div>
        </div>
        <div className="w-[1px] border mx-5" />
        <div className="lg:w-[933px]">
          <p className="text-mutedText text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OwnerDetails;
