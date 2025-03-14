import { TagButtons } from '@/components/article/TagButtons';
import { ColumnItem, Columns } from '@/components/column-layout';
import { RolesBlock } from '@/components/event/RolesBlock';
import { MainBlock } from '@/components/MainBlock';
import { NormalRightColumn } from '@/components/NormalRightColumn';
import { StickyRightColumn } from '@/components/StickyRightColumn';
import { ARTICLEPAGE_QUERYResult } from '@/sanity/types/types';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

type ArticlePageProps = { data: ARTICLEPAGE_QUERYResult; language: string };

export const ArticlePage = async ({ data, language }: ArticlePageProps) => {
  const t = await getTranslations('article');
  if (!data) {
    return;
  }

  const { title, ingress, text, tagTexts, event, roleGroups, galleryDisplayType } = data;

  return (
    <>
      <div className="article-header flex flex-col max-w-7xl mx-auto gap-8 pt-24 pb-8 md:pb-24 px-6 md:px-12">
        <h1 className="font-normal text-center">{title}</h1>
        <p className="text-xl lg:text-3xl text-left lg:text-center font-normal break-words">
          {ingress}
        </p>

        <TagButtons tagTexts={tagTexts} />
        {event && (
          <Link
            className="block md:text-center underline hover:no-underline"
            href={`/${language}/program/${event.slug?.current}`}
          >
            {t('read-more')}
          </Link>
        )}
      </div>
      <RolesBlock roleGroups={roleGroups} />
      <Columns>
        <ColumnItem variant="leftColumn">
          <MainBlock text={text} shouldGenerateH2Links={true} />
          <RolesBlock roleGroups={roleGroups} />
        </ColumnItem>
        <ColumnItem variant="rightColumn">
          {galleryDisplayType === 1 ? (
            <StickyRightColumn text={text} />
          ) : (
            <NormalRightColumn text={text} />
          )}
        </ColumnItem>
      </Columns>
    </>
  );
};
