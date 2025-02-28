import { ImageType } from '@/sanity/lib/queries/image';
import Image from 'next/image';

export const DynamicImage = ({ image }: { image: ImageType }) => {
  if (!image) return null;

  return (
    <Image
      src={image.imageUrl || ''}
      alt={image.alt || ''}
      width={350}
      height={350}
      className="object-cover fixed pr-14 pt-14 min-w-[25%] h-auto"
    />
  );
};
