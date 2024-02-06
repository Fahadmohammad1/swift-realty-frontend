import React from "react";
import bg from "@/assets/images/Back-line.png";
import building from "@/assets/images/banner-building.png";
import Image from "next/image";

const DynamicBanner = ({ title }: { title: string }) => {
  return (
    <section>
      <div
        style={{
          background: `linear-gradient(rgba(30, 30, 42, 1), rgba(30, 30, 42, 1)), url(${bg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}
        className="bg-opacity-90"
      >
        <div className="flex justify-between lg:h-[400px] container mx-auto">
          <div className="h-full flex flex-col justify-center ">
            <h1 className="font-bold text-[64px] text-white font-[Creato Display]">
              {title}
            </h1>
            <p className="text-white text-2xl">Home | {title}</p>
          </div>
          <div className="h-full flex items-end">
            <Image
              className="bottom-0"
              src={building}
              width={383}
              height={360}
              alt="building"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicBanner;
