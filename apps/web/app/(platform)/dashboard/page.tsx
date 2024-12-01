"use client";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignOutButton } from "@clerk/nextjs";
import React from "react";
import PrivateRoomCard from "../_components/PrivateRoomCard";
import PublicRoomCard from "../_components/PublicRoomCard";
import JoinPrivateRoomCard from "../_components/JoinPrivateRoomCard";
import BrowsePublicRoomCard from "../_components/BrowsePublicRoomCard";

const page = () => {
  return (
    <div className=" w-full">
      <div className=" flex items-center justify-between p-6">
        <div>
          <p className="text-4xl font-bold bg-gradient-to-r from-[#1DB954] to-blue-400 text-transparent bg-clip-text animate-gradient">
            Welcome to Jam
          </p>
          <p className="text-zinc-400 mt-2">
            Create or join a room to start listening with friends
          </p>
        </div>
        <div className=" rounded-full h-14 w-14 text-white font-bold font-sans flex items-center justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="bg-primary-600 text-white rounded-full font-medium w-10 h-10 flex items-center justify-center">
              M
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white bg-opacity-70 backdrop-blur-lg rounded-lg shadow-xl mr-7">
              <DropdownMenuItem className="focus:bg-gray-200 focus:bg-opacity-70">
                <SignOutButton redirectUrl="/">
                  <button className=" bg-red-400 p-3 font-semibold rounded-lg w-full">
                    Sign-Out
                  </button>
                </SignOutButton>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className=" grid grid-cols-2 gap-14 items-center justify-center mx-auto p-6 w-fit">
        <PrivateRoomCard/>
        <PublicRoomCard/>
        <JoinPrivateRoomCard/>
        <BrowsePublicRoomCard/>
      </div>
    </div>
  );
};

export default page;
