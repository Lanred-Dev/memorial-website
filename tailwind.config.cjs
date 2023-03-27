/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            textColor: {
                light: "#bdbebe",
                extraLight: "#3a3a3a",
            },
            colors: {
               background: "#050505", 
               backgroundSecondary: "#020202",
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
