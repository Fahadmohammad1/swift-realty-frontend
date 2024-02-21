import DynamicBanner from "@/components/ui/shared/DynamicBanner";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";

const ContactPage = () => {
  return (
    <section>
      <DynamicBanner title="Contact Us" />

      <div className="mt-[95px] container mx-auto">
        <div>
          <FiPhoneCall />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
