/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        carbon: "#070707",
        graphite: "#111214",
        asphalt: "#1a1b1f",
        ember: "#ff5a00",
        flame: "#ff7a1a",
        smoke: "#a6a6a6",
        ice: "#bfe7ff"
      },
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 42px rgba(255, 90, 0, 0.36)",
        insetGlow: "inset 0 0 48px rgba(255, 90, 0, 0.1)"
      },
      backgroundImage: {
        race: "linear-gradient(135deg, rgba(255,90,0,0.18), rgba(7,7,7,0) 42%), radial-gradient(circle at 80% 20%, rgba(255,122,26,0.24), transparent 32%)"
      }
    }
  },
  plugins: []
};
