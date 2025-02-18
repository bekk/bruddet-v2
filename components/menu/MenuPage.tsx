"use client";
import { MENUPAGE_QUERYResult } from "@/sanity/types/types";
import { SocialMedia } from "../SocialMedia";
import { useState } from "react";
import Link from "next/link";
import { ImageType } from "@/sanity/lib/queries/image";
import { DynamicImage } from "../DynamicImage";
import { useLocale } from "next-intl";
import { RedirectType } from "@/lib/utils";

type MenuPageProps = {
  data: MENUPAGE_QUERYResult;
};

export const MenuPage = ({ data }: MenuPageProps) => {
  const [image, setImage] = useState<ImageType>(null);
  const locale = useLocale();

  return (
    <div className="flex flex-col lg:flex-row h-full w-full">
      <h1 className="sr-only">{data?.title}</h1>
      <div className="order-last lg:order-none flex items-end justify-center lg:justify-normal lg:w-[25%]">
        {data?.socialMediaText && (
          <SocialMedia socialMediaText={data?.socialMediaText} />
        )}
      </div>

      {data?.links && (
        <ul className="flex grow flex-col items-center px-4 mb-14">
          {data?.links?.map((link, index) => (
            <li
              onMouseEnter={() => {
                setImage(link.image);
              }}
              className="mt-14 w-full"
              key={index}
            >
              <h2>
                <Link
                  href={`/${locale}/${RedirectType(link._type)}/${link.slug?.current}`}
                  aria-label="" //@todo: add translation.
                  className="block text-center hover:underline text-2xl lg:text-4xl"
                >
                  {link.title?.toLocaleUpperCase() || ""}
                </Link>
              </h2>
              {link.text && link.text.length > 0 && (
                <ul className="flex flex-col gap-5 mt-5">
                  {link.text?.map((text, index) => (
                    <li key={index}>
                      <Link
                        href={`/${locale}/artikler/${text.slug}#${text.subtitle}`}
                        className="block text-center  hover:underline text-xl lg:text-xl"
                      >
                        {text.subtitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}

      <div className="hidden lg:block w-[25%]">
        {image && <DynamicImage image={image} />}
      </div>
    </div>
  );
};
