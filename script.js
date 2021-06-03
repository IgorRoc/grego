const darkMode = 1
const changes = [
	{
		// ? White Mode
		"--bg-color": "linear-gradient(90deg, #fff6e8, #fffde8);",
		"--primary-color": "#5a62cc;",
		"--text-color": "#000;",
		"--subtext-color": "#949494;",
		"--btntext-color": "#fff;",
		"--cards-bg-color": "#fff;",
		"--cards-shadow-color": "#0002;",
	},
	{
		// ! Dark Mode
		"--bg-color": "#2b2b2b;",
		"--primary-color": "#32b68a;",

		"--text-color": "#ffffff;",
		"--subtext-color": "#757575;",
		"--btntext-color": "#fff;",

		"--table-division": "#70707011;",

		"--cards-bg": "linear-gradient(145deg, #272727, #2e2e2e);",
		"--cards-shadow":
			"inset 20px 20px 60px #252525, inset -20px -20px 60px #313131;",

		"--hover-bg": "linear-gradient(90deg, #32b68a, #13805b);",
		"--hover1-shadow": "5px 5px 10px #0005, -5px -5px 10px #fff1;",
		"--hover2-shadow":
			"inset 5px 5px 10px #0005, inset -5px -5px 10px #fff1;",
	},
]

for (const key in changes[darkMode]) {
	console.log(key + "|" , changes[darkMode][key])
    document.documentElement.style.setProperty(key, changes[darkMode][key])
}
