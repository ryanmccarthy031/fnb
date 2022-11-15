module.exports = {
    purge: [
        "./src/components/*.vue",
        "./src/layouts/*.vue",
        "./src/pages/*.vue",
        "./src/templates/*.vue",
        "./src/**/*.vue"
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                display: ["'Noto Sans Display'"],
                body: ["'Noto Sans Mono'"]
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: [require("@tailwindcss/typography")]
};
