/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        bounce: "bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite",
        slideUpCubezier: "slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1)",
      },
      keyframes: {
        bounce : {
         from : { transfrom: "translatey(10px)" },
         to: { transefrom: "translatey(0)" },
        },
        slideUp: {
         from: { transefrom:"translatey(10px)" },
         to: { transefrom:"translatey(0)" },
        },
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      blur: {
        xs: '2px',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}

