const colors = require('tailwindcss/colors');

const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				primary: '#443C68',
				secondary: '#635985',
				darkbg: '#303041',
				lightbg: '#BFDCE5',
				darkwindow: '#3d3a50d9',
				darker: '#1E1E2F',
				black: colors.black,
				white: colors.white
			},
			keyframes: {
				wiggle: {
					'0%, 100%': {
						transform: 'rotate(0deg)'
					},
					'25%': {
						transform: 'rotate(5deg)',
						scale: 'calc(1.1)'
					},
					'50%': {
						transform: 'rotate(0deg)',
						scale: 'calc(1)'
					},
					'75%': {
						transform: 'rotate(-5deg)',
						scale: 'calc(1.2)'
					}
				}
			},
			animation: {
				wiggle: 'wiggle 0.4s 1'
			}
		}
	},

	plugins: [require('flowbite/plugin')],
	darkMode: 'class'
};

module.exports = config;
