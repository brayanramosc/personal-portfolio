/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'light-scheme': {
        'primary': '#6750a4',
        'on-primary': '#ffffff',
        'primary-container': '#e9ddff',
        'on-primary-container': '#22005d',
        'secondary': '#625B71',
        'on-secondary': '#FFFFFF',
        'secondary-container': '#E8DEF8',
        'on-secondary-container': '#1D192B',
        'tertiary': '#7D5260',
        'on-tertiary': '#FFFFFF',
        'tertiary-container': '#FFD8E4',
        'on-tertiary-container': '#31111D',
        'error': '#B3261E',
        'on-error': '#FFFFFF',
        'error-container': '#F9DEDC',
        'on-error-container': '#410E0B',
        'surface': '#fffbff',
        'on-surface': '#1c1b1e',
        'surface-variant': '#e7e0eb',
        'on-surface-variant': '#49454e',
        'surface-container': '#F3EDF7',
        'surface-low': '#F7F2FA',
        'surface-high': '#ECE6F0',
        'outline': '#79747E',
      },
      'dark-scheme': {
        'primary': '#cfbcff',
        'on-primary': '#381e72',
        'primary-container': '#4F378B',
        'on-primary-container': '#EADDFF',
        'secondary': '#CCC2DC',
        'on-secondary': '#332D41',
        'secondary-container': '#4A4458',
        'on-secondary-container': '#E8DEF8',
        'tertiary': '#EFB8C8',
        'on-tertiary': '#492532',
        'tertiary-container': '#633B48',
        'on-tertiary-container': '#FFD8E4',
        'error': '#F2B8B5',
        'on-error': '#601410',
        'error-container': '#8C1D18',
        'on-error-container': '#F9DEDC',
        'surface': '#1c1b1e',
        'on-surface': '#e6e1e6',
        'surface-variant': '#49454e',
        'on-surface-variant': '#cac4cf',
        'surface-container': '#211F26',
        'surface-low': '#1D1B20',
        'surface-high': '#2B2930',
        'outline': '#938F99',
      }
    },
    extend: {},
  },
  plugins: [],
}
