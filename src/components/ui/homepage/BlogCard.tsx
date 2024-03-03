import Image from "next/image";
import React from "react";
import { IBlog } from "@/types";

const BlogCard = ({ blog }: { blog: IBlog }) => {
  const { title, date, description, image } = blog;
  return (
    <div className="max-w-[405px] shadow-2xl mt-[50px] rounded-[10px] mx-auto">
      <Image
        width={405}
        height={330}
        alt="Product Image"
        className="lg:w-[405px] lg:h-[330px] rounded-t-xl"
        src={image}
      />
      <div className="pl-[30px] pt-[10px] pb-[22px]">
        <h6 className="text-base font-normal font-[Creato Display]">{title}</h6>
        <p className="text-srPrimary text-xs font-[Creato Display] my-[5px]">
          {date}
        </p>
        <p className="text-[10px] font-normal font-[Creato Display]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
