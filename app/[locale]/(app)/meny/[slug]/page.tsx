import { client } from "@/sanity/lib/client";

import { ARTICLEPAGE_QUERY } from "@/sanity/lib/queries/articlePage";
import { ARTICLEPAGE_QUERYResult } from "@/sanity/types/types";
import { ArticlePage } from "./ArticlePage";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const lang = (await params).locale;
  const slug = (await params).slug;
  const data: ARTICLEPAGE_QUERYResult = await client.fetch(ARTICLEPAGE_QUERY, {
    lang,
    slug,
  });

  return <ArticlePage data={data} language={lang} />;
}
