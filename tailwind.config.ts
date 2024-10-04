import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "btn-hover": '#F7F7F7',
      },
      dropShadow: {
        customTag: '0 0px 4px 0px rgba(0, 0, 0, 0.6)'
      },
      boxShadow: {
        custom: '0 2px 4px 0px rgba(0, 0, 0, 0.157)', // Define your custom shadow here

      },
      colors: {
        primaryText: '#222222', // Define your custom color
        softText: '#6A6A6A',
        grayBorder: '#DDDDDD',
      },
      // maxWidth: {
      //   'custom': '1200px',  // Custom max width value
      // },
      // fontFamily: {
      //   montserrat: ['Montserrat', 'sans-serif'],
      // },
    },
    // extend: {
    //   colors: {
    //     background: "var(--background)",
    //     foreground: "var(--foreground)",
    //   },
    // },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#ff385c",        // Fixed primary color
          "secondary": "#9C27B0",      // Example secondary color
          "accent": "#e41c57",         // Fixed accent color
          "neutral": "#333333",        // Example neutral color
          "base-100": "#FFFFFF",       // Fixed Background color
          "btn-hover": 'F7F7F7',   // Fixed 
          "gray-border": "#DDDDDD",    //FIXED
          "info": "#2094F3",           // Info color
          "success": "#8BC34A",        // Success color
          "warning": "#FFC107",        // Warning color
          "error": "#F44336",          // Error color
        },
      },
      // Optionally, include other built-in themes if desired
      'dark',
      'cupcake',
    ],
  },

};
export default config;
