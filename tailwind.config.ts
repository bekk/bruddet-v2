import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';
import defaultTheme from 'tailwindcss/defaultTheme';

// NOTE: footerHeight + footerHeightExtension must sum to a valid Tailwind spacing value
// Valid values are typically multiples of 4 (in pixels), e.g. 16 + 12 = 28 (7rem)
// See https://tailwindcss.com/docs/customizing-spacing for default spacing values
const footerHeight = 16;
const footerHeightExtensionEvent = footerHeight;
const footerHeightExtension = 12;
const footerHeightMobile = 28;
const footerHeightMobileEvent = 32;

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      lexic: ['var(--font-lexik)'],
    },
    extend: {
      colors: {
        flotekos: 'var(--color-flotekos)',
        background: 'var(--background)',
        'background-event': 'var(--background-event)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
          'foreground-hover': 'var(--primary-foreground-hover)',
          'foreground-active': 'var(--primary-foreground-active)',
          hover: 'var(--primary-hover)',
          active: 'var(--primary-active)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
          hover: 'var(--secondary-hover)',
          active: 'var(--secondary-active)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        chart: {
          '1': 'var(--chart-1)',
          '2': 'var(--chart-2)',
          '3': 'var(--chart-3)',
          '4': 'var(--chart-4)',
          '5': 'var(--chart-5)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      spacing: {
        'footer-height': defaultTheme.spacing[footerHeight],
        'footer-height-extension': defaultTheme.spacing[footerHeightExtension],
        'footer-height-extension-event': defaultTheme.spacing[footerHeightExtensionEvent],
        'footer-height-mobile': defaultTheme.spacing[footerHeightMobile],
        'footer-height-mobile-event': defaultTheme.spacing[footerHeightMobileEvent],
      },
      maxWidth: {
        'content-width': '1750px',
      },
      minHeight: {
        'front-page-height': "calc(100vh - theme(\'spacing.footer-height\'))",
        'front-page-height-mobile': "calc(100vh - theme(\'spacing.footer-height-mobile\'))",
        'front-page-height-mobile-event':
          "calc(100vh - theme(\'spacing.footer-height-mobile-event\'))",
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        marquee: {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
        marquee2: {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(0%)',
          },
        },
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
    },
  },
  plugins: [animate],
} satisfies Config;
