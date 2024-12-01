import React, { useState } from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import FunkyLoader from "./FunkyLoaders";

const PublicRoomCard = () => {
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
    <BackgroundGradient>
      <div className="group relative bg-[#181818] hover:bg-[#282828] rounded-xl p-6 transition-all duration-300 hover:shadow-xl border border-zinc-800 max-w-lg ">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

        <div>
          <div className="h-12 w-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
          </div>

          <h3 className="text-xl font-semibold text-white mb-2">
            Create Public Room
          </h3>
          <p className="text-zinc-400 mb-4">
            Start a public listening session that anyone can join and vibe
            together.
          </p>

          <div className="space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Enter room name"
                className="w-full bg-dark border border-zinc-800 rounded-lg px-4 py-2 text-black placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                onChange={(e) => setRoomName(e.target.value)}
              />
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Room description (optional)"
                className="w-full bg-dark border border-zinc-800 rounded-lg px-4 py-2 text-black placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                onChange={(e) => setRoomDescription(e.target.value)}
              />
            </div>

            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
              {loader ? (
                <FunkyLoader size="small" />
              ) : (
                <>
                  <span className=" font-bold font-sans">
                    Create Public Room
                  </span>
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

          <div className="mt-4 flex items-center gap-2 text-zinc-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            <span className="text-sm">Anyone can join and listen</span>
          </div>
        </div>
      </div>
    </BackgroundGradient>
  );
};

export default PublicRoomCard;
