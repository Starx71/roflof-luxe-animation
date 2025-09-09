import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Roflof Brand Colors
        cream: "hsl(var(--cream-bg))",
        gold: "hsl(var(--gold-accent))",
        "dark-primary": "hsl(var(--dark-primary))",
        "pure-white": "hsl(var(--pure-white))",
        "text-black": "hsl(var(--text-black))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { 
            transform: "translateY(0px) rotate(0deg)" 
          },
          "50%": { 
            transform: "translateY(-20px) rotate(180deg)" 
          },
        },
        "pulse-gold": {
          "0%": { 
            boxShadow: "0 0 0 0 hsla(var(--gold-accent), 0.7)" 
          },
          "70%": { 
            boxShadow: "0 0 0 15px hsla(var(--gold-accent), 0)" 
          },
          "100%": { 
            boxShadow: "0 0 0 0 hsla(var(--gold-accent), 0)" 
          },
        },
        "sparkle": {
          "0%, 100%": { 
            transform: "rotate(0deg) scale(1)" 
          },
          "50%": { 
            transform: "rotate(180deg) scale(1.2)" 
          },
        },
        "gradient-shift": {
          "0%, 100%": { 
            backgroundPosition: "0% 50%" 
          },
          "50%": { 
            backgroundPosition: "100% 50%" 
          },
        },
        "slide-up": {
          from: {
            opacity: "0",
            transform: "translateY(20px)"
          },
          to: {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "scale-in": {
          from: {
            opacity: "0",
            transform: "scale(0.9)"
          },
          to: {
            opacity: "1",
            transform: "scale(1)"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-gold": "pulse-gold 2s infinite",
        "sparkle": "sparkle 4s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
