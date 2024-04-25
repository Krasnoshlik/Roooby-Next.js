import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple' : '#150050',
        'light-purple' : '#250C5F',
        'yellow' : '#FFE377',
        'light-green' : '#00CC61',
      },
      spacing: {
        'projContainer': '71.25rem',
      },
      maxWidth: {
        '1xl' : '40rem',
        '1.5xl': '46.875rem',
        '360' : '22.5rem',
      },
      width: {
        '120': '7.5rem',
        '288': '18rem',
        '372': '23.25rem',
        '11.5/12': '97%',
      },
      height: {
        '120' : '7.5rem',
      },
      lineHeight: {
        '12': '4rem',
        '11': '3.625rem',
      },
      maxHeight: {
        '672': '35rem',
      },
      backgroundImage: {
        'bg-Green': "url('./images/PreFooter/PreFooterGreen.png')",
        'bg-Purple': "url('./images/PreFooter/PreFooterPurple.png')",
      },
    },
  },
  plugins: [],
};
export default config;
