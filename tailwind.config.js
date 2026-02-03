/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.jsx",
        "./resources/**/*.js",
    ],
    theme: {
        extend: {
            keyframes: {
                fadeUp: {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(12px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
            },
            animation: {
                "fade-up": "fadeUp 0.6s ease-out forwards",
                "fade-in": "fadeIn 0.6s ease-out forwards",
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["dark"],
    },
};
