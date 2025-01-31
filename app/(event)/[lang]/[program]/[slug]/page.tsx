
export default async function Page({params}: {params: Promise<{lang: string, slug: string}>}) {
    const lang = (await params).lang;
    const slug = (await params).slug;
    return (
        <h1>{lang} på mr {slug}</h1>
    );
}