import { TagButtons } from "@/components/article/TagButtons";
import { ColumnItem, Columns } from "@/components/column-layout";
import { RolesBlock } from "@/components/event/RolesBlock";
import { MainBlock } from "@/components/MainBlock";
import { StickyRightColumn } from "@/components/StickyRightColumn";
import { ARTICLEPAGE_QUERYResult } from "@/sanity/types/types";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

type ArticlePageProps = { data: ARTICLEPAGE_QUERYResult; language: string };

export const ArticlePage = async ({ data, language }: ArticlePageProps) => {
    const t = await getTranslations("article");
    if (!data) {
        return;
    }

    const { title, ingress, text, tagTexts, event, roleGroups } = data;

    return (
        <div className="flex flex-col items-center">
            <div className="article-header flex flex-col max-w-7xl mx-auto gap-8 my-8 md:my-20 px-6">
                <h1 className="text-3xl lg:text-6xl font-normal text-center">
                    {title}
                </h1>
                <h2 className="text-xl lg:text-3xl text-left lg:text-center font-normal lg:leading-[48px] break-words">
                    {ingress}
                </h2>

                <TagButtons tagTexts={tagTexts} />
                {event && (
                    <Link href={`/${language}/program/${event.slug?.current}`}>
                        {t("read-more")}
                    </Link>
                )}
            </div>
            <RolesBlock roleGroups={roleGroups} />
            <Columns className="max-w-[1750px] mx-auto gap-4 pb-20 px-6">
                <ColumnItem className="lg:w-1/2">
                    <MainBlock text={text} shouldGenerageH2Links={true} />
                    <RolesBlock roleGroups={roleGroups} />
                </ColumnItem>
                <ColumnItem className="hidden lg:flex lg:w-1/2">
                    <StickyRightColumn text={text} />
                </ColumnItem>
            </Columns>
        </div>
    );
};
