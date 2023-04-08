/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		fontFamily: {
			'sans': ['Belfast\\ Grotesk', 'system-ui'],
			'serif': ['Belfast\\ Grotesk', 'Georgia'],
			'mono': ['Belfast\\ Grotesk', 'SFMono-Regular'],
		},
		colors: {
			'white': '#FFFFFF',

			'gray100': '#D9D9D9',
			'gray150': '#CFCFD0',
			'gray200': ' #919EAB',
			'gray500': '#979797',
			'gray800': '#3E404C',


			'orange500': ' #EB6500',

			'blue500': ' #002BFF',
			'blue750': '#013C51',
			'blue800': '#1C3747',
		},
		screens: {
			'2xl': { 'max': '1535px' },
			'minMd': { 'min': '767px' },
			'minXl': { 'min': '1280px' },
			'900': { 'max': '900px' },
			'xl': { 'max': '1279px' },
			'lg': { 'max': '1023px' },
			'md': { 'max': '767px' },
			'sm': { 'max': '639px' },
		},
		extend: {

		},
	},
	plugins: [

	],
}
