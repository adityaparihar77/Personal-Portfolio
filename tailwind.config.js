/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: 'class',
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
                },
                'accent': {
                    primary: '#a855f7',
                    secondary: '#c084fc',
                    glow: 'rgba(168, 85, 247, 0.5)',
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-purple-black': 'linear-gradient(135deg, #3b0764 0%, #1a1a2e 50%, #000000 100%)',
                'gradient-purple-black-radial': 'radial-gradient(circle at center, #3b0764 0%, #1a1a2e 50%, #000000 100%)',
                'gradient-mesh': 'radial-gradient(at 40% 20%, hsla(270,80%,40%,0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(270,90%,50%,0.2) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(270,70%,30%,0.2) 0px, transparent 50%)',
            },
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'],
                'fredoka': ['Fredoka', 'sans-serif'],
                'inter': ['Inter', 'sans-serif'],
                'sora': ['Sora', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'gradient': 'gradient 15s ease infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'slide-up': 'slideUp 0.5s ease-out',
                'slide-down': 'slideDown 0.5s ease-out',
                'fade-in': 'fadeIn 0.6s ease-out',
                'scale-in': 'scaleIn 0.5s ease-out',
                'shimmer': 'shimmer 2s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)' },
                    '100%': { boxShadow: '0 0 30px rgba(168, 85, 247, 0.8), 0 0 40px rgba(168, 85, 247, 0.4)' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(100px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-100px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.9)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-1000px 0' },
                    '100%': { backgroundPosition: '1000px 0' },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
};