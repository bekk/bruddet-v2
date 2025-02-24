import { TagButtons } from "@/components/article/TagButtons";
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

  const { title, ingress, text, tagTexts, event } = data;

  return (
    <div className="flex flex-col w-full items-center gap-10">
      <h1 className="text-3xl lg:text-6xl text-4xl font-normal text-center mt-40">
        {title}
      </h1>
      <h2 className="text-xl lg:text-3xl md:text-left text-center max-w-[1000px] font-normal lg:leading-[48px]">
        {ingress}
      </h2>
      <TagButtons tagTexts={tagTexts} />
      {event && (
        <Link href={`/${language}/program/${event.slug?.current}`}>
          {t("read-more")}
        </Link>
      )}
      <TwoColumnTextComponent text={text} shouldGenerateH2Links={true} />
    </div>
  );
};
