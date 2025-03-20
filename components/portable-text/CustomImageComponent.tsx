import { urlFor } from '@/sanity/lib/image';
import { ImageType } from '@/sanity/lib/queries/image';
import Image from 'next/image';

export type CustomImageProps = {
  value: {
    image: ImageType;
  };
};

export default function CustomImageComponent({ value }: CustomImageProps) {
  const image = value?.image;
  if (!image?.asset) {
    return null;
  }

  const url = urlFor(image.asset).url();

  return (
    <div className="relative">
      <Image
        className="md:min-w-[400px] md:max-w-[500px]"
        src={url}
        alt={image.alt || ''}
        width={1000}
        height={1000}
        style={{
          objectFit: 'contain',
        }}
      />
      {image.credit && <p className="text-sm text-gray-500 mt-2">{image.credit}</p>}
    </div>
  );
}
