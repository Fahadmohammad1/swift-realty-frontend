import Image from "next/image";
import React from "react";
import banner from "../../assets/images/banner.png";

const Banner = () => {
  return (
    <section className="w-[1440px] h-screen relative lg:flex items-center">
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
        </div>
        <div className="w-40 h-[58px] left-0 top-[256px] absolute">
          <div className="w-40 h-[58px] left-0 top-0 absolute bg-blue-600 rounded" />
          <div className="left-[40px] top-[20px] absolute text-white text-base font-extrabold font-['Creato Display']">
            Explore All
          </div>
        </div>
        <div className="w-[180px] h-[58px] left-[180px] top-[256px] absolute">
          <div className="w-[180px] h-[58px] left-0 top-0 absolute rounded border-2 border-srPrimary hover:bg-srPrimary " />
          <div className="left-[34px] top-[20px] absolute text-srPrimary text-base font-extrabold font-['Creato Display'] ">
            Search Nearby
          </div>
        </div>
      </div>
      <div className="right-0 top-0 absolute">
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
