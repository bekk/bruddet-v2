"use client";
import { DynamicImage } from "@/components/DynamicImage";
import { SocialMedia } from "@/components/SocialMedia";
import { RedirectType } from "@/lib/utils";
import { ImageType } from "@/sanity/lib/queries/image";
import { MENUPAGE_QUERYResult } from "@/sanity/types/types";
import { cleanHeaderIds } from "@/utils/cleanHeaderIds";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

type MenuPageProps = {
    data: MENUPAGE_QUERYResult;
};

export const MenuPage = ({ data }: MenuPageProps) => {
    const [image, setImage] = useState<ImageType>(null);
    const locale = useLocale();
    const t = useTranslations("menu");

    if (!data) return;

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
                            className="mt-20 w-full"
                            key={index}
                        >
                            <h2>
                                <Link
                                    href={`/${locale}/${RedirectType(link._type)}/${link.slug?.current}`}
                                    aria-label={`${t("link-a11y")} ${link.title}`}
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
                                                href={`/${locale}/meny/${text.slug}#${text.subtitle && cleanHeaderIds(text.subtitle)}`}
                                                className="block text-center  hover:underline text-xl lg:text-xl"
                                                aria-label={`${t("link-a11y")} ${text.subtitle}`}
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
