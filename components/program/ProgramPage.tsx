"use client";
import { PROGRAMPAGE_QUERYResult } from "@/sanity/types/types";
import { SocialMedia } from "../SocialMedia";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ImageType } from "@/sanity/lib/queries/image";
import { DynamicImage } from "../DynamicImage";

type ProgramPageProps = {
  data: PROGRAMPAGE_QUERYResult;
  lang: string;
};

export const ProgramPage = ({ data, lang }: ProgramPageProps) => {
  const [image, setImage] = useState<ImageType>(null);
  const isEnglish = lang === "en";

  return (
    <div className="flex flex-row h-full w-full">
      <h1 className="sr-only">{data?.title}</h1>
      <div className="hidden lg:flex items-end justify-center lg:justify-normal lg:w-[25%]">
        <SocialMedia socialMediaText={data?.socialMediaText} />
      </div>

      <div className="flex grow flex-col items-center mt-12 lg:mt-20 px-6 sm:px-44 lg:px-4">
        {data?.links?.map((link, index) => (
          <div
            onMouseEnter={() => {
              setImage(link.image);
            }}
            className="mb-14 w-full flex flex-col gap-2"
            key={index}
          >
            <Link
              key={index}
              href={
                isEnglish
                  ? `/en/event/${link.slug?.current}`
                  : `/event/${link.slug?.current}`
              }
              aria-label="" //@todo: add translation.
              className="block text-center hover:underline"
            >
              <div className="lg:hidden flex justify-center aspect-square w-full">
                {link.image && (
                  <Image
                    key={index}
                    src={link.image?.imageUrl || ""}
                    alt={link.image?.alt || ""}
                    width={350}
                    height={350}
                    className="inline-block object-cover w-full h-full"
                  />
                )}
              </div>
              <h2 className="text-2xl lg:text-4xl mt-4 lg:mt-0">
                {link.title?.toLocaleUpperCase()}
              </h2>
              {link.dates && link.dates.length > 0 && (
                <span className="inline-block mt-2">
                  Sett inn dato her{" "}
                  {/*<DatesLabel dates={link.dates} showBorder={false} />*/}
                </span>
              )}
            </Link>
          </div>
        ))}
      </div>
      <div className="hidden lg:block w-[25%]">
        {image && <DynamicImage image={image} />}
      </div>
    </div>
  );
};
