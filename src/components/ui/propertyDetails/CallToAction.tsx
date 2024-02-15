import Image from "next/image";
import React from "react";
import rightArrow from "@/assets/images/right-arrow.png";
import property4 from "@/assets/images/property-4.png";
import property5 from "@/assets/images/property-5.png";
import property6 from "@/assets/images/property-6.png";
import property7 from "@/assets/images/property-7.png";

const CallToAction = () => {
  const categories = [
    "Apartment (14)",
    "Picture Studio (08)",
    "Luxury Vila (14)",
    "Office (05)",
    "Apartment (12)",
  ];

  const properties = [
    {
      id: "1",
      price: 400,
      image: property4,
      name: "Luxumburg New Luxury Vila",
      location: "Dhaka, Bangladesh",
    },
    {
      id: "2",
      image: property5,
      price: 400,
      name: "Luxumburg New Luxury Vila",
      location: "Dhaka, Bangladesh",
    },
    {
      id: "3",
      image: property6,
      price: 400,
      name: "Luxumburg New Luxury Vila",
      location: "Dhaka, Bangladesh",
    },
    {
      id: "4",
      image: property7,
      price: 400,
      name: "Luxumburg New Luxury Vila",
      location: "Dhaka, Bangladesh",
    },
  ];
  return (
    <div className="mt-[60px] lg:flex gap-x-[25px]">
      <div className="shadow-md p-[30px] flex flex-col gap-y-5 w-full">
        <h5 className="text-2xl font-bold">Send Message For Book</h5>
        <input
          type="text"
          placeholder="Name"
          className="border px-5 py-3 rounded-sm border-[#BCBCBC] text-mutedText"
        />
        <input
          type="email"
          placeholder="Email"
          className="border px-5 py-3 rounded-sm border-[#BCBCBC] text-mutedText"
        />
        <textarea
          name=""
          id=""
          className="border px-5 pt-[10px] pb-[63px] rounded-sm border-[#BCBCBC] text-mutedText"
        >
          Message
        </textarea>
        <button className="bg-srPrimary text-white px-8 py-3 rounded-[2px] text-base font-bold font-[Creato Display] w-fit">
          Send Now
        </button>
      </div>

      {
        // top categories
      }

      <div className="shadow-md p-[30px] flex flex-col gap-y-5 w-full">
        <h5 className="text-2xl font-bold">Top Categories</h5>
        {categories.map((category, i) => (
          <div key={i} className="flex gap-x-5 items-center">
            <Image src={rightArrow} width={25} height={25} alt="right arrow" />
            <p className="font-normal text-sm">{category}</p>
          </div>
        ))}
      </div>

      {
        // latest properties
      }

      <div className="shadow-md p-[30px] flex flex-col gap-y-[15px] w-full">
        <h5 className="text-2xl font-bold">Latest Properties</h5>
        {properties.map((property) => (
          <div key={property.id} className="flex gap-x-[10px] items-center">
            <Image
              className="lg:w-[60px] lg:h-[50px]"
              src={property.image}
              width={60}
              height={50}
              alt="property"
            />
            <div>
              <p className="font-normal text-sm">${property.price}.00</p>
              <p className="font-normal text-sm">{property.name}</p>
              <p className="font-normal text-sm">{property.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CallToAction;
