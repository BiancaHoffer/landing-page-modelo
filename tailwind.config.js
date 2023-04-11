/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
		'path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',

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
			'gray50': '#F2F1F5',
			'gray100': '#D9D9D9',
			'gray150': '#CFCFD0',
			'gray200': ' #919EAB',
			'gray500': '#979797',
			'gray600': '#696871',
			'gray800': '#3E404C',

			'orange200': '#785337',
			'orange500': ' #EB6500',

			'blue200': '#97A9FF',
			'blue500': ' #002BFF',
			'blue750': '#013C51',
			'blue800': '#1C3747',
			'blue900': '#262837',
			'blue980': '#111111',
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
