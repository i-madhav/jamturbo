import { SocketProvider } from "@/context/SocketContext";
import React from "react";
const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SocketProvider>
      <div className="bg-[#121212] p-3">{children}</div>
    </SocketProvider>
  );
};

export default DashBoardLayout;
