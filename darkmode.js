let darkMode = 1
const root = document.querySelector(":root")
const toggle = document.getElementById("toggleDarkMode")
const sun = document.getElementById("sun")
const moon = document.getElementById("moon")
const table = document.getElementsByTagName("tr")
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

if (getCookie("isDark") == "false") {
	toggleDarkMode()
}

function getCookie(name) {
	// Split cookie string and get all individual name=value pairs in an array
	var cookieArr = document.cookie.split(";")
	// Loop through the array elements
	for (var i = 0; i < cookieArr.length; i++) {
		var cookiePair = cookieArr[i].split("=")

		/* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
		if (name == cookiePair[0].trim()) {
			// Decode the cookie value and return
			return decodeURIComponent(cookiePair[1])
		}
	}

	// Return null if not found
	return null
}

function toggleDarkMode() {
	darkMode = darkMode ? 0 : 1

	document.cookie = `isDark=${darkMode ? "true" : "false"};`

	for (const key in changes[darkMode]) {
		document.documentElement.style.setProperty(key, changes[darkMode][key])
	}
	for (const key in table) {
		if (table[key].nodeType == 1)
			table[key].children[0].children[0].classList.toggle("invert")
	}
	sun.classList.toggle("displaynone")
	moon.classList.toggle("displaynone")
}
