/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#172026',
        graphite: '#263238',
        steel: '#5f6f7a',
        aqua: '#00a6a6',
        signal: '#f59e0b',
      },
      boxShadow: {
        soft: '0 18px 50px rgba(23, 32, 38, 0.12)',
        ring: '0 0 0 1px rgba(23, 32, 38, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
