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

        <div className="my-[100px] lg:grid grid-cols-3">
          <div className="text-center border-r-2">
            <p className="text-srPrimary font-bold text-[94px] leading-none">
              150+
            </p>
            <p className="font-normal text-2xl">Happy Customers in 2023</p>
          </div>

          <div className="text-center border-r-2">
            <p className="text-srPrimary font-bold text-[94px] leading-none">
              140+
            </p>
            <p className="font-normal text-2xl">Completed Project</p>
          </div>

          <div className="text-center">
            <p className="text-srPrimary font-bold text-[94px] leading-none">
              100+
            </p>
            <p className="font-normal text-2xl">Our Talented Team Member</p>
          </div>
        </div>

        <TeamInfo />
      </div>
      <EmailForm />
    </section>
  );
};

export default AboutPage;
