import DynamicBanner from "@/components/ui/shared/DynamicBanner";
import EmailForm from "@/components/ui/shared/EmailForm";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { TbMap2 } from "react-icons/tb";

const ContactPage = () => {
  return (
    <section>
      <DynamicBanner title="Contact Us" />

      <div className="lg:mt-[95px] container mx-auto lg:grid grid-cols-2 gap-x-[50px] px-5 lg:px-0">
        <div className="mb-10 lg:mb-0">
          <h2 className="lg:text-5xl text-2xl font-bold mb-[55px]">
            Feel free to contact with us for any query.
          </h2>
          <div className="flex gap-x-[15px] items-center pl-5 pt-[23px] pb-[23px] bg-[#F3F2F2] rounded-r-full lg:w-[369px]">
            <div className="p-[10px] bg-srPrimary w-fit rounded">
              <FiPhoneCall className="text-[34px] text-white" />
            </div>
            <div>
              <h4 className="text-xl font-bold">Phone Number</h4>
              <p className="text-xs font-normal">Head Office. (210) 123 - 23</p>
            </div>
          </div>
          <div className="flex gap-x-[15px] items-center pl-5 pt-[23px] pb-[23px] lg:w-[369px] rounded-r-full mt-5 border border-[#BCBCBC]">
            <div className="p-[10px] bg-srPrimary w-fit rounded">
              <HiOutlineMailOpen className="text-[34px] text-white" />
            </div>
            <div>
              <h4 className="text-xl font-bold">Mail Address</h4>
              <p className="text-xs font-normal">swiftrealty@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-x-[15px] items-center pl-5 pt-[23px] pb-[23px] rounded-r-full lg:w-[369px] mt-5 border border-[#BCBCBC]">
            <div className="p-[10px] bg-srPrimary w-fit rounded">
              <TbMap2 className="text-[34px] text-white" />
            </div>
            <div>
              <h4 className="text-xl font-bold">Office Location</h4>
              <p className="text-xs font-normal">
                34 Mawa Road, Mawa Port, Dhaka
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-[#F3F2F2] lg:px-[30px] px-4 py-10">
          <input
            className="p-5 bg-transparent border w-full border-mutedText"
            type="text"
            name=""
            id=""
            placeholder="Full Name *"
          />
          <div className="flex gap-x-5 mt-5">
            <input
              className="p-5 bg-transparent border w-full border-mutedText"
              type="email"
              name=""
              id=""
              placeholder="Email Address *"
            />
            <input
              className="p-5 bg-transparent border w-full border-mutedText"
              type="number"
              name=""
              id=""
              placeholder="Phone *"
            />
          </div>
          <select
            className="p-5 bg-transparent border w-full border-mutedText text-mutedText mt-5"
            name="properties"
            id="properties"
          >
            <option value="1">Select Properties</option>
          </select>
          <textarea
            className="mt-5 p-5 text-mutedText w-full bg-transparent border border-mutedText"
            name=""
            id=""
          >
            Write Message
          </textarea>
          <button className="mt-[30px] bg-srPrimary lg:px-[30px] px-[18px] lg:py-[15px] py-2 rounded-sm">
            Submit Request
          </button>
        </div>
      </div>
      <EmailForm />
    </section>
  );
};

export default ContactPage;
