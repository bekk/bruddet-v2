'use client';

import React, { createContext, useContext, useState } from 'react';

export interface NewsLetterContextData {
  isNewsletterOpen: boolean;
  setNewsletterOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NewsLetterContext = createContext<NewsLetterContextData>({
  isNewsletterOpen: false,
  setNewsletterOpen: () => {},
});

export interface NewsLetterProviderProps {
  children: React.ReactNode;
}

export function NewsLetterProvider({ children }: NewsLetterProviderProps) {
  const [isNewsletterOpen, setNewsletterOpen] = useState<boolean>(false);

  return (
    <NewsLetterContext.Provider value={{ isNewsletterOpen, setNewsletterOpen }}>
      {children}
    </NewsLetterContext.Provider>
  );
}

export const useNewsLetterContext = () => {
  const context = useContext(NewsLetterContext);

  if (context === undefined) {
    throw new Error('Must wrap element in NewsLetterProvider');
  }

  return context;
};
