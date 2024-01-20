import Image from "next/image";
import React from "react";
import banner from "../../assets/images/choose-us-banner.png";
import building from "../../assets/images/building.png";
import clock from "../../assets/images/clock.png";
import insurance from "../../assets/images/insurance.png";
import custom from "../../assets/images/pen-paper.png";
import line from "../../assets/images/Line.png";

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
      <h1 className="text-4xl font-bold font-[Creato Display] text-srSecondary text-center">
        Why Choose Us
      </h1>
      <div className="w-[100px] border-[3px] border-srPrimary mx-auto mt-4 rounded-sm" />
      <div className="lg:grid grid-cols-2 mt-[50px]">
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
                <p className="text-xs font-normal">{q.description}</p>
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
    </section>
  );
};

export default WhyChooseUs;
