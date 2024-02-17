import Image from "next/image";
import React from "react";
import user1 from "@/assets/images/member1.png";
import user2 from "@/assets/images/member2.png";

const Review = () => {
  const users = [
    {
      id: "1",
      image: user1,
      name: "Tom Williamson",
      rating: 5,
      date: "Nov 25, 2023",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap",
    },
    {
      id: "1",
      image: user2,
      name: "Tom Williamson",
      rating: 5,
      date: "Nov 25, 2023",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap",
    },
  ];
  return (
    <div className="lg:w-[829px] mt-[60px]">
      <h5 className="text-2xl font-bold mb-5">Reviews</h5>
      {users.map((user) => (
        <div key={user.id} className="flex gap-x-5 gap-y-[30px]">
          <div className="p-[5px] border border-srPrimary rounded h-fit">
            <Image
              className="rounded-sm w-[106px] lg:h-[98px]"
              src={user.image}
              width={106}
              height={98}
              alt="avatar"
            />
          </div>
          <div>
            <p className="font-mediam text-xl">{user.name}</p>
            <p className="font-medium text-base text-mutedText my-[10px]">
              {user.date}
            </p>
            <p className="font-normal text-xs text-mutedText text-justify">
              {user.text}
            </p>
          </div>
        </div>
      ))}
      <div className="shadow-md p-[30px] mt-[60px] flex flex-col gap-y-5 bg-[#F0F0F0] lg:w-[550px]">
        <h5 className="text-[28px] font-medium">Write a Review</h5>
        <input
          type="text"
          placeholder="Name"
          className="border px-5 py-3 rounded-sm border-[#BCBCBC] text-mutedText"
        />
        <input
          type="email"
          placeholder="Email"
          className="border px-5 py-3 rounded-sm border-[#BCBCBC] text-mutedText"
        />
        <textarea
          name=""
          id=""
          className="border px-5 pt-[10px] pb-[10px] rounded-sm border-[#BCBCBC] text-mutedText"
        >
          Comment
        </textarea>
        <div className="flex items-center gap-[5px]">
          <input
            className="self-start"
            type="checkbox"
            id="checkbox"
            name="checkbox"
            value="1"
          />
          <span className="text-[10px]">
            Save my Email, Name, and website in this browser for the next time,
            I comment
          </span>
        </div>
        <button className="bg-srPrimary text-white px-8 py-3 rounded-[2px] text-base font-bold font-[Creato Display] w-fit">
          Post Comment
        </button>
      </div>
    </div>
  );
};

export default Review;
