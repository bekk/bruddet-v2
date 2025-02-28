interface ImageProps {
  url: string;
  alt: string;
  title: string | null;
}

export default function ImageEventPage({ url, alt, title }: ImageProps) {
  return (
    <div
      id="event-header"
      className="flex justify-center aspect-[9/16] sm:aspect-[16/9] grow bg-cover max-h-[60vh] sm:max-h-[80vh] bg-center w-full  bg-no-repeat mx-auto font-serif"
      style={{
        backgroundImage: `url(${url})`,
      }}
      aria-label={alt}
    >
      <h1 className="oversized text-background-event flex items-center justify-center">{title}</h1>
    </div>
  );
}
