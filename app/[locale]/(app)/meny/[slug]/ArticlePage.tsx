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
    <div className="flex flex-col items-center">
      <div className="article-header flex flex-col max-w-7xl mx-auto gap-8 mt-24 mb-8 md:mb-24 px-6 md:px-12">
        <h1 className="font-normal text-center">{title}</h1>
        <h2 className="text-xl lg:text-3xl text-left lg:text-center font-normal lg:leading-[48px] break-words">
          {ingress}
        </h2>

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
      <Columns className="max-w-content-width mx-auto gap-4 pb-20 px-6 md:px-12">
        <ColumnItem className="lg:w-1/2">
          <MainBlock text={text} shouldGenerageH2Links={true} />
          <RolesBlock roleGroups={roleGroups} />
        </ColumnItem>
        <ColumnItem className="hidden lg:flex lg:w-1/2">
          {galleryDisplayType === 1 ? (
            <StickyRightColumn text={text} />
          ) : (
            <NormalRightColumn text={text} />
          )}
        </ColumnItem>
      </Columns>
    </div>
  );
};
