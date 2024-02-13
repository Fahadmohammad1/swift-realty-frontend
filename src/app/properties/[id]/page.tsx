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
import owner1 from "@/assets/images/owner1.png";
import { Rating, TextInput, Textarea } from "keep-react";

const PropertyDetails = () => {
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
          // property details part
        }

        <div className="lg:grid grid-cols-2 mt-[60px]">
          <div>
            <h4 className="text-[28px] font-medium mb-[30px]">
              Property Details
            </h4>
            <div className="">
              <div className="flex text-mutedText text-xl font-normal">
                <div className="flex gap-[50px]">
                  <div>
                    <div className="mb-5">
                      <p>Property ID:</p>
                    </div>
                    <div className="mb-5">
                      <p>Home Area</p>
                    </div>
                    <div className="mb-5">
                      <p>Rooms</p>
                    </div>
                    <div className="mb-5">
                      <p>Baths</p>
                    </div>
                  </div>

                  <div className="w-fit">
                    <div className="mb-5">
                      <p>AZ20</p>
                    </div>
                    <div className="mb-5">
                      <p>120sqft</p>
                    </div>
                    <div className="mb-5">
                      <p>7</p>
                    </div>
                    <div className="mb-5">
                      <p>2</p>
                    </div>
                  </div>
                </div>
                <div className="w-[1px] border mx-[61px]" />
                <div className="flex gap-[50px]">
                  <div>
                    <div className="mb-5">
                      <p>Property ID:</p>
                    </div>
                    <div className="mb-5">
                      <p>Home Area</p>
                    </div>
                    <div className="mb-5">
                      <p>Rooms</p>
                    </div>
                    <div className="mb-5">
                      <p>Baths</p>
                    </div>
                  </div>
                  <div className="w-fit">
                    <div className="mb-5">
                      <p>AZ20</p>
                    </div>
                    <div className="mb-5">
                      <p>120sqft</p>
                    </div>
                    <div className="mb-5">
                      <p>7</p>
                    </div>
                    <div className="mb-5">
                      <p>2</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-[28px] font-medium mb-[30px] lg:ml-[106px]">
              Amenities
            </h4>
            <div>
              <div className="flex text-mutedText text-xl font-normal justify-end">
                <div className="flex gap-[50px]">
                  <div className="text-srPrimary">
                    <div className="mb-5">
                      <p>AC:</p>
                    </div>
                    <div className="mb-5">
                      <p>Gym:</p>
                    </div>
                    <div className="mb-5">
                      <p>Swimming Pool:</p>
                    </div>
                    <div className="mb-5">
                      <p>Wifi:</p>
                    </div>
                  </div>

                  <div className="w-fit">
                    <div className="mb-5">
                      <p>Yes</p>
                    </div>
                    <div className="mb-5">
                      <p>No</p>
                    </div>
                    <div className="mb-5">
                      <p>No</p>
                    </div>
                    <div className="mb-5">
                      <p>Yes</p>
                    </div>
                  </div>
                </div>

                <div className="w-[1px] border mx-[61px]" />
                <div className="flex gap-[50px]">
                  <div className="text-srPrimary">
                    <div className="mb-5">
                      <p>BBQ:</p>
                    </div>
                    <div className="mb-5">
                      <p>Bathup:</p>
                    </div>
                    <div className="mb-5">
                      <p>Washer:</p>
                    </div>
                    <div className="mb-5">
                      <p>Fireplace:</p>
                    </div>
                  </div>

                  <div className="w-fit">
                    <div className="mb-5">
                      <p>Yes</p>
                    </div>
                    <div className="mb-5">
                      <p>No</p>
                    </div>
                    <div className="mb-5">
                      <p>No</p>
                    </div>
                    <div className="mb-5">
                      <p>Yes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {
          // owner part
        }

        <div className="mt-10">
          <h4 className="font-medium text-[28px]">Owner Details</h4>
          <div className="flex ">
            <div className="lg:flex gap-5 items-center">
              <div className="border border-srPrimary w-full rounded">
                <Image
                  className="p-[5px] rounded-sm w-full"
                  src={owner1}
                  width={106}
                  height={98}
                  alt="avatar"
                />
              </div>
              <div>
                <h4 className="font-bold text-xl text-srPrimary">
                  David Rechardo
                </h4>
                <p className="text-xs font-normal text-mutedText mt-[2px]">
                  Traveler/Photographer
                </p>
                <Rating size={14} className="mt-2">
                  <Rating.Star color="#00C853" filledType="fill" />
                  <Rating.Star color="#00C853" filledType="fill" />
                  <Rating.Star color="#00C853" filledType="fill" />
                  <Rating.Star color="#00C853" filledType="fill" />
                  <Rating.Star color="#00C853" filledType="fill" />
                  <span className="text-srExtra text-xs font-bold">[5.0]</span>
                </Rating>
              </div>
            </div>
            <div className="w-[1px] border mx-5" />
            <div>
              <p className="text-mutedText text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>

        {
          // form part
        }

        <div className="mt-[60px]">
          <div className="shadow-md p-[30px] flex flex-col gap-y-5">
            <h5 className="text-2xl font-bold">Send Message For Book</h5>
            <TextInput id="name" type="text" placeholder="Name" color="gray" />
            <TextInput
              id="email"
              type="email"
              placeholder="Email"
              color="gray"
            />
            <Textarea
              id="message"
              placeholder="Message"
              withBg={true}
              color="gray"
              border={true}
              rows={4}
            />
            <button className="bg-srPrimary text-white px-8 py-5 rounded-[2px] text-base font-bold font-[Creato Display]">
              Send Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
