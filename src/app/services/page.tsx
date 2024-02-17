import DynamicBanner from "@/components/ui/shared/DynamicBanner";
import Image from "next/image";
import React from "react";
import apartment from "@/assets/images/apartment.png";
import office from "@/assets/images/office.png";
import villa from "@/assets/images/villa.png";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const ServicesPage = () => {
  const services = [
    {
      id: "1",
      icon: apartment,
      name: "Apartments",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
    },
    {
      id: "2",
      icon: office,
      name: "Office",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
    },
    {
      id: "3",
      icon: villa,
      name: "Villa House",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
    },
    {
      id: "4",
      icon: apartment,
      name: "Apartments",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
    },
    {
      id: "5",
      icon: office,
      name: "Office",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
    },
    {
      id: "6",
      icon: villa,
      name: "Vila House",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
    },
  ];
  return (
    <section>
      <DynamicBanner title="Services" />
      <h1 className="text-4xl font-bold font-[Creato Display] text-srSecondary text-center mt-[100px]">
        Our Beaut Services
      </h1>
      <div className="w-[100px] border-[2px] border-srPrimary mx-auto mt-4 rounded-sm mb-[50px]" />
      <div className="lg:grid grid-cols-3 container mx-auto gap-x-5 gap-y-[30px] shadow">
        {services.map((service) => (
          <div key={service.id} className="p-[30px] border">
            <Image src={service.icon} width={80} height={80} alt="icon" />
            <h4 className="text-[32px] font-bold text-[#354052] mt-[5px] mb-[15px]">
              {service.name}
            </h4>
            <p className="text-base font-normal text-justify text-mutedText mb-5">
              {service.description}
            </p>
            <Link
              href="/"
              className="text-base font-medium text-justify text-[#354052] inline-block"
            >
              View More
              <FaArrowRightLong />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;
