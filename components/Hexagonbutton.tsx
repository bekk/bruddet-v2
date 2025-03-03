'use client';
import { useNewsLetterContext } from '@/hooks/useDialog';
import { stegaClean } from '@sanity/client/stega';
import Link from 'next/link';
import { useState } from 'react';

interface HexagonButtonProps {
  text: string;
  slug: string | undefined;
  shouldShowNewsletter: boolean | undefined;
}

export default function HexagonButton({ text, slug, shouldShowNewsletter }: HexagonButtonProps) {
  const lines = stegaClean(text?.split('_'));
  const [isHovering, setIsHovering] = useState(false);
  const { setNewsletterOpen } = useNewsLetterContext();

  const ButtonContent = (
    <button
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
      }}
    >
      <svg
        width={lines.length === 2 ? '106' : '126'}
        height={lines.length === 2 ? '106' : '126'}
        viewBox="0 0 106 106"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 62.5L34 6L88 0L106 52.5L96.5 90.5L70 105.5L26 103.5L0 62.5Z"
          className="fill-primary"
        />
        {lines.map((line, index) => (
          <text
            key={index}
            x="50%"
            y={lines.length === 2 ? `${35 + (index - 0.5) * 20}%` : `${25 + (index - 0.5) * 20}%`}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="beige"
            fontSize={lines.length === 2 ? '18' : '16'}
            fontFamily="PT serif"
            fontWeight="bold"
            className={isHovering ? 'underline' : ''}
          >
            <tspan x="50%" dy="1.2em">
              {line}
            </tspan>
          </text>
        ))}
      </svg>
    </button>
  );

  return shouldShowNewsletter ? (
    <div onClick={() => setNewsletterOpen(true)}>{ButtonContent}</div>
  ) : (
    <Link href={slug || '#'}>{ButtonContent}</Link>
  );
}
