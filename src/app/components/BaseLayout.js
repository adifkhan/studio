import React from "react";
import Sidebar from "./Sidebar";

const BaseLayout = ({ children }) => {
  return (
    <div className="base_layout">
      <Sidebar />
      {children}
    </div>
  );
};

export default BaseLayout;
