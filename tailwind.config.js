/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f7ff",
          100: "#e0effe",
          500: "#003d82",
          600: "#003268",
          700: "#002750",
          800: "#001c38",
          900: "#001120",
        },
        secondary: {
          400: "#f39200",
          500: "#e68a00",
          600: "#cc7700",
        },
        neutral: {
          50: "#f9fafb",
          100: "#f3f4f6",
          900: "#111827",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}