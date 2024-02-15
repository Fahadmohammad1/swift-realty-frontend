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
    <div className="lg:w-[829px]">
      <h5 className="text-2xl font-bold mb-5">Reviews</h5>
      {users.map((user) => (
        <div key={user.id} className="flex gap-x-5 gap-y-[30px]">
          <div className="p-[5px] border border-srPrimary rounded h-fit">
            <Image
              className="rounded-sm lg:w-[106px] lg:h-[98px]"
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
    </div>
  );
};

export default Review;
