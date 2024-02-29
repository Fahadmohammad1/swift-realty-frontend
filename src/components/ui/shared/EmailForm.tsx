import React from "react";
import bg from "@/assets/images/background.png";

const EmailForm = () => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 123, 255, 0.9), rgba(0, 123, 255, 0.9)), url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
      className=" bg-opacity-90 mt-10 lg:mt-[60px] mb-5 lg:mb-10"
    >
      <div className="max-w-[800px] mx-auto">
        <h3 className="text-center text-white text-2xl lg:text-4xl font-bold font-[Creato Display] pt-[50px]">
          Ready to Find Your Dream Home?
        </h3>
        <div className="relative mt-5 w-full mx-auto flex items-center pb-[87px]">
          <button className="text-white bg-srPrimary absolute right-3 lg:px-[54px] px-[18px] lg:py-[18px] py-2 rounded">
            Submit Now
          </button>
          <input
            type="text"
            placeholder="Your Email Address...."
            className="w-full p-5 text-[#BCBCBC] text-lg lg:text-2xl font-normal font-[Inter] rounded italic"
          />
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
