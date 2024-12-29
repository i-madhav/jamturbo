"use client"

import { Socket } from "socket.io-client";
import { initSocket } from "@/lib/socket";
import React, { createContext, useContext, useEffect, useState } from "react";

interface SocketContextProp {
  socket: Socket | null;
}

const SocketContext = createContext<SocketContextProp | undefined>(undefined);
export const SocketProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socketInstance = initSocket();
    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, []);


  return(
    <SocketContext.Provider value={{socket}}>
        {children}
    </SocketContext.Provider>
  )
};


export const useSocket = ():Socket => {
    const context = useContext(SocketContext);
    if(!context){
        throw new Error("useSocket not available");
    }

    return context.socket!;
}
