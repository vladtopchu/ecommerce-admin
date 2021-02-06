module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
		extend: {
		 width: {
			 'inherit' : 'inherit'
		 },
		 margin: {
			 '0.25' : '0.060rem'
		 },
		 borderWidth: {
			 '12' : '12px'
		 }
		}
	},
  variants: {
    extend: {},
  },
  plugins: [],
}
