// Tailwind CDN configuration — design tokens for the portfolio.
// Loaded synchronously right after the Tailwind CDN script in index.html <head>.
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                display: ["Poppins", "sans-serif"],
                mono: ["Space Mono", "monospace"],
            },
            colors: {
                // Teal accent — the single confident accent color for the site.
                primary: {
                    50: "#f0fdfa",
                    100: "#ccfbf1",
                    200: "#99f6e4",
                    300: "#5eead4",
                    400: "#2dd4bf",
                    500: "#14b8a6",
                    600: "#0d9488",
                    700: "#0f766e",
                    800: "#115e59",
                    900: "#134e4a",
                    950: "#042f2e",
                },
                dark: {
                    bg: "#18181b",
                    card: "#212124",
                    border: "#3a3a3d",
                    text: "#c7c7cc",
                    heading: "#f4f4f5",
                },
                light: {
                    bg: "#f7f5f1",
                    card: "#fffefb",
                    border: "#e7e1d6",
                    text: "#57534e",
                    heading: "#1c1917",
                },
            },
        },
    },
};
