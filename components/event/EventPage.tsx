"use client";
import { EVENT_QUERYResult } from "@/sanity/types/types";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import ImageEventPage from "./ImageEventPage";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import { portableTextComponents } from "../portable-text/components";

type EventPageProps = {
  data: EVENT_QUERYResult;
};

export const EventPage = ({ data }: EventPageProps) => {
  const t = useTranslations("event");

  const { image, title, ingress, dates, labels, genre, duration, text } = data;

  return (
    <>
      <div className={`flex-col flex w-full font-serif gap-8`}>
        <div id="eventIngress" className="flex flex-col gap-8">
          {image?.imageUrl && (
            <ImageEventPage
              url={urlFor(image.imageUrl).url() || ""}
              alt={image.alt || ""}
              title={title || ""}
            />
          )}
          <div className="flex flex-col mx-6 md:mx-8 lg:mx-24 gap-8">
            {ingress && <h2>{ingress}</h2>}

            <div className="flex flex-wrap gap-4">
              {labels?.map((label, i) => (
                <Badge variant={"outline"} key={i}>
                  {label.toUpperCase()}
                </Badge>
              ))}
              {dates && <Badge variant={"outline"}>DATO</Badge>}
              {genre?.title && (
                <Badge variant={"outline"}>{genre.title.toUpperCase()}</Badge>
              )}
              <Button>
                <Link href="#top" scroll={true}>
                  {t("buy-ticket")}
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <p>Hello</p>
          </div>
        </div>
        {text?.map((block, i) => (
          <div key={i} className="flex flex-col mx-6 md:mx-8 lg:mx-24">
            <PortableText
              key={i}
              components={portableTextComponents}
              value={block}
            />
          </div>
        ))}
      </div>
      {/* <BuyButtonFooter /> */}
    </>
  );
};
