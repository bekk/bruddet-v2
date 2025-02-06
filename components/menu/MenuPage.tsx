"use client";
import { MENUPAGE_QUERYResult } from "@/sanity/types/types";
import { SocialMedia } from "../SocialMedia";
import { useState } from "react";
import Link from "next/link";
import { ImageType } from "@/sanity/lib/queries/image";
import { DynamicImage } from "../DynamicImage";

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
  lang: string;
};

export const MenuPage = ({ data, lang }: MenuPageProps) => {
  const [image, setImage] = useState<ImageType>(null);
  const isEnglish = lang === "en";

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
              setImage(link.image);
            }}
            className="mb-14 w-full flex flex-col gap-5"
            key={index}
          >
            <h2>
              <Link
                key={index}
                href={
                  isEnglish
                    ? "/en" +
                      `${RedirectType(link._type)}/${link.slug?.current}`
                    : `${RedirectType(link._type)}/${link.slug?.current}`
                }
                aria-label="" //@todo: add translation.
                className="block text-center hover:underline text-2xl lg:text-4xl"
              >
                {link.title?.toLocaleUpperCase() || ""}
              </Link>
            </h2>
            {link.text?.map((text, index) => (
              <Link
                key={index}
                href={`${/artikler/}${text.slug}#${text.subtitle}`}
                className="block text-center  hover:underline text-xl lg:text-xl"
              >
                {text.subtitle}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="hidden lg:block w-[25%]">
        {image && <DynamicImage image={image} />}
      </div>
    </div>
  );
};
