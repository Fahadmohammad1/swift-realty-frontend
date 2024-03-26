import React from "react";

const Content = ({
  children,
  isOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
}) => {
  const contentClasses = `transition duration-300 ease-in-out ${
    !isOpen ? "ml-5" : "ml-64"
  }`;
  return <div className={contentClasses}>{children}</div>;
};

export default Content;
