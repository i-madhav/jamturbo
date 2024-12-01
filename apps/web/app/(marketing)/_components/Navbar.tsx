"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const navRef = useRef(null);
  const arrowRef = useRef(null);
  const router = useRouter();
  const menuItems = ["Go Jam", "Pricing", "Connect on X"];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".menu-item", {
        y: -20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.5,
      });

      gsap.from(".cta-button", {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
        delay: 1,
      });

      // Constant left-right animation for the arrow
      gsap.to(arrowRef.current, {
        x: 5,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  const handleHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.1,
      color: "#000",
      duration: 0.3,
    });
  };

  const handleHoverExit = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      color: "#666",
      duration: 0.3,
    });
  };

  // New handler for the Login button
  const handleLoginClick = () => {
    router.push("/sign-in");
  };

  return (
    <nav className="fixed w-full z-50 top-4">
      <div className="mx-auto max-w-7xl px-6">
        <nav className="flex items-center justify-between backdrop-blur-xl bg-black/30 rounded-full px-6 py-3">
          <div className="flex items-center">
            <a href="/" className="text-white font-display text-2xl font-bold">
              jam
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-white transition"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-white transition"
            >
              Pricing
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition"
            >
              About
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/sign-in"
              className="text-gray-300 hover:text-white transition"
            >
              Log in
            </Link>
            <Link
              href="/sign-up"
              className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
