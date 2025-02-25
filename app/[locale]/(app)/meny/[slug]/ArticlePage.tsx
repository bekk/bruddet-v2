import { TagButtons } from "@/components/article/TagButtons";
import { RolesBlock } from "@/components/event/RolesBlock";
import { TwoColumnTextComponent } from "@/components/TwoColumnTextComponent";
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
        <div className="flex flex-col w-full items-center gap-10 mx-5">
            <div className="flex flex-col gap-10 items-center md:text-left lg:max-w-4xl">
                <h1 className="text-3xl lg:text-6xl text-4xl font-normal text-center mt-40">
                    {title}
                </h1>
                <h2 className="text-xl lg:text-3xl text-left lg:text-center font-normal lg:leading-[48px] break-words">
                    {ingress}
                </h2>
            </div>
            <TagButtons tagTexts={tagTexts} />
            {event && (
                <Link href={`/${language}/program/${event.slug?.current}`}>
                    {t("read-more")}
                </Link>
            )}
            <TwoColumnTextComponent text={text} shouldGenerateH2Links={true} />
            <RolesBlock roleGroups={roleGroups} />
        </div>
    );
};
