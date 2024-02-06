import Image from "next/image";
import React from "react";
import banner from "@/assets/images/banner.png";

const Banner = () => {
  return (
    <section className="h-screen relative lg:flex items-center">
      <div className="left-0 absolute flex items-center mb-36">
        <div className="leading-[62px]">
          <span className="text-black text-[64px] font-bold font-['Creato Display']">
            Find Your Perfect Home
            <br />
            With{" "}
          </span>
          <span className="text-blue-600 text-[64px] font-bold font-['Creato Display']">
            Swift Realty
          </span>
        </div>
        <div className="w-[693px] left-0 top-[158px] absolute text-neutral-500 text-base font-normal font-['Creato Display'] text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
          <div className="mt-[30px]">
            <button className="bg-srPrimary text-white px-[40px] py-5 rounded font-extrabold text-base font-[Creato Display] mr-5">
              Explore All
            </button>
            <button className="text-srPrimary px-[38px] py-[18px] border-[2px] border-srPrimary rounded font-extrabold text-base font-[Creato Display]">
              Search Nearby
            </button>
          </div>
        </div>
      </div>
      <div className="right-0 top-0 absolute z-10 -mr-[35px]">
        <Image
          className="ml-10"
          src={banner}
          width={814}
          height={700}
          alt="banner"
        />
      </div>
    </section>
  );
};

export default Banner;
