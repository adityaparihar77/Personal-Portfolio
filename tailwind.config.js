/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                'dark-purple': {
                    50: '#faf5ff',
                    100: '#f3e8ff',
                    200: '#e9d5ff',
                    300: '#d8b4fe',
                    400: '#c084fc',
                    500: '#a855f7',
                    600: '#9333ea',
                    700: '#7c3aed',
                    800: '#6b21a8',
                    900: '#581c87',
                    950: '#3b0764',
                },
                'dark-bg': {
                    100: '#1a1a2e',
                    200: '#16213e',
                    300: '#0f3460',
                    400: '#0a0a0a',
                    500: '#000000',
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-purple-black': 'linear-gradient(135deg, #3b0764 0%, #1a1a2e 50%, #000000 100%)',
                'gradient-purple-black-radial': 'radial-gradient(circle at center, #3b0764 0%, #1a1a2e 50%, #000000 100%)',
            },
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'],
                'fredoka': ['Fredoka', 'sans-serif'],
            }
        },
    },
    plugins: [],
};