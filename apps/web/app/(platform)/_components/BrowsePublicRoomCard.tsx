import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const BrowsePublicRoomCard = () => {
  return (
    <BackgroundGradient>
      <div className="group relative bg-[#181818] hover:bg-[#282828] rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-[#1DB954]/5 border border-zinc-800 hover:border-emerald-500/20 max-w-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

        <div className="relative">
          <div className="h-12 w-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-emerald-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
              />
            </svg>
          </div>

          <h3 className="text-xl font-semibold text-white mb-2">
            Browse Public Rooms
          </h3>
          <p className="text-zinc-400 mb-4">
            Discover active listening sessions and join the vibe.
          </p>

          <div className="space-y-4">
            <div className="bg-dark/50 rounded-lg p-3 border border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img
                    src="https://avatar.iran.liara.run/public"
                    className="w-6 h-6 rounded-full ring-2 ring-dark"
                  />
                  <img
                    src="https://avatar.iran.liara.run/public"
                    className="w-6 h-6 rounded-full ring-2 ring-dark"
                  />
                  <img
                    src="https://avatar.iran.liara.run/public"
                    className="w-6 h-6 rounded-full ring-2 ring-dark"
                  />
                </div>
                <span className="text-zinc-400 text-sm">234 active rooms</span>
              </div>
            </div>

            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 group">
              <span className=" font-bold font-sans">Explore Rooms</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 group-hover:translate-x-0.5 transition-transform"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <div className="mt-4 flex items-center gap-2 text-zinc-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              <span className="text-sm">Anyone can join and Browse Room</span>
            </div>
          </div>
        </div>
      </div>
    </BackgroundGradient>
  );
};

export default BrowsePublicRoomCard;
