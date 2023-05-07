/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            textColor: {
                primary: "#222222",
                secondary: "#333333",
                highlight: "#FDB813",
                light: "#FFFFFF",
            },
            colors: {
               background: "#FFFFFF", 
               backgroundSecondary: "#F5F5F5",
               backgroundSecondaryComplement: "#D5D5D5",
               accent: "#BF0A30",
               accentSecondary: "#002868",
               modal: "#2B2B2B",
               modalSecondary: "#333333",
               highlight: "#FDB813",
            },
            fontFamily: {
                salmaPro: ["salmaPro", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [require("tailwind-children")],
    "tailwindCSS.includeLanguages": {
        Svelte: "html",
    },
};
