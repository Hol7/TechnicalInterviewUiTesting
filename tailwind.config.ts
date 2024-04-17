import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      
    },
    colors: {
      'black':'#000000',
      'white':'#FFFFFF',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'blackNav':'#222222',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'lightGreen':'#5BA7AE',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'royalBleu':'#7743E5',
      'red':'#C82021',
      'borderNav':'#D7D7D7',
      'hoverGray':'#EEEEEE',
      'gray': '#8492a6',
      'RightGray':'#FAF9F8',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        px: '1px',
        0: '0',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '1':'1',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      borderRadius: {
        'none': '0',
        'sm': '.125rem',
        DEFAULT: '.25rem',
        'lg': '.5rem',
        'full': '9999px',
      },    opacity: {
        '0': '0',
        '20': '0.2',
        '40': '0.4',
        '60': '0.6',
        '80': '0.8',
        '100': '1',
      },
      zIndex: {
        '100': '100',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        'sm':'0 1px 1px rgb(0 0 0 / 0.05)',
        
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ],
      }
    }
  },
  plugins: [],
};
export default config;
