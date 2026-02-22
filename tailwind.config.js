/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#FE6F1F",
      headingPrimary: "#241836",
      footerColor: "#F4F4F4",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxHeight: {
        card: "calc(100vh - 10rem)",
      },
      // borderRadius: {
      //   lg: "var(--radius)",
      //   md: "calc(var(--radius) - 1px)",
      //   sm: "calc(var(--radius) - 2px)",
      // },
      // colors: {
      //   background: "hsl(var(--background))",
      //   foreground: "hsl(var(--foreground))",
      //   card: {
      //     DEFAULT: "hsl(var(--card))",
      //     foreground: "hsl(var(--card-foreground))",
      //   },
      //   popover: {
      //     DEFAULT: "hsl(var(--popover))",
      //     foreground: "hsl(var(--popover-foreground))",
      //   },
      //   primary: {
      //     DEFAULT: "hsl(var(--primary))",
      //     foreground: "hsl(var(--primary-foreground))",
      //   },
      //   secondary: {
      //     DEFAULT: "hsl(var(--secondary))",
      //     foreground: "hsl(var(--secondary-foreground))",
      //   },
      //   muted: {
      //     DEFAULT: "hsl(var(--muted))",
      //     foreground: "hsl(var(--muted-foreground))",
      //   },
      //   accent: {
      //     DEFAULT: "hsl(var(--accent))",
      //     foreground: "hsl(var(--accent-foreground))",
      //   },
      //   destructive: {
      //     DEFAULT: "hsl(var(--destructive))",
      //     foreground: "hsl(var(--destructive-foreground))",
      //   },
      //   border: "hsl(var(--border))",
      //   input: "hsl(var(--input))",
      //   ring: "hsl(var(--ring))",
      //   chart: {
      //     1: "hsl(var(--chart-1))",
      //     2: "hsl(var(--chart-2))",
      //     3: "hsl(var(--chart-3))",
      //     4: "hsl(var(--chart-4))",
      //     5: "hsl(var(--chart-5))",
      //   },
      // },
    },
  },
  plugins: [require("tailwindcss-animate")],
});

///** @type {import('tailwindcss').Config} */
//const withMT = require("@material-tailwind/react/utils/withMT");
//
//module.exports = withMT({
//  content: [
//    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//    "./components/**/*.{js,ts,jsx,tsx,mdx}",
//    "./app/**/*.{js,ts,jsx,tsx,mdx}",
//  ],
//  theme: {
//    colors: {
//      primary: "#FE6F1F",
//      headingPrimary: "#241836",
//      footerColor: "#F4F4F4",
//    },
//    extend: {
//      backgroundImage: {
//        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//        "gradient-conic":
//          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//      },
//      maxHeight: {
//        card: "calc(100vh - 10rem)", // Adjust as needed
//      },
//    },
//  },
//  plugins: [],
//});
