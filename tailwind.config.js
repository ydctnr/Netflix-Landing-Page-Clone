/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        grow: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        grow: 'grow 0.3s ease-in-out forwards',
      },
      
      width: {
        'custom-plus': 'calc(100% + 0.75rem)',
        'custom-xl': 'calc(100% + 1rem)',
        'custom-w': 'calc(83.33333333333334% -(3rem* 2))',
      },
      flexBasis: {
        'card': 'calc(25% - 1rem)',
        'custom-full': 'calc(100% - 0.75rem)',
        'custom-half': 'calc(50% - 0.75rem)',
        'custom-quarter': 'calc(25% - 1rem)',
        'anchor-basis': 'calc(25% - 0.75rem)',
        'anchor-lg': 'calc(33.333333333333336% - 0.75rem)',
      },
      spacing: {
        'calc-spacing': 'calc(2.25rem + 0rem)',
        'dropdown-svg': 'calc(0.75rem + 0rem)',
      },
      
      colors: {
        'grayish-anchor': 'rgba(255, 255, 255, 0.7)',
        'faqlist-background': 'rgb(45, 45, 45)',
        'faqlist-hover': 'rgb(65, 65, 65)',
        'input-border': 'rgba(128, 128, 128, 0.7)',
        'bg-input': 'rgba(22, 22, 22, 0.7)',
        'btn-red': 'rgb(229, 9, 20)',
        'btn-red-hover': 'rgb(193, 17, 25)',
        'slider-btn': 'rgba(255, 255, 255, 0.1)',
        'slider-btn-hover': 'rgba(255, 255, 255, 0.2)',
        'warning-red': 'rgb(235, 57, 66)',
        'login-bg': 'rgba(0, 0, 0, 0.7)',
        'lognin-btn': 'rgba(128, 128, 128, 0.4)',
        'lognin-btn-hover': 'rgba(128, 128, 128, 0.3)',
      },
      backgroundImage: {
        'card-gradient': 'linear-gradient(149deg, #192247 0%, #210e17 96.86%);',
        'nav-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.8000) 0.000%, rgba(0, 0, 0, 0.7889) 8.333%, rgba(0, 0, 0, 0.7556) 16.67%, rgba(0, 0, 0, 0.7000) 25.00%, rgba(0, 0, 0, 0.6222) 33.33%, rgba(0, 0, 0, 0.5222) 41.67%, rgba(0, 0, 0, 0.4000) 50.00%, rgba(0, 0, 0, 0.2778) 58.33%, rgba(0, 0, 0, 0.1778) 66.67%, rgba(0, 0, 0, 0.1000) 75.00%, rgba(0, 0, 0, 0.04444) 83.33%, rgba(0, 0, 0, 0.01111) 91.67%, rgba(0, 0, 0, 0.000) 100.0%)',
        'curve-gradient': 'linear-gradient(to right,rgba(33, 13, 22, 1) 16%,rgba(184, 40, 105, 1),rgba(229, 9, 20, 1),rgba(184, 40, 105, 1),rgba(33, 13, 22, 1) 84%)',
        'footer-gradient': 'linear-gradient(rgba(0, 0, 0, 0.7) 0%, rgb(0, 0, 0) 20%)',
      },
    },
  },
  plugins: [],
}

