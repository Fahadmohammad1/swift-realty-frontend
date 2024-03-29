"use client";

import Image from "next/image";
import React from "react";
import user from "@/assets/images/user1.png";
import { Rating } from "keep-react";

const Testimonial = () => {
  return (
    <section className="container mx-auto mt-[70px] lg:mt-[100px] px-5 lg:px-0">
      <h1 className="lg:text-4xl text-2xl font-bold font-[Creato Display] text-srSecondary text-center">
        Testimonial
      </h1>
      <div className="w-[100px] border-[2px] border-srPrimary mx-auto mt-4 rounded-sm" />
      <div className="mt-[50px] lg:flex lg:w-[1215px] mx-auto">
        <div
          style={{ borderRadius: "0px 30px 0px 30px" }}
          className="border-2 border-srPrimary lg:w-max"
        >
          <Image
            style={{ borderRadius: "0px 30px 0px 30px" }}
            className="px-[10px] py-2 h-full mx-auto"
            src={user}
            width={300}
            height={283}
            alt="user"
          />
        </div>
        <div className="lg:w-[865px] lg:ml-[30px] mt-5 lg:mt-0">
          <h4 className="lg:text-[28px] text-xl  font-bold font-[Creato Display]">
            M.S Rehmatul Alamin <span className="text-slate-400">|</span>{" "}
            <span className="text-srPrimary">(5.0)</span>
          </h4>
          <p className="lg:text-[20px] text-[15px] font-normal font-[Creato Display] text-justify mt-[10px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into.
          </p>
          <Rating size={25} className="mt-[15px]">
            <Rating.Star color="#00C853" filledType="fill" />
            <Rating.Star color="#00C853" filledType="fill" />
            <Rating.Star color="#00C853" filledType="fill" />
            <Rating.Star color="#00C853" filledType="fill" />
            <Rating.Star color="#00C853" filledType="fill" />
          </Rating>
          <button className="bg-srPrimary text-white py-3 text-base font-bold font-[Inter] px-[30px] rounded-sm mt-5">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
