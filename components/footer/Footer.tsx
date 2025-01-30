"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Footer() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <footer className="h-full bg-gray-800 text-white flex justify-between">
      <Link
        href="/meny"
        className="w-[50%] md:w-[15%] flex justify-center items-center"
      >
        Meny
      </Link>

      <Link
        href="/"
        className="hidden md:w-[70%] md:flex justify-center items-center relative overflow-x-hidden w-full h-full"
        onMouseOver={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onFocus={() => setIsHovering(true)}
        onBlur={() => setIsHovering(false)}
      >
        {isHovering ? <span>Meld deg på!</span> : <ScrollingCTA />}
      </Link>

      <Link
        href="/program"
        className="w-[50%] md:w-[15%] flex justify-center items-center"
      >
        Program
      </Link>
    </footer>
  );
}

function ScrollingCTA() {
  return (
    <>
      <div className="animate-marquee whitespace-nowrap">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="m-4">
            Sjekk ut vårt sommerprogram!
          </span>
        ))}
      </div>
      <div className="absolute flex justify-center items-center animate-marquee2 whitespace-nowrap">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="m-4">
            Sjekk ut vårt sommerprogram!
          </span>
        ))}
      </div>
    </>
  );
}
