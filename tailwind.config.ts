import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			heading: ['var(--font-poppins)', 'sans-serif'],
  			sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
  		},
  		boxShadow: {
  			soft: '0 8px 20px rgba(12,32,39,.06)',
  			cta: '0 14px 32px rgba(12,32,39,.28)',
  			'cta-hover': '0 20px 42px rgba(12,32,39,.34)',
  			phone: '0 44px 84px -26px rgba(12,32,39,.45), 0 0 0 1px rgba(255,255,255,.06) inset',
  		},
  		colors: {
  			bg: '#F3F8FB',
  			ink: '#0C2027',
  			'muted-1': '#5F7885',
  			'muted-2': '#7A8F9A',
  			'muted-3': '#93A6B0',
  			'muted-4': '#B7C7D0',
  			brand: {
  				DEFAULT: '#0081B3',
  				hover: '#016A94',
  				bright: '#00A9E0',
  			},
  			orange: '#FE8C29',
  			success: {
  				DEFAULT: '#2D7D32',
  				bg: '#EAF7EC',
  			},
  			danger: {
  				DEFAULT: '#E5393B',
  				bg: '#FFF6F6',
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
  			pill: '100px'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
