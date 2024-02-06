import React from "react";
import PropertyCard from "./PropertyCard";
import propery1 from "@/assets/images/property-1.png";
import propery2 from "@/assets/images/property-2.png";
import propery3 from "@/assets/images/property-3.png";

const FeaturedPoperties = () => {
  const properties = [
    { id: 1, location: "Dhaka, Bangladesh", price: 2000, image: propery1 },
    { id: 2, location: "Dhaka, Bangladesh", price: 2000, image: propery2 },
    { id: 3, location: "Dhaka, Bangladesh", price: 2000, image: propery3 },
  ];
  return (
    <section className="mt-[100px] container mx-auto">
      <h1 className="text-4xl font-bold font-[Creato Display] text-srSecondary text-center">
        Featured Properties
      </h1>
      <div className="w-[100px] border-[2px] border-srPrimary mx-auto mt-4 rounded-sm" />
      <div className="lg:grid grid-cols-3">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      <div className="w-full flex justify-center mt-[40px]">
        <button className="bg-srPrimary text-white px-[49px] py-5 rounded-[2px] text-base font-extrabold font-[Creato Display] self-center">
          View All
        </button>
      </div>
    </section>
  );
};

export default FeaturedPoperties;