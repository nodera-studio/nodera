import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			backgroundImage: {
				'gradient-text': 'linear-gradient(90deg, #D1A2FF 0%, #007AFF 100%)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				comfortaa: ['Comfortaa', 'sans-serif'],
				baloo: ['"Baloo Da 2"', 'sans-serif'],
			},
			fontSize: {
				'10xl': '10rem', // 160px
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'shimmer': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'orbit': {
					'0%': {
						transform: 'translate(0px, 0px) scale(1) rotate(0deg)',
					},
					'25%': {
						transform: 'translate(20px, -30px) scale(1.1) rotate(5deg)',
					},
					'50%': {
						transform: 'translate(0px, -50px) scale(1) rotate(0deg)',
					},
					'75%': {
						transform: 'translate(-20px, -30px) scale(0.9) rotate(-5deg)',
					},
					'100%': {
						transform: 'translate(0px, 0px) scale(1) rotate(0deg)',
					},
				},
				'pulse-logo': {
					'0%, 100%': { opacity: '0.4', transform: 'translate(-50%, -50%) scale(1.5)' },
					'50%': { opacity: '0.5', transform: 'translate(-50%, -50%) scale(1.6)' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.25, 0.1, 0.25, 1.0) forwards',
				'shimmer': 'shimmer 2.5s linear infinite',
				'orbit': 'orbit 20s ease-in-out infinite alternate',
				'pulse-logo': 'pulse-logo 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
