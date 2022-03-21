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
            backgroundImage: {
                painting:
                    "linear-gradient(0deg, rgba(0,0,0,.92), rgba(0,0,0,.92)), url('../../static/painting.jpeg')"
            },
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
