"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Link from "next/link";

const MarketingPage = () => {
  return (
    <div className="h-screen ">
      <BackgroundBeamsWithCollision className="p-4 md:p-0">
        <h1 className="text-2xl relative z-20 md:text-4xl lg:text-5xl font-bold text-center text-white dark:text-white font-sans tracking-tight">
          Ready to Jam? Dive into the Beat and Connect with Friends!
          <div className="mt-2 text-lg md:text-xl lg:text-2xl text-gray-300 dark:text-gray-400 font-medium text-center">
            Experience music like never before – create your vibe, join public
            rooms, and jam with thousands.
          </div>
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))] mt-6">
            <div className="relative mx-auto inline-block w-max mt-6">
              <div
                className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent py-4 [text-shadow:0_0_rgba(0,0,0,0.1)]"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #8b5cf6, #a78bfa, #ec4899, #8b5cf6)",
                  backgroundSize: "200% 200%",
                  animation: "gradient-animation 3s ease infinite",
                }}
              >
                <span className="">Start Your Jam Today</span>
              </div>
              <div
                className="relative bg-clip-text text-transparent bg-no-repeat py-4"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #8b5cf6, #a78bfa, #ec4899, #8b5cf6)",
                  backgroundSize: "200% 200%",
                  animation: "gradient-animation 3s ease infinite",
                }}
              >
                <span className="">Start Your Jam Today</span>
              </div>
              <style jsx>{`
                @keyframes gradient-animation {
                  0% {
                    background-position: 0% 50%;
                  }
                  50% {
                    background-position: 100% 50%;
                  }
                  100% {
                    background-position: 0% 50%;
                  }
                }
              `}</style>
            </div>
          </div>
          {/* Motivational Text Inside BackgroundGradient */}
          <div className="m-auto md:flex flex-1 items-center gap-3 justify-center mt-8 space-y-3 md:space-y-0">
            <BackgroundGradient className="rounded-sm bg-white dark:bg-zinc-900 p-4 md:w-90">
              <p className="text-base sm:text-xl text-black dark:text-neutral-200 text-center">
                Host live music parties with friends worldwide!
              </p>
            </BackgroundGradient>
            <BackgroundGradient className="rounded-sm bg-white dark:bg-zinc-900 p-4 md:w-90">
              <p className="text-base sm:text-xl text-black dark:text-neutral-200 text-center">
                Transform solo listening into shared adventures.
              </p>
            </BackgroundGradient>
          </div>
          <div className="m-auto md:w-fit mt-3">
            <BackgroundGradient className="rounded-sm bg-white dark:bg-zinc-900 p-4 md:w-90">
              <p className="text-base sm:text-xl text-black dark:text-neutral-200 text-center">
                Join public rooms and feel the electrifying vibe!
              </p>
            </BackgroundGradient>
          </div>
        </h1>
      </BackgroundBeamsWithCollision>

      <section id="features" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Everything you need for a perfect music session
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Experience music like never before with features designed for
              seamless group listening
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition">
              <div className="size-12 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="size-6 text-primary-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Real-time Sync
              </h3>
              <p className="text-gray-400">
                Listen together in perfect harmony with synchronized playback
                across all devices.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition">
              <div className="size-12 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="size-6 text-primary-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Private & Public Rooms
              </h3>
              <p className="text-gray-400">
                Create invitation-only sessions or join public rooms to meet new
                music lovers.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition">
              <div className="size-12 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="size-6 text-primary-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Live Chat
              </h3>
              <p className="text-gray-400">
                Share thoughts and reactions with room members while enjoying
                music together.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition">
              <div className="size-12 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="size-6 text-primary-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Cross-Platform
              </h3>
              <p className="text-gray-400">
                Access your rooms from any device - desktop, tablet, or mobile
                phone.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition">
              <div className="size-12 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="size-6 text-primary-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Add Songs to the Room Playlist
              </h3>
              <p className="text-gray-400">
                Allow everyone in the room to contribute their favorite tracks,
                creating a collaborative playlist for all to enjoy in real-time.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition">
              <div className="size-12 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="size-6 text-primary-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Live Chat
              </h3>
              <p className="text-gray-400">
                React and chat with other people inside the room , and enjoy
                collaborative listening
              </p>
            </div>
          </div>

          <section className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                  Choose Your Room Type
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  Whether you want to jam privately with friends or meet new
                  music lovers, we've got you covered
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600/30 to-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative bg-black/40 backdrop-blur-xl rounded-[22px] p-8 h-full">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-2xl font-semibold text-white">
                        Private Room
                      </h3>
                      <div className="size-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
                        <svg
                          className="size-6 text-primary-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8 text-gray-300">
                      <li className="flex items-center">
                        <svg
                          className="size-5 text-primary-500 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Invite-only access
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="size-5 text-primary-500 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Custom room ID
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="size-5 text-primary-500 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Full control over settings
                      </li>
                    </ul>

                    <button className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl transition group">
                      Create Private Room
                      <svg
                        className="inline-block ml-2 size-5 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative bg-black/40 backdrop-blur-xl rounded-[22px] p-8 h-full">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-2xl font-semibold text-white">
                        Public Room
                      </h3>
                      <div className="size-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                        <svg
                          className="size-6 text-purple-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8 text-gray-300">
                      <li className="flex items-center">
                        <svg
                          className="size-5 text-purple-500 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Open to everyone
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="size-5 text-purple-500 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Discover new music
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="size-5 text-purple-500 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Meet music lovers
                      </li>
                    </ul>

                    <button className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition group">
                      Browse Public Rooms
                      <svg
                        className="inline-block ml-2 size-5 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="py-24 bg-black" id="pricing">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Choose Your Perfect Plan
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Start for free or unlock premium features with our paid plans
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BackgroundGradient className="h-full">
              <div className="h-full w-full bg-black border border-white/10 rounded-2xl absolute">
                <div className="  p-8">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Free
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">$0</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center text-gray-300">
                      <svg
                        className="size-5 text-primary-500 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Join public rooms
                    </li>
                    <li className="flex items-center text-gray-300">
                      <svg
                        className="size-5 text-primary-500 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Basic chat features
                    </li>
                    <li className="flex items-center text-gray-300">
                      <svg
                        className="size-5 text-primary-500 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Limited room creation
                    </li>
                  </ul>
                  <button className="w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition">
                    Get Started
                  </button>
                </div>
              </div>
            </BackgroundGradient>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-transparent rounded-3xl blur-sm group-hover:blur-md transition-all"></div>
              <div className="relative bg-black/40 backdrop-blur-xl border border-primary-500/20 rounded-2xl p-8">
                <div className="absolute top-0 right-6 transform -translate-y-1/2">
                  <span className="bg-primary-500 text-black text-sm font-semibold px-3 py-1 rounded-full">
                    Popular
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Pro</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$9</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <svg
                      className="size-5 text-primary-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Everything in Free
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg
                      className="size-5 text-primary-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Unlimited private rooms
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg
                      className="size-5 text-primary-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Advanced room controls
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg
                      className="size-5 text-primary-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    HD audio quality
                  </li>
                </ul>
                <button className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl transition">
                  Subscribe Now
                </button>
              </div>
            </div>

            <BackgroundGradient>
              <div className="">
                <div className=" bg-black rounded-3xl blur-sm group-hover:blur-md transition-all"></div>
                <div className=" bg-black border border-white/10 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Business
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">$29</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center text-gray-300">
                      <svg
                        className="size-5 text-purple-500 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Everything in Pro
                    </li>
                    <li className="flex items-center text-gray-300">
                      <svg
                        className="size-5 text-purple-500 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Priority support
                    </li>
                    <li className="flex items-center text-gray-300">
                      <svg
                        className="size-5 text-purple-500 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Custom branding
                    </li>
                    <li className="flex items-center text-gray-300">
                      <svg
                        className="size-5 text-purple-500 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Analytics dashboard
                    </li>
                  </ul>
                  <button className="w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition">
                    Contact Sales
                  </button>
                </div>
              </div>
            </BackgroundGradient>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black" id="testimonial">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Loved by Music Enthusiasts
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Join thousands of users who are already enjoying shared music
              experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-primary-500/10 to-transparent rounded-3xl blur-sm group-hover:blur-md transition-all"></div>
              <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="size-12 rounded-full bg-primary-500/10 flex items-center justify-center">
                    <span className="text-xl font-semibold text-primary-500">
                      SK
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Sarah Kim</h4>
                    <p className="text-sm text-gray-400">Music Producer</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "Jam has revolutionized how I share music with my audience.
                  The real-time interaction and synchronized playback make every
                  listening session special."
                </p>
                <div className="mt-6 flex text-primary-500">
                  <svg
                    className="size-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="size-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="size-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="size-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="size-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent rounded-3xl blur-sm group-hover:blur-md transition-all"></div>
              <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="size-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                    <span className="text-xl font-semibold text-purple-500">
                      JD
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">James Davis</h4>
                    <p className="text-sm text-gray-400">
                      DJ & Event Organizer
                    </p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "Hosting virtual music events has never been easier. The sound
                  quality is exceptional, and the community features are
                  top-notch."
                </p>
                <div className="mt-6 flex text-purple-500">
                  <svg
                    className="size-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="size-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="size-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="size-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="size-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent rounded-3xl blur-sm group-hover:blur-md transition-all"></div>
              <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="size-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <span className="text-xl font-semibold text-blue-500">
                      ML
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Maria Lopez</h4>
                    <p className="text-sm text-gray-400">Music Teacher</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "Perfect for my online music classNamees! My students love the
                  interactive nature of the platform and how we can all listen
                  together."
                </p>
                <div className="mt-6 flex text-blue-500">
                  <svg
                    className="size-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="size-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="size-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="size-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="size-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative overflow-hidden bg-neutral-900">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="relative z-10">
            <div className="max-w-2xl text-center mx-auto">
              <div className="mb-5">
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold">
                  Start Your Musical Journey with Jam
                </h2>
              </div>

              <p className="text-lg text-neutral-400 mb-8">
                Join thousands of music lovers sharing their favorite tracks in
                real-time. Create your first room, invite friends, and
                experience music together.
              </p>

              <div className="mt-8 gap-3 flex justify-center">
                <a className="inline-flex justify-center items-center gap-x-3 text-center bg-primary-500 hover:bg-fuchsia-300 text-black font-medium rounded-full focus:outline-none focus:ring focus:ring-fuchsia-300 transition py-3 px-8">
                  Start Listening Free
                  <svg
                    className="size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
                <Link
                  className="inline-flex justify-center items-center gap-x-3 text-center bg-neutral-800 hover:bg-neutral-700 text-white font-medium rounded-full focus:outline-none focus:ring focus:ring-neutral-600 transition py-3 px-8"
                  href={"/sign-in"}
                >
                  View Premium Features
                </Link>
              </div>

              <div className="mt-12">
                <span className="text-neutral-400">
                  No credit card required · Free 14-day trial · Cancel anytime
                </span>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <div className="w-2/3 h-48 bg-gradient-to-b from-fuchsia-400/20 via-transparent to-transparent blur-2xl rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingPage;
