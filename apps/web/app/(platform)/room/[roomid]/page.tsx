"use client";
import YouTube, { YouTubeProps } from "react-youtube";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Users, Send, UserPlus } from "lucide-react";
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
import { HashLoader, PuffLoader } from "react-spinners";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { useRouter } from "next/navigation";
import { SignOutButton, useUser } from "@clerk/nextjs";
import { useSocket } from "@/context/SocketContext";
import Image from "next/image";
import userImage from "../../../../public/user-icon-svgrepo-com.svg";

const RoomPage = () => {
  const [verifyLoader, setVerifyLoader] = useState(false);
  const [isPublic, setIsPublic] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [submitLinkLoader, setSubmitLinkLoader] = useState(false);
  const regex = /^https:\/\/www\.youtube\.com\/watch\?v=[\w-]+(&list=[\w-]+)?$/;
  const socket = useSocket();
  const { roomid } = useParams();
  const [musicLink, setMusicLink] = useState("");
  const [chatMessages, setChatMessages] = useState<
    { user: string; message: string }[]
  >([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [newUser, setNewUser] = useState("");
  const [participants, setParticipants] = useState<string[]>([]);
  const [playList, setPlayList] = useState<
    {
      id: string;
      channelName: string;
      roomId: string;
      videoId: string;
      videoImage: string;
      videoTitle: string;
    }[]
  >([]);
  const { user } = useUser();
  const route = useRouter();
  const playerRef = useRef<YouTube | null>(null);

  const handleVerifyUser = useCallback(async () => {
    try {
      if (!roomid || !user?.id) return;
      setVerifyLoader(true);
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
        console.log(data);
        setVerifyLoader(false);
        if (data.isPublicRoom) {
          setIsPublic(true);
        } else {
          setIsPrivate(true);
        }
        //
        if (data.redirect) {
          console.log("I got inside data.redirect when i refresh my page");
          route.push(data.redirect);
        } else {
          console.error("No redirection path provided");
        }
        //
      } else {
        console.error("Error verifying user");
      }
    } catch (error) {
      console.error("Error during user verification:", error);
      setVerifyLoader(false);
    } finally {
      setVerifyLoader(false);
    }
  }, [roomid, user?.id]);

  const handleSubmitLink = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSubmitLinkLoader(true);
      if (musicLink.length == 0 || !roomid) {
        return alert("Enter a valid music link");
      }

      if (!regex.test(musicLink)) {
        console.error("Inavlid Url : Please Enter Valid Url");
        return alert("Inavlid Url : Please Enter Valid Url");
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
      setMusicLink("");
      const data = await response.json();
      if (data) {
        await handleGetMusicList();
        setSubmitLinkLoader(false);
      }
    } catch (error) {
      console.log(error);
      setSubmitLinkLoader(false);
    } finally {
      setSubmitLinkLoader(false);
    }
  };

  const handleGetMusicList = useCallback(async () => {
    try {
      const response = await fetch(`/api/get-music-list`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          roomid,
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to fetch music list");
      }
      const data = await response.json();
      setPlayList(data.res);
    } catch (error) {
      console.log(error);
    }
  }, [roomid]);

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

  const onEnd = async (id: string) => {
    try {
      const response = await fetch("/api/remove-song", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          roomId: roomid,
        }),
      });
      if (response.ok) {
        await handleGetMusicList();
      } else {
        console.log("Unable to delete the music");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onReady = (event: any) => {
    console.log("this is ref");
    playerRef.current = event.target;
    event.target.playVideo();
    console.log(playerRef.current?.getInternalPlayer().getCurrentTime());
  };

  const options: YouTubeProps["opts"] = {
    height: "500",
    width: "700",
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 1,
      disablekb: 1,
      modestbranding: 1,
      fs: 0,
      rel: 0,
      showinfo: 1,
    },
  };

  useEffect(() => {
    handleVerifyUser();
  }, [roomid, user?.id]);

  useEffect(() => {
    if (!socket || verifyLoader || !user) {
      return;
    }

    socket.on("participant_in_room", (data) => {
      console.log(data);
      setParticipants(data);
    });
    socket.on("live_chat_messages_from_room", (data) => {
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
  }, [socket, user, verifyLoader]);

  useEffect(() => {
    handleGetMusicList();
  }, [handleGetMusicList]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = playerRef?.current
        ?.getInternalPlayer()
        .getCurrentTime();
      localStorage.setItem("videoTimeStamp", currentTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const savedTime = localStorage.getItem("videoTimeStamp");
    if (savedTime && playerRef.current) {
      playerRef.current.getInternalPlayer().seekTo(parseFloat(savedTime), true);
    }
  }, [playerRef.current]);

  return verifyLoader ? (
    <div className=" h-screen flex items-center justify-center">
      <HashLoader size={100} color="#E6E6FA" />
    </div>
  ) : (
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
            <Image src={userImage} alt="user" className="w-8 rounded-full" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white bg-opacity-70 backdrop-blur-lg rounded-lg shadow-xl">
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
                {submitLinkLoader ? (
                  <PuffLoader size={20} color="white" />
                ) : (
                  "Add"
                )}
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
                  {isPrivate && (
                    <Button variant="outline" size="icon">
                      <UserPlus className="h-4 w-4" />
                    </Button>
                  )}
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
        <div className="rounded-lg shadow md:col-span-2 h-full">
          <BackgroundGradient className="bg-black h-full p-4">
            <h2 className="text-lg font-semibold mb-2 text-white">
              Now Playing
            </h2>
            {playList.length > 0 ? (
              <div className="relative">
                <YouTube
                  videoId={playList[0]?.videoId}
                  opts={options}
                  onEnd={() => onEnd(playList[0]!.id)}
                  onReady={onReady}
                />
                {/* Overlay to prevent interactions */}
              </div>
            ) : (
              <p>No music in the playlist yet</p>
            )}
          </BackgroundGradient>
        </div>

        {/* Playlist */}
        <div className="rounded-lg shadow">
          <BackgroundGradient className="bg-black p-4 h-full">
            <h2 className="text-lg font-semibold mb-2 text-white">Playlist</h2>
            <ScrollArea className="h-[27rem]">
              {playList && playList.length > 0 ? (
                <ul className="space-y-4 text-white">
                  {playList.map((item) => (
                    <li key={item.id}>
                      <div className=" flex items-center gap-2 border border-white rounded-md p-2">
                        <div>
                          <Image
                            src={item.videoImage}
                            alt="de"
                            width={100}
                            height={90}
                          />
                        </div>
                        <div>
                          <p className=" font-bold">{item.videoTitle}</p>
                          <p className=" font-semibold">{item.channelName}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className=" text-white">No playlist available</p>
              )}
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
