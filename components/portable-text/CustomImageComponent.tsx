import { urlFor } from '@/sanity/lib/image';
import { CustomImage } from '@/sanity/types/types';
import Image from 'next/image';

export type CustomImageProps = {
  value: CustomImage;
};

export default function CustomImageComponent({ value }: CustomImageProps) {
  if (!value?.asset) {
    return null;
  }

  const url = urlFor(value?.asset).url();

  return (
    <div className="relative">
      <Image
        className="md:min-w-[400px] md:max-w-[500px]"
        src={url}
        alt={value?.alt || ''}
        width={1000}
        height={1000}
        style={{
          objectFit: 'contain',
        }}
      />
      {value?.credit && <p className="text-sm text-gray-500 mt-2">{value?.credit}</p>}
    </div>
  );
}
