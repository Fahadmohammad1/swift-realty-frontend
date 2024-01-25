import React from "react";
import banner from "../../assets/images/about-banner.png";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="container mx-auto mt-[100px]">
      <h1 className="text-4xl font-bold font-[Creato Display] text-srSecondary text-center">
        About Us
      </h1>
      <div className="w-[100px] border-[2px] border-srPrimary mx-auto mt-4 rounded-sm" />
      <div className="lg:grid grid-cols-2 mt-[50px] gap-[40px]">
        <div>
          <Image
            className="h-full"
            style={{ borderRadius: "0px 80px 0px 80px" }}
            src={banner}
            width={650}
            height={493}
            alt="choose-us-banner"
          />
        </div>
        <div>
          <h5 className="text-4xl font-bold font-[Creato Display] mt-5">
            Experts Forecasts And Insights Expected Trends
          </h5>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
