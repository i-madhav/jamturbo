import React, { useEffect, useState } from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import FunkyLoader from "./FunkyLoaders";

const JoinPrivateRoomCard = () => {
  const [roomCode, setRoomCode] = useState("");
  const [loader, setLoader] = useState(false);
  const { user } = useUser();
  const route = useRouter();

  async function handleGoToRoom() {
    try {
      setLoader(true);
      const response = await fetch("/api/enter-room-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          roomId: roomCode,
          userId: user?.id,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setRoomCode("");
        route.push(data.redirectTo);
        setLoader(false);
      } else {
        setRoomCode("");
        setLoader(false);
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  }

  return (
    <div className=" w-fit">
      <BackgroundGradient>
        <div className="group relative bg-[#181818] hover:bg-[#282828] rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-[#1DB954]/5 border border-zinc-800 hover:border-purple-500/20">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl"></div>

          <div className=" relative">
            <div className="h-12 w-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                />
              </svg>
            </div>

            <h3 className="text-xl font-semibold text-white mb-2">
              Join Private Room
            </h3>
            <p className="text-zinc-400 mb-4">
              Enter a room code to join an exclusive listening session.
            </p>

            <div className="space-y-4">
              <div className="relative">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter room code"
                    className="flex-1 border border-zinc-800 rounded-lg px-4 py-2 text-black placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors tracking-wider font-mono"
                    onChange={(e) => setRoomCode(e.target.value)}
                  />
                </div>
              </div>

              <button
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                onClick={handleGoToRoom}
              >
                {loader ? (
                  <FunkyLoader size="small" color="#000" />
                ) : (
                  <>
                    <span className=" font-bold font-sans">Join Room</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </>
                )}
              </button>
            </div>

            <div className="mt-4 flex items-center gap-2 text-zinc-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="text-sm">Room code required to join</span>
            </div>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
};

export default JoinPrivateRoomCard;
