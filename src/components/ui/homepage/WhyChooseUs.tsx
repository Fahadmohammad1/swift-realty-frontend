import Image from "next/image";
import React from "react";
import banner from "@/assets/images/choose-us-banner.png";
import building from "@/assets/images/building-icon.png";
import clock from "@/assets/images/clock.png";
import insurance from "@/assets/images/insurance.png";
import custom from "@/assets/images/pen-paper.png";
import line from "@/assets/images/Line.png";
import bg from "@/assets/images/background.png";

const WhyChooseUs = () => {
  const qualities = [
    {
      id: 1,
      image: building,
      title: "Best Price",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries. Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      id: 2,
      image: clock,
      title: "Quick Process",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries. Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      id: 3,
      image: insurance,
      title: "Property Insurance",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries. Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      id: 4,
      image: custom,
      title: "Custom By Request",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries. Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
  ];
  return (
    <section className="mt-[100px]">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold font-[Creato Display] text-srSecondary text-center">
          Why Choose Us
        </h1>
        <div className="w-[100px] border-[2px] border-srPrimary mx-auto mt-4 rounded-sm" />
        <div className="lg:grid grid-cols-2 mt-[50px] gap-[30px]">
          <div>
            <h3 className="text-4xl font-bold font-[Creato Display] text-srPrimary mt-5">
              Why Choose Swift Realty
            </h3>
            {qualities.map((q) => (
              <div key={q.id} className="flex mt-[50px]">
                <div className="w-20 h-20 flex items-center">
                  <Image src={q.image} width={60} height={60} alt="icon" />
                </div>
                <Image
                  className="mr-[15px] ml-[30px]"
                  src={line}
                  width={0}
                  height={80}
                  alt="line"
                />
                <div>
                  <p className="text-[20px] font-bold font-[Creato Display]">
                    {q.title}
                  </p>
                  <p className="text-xs font-normal text-justify">
                    {q.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <Image
              className="h-full"
              style={{ borderRadius: "80px 0px 80px 0px" }}
              src={banner}
              width={650}
              height={580}
              alt="choose-us-banner"
            />
          </div>
        </div>
      </div>
      <div
        style={{
          background: `linear-gradient(rgba(0, 123, 255, 0.9), rgba(0, 123, 255, 0.9)), url(${bg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}
        className="mt-[100px] bg-opacity-90"
      >
        <div className="max-w-[800px] mx-auto">
          <h3 className="text-center text-white text-4xl font-bold font-[Creato Display] pt-[50px]">
            Ready to Find Your Dream Home?
          </h3>
          <div className="relative mt-5 w-full mx-auto flex items-center pb-[87px]">
            <button className="text-white bg-srPrimary absolute right-3 px-[54px] py-[18px] rounded">
              Submit Now
            </button>
            <input
              type="text"
              placeholder="Your Email Address....."
              className="w-full p-5 text-[#BCBCBC] text-2xl font-normal font-[Inter] rounded italic"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
