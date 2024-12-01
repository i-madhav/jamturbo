import React from "react";
const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-[#121212] p-3">{children}</div>;
};

export default DashBoardLayout;