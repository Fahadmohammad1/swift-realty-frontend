import React from "react";
import PropertyCard from "./PropertyCard";

const FeaturedPoperties = () => {
  return (
    <section className="mt-[100px]">
      <h1 className="text-4xl font-bold font-[Creato Display] text-srSecondary text-center">
        Featured Properties
      </h1>
      <div className="w-[100px] border-[3px] border-srPrimary mx-auto mt-4 rounded-sm" />
      <PropertyCard />
    </section>
  );
};

export default FeaturedPoperties;
