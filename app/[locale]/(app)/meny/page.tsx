import { MenuPage } from "./MenuPage";
import { client } from "@/sanity/lib/client";
import { MENUPAGE_QUERY } from "@/sanity/lib/queries/menuPage";
import { MENUPAGE_QUERYResult } from "@/sanity/types/types";

export default async function Page({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const lang = (await params).locale;
    const data: MENUPAGE_QUERYResult = await client.fetch(MENUPAGE_QUERY, {
        lang,
    });

    return <MenuPage data={data} />;
}
