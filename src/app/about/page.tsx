import DynamicBanner from "@/components/ui/shared/DynamicBanner";
import React from "react";
import TeamInfo from "@/components/ui/homepage/TeamInfo";
import AboutUs from "@/components/ui/homepage/AboutUs";
import EmailForm from "@/components/ui/shared/EmailForm";

const AboutPage = () => {
  return (
    <section>
      <DynamicBanner title="About Us" />

      <div className="container mx-auto">
        <AboutUs />

        <div className="lg:my-[100px] my-[70px] lg:grid grid-cols-3 ">
          <div className="text-center lg:border-r-2 mb-5 lg:mb-0">
            <p className="text-srPrimary font-bold lg:text-[94px] text-6xl leading-none">
              150+
            </p>
            <p className="font-normal lg:text-2xl">Happy Customers in 2023</p>
          </div>

          <div className="text-center border-r-2 mb-5 lg:mb-0">
            <p className="text-srPrimary font-bold lg:text-[94px] text-6xl leading-none">
              140+
            </p>
            <p className="font-normal lg:text-2xl">Completed Project</p>
          </div>

          <div className="text-center">
            <p className="text-srPrimary font-bold lg:text-[94px] text-6xl leading-none">
              100+
            </p>
            <p className="font-normal lg:text-2xl">Our Talented Team Member</p>
          </div>
        </div>

        <TeamInfo />
      </div>
      <EmailForm />
    </section>
  );
};

export default AboutPage;
