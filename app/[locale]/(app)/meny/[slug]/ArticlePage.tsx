import { TwoColumnTextComponent } from "@/components/TwoColumnTextComponent";
import { Button } from "@/components/ui/button";
import { ARTICLEPAGE_QUERYResult } from "@/sanity/types/types";

type ArticlePageProps = { data: ARTICLEPAGE_QUERYResult };

const handleScroll = (id: string) => {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};

export const ArticlePage = ({ data }: ArticlePageProps) => {
  if (!data) {
    return;
  }

  const { title, ingress, tagTexts, text, video, event } = data;

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl lg:text-6xl text-4xl font-normal text-center mt-40">
        {title}
      </h1>
      <h2 className="text-xl lg:text-3xl mx-auto my-4 md:my-10 md:text-left lg:text-center max-w-[1000px] font-normal lg:leading-[48px]">
        {ingress}
      </h2>
      <div className="flex flex-wrap gap-4"></div>
      {tagTexts && tagTexts.length > 1 && (
        <div className="flex gap-2 flex-wrap">
          {data.tagTexts?.map((tagText) => (
            // <button key={tagText._key} className={`px-2 h-10 border-box w-fit`}>
            //   {tagText.subtitle}
            // </button>
            <Button
              key={tagText._key}
              //onClick={() => handleScroll(tagText.subtitle ?? "")}
            >
              {tagText.subtitle}
            </Button>
          ))}
        </div>
      )}
      <TwoColumnTextComponent text={text} />
    </div>
  );
};
