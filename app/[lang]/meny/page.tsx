import SocialMedia from "@/components/social-media-block/SocialMedia";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang;
  return (
    <div className="flex flex-col md:flex-row h-full w-full">
      {/* Hidden on mobile */}
      <div className="order-last md:order-none flex items-end w-[20%]">
        <SocialMedia />
      </div>

      {/* Grows and pins content at bottom on mobile */}
      <div className="flex grow flex-col items-center">
        {Array.from({ length: 100 }).map((_, i) => (
          <p key={i}>Menysiden</p>
        ))}
        <p>{lang}</p>
      </div>


      {/* Hidden on mobile */}
      <div className="hidden md:block w-[20%]">

      </div>
    </div>
  );
}
