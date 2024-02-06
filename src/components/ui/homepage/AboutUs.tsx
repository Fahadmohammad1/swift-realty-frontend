import React from "react";
import banner from "@/assets/images/about-banner.png";
import Image from "next/image";
import check from "@/assets/images/circle-check.png";

const AboutUs = () => {
  const aboutData = [
    { id: "1", icon: check, text: "Special Security Services" },
    { id: "2", icon: check, text: "24/7 Support Services" },
    { id: "3", icon: check, text: "Best Architecture Design" },
    { id: "4", icon: check, text: "Easy Payment System" },
  ];
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
          <p className="mt-[10px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          {aboutData.map((data) => (
            <div key={data.id} className="flex gap-[15px] mt-[30px]">
              <Image
                src={data.icon}
                width={26}
                height={26}
                alt="circle-check"
              />
              <p className="font-normal text-xl font-[Creato Display]">
                {data.text}
              </p>
            </div>
          ))}
          <button className="bg-srPrimary text-white py-5 text-base font-extrabold font-[Creato Display] px-[42px] rounded-sm mt-[50px]">
            More Details
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
