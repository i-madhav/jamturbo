"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Music, Users } from "lucide-react";

const BrowsePublicRoompage = () => {
  const [publicRooms, setPublicRooms] = useState<
    { id: string; title: string; description: string; participants: number }[]
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

  return (
    <div className="h-screen bg-gray-900 text-gray-100 px-4 sm:px-6 lg:px-8 py-12">
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
              className="group bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Music className="w-8 h-8 text-purple-400" />
                  <div className="flex items-center text-gray-400">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="text-sm">{room.participants || 0}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-100 group-hover:text-purple-400 transition duration-300">
                  {room.title}
                </h3>
                <p className="text-sm text-gray-400 mt-2 line-clamp-2">
                  {room.description}
                </p>
              </div>
              <div className="bg-gray-700 px-6 py-4">
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
