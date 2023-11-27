/** @type {import('tailwindcss').Config} */

const FONT_INTER = "var(--font-inter)";

module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                primary: { 1: "#D999FF" },
                background: { 1: "#0D0B0B" },
            },

            fontFamily: {
                heading: FONT_INTER,
                body: FONT_INTER,
                inter: FONT_INTER,
            },

            screens: {
                xs: "360px",
            },
        },
    },
};
