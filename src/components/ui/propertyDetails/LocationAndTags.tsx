import React from "react";
import map from "@/assets/images/map-2.png";
import mapPin from "@/assets/images/map-pin-filled.png";
import Image from "next/image";
import instagram from "@/assets/images/Instagram-2.png";
import twitter from "@/assets/images/Twitter-2.png";
import linkedin from "@/assets/images/Linkedin-2.png";
import facebook from "@/assets/images/Facebook-2.png";

const LocationAndTags = () => {
  const tags = [
    "Business",
    "Office",
    "Organic",
    "Duplex",
    "Business",
    "Office",
    "Organic",
    "Duplex",
  ];

  const socialLogos = [instagram, twitter, linkedin, facebook];
  return (
    <div className="mt-[60px]">
      <h5 className="text-2xl font-bold mb-5">Location</h5>
      <div className="lg:flex gap-6">
        <div>
          <div className="z-0 relative w-fit">
            <Image
              className="rounded-md h-[300px]"
              src={map}
              width={829}
              height={300}
              alt="map"
            />
            <Image
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
              src={mapPin}
              width={112}
              height={112}
              alt="map-pin"
            />
          </div>
        </div>
        <div>
          <div className="pt-5 pl-[30px] pr-[22px] pb-[23px] border mb-5 rounded">
            <h5 className="text-2xl font-medium mb-5">Tags</h5>
            <div className="grid grid-cols-4 gap-[10px]">
              {tags.map((tag, i) => (
                <button
                  className="text-srPrimary text-[10px] font-normal px-5 py-[6px] border border-srPrimary rounded"
                  key={i}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <div className="pt-5 pl-[30px] pb-[30px] border rounded">
            <h5 className="text-2xl font-medium mb-5">Follow us</h5>
            <div className="flex gap-[10px]">
              {socialLogos.map((logo, i) => (
                <Image
                  key={i}
                  src={logo}
                  width={40}
                  height={40}
                  alt="social logo"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationAndTags;
