export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang;
  return <h1>{lang} PROGGIS</h1>;
}
