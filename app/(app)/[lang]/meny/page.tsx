import { MenuPage } from "@/components/menu/MenuPage";
import { client } from "@/sanity/lib/client";
import { MENUPAGE_QUERY } from "@/sanity/lib/queries/menuPage";
import { MENUPAGE_QUERYResult } from "@/sanity/types/types";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang;
  const data: MENUPAGE_QUERYResult = await client.fetch(MENUPAGE_QUERY, {
    lang,
  });

  if (data) return <MenuPage data={data} />;

  return null;
}
