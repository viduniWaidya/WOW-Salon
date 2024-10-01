/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Includes all page components
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Includes all components
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Includes files in the app directory
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Includes all other files in the src directory
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Custom background color
        foreground: "var(--foreground)", // Custom foreground color
      },
    },
  },
  plugins: [],
};
