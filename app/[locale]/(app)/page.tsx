import HexagonBuyButton from "@/components/HexagonBuyButton";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { FRONTPAGE_QUERY } from "@/sanity/lib/queries/frontPage";
import { FRONTPAGE_QUERYResult } from "@/sanity/types/types";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export default async function Page({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const lang = (await params).locale;
    const { data }: { data: FRONTPAGE_QUERYResult } = await sanityFetch({
        query: FRONTPAGE_QUERY,
        params: { lang },
    });

    const minHeight = "calc(100vh-theme('spacing.12'))";

    return (
        <div
            className="flex justify-center items-center min-h-front-page-height bg-cover bg-center"
            style={{
                minHeight: minHeight,
                backgroundImage: `url(${urlFor(data?.image?.imageUrl as SanityImageSource).url()})`,
            }}
            aria-label={data?.image?.alt || ""}
        >
            <div className="absolute lg:right-24 lg:top-24 right-6 top-16">
                <HexagonBuyButton text="hei" />
            </div>

            <h1 className="text-primary-foreground">{data?.title}</h1>
        </div>
    );
}
