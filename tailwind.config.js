const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-4px)' },
                },
            },
            animation: {
                'float-slow': 'float 3s ease-in-out infinite',
            },
            fontFamily: {
                
            },
            fontSize: {
                
            },
            container: {
                center: true,
                padding: "1rem",
                screens: {
                    
                },
            },
            colors: {
                
            },
            // backgroundImage: {
            //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            //   "gradient-conic":
            //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            // },
        },
    },
    plugins: [
        nextui({
            themes: {
                light: {
                    colors: {
                        primary: "#4E741E", // primary-one
                    },
                },
            },
        }),
    ],
};

module.exports = config;


