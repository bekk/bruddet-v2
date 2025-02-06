import { ImageType } from "@/sanity/lib/queries/image";
import Image from "next/image";

export const DynamicImage = ({ image }: { image: ImageType }) => {
  if (!image) return null;

  return (
    <Image
      src={image.imageUrl || ""}
      alt={image.alt || ""}
      width={700}
      height={700}
      className="object-cover p-8"
    />
  );
};
