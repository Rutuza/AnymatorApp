import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%. 100%': {opacity: 1},
          '50%': {opacity: 0},
        },

        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },

        fadeIn: {
          '0%': {opacity: 0},
          '50%': {opacity: 1},
          '75%': {opacity: 0},
          '100%': {opacity: 1}
        },

        wiggle: {
          '0%, 100%': {transform: 'rotate(-3deg)'},
          '50%': {transform: 'rotate(3deg)'}
        },

        flash: {
          '0%, 50%, 100%': {opacity: 1},
          '25%, 75%': {opacity: 0}
        },

        blob: {
          '0%, 100%': { borderRadius: '60% 40% 60% 40% / 40% 60% 40% 60%' },
          '25%': { borderRadius: '50% 50% 50% 50% / 50% 50% 50% 50%' },
          '50%': { borderRadius: '60% 40% 60% 40% / 50% 50% 50% 50%' },
          '75%': { borderRadius: '40% 60% 40% 60% / 50% 50% 50% 50%' },
        },

        wave: {
          '0%, 100%': {transform: 'rotate(0deg)'},
          '50%': {transform: 'rotate(15deg)'}
        },

        floatclouds: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100px)' },
        }

      },

      animation: {
        blink: 'blink 1s infinite',
        rotate: 'rotate 1s linear infinite',
        fadeIn: 'fadeIn 2s ease-in-out',
        wiggle: 'wiggle 0.5s ease-in-out infinite',
        flash: 'flash 1s infinite',
        blob: 'blob 5s infinite',
        wave: 'wave 1s infinite',
        floatclouds: 'floatclouds 5s infinite linear',

      },

    },
  },
  plugins: [],
}