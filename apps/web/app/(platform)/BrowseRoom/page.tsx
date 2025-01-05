"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Cloud, Music, Users } from "lucide-react";

const BrowsePublicRoompage = () => {
  const [publicRooms, setPublicRooms] = useState<
    {
      id: string;
      title: string;
      description: string;
      participants: number;
      genre: string;
    }[]
  >([]);

  const handleGetAllPublicRooms = async () => {
    try {
      const response = await fetch("/api/get-all-public-room");
      const data = await response.json();
      setPublicRooms(data.res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetAllPublicRooms();
  }, []);

  const getGenreIcon = (genre: string) => {
    switch (genre?.toLowerCase()) {
      case "electronic":
        return <Cloud className="w-8 h-8 text-purple-400" />;
      case "jazz":
        return <Music className="w-8 h-8 text-blue-400" />;
      default:
        return <Music className="w-8 h-8 text-gray-400" />;
    }
  };

  return (
    <div className="h-screen bg-gray-900 text-gray-100 px-4 sm:px-6 lg:px-8 py-12">
      <Link href={"/dashboard"}>
        <svg
          fill="#fff"
          width={50}
          height={50}
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 70 70"
          enable-background="new 0 0 70 70"

          stroke="#fff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M35.221,7c0.404,0,0.816,0.044,1.227,0.138c2.882,0.652,4.671,3.441,3.998,6.229L29.668,34.37l10.777,22.262 c0.673,2.789-1.116,5.576-3.998,6.23C36.037,62.955,35.627,63,35.223,63c-2.434,0-4.636-1.615-5.214-4.006L18.623,34.437h-0.036 l0.019-0.066l-0.019-0.066h0.036l11.386-23.299C30.587,8.614,32.788,7,35.221,7 M35.221,3c-4.183,0-7.802,2.684-8.971,6.585 L15.186,32.228c-0.375,0.614-0.581,1.314-0.594,2.025c-0.038,0.812,0.173,1.619,0.609,2.313l11.036,23.803 C27.391,64.295,31.023,67,35.223,67c0.707,0,1.416-0.08,2.107-0.236c2.479-0.563,4.568-2.045,5.89-4.174 c1.29-2.078,1.686-4.527,1.114-6.896c-0.067-0.277-0.164-0.547-0.288-0.805l-9.909-20.467l9.867-19.229 c0.145-0.282,0.255-0.58,0.33-0.888c0.571-2.369,0.176-4.818-1.115-6.897c-1.322-2.129-3.412-3.61-5.888-4.171 C36.64,3.079,35.929,3,35.221,3L35.221,3z"></path>{" "}
              </g>{" "}
              <g>
                {" "}
                <path d="M24.411,31.365c-0.149,0-0.303-0.034-0.446-0.105c-0.494-0.247-0.694-0.848-0.447-1.342l5-10 c0.246-0.494,0.846-0.692,1.342-0.447c0.494,0.247,0.694,0.848,0.447,1.342l-5,10C25.131,31.163,24.778,31.365,24.411,31.365z M31.411,17.365c-0.149,0-0.303-0.034-0.446-0.105c-0.494-0.247-0.694-0.848-0.447-1.342l1-2c0.246-0.494,0.848-0.693,1.342-0.447 c0.494,0.247,0.694,0.848,0.447,1.342l-1,2C32.131,17.163,31.778,17.365,31.411,17.365z"></path>{" "}
              </g>{" "}
              <g>
                {" "}
                <path d="M47.412,31.325c2.209,0,4,1.791,4,4s-1.791,4-4,4s-4-1.791-4-4S45.203,31.325,47.412,31.325 M47.412,27.325 c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S51.823,27.325,47.412,27.325L47.412,27.325z"></path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
      </Link>
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Discover Public Rooms
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Explore and join vibrant communities curated by music enthusiasts from
          around the world.
        </p>
      </header>

      {publicRooms.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {publicRooms.map((room) => (
            <Link
              key={room.id}
              href={`/room/${room.id}`}
              className="group bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <div className="p-6 flex flex-col justify-between h-full">
                <div className="flex items-center justify-between mb-6">
                  {getGenreIcon(room?.genre)}
                  <div className="flex items-center text-gray-400">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="text-sm">{room.participants || 0}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-100 group-hover:text-purple-400 transition duration-300">
                  {room.title}
                </h3>
                <p className="text-sm text-gray-400 mt-4 line-clamp-2">
                  {room.description}
                </p>
              </div>
              <div className="bg-gray-700 px-6 py-4 flex justify-between items-center">
                <span className="text-sm font-medium text-purple-400 group-hover:text-purple-300 transition duration-300">
                  Join Room &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Music className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <p className="text-xl text-gray-400">
            No public rooms available at the moment. Please check back later.
          </p>
        </div>
      )}
    </div>
  );
};

export default BrowsePublicRoompage;
