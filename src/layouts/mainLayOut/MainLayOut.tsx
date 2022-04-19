import React from "react";
import Footer from "../../components/layoutComponents/footer/Footer";
import Navbar from "../../components/layoutComponents/navbar/Navbar";
import { MainLayOutProps } from "./interfaces";


const MainLayOut = ({ children }: MainLayOutProps) => {
  return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>
  );
};

export default MainLayOut;
