import { Sider } from "@/components/ui/homepage/Sider";
import React from "react";
import "../globals.css";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Sider />
      {children}
    </>
  );
};

export default DashboardLayout;
