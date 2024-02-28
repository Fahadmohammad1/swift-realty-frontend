import Image from "next/image";
import React from "react";
import banner from "@/assets/images/choose-us-banner.png";
import building from "@/assets/images/building-icon.png";
import clock from "@/assets/images/clock.png";
import insurance from "@/assets/images/insurance.png";
import custom from "@/assets/images/pen-paper.png";
import line from "@/assets/images/Line.png";
import EmailForm from "../shared/EmailForm";

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
    <section className="mt-[60px] lg:mt-[100px]">
      <div className="container mx-auto mb-[60px] lg:mb-[100px] px-5 lg:px-0">
        <h1 className="text-3xl lg:text-4xl font-bold font-[Creato Display] text-srSecondary text-center">
          Why Choose Us
        </h1>
        <div className="w-[100px] border-[2px] border-srPrimary mx-auto mt-4 rounded-sm" />
        <div className="lg:grid grid-cols-2 mt-[50px] gap-[30px]">
          <div>
            <h3 className="text-2xl lg:text-4xl font-bold font-[Creato Display] text-srPrimary mt-5">
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
                  <p className="text-[15px] lg:text-[20px] font-bold font-[Creato Display]">
                    {q.title}
                  </p>
                  <p className="text-xs font-normal text-justify">
                    {q.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 lg:mt-0">
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
      <EmailForm />
    </section>
  );
};

export default WhyChooseUs;
