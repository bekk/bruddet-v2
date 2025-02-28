import { EventPage } from "@/app/[locale]/(event)/program/[slug]/EventPage";
import { sanityFetch } from "@/sanity/lib/live";
import { EVENT_QUERY } from "@/sanity/lib/queries/event";
import { EVENT_QUERYResult } from "@/sanity/types/types";

export default async function Page({
    params,
}: {
    params: Promise<{ locale: string; slug: string }>;
}) {
    const lang = (await params).locale;
    const slug = (await params).slug;

    const { data }: { data: EVENT_QUERYResult } = await sanityFetch({
        query: EVENT_QUERY,
        params: { lang, slug },
    });

    return <EventPage data={data} />;
}
