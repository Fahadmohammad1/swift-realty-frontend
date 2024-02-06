import React from "react";
import banner from "@/assets/images/contact-us-banner.png";
import phone from "@/assets/images/phone.png";
import mail from "@/assets/images/mail.png";
import camera from "@/assets/images/camera.png";
import chat from "@/assets/images/chat.png";
import Image from "next/image";

const ContactUs = () => {
  const contactData = [
    { id: "1", text: "Feel free to call us", icon: phone },
    { id: "2", text: "Feel free to message us", icon: mail },
    { id: "3", text: "Feel free to video call", icon: camera },
    { id: "4", text: "Feel free to chat with us", icon: chat },
  ];
  return (
    <section className="mt-[50px] container mx-auto">
      <h1 className="text-4xl font-bold font-[Creato Display] text-srSecondary text-center">
        Contact Us
      </h1>
      <div className="w-[100px] border-[2px] border-srPrimary mx-auto mt-4 rounded-sm" />
      <div className="lg:grid grid-cols-2 mt-[80px] gap-[40px]">
        <div>
          <h3 className="text-4xl font-bold font-[Creato Display]">
            Easy to contact with us
          </h3>
          <p className="mt-[10px] text-justify text-[#757575]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          {contactData.map((data) => (
            <div
              key={data.id}
              className="mt-[30px] flex border border-[#757575] justify-between pl-[15px] pr-2 items-center rounded-md"
            >
              <p className="text-base font-normal text-[#757575]">
                {data.text}
              </p>
              <button className="bg-srPrimary py-[9.5px] px-[21px] my-[10px] rounded-[3px]">
                <Image src={data.icon} width={21} height={21} alt="icon" />
              </button>
            </div>
          ))}
          <button className="bg-srPrimary text-white py-5 text-base font-extrabold font-[Creato Display] px-[40px] rounded-sm mt-[40px]">
            Contact Now
          </button>
        </div>

        <div>
          <Image
            className="h-full"
            style={{ borderRadius: "80px 0px 80px 0px" }}
            src={banner}
            width={650}
            height={580}
            alt="choose-us-banner"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
