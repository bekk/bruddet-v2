import Image from 'next/image';

interface ImageProps {
  url: string;
  alt: string;
  title: string | null;
}

export default function ImageEventPage({ url, alt, title }: ImageProps) {
  return (
    <div
      id="event-header"
      className="flex justify-center aspect-[9/16] sm:aspect-[16/9] grow relative max-h-[60vh] sm:max-h-[80vh] w-full mx-auto font-serif"
    >
      <Image
        src={url}
        alt={alt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <h1 className="oversized text-background-event flex items-center justify-center z-10 relative">
        {title}
      </h1>
    </div>
  );
}
