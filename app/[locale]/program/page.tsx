import { ProgramPage } from "@/components/program/ProgramPage";
import { client } from "@/sanity/lib/client";
import { PROGRAMPAGE_QUERY } from "@/sanity/lib/queries/programPage";
import { PROGRAMPAGE_QUERYResult } from "@/sanity/types/types";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const lang = (await params).locale;
  const data: PROGRAMPAGE_QUERYResult = await client.fetch(PROGRAMPAGE_QUERY, {
    lang,
  });

  if (data) return <ProgramPage data={data} lang={lang} />;

  return null;
}
