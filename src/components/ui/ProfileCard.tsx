import { IMember } from "@/types";
import Image from "next/image";
import React from "react";

const ProfileCard = ({ member }: { member: IMember }) => {
  const { name, designation, image } = member;
  return (
    <div className="max-w-[405px] shadow-2xl mt-[50px] rounded-[10px] mx-auto">
      <Image
        width={405}
        height={330}
        alt="Product Image"
        className="w-[405px] h-[330px] rounded-t-xl"
        src={image}
      />
      <div className="pl-[30px] pt-[10px] pb-[13px]">
        <h6 className="text-srPrimary text-xl font-bold font-[Creato Display]">
          {name}
        </h6>
        <p className="text-sm font-normal font-[Creato Display]">
          {designation} of Swift Realty
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
