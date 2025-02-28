import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

interface CustomImageProps {
  image: {
    alt: string | null;
    credit: string | null;
    imageUrl: string | null;
  };
}

export default function CustomImageComponent({ value }: { value: CustomImageProps }) {
  const { image } = value;
  if (!image || !image.imageUrl) {
    return null;
  }

  const url = urlFor(image.imageUrl).url();

  return (
    <div>
      <Image className="md:min-w-[400px] md:max-w-[450px]" src={url} alt={image.alt || ''} />
      {image.credit && <p className="text-sm text-gray-500">{image.credit}</p>}
    </div>
  );
}
