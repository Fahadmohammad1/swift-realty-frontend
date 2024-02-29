import React from "react";
import member1 from "@/assets/images/member1.png";
import member2 from "@/assets/images/member2.png";
import member3 from "@/assets/images/member3.png";
import ProfileCard from "./ProfileCard";

const TeamInfo = () => {
  const teamData = [
    { id: "1", name: "Adam Smith", designation: "CEO", image: member1 },
    { id: "2", name: "Karlos Maxwell", designation: "Founder", image: member2 },
    {
      id: "3",
      name: "Brath Width",
      designation: "Senior Officer",
      image: member3,
    },
  ];
  return (
    <section className="container mx-auto mt-[100px] px-5 lg:px-0">
      <h1 className="text-2xl lg:text-4xl font-bold font-[Creato Display] text-srSecondary text-center">
        Meet Our Team
      </h1>
      <div className="w-[100px] border-[2px] border-srPrimary mx-auto mt-4 rounded-sm" />
      <div className="lg:grid grid-cols-3">
        {teamData.map((m) => (
          <ProfileCard key={m.id} member={m} />
        ))}
      </div>
    </section>
  );
};

export default TeamInfo;
