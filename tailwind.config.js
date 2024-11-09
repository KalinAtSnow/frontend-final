/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: { // Move the `extend` directly under `theme`
      fontSize: {
        '10px': '10px',
        '12px': '12px',
        '16px': '16px',
        '20px': '20px',
        '24px': '24px',
        '30px': '30px',
        '36px': '36px',
        '40px': '40px',
      },
      colors: {
        'primary': {
          '50': '#f2f5fc',
          '100': '#e1eaf8',
          '200': '#cadaf3',
          '300': '#a5c2eb',
          '400': '#7aa2e0',
          '500': '#5b83d6',
          '600': '#4769c9',
          '700': '#3d56b8',
          '800': '#33438c',
          '900': '#303f78',
          '950': '#21294a',
        },
      }
    }
  },
  plugins: [],
}
