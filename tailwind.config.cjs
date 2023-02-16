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
				primary: '#0EA2F6',
				secondary: '#7192BE',
				darkbg: '#303041',
				lightbg: '#aaa',
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
