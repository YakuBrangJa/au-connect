/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "hsl(0 0% 100%)",
        foreground: "hsl(0 0% 5%)",

        card: "hsl(0 0% 100%)",
        "card-foreground": "hsl(0 0% 5%)",

        popover: "hsl(0 0% 100%)",
        "popover-foreground": "hsl(0 0% 5%)",

        primary: "hsl(357 74% 57%)",
        "primary-foreground": "hsl(0 0% 98%)",

        secondary: "hsl(216 12% 88%)",
        "secondary-foreground": "hsl(222.2 47.4% 11.2%)",

        muted: "hsl(0 0% 96%)",
        "muted-foreground": "hsl(0 0% 45%)",

        accent: "hsl(0 0% 96%)",
        "accent-foreground": "hsl(0 0% 5%)",

        destructive: "hsl(0 84% 60%)",
        "destructive-foreground": "hsl(0 0% 98%)",

        border: "hsl(0 0% 92%)",
        input: "hsl(0 0% 85%)",
        ring: "hsl(0 0% 76%)",
      },
    },
  },
  plugins: [],
};
