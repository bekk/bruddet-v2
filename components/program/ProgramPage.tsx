"use client";
import { PROGRAMPAGE_QUERYResult } from "@/sanity/types/types";
import { SocialMedia } from "../SocialMedia";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useIsEnglish } from "@/hooks/useIsEnglish";
type TextType = {
  _key: string;
  subtitle: string;
  slug: string;
};

type ProgramPageProps = {
  data: PROGRAMPAGE_QUERYResult;
};

export const ProgramPage = ({ data }: ProgramPageProps) => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const isEnglish = useIsEnglish();

  return (
    <div className="flex flex-col lg:flex-row h-full w-full">
      <h1 className="text-5xl font-bold mb-12 sr-only">{data?.title}</h1>
      <div className="order-last lg:order-none flex items-end justify-center lg:justify-normal lg:w-[25%]">
        <SocialMedia socialMediaText={data?.socialMediaText} />
      </div>

      <div className="flex grow flex-col items-center mt-16 px-4">
        {data?.links?.map((link, index) => (
          <div
            onMouseEnter={() => {
              setImageUrl(link.image?.imageUrl || "");
            }}
            className="mb-14"
            key={index}
          >
            <Link
              key={index}
              href={
                isEnglish
                  ? "/en" + `${RedirectType(link._type)}/${link.slug?.current}`
                  : `${RedirectType(link._type)}/${link.slug?.current}`
              }
              aria-label="" //@todo: add translation.
              className="block text-center p-3 hover:underline text-2xl lg:text-4xl"
            >
              {link.title?.toLocaleUpperCase() || ""}
            </Link>
            {link.text?.map((text, index) => (
              <Link
                key={index}
                href={`${/artikler/}${(text as TextType).slug}#${(text as TextType).subtitle}`}
                className="block text-center p-3 hover:underline text-xl lg:text-xl"
              >
                {(text as TextType).subtitle}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="hidden lg:block w-[25%]">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="Program images"
            width={1000}
            height={1000}
            className="object-cover p-8"
          />
        )}
      </div>
    </div>
  );
};
