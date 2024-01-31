"use client";
import React, { useState } from "react";
import BlogCard from "./BlogCard";
import blog1 from "../../assets/images/blog-1.png";
import blog2 from "../../assets/images/blog-2.png";
import blog3 from "../../assets/images/blog-3.png";
import Image from "next/image";

const LatestBlog = () => {
  const [currentSlider, setCurrentSlider] = useState(1);

  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? blogs.length - 1 : currentSlider - 1
    );
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === blogs.length - 1 ? 0 : currentSlider + 1
    );
  const blogs = [
    {
      id: "1",
      title: "Luxumburg of the city venu Sallasaw",
      date: "December 15, 2023",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown........",
      image: blog1,
    },
    {
      id: "2",
      title: "Luxumburg of the city venu Sallasaw",
      date: "December 15, 2023",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown........",
      image: blog2,
    },
    {
      id: "3",
      title: "Luxumburg of the city venu Sallasaw",
      date: "December 15, 2023",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown........",
      image: blog3,
    },
  ];
  return (
    <section className="mt-[100px]">
      <h1 className="text-4xl font-bold font-[Creato Display] text-srSecondary text-center">
        Latest Blog From Us
      </h1>
      <div className="w-[100px] border-[2px] border-srPrimary mx-auto mt-4 rounded-sm" />

      <div className=" mx-auto h-[540px] md:h-[670px] flex flex-col xl:flex-row items-center overflow-hidden gap-5 lg:gap-10 relative">
        <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">
          <button
            onClick={prevSlider}
            className="flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="w-4 h-4 md:w-6 md:h-6 icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#0095FF"
                  d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                ></path>
              </g>
            </svg>
          </button>

          <button
            onClick={nextSlider}
            className="flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="w-4 h-4 md:w-6 md:h-6 icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              transform="rotate(180)"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#0095FF"
                  d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                ></path>
              </g>
            </svg>
          </button>
        </div>

        <div
          className="h-[540px] md:h-[670px] w-2/3 ml-auto relative ease-linear duration-300 flex items-center"
          style={{ transform: `translateX(-${currentSlider * 50}%)` }}
        >
          {blogs.map((blog, inx) => (
            <div
              key={inx}
              className={`${
                currentSlider === inx
                  ? "h-[240px] sm:h-[310px] md:h-[480px] lg:h-[580px]"
                  : "h-[220px] sm:h-[260px] md:h-[380px] lg:h-[480px] scale-95 opacity-40"
              } min-w-[50%] relative duration-200`}
              style={{ perspective: "200px" }}
            >
              <BlogCard key={blog.id} blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
