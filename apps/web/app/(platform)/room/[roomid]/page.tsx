"use client";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Users, Send, Play, Pause, UserPlus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { useSocket } from "@/context/SocketContext";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const RoomPage = () => {
  const socket = useSocket();
  const { roomid } = useParams();
  const [musicLink, setMusicLink] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [chatMessages, setChatMessages] = useState<
    { user: string; message: string }[]
  >([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [newUser, setNewUser] = useState("");
  const [participants, setParticipants] = useState<string[]>([""]);
  const [playList, setPlayList] = useState();
  const { user } = useUser();
  const route = useRouter();
  console.log(participants);
  useEffect(() => {
    handleVerifyUser();
  }, []);

  useEffect(() => {
    if (!socket) {
      return;
    }

    if (user) {
      socket.on("participant_in_room", (data) => {
        console.log("Data from socket");
        setParticipants(data);
      });

      socket.on("live_chat_messages_from_room", (data) => {
        console.log("live_chat_messages_from_room");
        console.log(data);
        setChatMessages(data);
      });

      socket.emit("join_room_user", {
        email: user?.primaryEmailAddress?.emailAddress,
        roomId: roomid,
      });

      socket.emit("user_in_room_chat_message", {
        email: user.primaryEmailAddress?.emailAddress,
        message: currentMessage,
      });
    }
  }, [socket, user]);

  async function handleVerifyUser() {
    try {
      const response = await fetch("/api/verify-user-entering-room", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          roomId: roomid,
          userId: user?.id,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.redirect) {
          route.push(data.redirect);
        } else {
          console.error("No redirection path provided");
        }
      } else {
        console.error("Error verifying user");
      }
    } catch (error) {
      console.error("Error during user verification:", error);
    }
  }

  const handleSubmitLink = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (musicLink.length == 0 || !roomid) {
        return alert("Enter a valid music link");
      }

      const response = await fetch("/api/submit-link", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          link: musicLink,
          roomId: roomid,
        }),
      });

      if (!response.ok) {
        throw new Error(
          "Unable to submit your link , please try after some other time"
        );
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetMusicList = useCallback(async () => {
    if (typeof roomid !== "string") {
      throw new Error("Chal be string laa");
    }
    try {
      const response = await prisma.music.aggregate({
        where: {
          roomId: roomid,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }, [playList]);

  useEffect(() => {
    handleGetMusicList();
  }, [handleGetMusicList]);

  const handleSendMessage = () => {
    if (socket && user) {
      socket.emit("user_in_room_chat_message", {
        email: user.primaryEmailAddress?.emailAddress,
        message: currentMessage,
        roomId: roomid,
      });
      setCurrentMessage("");
    }
  };

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (newUser.trim() && !participants.includes(newUser)) {
      setParticipants((prev) => [...prev, newUser]);
      setNewUser("");
    }
  };

  return (
    <div className="min-h-screen p-4">
      {/* Header */}
      <div className="flex items-center justify-between p-10 mb-10">
        <div>
          <p className="text-4xl font-bold bg-gradient-to-r from-[#1DB954] to-blue-400 text-transparent bg-clip-text animate-gradient">
            Welcome to Jam
          </p>
          <p className="text-zinc-400 mt-2">
            Create or join a room to start listening with friends
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="bg-black text-white rounded-full font-medium w-10 h-10 flex items-center justify-center">
            M
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white bg-opacity-70 backdrop-blur-lg rounded-lg shadow-xl">
            <DropdownMenuItem className="focus:bg-gray-200 focus:bg-opacity-70">
              <p className="font-medium text-gray-800">Guest-User</p>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Music Link Input and Search */}
        <div className="rounded-lg shadow md:col-span-2">
          <BackgroundGradient className="bg-black h-full rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2 text-white">Add Music</h2>
            <form onSubmit={handleSubmitLink} className="flex gap-2 mb-4">
              <Input
                type="url"
                placeholder="Paste YouTube link here"
                value={musicLink}
                onChange={(e) => setMusicLink(e.target.value)}
                className="flex-grow"
              />
              <Button type="submit" className="bg-[#1DB954]">
                Add
              </Button>
            </form>
          </BackgroundGradient>
        </div>

        {/* Participants */}
        <div className="rounded-lg shadow">
          <BackgroundGradient className="bg-black p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-white">Participants</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="icon">
                    <UserPlus className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add User to Room</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleAddUser} className="flex gap-2 mt-4">
                    <Input
                      type="text"
                      placeholder="Enter username"
                      value={newUser}
                      onChange={(e) => setNewUser(e.target.value)}
                      className="flex-grow"
                    />
                    <Button type="submit">Add</Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
            {participants && (
              <div className="flex items-center justify-center text-2xl mb-4">
                <Users className="mr-2 h-6 w-6 fill-white stroke-white" />
                <span className="text-white font-bold">
                  {participants.length}
                </span>
              </div>
            )}

            {participants && participants.length > 0 ? (
              <ScrollArea className="h-[150px]">
                <ul className="space-y-2 text-white w-full">
                  {participants.map((user, index) => (
                    <li
                      key={index}
                      className=" text-white text-center font-bold"
                    >
                      {user.split("@")[0]}
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            ) : (
              <p>No Users Present in the room</p>
            )}
          </BackgroundGradient>
        </div>

        {/* Now Playing */}
        <div className="rounded-lg shadow md:col-span-2">
          <BackgroundGradient className="bg-black h-full p-4">
            <h2 className="text-lg font-semibold mb-2 text-white">
              Now Playing
            </h2>
            <div className="aspect-video bg-black border-white border mb-4 flex items-center justify-center">
              <span className="text-white">Video Player</span>
            </div>
            <div className="flex justify-center">
              <Button
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-[#1DB954]"
              >
                {isPlaying ? (
                  <Pause className="mr-2 h-4 w-4" />
                ) : (
                  <Play className="mr-2 h-4 w-4" />
                )}
                {isPlaying ? "Pause" : "Play"}
              </Button>
            </div>
          </BackgroundGradient>
        </div>

        {/* Playlist */}
        <div className="rounded-lg shadow">
          <BackgroundGradient className="bg-black p-4 h-full">
            <h2 className="text-lg font-semibold mb-2 text-white">Playlist</h2>
            <ScrollArea className="h-[200px]">
              <ul className="space-y-2 text-white">
                <li>Song 1 - Artist 1</li>
                <li>Song 2 - Artist 2</li>
                <li>Song 3 - Artist 3</li>
              </ul>
            </ScrollArea>
          </BackgroundGradient>
        </div>

        {/* Chat Section */}
        <div className="rounded-lg shadow md:col-span-3">
          <BackgroundGradient className="p-4 h-full bg-black">
            <h2 className="text-lg font-semibold mb-2 text-white">Chat</h2>
            <ScrollArea className="h-[300px] mb-4">
              {chatMessages.length > 0 ? (
                chatMessages.map((msg, index) => (
                  <div key={index} className="mb-2">
                    <span className="font-semibold text-white">
                      {msg.user.split("@")[0]}:{" "}
                    </span>
                    <span className="text-white">{msg.message}</span>
                    {index < chatMessages.length && (
                      <Separator className="my-2" />
                    )}
                  </div>
                ))
              ) : (
                <p className=" text-white text-4xl font-semibold  font-mono">
                  No Messages !! Start Messaging fam
                </p>
              )}
            </ScrollArea>
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Type a message..."
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                className="flex-grow"
              />
              <Button
                type="submit"
                className="bg-[#1DB954]"
                onClick={() => handleSendMessage()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </BackgroundGradient>
        </div>
      </div>
    </div>
  );
};

export default RoomPage;
