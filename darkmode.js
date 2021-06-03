let darkMode = 1
const root = document.querySelector(":root")
const toggle = document.getElementById("toggleDarkMode")
const changes = [
	{
		// ? White Mode
		"--bg-color": "linear-gradient(90deg, #fff6e8, #FFFDF7)",
		"--primary-color": "#5a62cc",
		"--text-color": "#000",
		"--subtext-color": "#949494",
		"--btntext-color": "#fff",
        
		"--table-division": "#70707011",
        
		"--cards-bg": "linear-gradient(90deg, #fff6e8, #FFFDF7)",
		"--cards-shadow": "10px 10px 30px #25252517, -3px -3px 60px #ff02",

		"--hover-bg": "linear-gradient(90deg, #5a62cc, #5a62ff)",
		"--hover1-shadow": "5px 5px 10px #0005, -5px -5px 10px #fff1",
		"--hover2-shadow":
			"inset 5px 5px 10px #0005, inset -5px -5px 10px #fff1",
	},
	{
		// ! Dark Mode
		"--bg-color": "#2b2b2b",
		"--primary-color": "#32b68a",

		"--text-color": "#ffffff",
		"--subtext-color": "#757575",
		"--btntext-color": "#fff",

		"--table-division": "#70707011",

		"--cards-bg": "linear-gradient(145deg, #272727, #2e2e2e)",
		"--cards-shadow":
			"inset 20px 20px 60px #252525, inset -20px -20px 60px #313131",

		"--hover-bg": "linear-gradient(90deg, #32b68a, #13805b)",
		"--hover1-shadow": "5px 5px 10px #0005, -5px -5px 10px #fff1",
		"--hover2-shadow":
			"inset 5px 5px 10px #0005, inset -5px -5px 10px #fff1",
	},
]

function toggleDarkMode() {
	darkMode = darkMode ? 0 : 1
	for (const key in changes[darkMode]) {
		document.documentElement.style.setProperty(key, changes[darkMode][key])
	}
    toggle.children[0].classList.toggle("displaynone")
    toggle.children[1].classList.toggle("displaynone")
}
