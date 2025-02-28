'use client';
import { useEffect, useState } from 'react';

export const useScrollSpy = (parentId: string, itemsCount: number) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const parent = document.getElementById(parentId);
      if (!parent) return;

      const parentRect = parent.getBoundingClientRect();
      const parentTop = parentRect.top;
      const parentBottom = parentRect.bottom;
      const parentHeight = parentRect.height;
      const windowHeight = window.innerHeight;

      // If the element is not yet in view or has passed view
      if (parentTop >= windowHeight || parentBottom <= 0) {
        return;
      }

      // Calculate scroll progress (0 to 1)
      const scrollProgress = Math.max(0, Math.min(1, -parentTop / (parentHeight - windowHeight)));

      // Calculate which section we're in
      const sectionHeight = 1 / itemsCount;
      const newActiveIndex = Math.min(
        itemsCount - 1,
        Math.max(0, Math.floor(scrollProgress / sectionHeight)),
      );

      setActiveIndex(newActiveIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [parentId, itemsCount, activeIndex]);

  return activeIndex;
};
