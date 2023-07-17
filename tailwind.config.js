

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        'desktop': '1338px',
        // => @media (min-width: 640px) { ... }

        // 'tab': '768px',
        // => @media (min-width: 768px) { ... }

        // 'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        // 'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        // '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        'main-bg': '#FFFFFF',
        'highlight': '#46CEFF',
        "moonstone": "#4DBCD5ff",
        "azure": "#5280E7ff",
        "primary-text":"#161616",
        "hover-bg":"#EEEEEE",
        "navbar-text":"#424242"

      },
      dropShadow: {
        'sidebar': "3px 4px 4px rgba(0, 0, 0, 0.11)"
      },
      boxShadow: {
        'navbar': "0px 3px 3px rgba(0, 0, 0, 0.2);",
        'sourcing': "0px 4px 21px rgba(152, 152, 152, 0.25)"
      }
    },
  },
  corePlugins: {
    // preflight: false
  },
  plugins: [
    require('flowbite/plugin')
  ],


}

