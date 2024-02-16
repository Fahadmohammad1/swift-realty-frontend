"use client";
import DynamicBanner from "@/components/ui/shared/DynamicBanner";
import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { TbMessageReport } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import Image from "next/image";
import property1 from "@/assets/images/property-details-1.png";
import { TbCurrentLocation } from "react-icons/tb";
import DetailsAndAmenities from "@/components/ui/propertyDetails/DetailsAndAmenities";
import OwnerDetails from "@/components/ui/propertyDetails/OwnerDetails";
import CallToAction from "@/components/ui/propertyDetails/CallToAction";
import LocationAndTags from "@/components/ui/propertyDetails/LocationAndTags";
import Review from "@/components/ui/propertyDetails/Review";
import PropertyCard from "@/components/ui/homepage/PropertyCard";
import propery1 from "@/assets/images/property-1.png";
import propery2 from "@/assets/images/property-2.png";
import propery3 from "@/assets/images/property-3.png";

const PropertyDetails = () => {
  const properties = [
    { id: 1, location: "Dhaka, Bangladesh", price: 2000, image: propery1 },
    { id: 2, location: "Dhaka, Bangladesh", price: 2000, image: propery2 },
    { id: 3, location: "Dhaka, Bangladesh", price: 2000, image: propery3 },
  ];
  return (
    <section>
      <DynamicBanner title="Property Details" />
      <div className="container mx-auto mt-[95px]">
        <div className="flex items-center">
          <button className="text-white font-medium text-xl bg-srPrimary py-[9px] px-10 rounded mr-5">
            Features
          </button>
          <button className="text-white font-medium text-xl bg-[#00C853] py-[9px] px-10 rounded">
            Rent
          </button>
          <p className="flex items-center gap-[10px] text-base font-medium ml-10">
            <CiCalendarDate className="text-srPrimary text-2xl" /> Jan 27, 2024
          </p>
          <p className="flex items-center gap-[10px] text-base font-medium ml-5">
            <TbMessageReport className="text-srPrimary text-2xl" />4 comments
          </p>
          <span className="ml-auto mr-[30px]">
            <FaHeart className="text-[#FF0000] text-[42px]" />
          </span>
          <span>
            <FiPlusCircle className="text-[42px]" />
          </span>
        </div>
        <div className="mt-5">
          <Image
            className="rounded border w-full lg:h-[550px]"
            src={property1}
            width={1255}
            height={550}
            alt="property"
          />
          <div>
            <div className="flex justify-between mt-8 items-center">
              <span>
                <h3 className="text-[40px] font-bold text-srSecondary m-0">
                  Golden Rento Property
                </h3>
                <p className="text-srPrimary text-lg flex items-center gap-[10px] mt-1">
                  <TbCurrentLocation className="text-xl text-srPrimary" />{" "}
                  Dhaka, Bangladesh
                </p>
              </span>
              <p className="text-srPrimary">
                <span className="text-5xl font-bold">$2800</span>
                <span className="text-2xl font-bold">/year</span>
              </p>
            </div>
            <p className="text-[28px] font-medium mt-6">Description</p>
            <p className="text-xl text-[#757575]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s <br /> <br /> With the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.t is a long established fact that a reader
              will be distracted by the readable content of a page when looking
              at its layout. The point of using Lorem Ipsum is that
            </p>
          </div>
        </div>

        {
          // property details and amenities
        }
        <DetailsAndAmenities />

        {
          // owner part
        }
        <OwnerDetails />

        {
          // message to book, top categories, latest properties
        }
        <CallToAction />

        {
          // location - tags
        }
        <LocationAndTags />

        {
          // reviews
        }
        <Review />

        {
          // our latest properties
        }

        <div className="mt-[100px]">
          <h1 className="text-4xl font-bold font-[Creato Display] text-srSecondary text-center">
            Our Latest Properties
          </h1>
          <div className="w-[100px] border-[2px] border-srPrimary mx-auto mt-4 rounded-sm" />
          <div className="lg:grid grid-cols-3 gap-5 mt-10">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
