/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./content/**/*.mdx"
],

  ],
  theme: {
    extend: {
      colors: {
        // Heritage / sandstone palette – tweak hexes to your taste
        "forest-green": "#166534", // rich deep green
        "charcoal": "#1f2933",     // dark neutral for text
        "sandstone": "#f3e4cf",    // light warm background
        "heritage-cream": "#fdf7eb",
        "heritage-brown": "#7b4b2a"
      }
    }
  },
  plugins: []
}

