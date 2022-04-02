import React from "react";
import { MainLayOutProps } from "./interfaces";

const MainLayOut = ({ children }: MainLayOutProps) => {
  return (
    <div>
      <h1>nav</h1>
      {children}
      <h2>footer</h2>
    </div>
  );
};

export default MainLayOut;
