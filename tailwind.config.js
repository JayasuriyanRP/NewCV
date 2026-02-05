module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        resume: {
          bg: "#f8fafc", // light gray background
          card: "#fff", // card/section background
          heading: "#1e293b", // dark heading
          text: "#222", // main text
          accent: "#2563eb", // blue accent/link
          border: "#e5e7eb", // light border
        },
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
