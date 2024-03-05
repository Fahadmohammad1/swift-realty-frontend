import React from "react";
import Image from "next/image";
import logo from "@/assets/images/Logo-2.png";
import footerBg from "@/assets/images/footer-bg.png";
import instagram from "@/assets/images/Instagram.png";
import twitter from "@/assets/images/Twitter.png";
import linkedin from "@/assets/images/Linkedin.png";
import facebook from "@/assets/images/Facebook.png";
import copyright from "@/assets/images/copyright.png";
import Link from "next/link";
import map from "@/assets/images/map.png";
import mapPin from "@/assets/images/map-pin-filled.png";

const Footer = () => {
  const socialLogos = [instagram, twitter, linkedin, facebook];
  return (
    <section>
      <div
        style={{
          background: `linear-gradient(rgba(1, 19, 38, 0.9), rgba(1, 19, 38, 0.9)), url(${footerBg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "cover",
          backgroundSize: "100%",
        }}
        className="bg-opacity-90 flex lg:flex-row flex-col lg:justify-evenly justify-center items-center lg:pt-[106px] pt-[50px] pb-[35px] lg:pb-[70px] px-5"
      >
        <div className="lg:w-[302px] text-center lg:text-left flex flex-col lg:block justify-center">
          <Image
            className="mb-5 mx-auto lg:mx-0"
            src={logo}
            width={240}
            height={38}
            alt="logo"
          />
          <p className="mb-[30px] text-base font-normal text-white">
            We are term of designers and developers create high quality Magento,
            Presentation.
          </p>
          <div className="flex gap-[10px] justify-center lg:justify-start mt-2 lg:mt-0">
            {socialLogos.map((logo, i) => (
              <Image
                key={i}
                src={logo}
                width={32}
                height={32}
                alt="social logo"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col text-white mt-5 lg:mt-0 text-center lg:text-start">
          <p className="text-base font-bold mb-4 inline">Useful Links</p>
          <Link href="/" className="mb-3 text-base">
            About
          </Link>
          <Link href="/" className="mb-[10px]">
            Blog
          </Link>
          <Link href="/" className="mb-[10px]">
            Contacts
          </Link>
          <Link href="/" className="mb-[10px]">
            Properties
          </Link>
          <Link href="/" className="mb-[10px]">
            Our Team
          </Link>
          <Link href="/">Services</Link>
        </div>
        <div className="flex flex-col text-white mt-5 lg:mt-0 text-center lg:text-start">
          <p className="text-base font-bold mb-4">Help?</p>
          <Link href="/" className="mb-[10px]">
            FAQs
          </Link>
          <Link href="/" className="mb-[10px]">
            Terms & Conditions
          </Link>
          <Link href="/" className="mb-[10px]">
            Reporting
          </Link>
          <Link href="/" className="mb-[10px]">
            Documentation
          </Link>
          <Link href="/" className="mb-[10px]">
            Support Policy
          </Link>
          <Link href="/">Privacy</Link>
        </div>
        <div className="z-0 relative mt-5 lg:mt-0">
          <Image
            className="rounded-md h-56"
            src={map}
            width={320}
            height={203}
            alt="map"
          />
          <Image
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            src={mapPin}
            width={42}
            height={42}
            alt="map-pin"
          />
        </div>
      </div>
      <div className="bg-white flex justify-between lg:py-[18px] lg:px-[93px] px-5">
        <span className="flex gap-1 items-center">
          {" "}
          <Image src={copyright} width={16} height={16} alt="copyright logo" />
          <p className="text-[10px] font-normal">
            This Themes 2021 All rights reserved
          </p>
        </span>
        <p className="text-[10px] font-medium">Terms of use | Privacy policy</p>
      </div>
    </section>
  );
};

export default Footer;
