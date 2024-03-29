"use client";
import DynamicBanner from "@/components/ui/shared/DynamicBanner";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";
import { Dropdown } from "keep-react";
import propery1 from "@/assets/images/property-1.png";
import propery2 from "@/assets/images/property-2.png";
import propery3 from "@/assets/images/property-3.png";
import PropertyCard from "@/components/ui/homepage/PropertyCard";
import EmailForm from "@/components/ui/shared/EmailForm";

const PropertiesPage = () => {
  const properties = [
    { id: 1, location: "Dhaka, Bangladesh", price: 2000, image: propery1 },
    { id: 2, location: "Dhaka, Bangladesh", price: 2000, image: propery2 },
    { id: 3, location: "Dhaka, Bangladesh", price: 2000, image: propery3 },
    { id: 4, location: "Dhaka, Bangladesh", price: 2000, image: propery1 },
    { id: 5, location: "Dhaka, Bangladesh", price: 2000, image: propery2 },
    { id: 6, location: "Dhaka, Bangladesh", price: 2000, image: propery3 },
    { id: 7, location: "Dhaka, Bangladesh", price: 2000, image: propery1 },
    { id: 8, location: "Dhaka, Bangladesh", price: 2000, image: propery2 },
    { id: 9, location: "Dhaka, Bangladesh", price: 2000, image: propery3 },
    { id: 10, location: "Dhaka, Bangladesh", price: 2000, image: propery1 },
    { id: 11, location: "Dhaka, Bangladesh", price: 2000, image: propery2 },
    { id: 12, location: "Dhaka, Bangladesh", price: 2000, image: propery3 },
  ];
  return (
    <section className="mb-[40px]">
      <DynamicBanner title="Properties" />
      <div className="container mx-auto lg:mt-[100px] mb-[60px] px-5 lg:px-0">
        <div className="lg:flex justify-between items-center">
          <p className="text-2xl text-center lg:text-left">
            Showing 12 results
          </p>
          <div className="flex items-center gap-8">
            <Dropdown
              label="Popular"
              type="default"
              size="lg"
              className="font-bold"
              color="black"
              dismissOnClick={true}
            >
              <Dropdown.Item>Popular</Dropdown.Item>
            </Dropdown>
            <FaHeart className="lg:w-8 lg:h-8" />
            <IoSearchSharp className="lg:w-8 lg:h-8" />
            <VscSettings className="lg:w-8 lg:h-8" />
          </div>
        </div>
        <div className="lg:grid grid-cols-3 gap-x-5 gap-y-[32px] lg:mt-[43px] mt-5">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        <p className="text-[#757575] lg:text-2xl mt-[30px] lg:text-left text-center">
          Showing all results
        </p>
      </div>
      <EmailForm />
    </section>
  );
};

export default PropertiesPage;
