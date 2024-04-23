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
      },
      spacing: {
        'projContainer': '71.25rem',
      },
      maxWidth: {
        '1xl' : '40rem',
      },
      lineHeight: {
        '12': '4rem',
      },
      maxHeight: {
        '672': '42rem',
      },
    },
  },
  plugins: [],
};
export default config;
