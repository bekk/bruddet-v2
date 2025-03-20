import { urlFor } from '@/sanity/lib/image';
import { CustomImage } from '@/sanity/types/types';
import Image from 'next/image';

export const DynamicImage = ({ image }: { image: CustomImage }) => {
  if (!image?.asset) return null;

  return (
    <Image
      src={urlFor(image.asset).url()}
      alt={image.alt || ''}
      width={350}
      height={350}
      className="object-cover fixed pr-14 pt-14 min-w-[25%] h-auto"
    />
  );
};
