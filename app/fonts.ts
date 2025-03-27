import localFont from 'next/font/local';

export const Lexic = localFont({
  src: [
    {
      path: '../public/fonts/lexik/Lexik-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/lexik/Lexik-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/lexik/Lexik-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/lexik/Lexik-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/lexik/Lexik-Black.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/fonts/lexik/Lexik-LightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/lexik/Lexik-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/lexik/Lexik-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/lexik/Lexik-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../public/fonts/lexik/Lexik-BlackItalic.otf',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-lexik',
  display: 'swap',
  fallback: ['sans-serif', 'Arial'],
});
