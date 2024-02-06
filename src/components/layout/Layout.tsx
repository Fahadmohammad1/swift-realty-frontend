import React from "react";
import { Header } from "../ui/homepage/Header";
import Footer from "../ui/homepage/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
