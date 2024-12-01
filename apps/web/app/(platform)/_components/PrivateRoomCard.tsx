import React, { useState } from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import FunkyLoader from "./FunkyLoaders";

const PrivateRoomCard = () => {
  const [roomName, setRoomName] = useState("");
  const [roomDescription, setRoomDescription] = useState("");
  const [loader, setLoader] = useState(false);
  const { user } = useUser();
  const router = useRouter();

  async function handlePrivateRoomCreation() {
    try {
      setLoader(true);
      const response = await fetch("/api/create-room", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: roomName,
          description: roomDescription,
          isPrivate: true,
          owner: user?.id,
        }),
      });

      if (!response.ok) {
        setLoader(false);
        return alert("Something Went Wrong Couldn't Create Room");
      }
      const data = response.json();
      console.log("This is Data");
      data.then((data) => router.push(`/room/${data.id}`));
    } catch (error) {
      setLoader(false);
      console.log(error);
    }
  }

  return (
    <div className="w-fit">
      <BackgroundGradient>
        <div className="group relative bg-[#181818] hover:bg-[#282828] rounded-xl p-6 transition-all duration-300 hover:shadow-xl border border-zinc-800 max-w-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1DB954]/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
          <div className=" relative">
            <div className="h-12 w-12 bg-[#1DB954]/10 rounded-xl flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#1DB954]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>

            <h3 className="text-xl font-semibold text-white mb-2">
              Create Private Room
            </h3>
            <p className="text-zinc-400 mb-4">
              Create an exclusive listening session with your friends using a
              unique room code.
            </p>

            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Enter room name"
                  className="w-full bg-dark border border-zinc-800 rounded-lg px-4 py-2 text-black placeholder-zinc-500 focus:outline-none focus:border-[#1DB954] transition-colors"
                  onChange={(e) => setRoomName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Room description(optional)"
                  className="w-full mt-3 bg-dark border border-zinc-800 rounded-lg px-4 py-2 text-black placeholder-zinc-500 focus:outline-none focus:border-[#1DB954] transition-colors"
                  onChange={(e) => setRoomDescription(e.target.value)}
                />
              </div>
              <button
                className="w-full bg-[#1DB954] hover:bg-[#1aa34a] text-black font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                onClick={() => handlePrivateRoomCreation()}
              >
                {loader ? (
                  <FunkyLoader size="small"/>
                ) : (
                  <>
                    <span className=" font-bold font-sans">Create Room</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </>
                )}
              </button>
            </div>
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
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="text-sm">Only invited users can join</span>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
};

export default PrivateRoomCard;
