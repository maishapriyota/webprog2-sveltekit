/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			fontFamily: {
				unbounded: ["Unbounded", "cursive"],
				roboto: ["Roboto", "sans-serif"]
			},

			keyframes: {
				slideDown: {
					"0%, 100%": { top: "-3rem" },
					"10%": { top: "1rem" },
					"90%": { top: "1rem" }
				}
			},
			animation: {
				sideDown: "slideDown 4s ease-in-out forwards"
			}
		}
	},
	plugins: []
};
