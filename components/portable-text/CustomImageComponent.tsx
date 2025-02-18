import { urlFor } from "@/sanity/lib/image";

interface CustomImageProps {
  image: {
    alt: string | null;
    credit: string | null;
    imageUrl: string | null;
  };
}

export default function CustomImageComponent({
  value,
}: {
  value: CustomImageProps;
}) {
  const { image } = value;
  if (!image || !image.imageUrl) {
    return null;
  }

  const url = urlFor(image.imageUrl).url();

  return (
    <div>
      <img
        className="md:min-w-[450px] md:max-w-[500px]"
        src={url}
        alt={image.alt || ""}
      />
      {image.credit && <p className="text-sm text-gray-500">{image.credit}</p>}
    </div>
  );
}
