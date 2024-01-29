import React from "react";
import { Header } from "../ui/Header";
import Footer from "../ui/Footer";

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
