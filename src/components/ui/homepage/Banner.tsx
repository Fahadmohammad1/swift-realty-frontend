import Image from "next/image";
import React from "react";
import banner from "@/assets/images/banner.png";
import bannerFull from "@/assets/images/banner-full.png";

const Banner = () => {
  return (
    <section className="lg:h-screen relative lg:flex items-center lg:px-0 p-5">
      <div className="lg:left-0 text-center lg:text-left lg:absolute lg:flex items-center lg:mb-36">
        <div className="lg:leading-[62px] mb-5 lg:mb-0">
          <span className="text-black lg:text-[64px] text-4xl font-bold font-['Creato Display']">
            Find Your Perfect Home
            <br />
            With{" "}
          </span>
          <span className="text-srPrimary lg:text-[64px] text-4xl font-bold font-['Creato Display']">
            Swift Realty
          </span>
        </div>
        <div className="lg:w-[693px] lg:left-0 lg:top-[158px] lg:absolute text-neutral-500 lg:text-base font-normal font-['Creato Display'] text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
          <div className="mt-5 lg:mt-[30px]">
            <button className="bg-srPrimary text-white lg:px-[40px] px-4 lg:py-5 p-2 rounded lg:font-extrabold lg:text-base font-[Creato Display] mr-5">
              Explore All
            </button>
            <button className="text-srPrimary lg:px-[38px] px-[14px] py-[6px] lg:py-[18px] border-[2px] border-srPrimary rounded lg:font-extrabold lg:text-base font-[Creato Display]">
              Search Nearby
            </button>
          </div>
        </div>
      </div>
      <div className="right-0 top-0 absolute z-10 lg:-mr-[35px] hidden lg:block">
        <Image
          className="lg:ml-10"
          src={banner}
          width={814}
          height={700}
          alt="banner"
        />
      </div>
      <div className="mt-5 lg:hidden block">
        <Image
          className="lg:ml-10"
          src={bannerFull}
          width={500}
          height={300}
          alt="banner"
        />
      </div>
    </section>
  );
};

export default Banner;
