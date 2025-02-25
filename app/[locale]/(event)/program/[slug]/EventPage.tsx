import { EVENT_QUERYResult } from "@/sanity/types/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ImageEventPage from "@/components/event/ImageEventPage";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import { portableTextComponents } from "@/components/portable-text/components";
import { getTranslations } from "next-intl/server";
import { RolesBlock } from "@/components/event/RolesBlock";
import { TicketBlock } from "@/components/event/TicketBlock";
import { StickyRightColumn } from "@/components/StickyRightColumn";
import { ColumnItem, Columns } from "@/components/column-layout";
import { MainBlock } from "@/components/MainBlock";

type EventPageProps = {
    data: EVENT_QUERYResult;
};

export const EventPage = async ({ data }: EventPageProps) => {
    const t = await getTranslations("event");

    if (!data) return;

    const { image, title, ingress, dates, labels, genre, duration, text } =
        data;

    return (
        <>
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
                            <Badge variant={"outline"}>
                                {genre.title.toUpperCase()}
                            </Badge>
                        )}
                        <Button>
                            <Link href="#ticket-block" scroll={true}>
                                {t("buy-ticket")}
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
            <Columns className="mx-0 lg:mx-8 xl:mx-24">
                <ColumnItem className="xl:w-1/2">
                    <MainBlock text={text} />
                    <RolesBlock roleGroups={data.roleGroups} />
                    <TicketBlock
                        saleStartDateTime={data.saleStartDateTime}
                        saleStartOption={data.saleStartOption}
                        ticketInformation={data.ticketInformation}
                        dates={data.dates}
                        id="ticket-block"
                    />
                </ColumnItem>
                <ColumnItem className="hidden xl:flex xl:w-1/2">
                    <StickyRightColumn text={text} />
                </ColumnItem>
            </Columns>
        </>
    );
};
