
import type { Config } from "tailwindcss";

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
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			colors: {
				border: {
					DEFAULT: 'hsl(var(--border))',
					light: 'hsl(var(--border-light))'
				},
				input: {
					DEFAULT: 'hsl(var(--input))',
					light: 'hsl(var(--input-light))'
				},
				ring: {
					DEFAULT: 'hsl(var(--ring))',
					light: 'hsl(var(--ring-light))'
				},
				background: {
					DEFAULT: 'hsl(var(--background))',
					light: 'hsl(var(--background-light))'
				},
				foreground: {
					DEFAULT: 'hsl(var(--foreground))',
					light: 'hsl(var(--foreground-light))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					light: 'hsl(var(--primary-light))',
					'foreground-light': 'hsl(var(--primary-foreground-light))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					light: 'hsl(var(--secondary-light))',
					'foreground-light': 'hsl(var(--secondary-foreground-light))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
					light: 'hsl(var(--muted-light))',
					'foreground-light': 'hsl(var(--muted-foreground-light))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					light: 'hsl(var(--accent-light))',
					'foreground-light': 'hsl(var(--accent-foreground-light))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
					light: 'hsl(var(--popover-light))',
					'foreground-light': 'hsl(var(--popover-foreground-light))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
					light: 'hsl(var(--card-light))',
					'foreground-light': 'hsl(var(--card-foreground-light))'
				},
				tech: {
					blue: '#6366f1',
					purple: '#8b5cf6',
					teal: '#14b8a6',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fadeIn 0.5s ease-out forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
