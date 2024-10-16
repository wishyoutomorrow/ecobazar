/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'soft-primary': '#84D187',
      'primary': '#00B207',
      'hard-primary': '#2C742F',
      'warning': '#FF8A00',
      'danger': '#EA4B48',
      'white': '#FFFFFF',
      'gray-9': '#1A1A1A',
      'gray-8': '#333333',
      'gray-7': '#4D4D4D',
      'gray-6': '#666666',
      'gray-5': '#808080',
      'gray-4': '#999999',
      'gray-3': '#B3B3B3',
      'gray-2': '#CCCCCC',
      'gray-1': '#E6E6E6',
      'gray-.5': '#F2F2F2',

      'green-9': '#002603',
      'green-8': '#173B1A',
      'green-7': '#2B572E',
      'green-6': '#406B42',
      'green-5': '#618062',
      'green-4': '#7A997C',
      'green-3': '#96B297',
      'green-2': '#B4CCB4',
      'green-1': '#DAE5DA',
      'green-.5': '#EDF2EE',

    }
  },
  plugins: [],
}
