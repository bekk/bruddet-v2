"use client";
import { MENUPAGE_QUERYResult } from "@/sanity/types/types";
import { SocialMedia } from "../social-media/SocialMedia";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useIsEnglish } from "@/hooks/useIsEnglish";
type TextType = {
  _key: string;
  subtitle: string;
  slug: string;
};

const RedirectType = (type: string) => {
  if (type == "article") {
    return "/artikler";
  } else if (type == "event") {
    return "/event";
  } else {
    return "";
  }
};

type MenuPageProps = {
  data: MENUPAGE_QUERYResult;
};

export const MenuPage = ({ data }: MenuPageProps) => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const isEnglish = useIsEnglish();

  return (
    <div className="flex flex-col lg:flex-row h-full w-full">
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
            alt="Menu image"
            width={1000}
            height={1000}
            className="object-cover p-8"
          />
        )}
      </div>
    </div>
  );
};
