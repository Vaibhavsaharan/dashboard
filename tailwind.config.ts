import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: '0.75rem',
      base: '0.875rem',
      xl: '1rem',
      '2xl': '1.25rem',
      '3xl': '1.563rem',
      '4xl': '1.953rem',
      '5xl': '2.441rem',
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'black': {
          DEFAULT : '#1c1c1c',
          80: '#494949',
          40: '#a4a4a4',
          20: '#d2d2d2',
          10: '#e8e8e8',
          5: '#f4f4f4'
        },
        'blue': "#e3f5ff",
        'grey': "#e5ecf6",
        'slate': "#f7f9fb"
      },
      width : {
        'left' : '14.722222%',
        'mid' : '65.833333%',
        'right': '19.444444%'
      }
    },
  },
  plugins: [],
};
export default config;
