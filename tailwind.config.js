const colors = require("tailwindcss/colors");

module.exports = {
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			gridTemplateColumns: {
				//Simple 3 column grid
				3: "auto minmax(0, 1280px) auto",
			},
			gridTemplateRows: {
				//Simple 3 row grid
				3: "auto auto auto",
			},
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			primary: colors.coolGray[900],
			secondary: {
				DEFAULT: "#27ED12",
				active: "#21D10F",
			},
			letters: {
				light: "#F1F1F1",
				dark: colors.coolGray[900],
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ["active"],
		},
	},
	plugins: [],
};
