"use client";

import { useState } from "react";

interface ImageProps {
  alt: string;
}
export const Image = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  return (
    <Image alt={alt} src={imageUrl} className="w-full p-6 lg:sticky lg:top-0" />
  );
};
