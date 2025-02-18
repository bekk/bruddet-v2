"use client";
import { useIsEnglish } from "../../hooks/useIsEnglish";
import Link from "next/link";
import React, { useState } from "react";

export default function Footer() {
  const [isHovering, setIsHovering] = useState(false);
  const isEnglish = useIsEnglish();

  return (
    <footer className="h-full flex justify-between border-t border-foreground">
      <FooterLink href={isEnglish ? "/en/meny" : "/meny"}>
        {isEnglish ? "Menu" : "Meny"}
      </FooterLink>

      <Link
        href="/"
        className="hidden md:w-[70%] md:flex justify-center items-center relative overflow-x-hidden w-full h-full border-x border-foreground hover:bg-primary hover:text-primary-foreground hover:underline"
        onMouseOver={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onFocus={() => setIsHovering(true)}
        onBlur={() => setIsHovering(false)}
      >
        {isHovering ? (
          <span className="font-bold ">Meld deg på!</span>
        ) : (
          <ScrollingCTA />
        )}
      </Link>

      <FooterLink href={isEnglish ? "/en/program" : "/program"}>
        Program
      </FooterLink>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="w-[50%] md:w-[15%] flex justify-center items-center font-bold hover:bg-primary hover:text-primary-foreground hover:underline"
    >
      {children}
    </Link>
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
