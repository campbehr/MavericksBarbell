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
				3: "auto minmax(0, 1040px) auto",
			},
			gridTemplateRows: {
				//Simple 3 row grid
				3: "auto auto auto",
			},
			width: {
				"1/2": "50%",
			},
		},
		screens: {
			xs: "430px",
			sm: "640px",
			md: "768px",
			lg: "1040px",
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
				grey: colors.coolGray[500],
			},
			red: {
				DEFAULT: colors.red[600],
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ["active"],
		},
	},
	plugins: [
		require("tailwindcss"),
		require("autoprefixer"),
	],
};
