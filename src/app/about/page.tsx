import DynamicBanner from "@/components/ui/shared/DynamicBanner";
import React from "react";
import check from "@/assets/images/circle-check.png";
import Image from "next/image";
import banner from "@/assets/images/about-banner.png";

const AboutPage = () => {
  const aboutData = [
    { id: "1", icon: check, text: "Special Security Services" },
    { id: "2", icon: check, text: "24/7 Support Services" },
    { id: "3", icon: check, text: "Best Architecture Design" },
    { id: "4", icon: check, text: "Easy Payment System" },
  ];
  return (
    <section>
      <DynamicBanner title="About Us" />
      <h1 className="text-4xl font-bold font-[Creato Display] text-srSecondary text-center">
        About Us
      </h1>
      <div className="w-[100px] border-[2px] border-srPrimary mx-auto mt-4 rounded-sm mb-[50px]" />
      <div className="container mx-auto">
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
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
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

        <div className="my-[100px] lg:grid grid-cols-3">
          <div className="text-center border-r-2">
            <p className="text-srPrimary font-bold text-[94px] leading-none">
              150+
            </p>
            <p className="font-normal text-2xl">Happy Customers in 2023</p>
          </div>

          <div className="text-center border-r-2">
            <p className="text-srPrimary font-bold text-[94px] leading-none">
              140+
            </p>
            <p className="font-normal text-2xl">Completed Project</p>
          </div>

          <div className="text-center">
            <p className="text-srPrimary font-bold text-[94px] leading-none">
              100+
            </p>
            <p className="font-normal text-2xl">Our Talented Team Member</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
