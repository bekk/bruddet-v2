"use client";
import { MENUPAGE_QUERYResult } from "@/sanity/types/types";
import { SocialMedia } from "../social-media/SocialMedia";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { isEnglish } from "@/lib/utils";

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

  return (
    <div className="flex flex-col md:flex-row h-full w-full">
      <div className="order-last md:order-none flex items-end w-[20%]">
        <SocialMedia socialMediaText={data?.socialMediaText} />
      </div>

      <div className="flex grow flex-col items-center">
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
                isEnglish()
                  ? "/en" + `${RedirectType(link._type)}/${link.slug?.current}`
                  : `${RedirectType(link._type)}/${link.slug?.current}`
              }
              aria-label=""
            >
              <p className="hover:underline text-2xl lg:text-4xl">
                {link.title?.toLocaleUpperCase() || ""}
              </p>
            </Link>
            {link.text?.map((text, index) => (
              <Link
                key={index}
                href={`${/artikler/}${(text as TextType).slug}#${(text as TextType).subtitle}`}
              >
                <p className="p-3 hover:underline text-xl lg:text-xl">
                  {(text as TextType).subtitle}
                </p>
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="hidden md:block w-[20%]">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="Menu image"
            width={500}
            height={500}
            className="object-cover"
          />
        )}
      </div>
    </div>
  );
};
