const electron = require("electron");
const {
	app,
	BrowserWindow,
	shell
} = electron

app.on("ready", () => {
	let win = new BrowserWindow({
		toolbar: false,
		width: 800,
		height: 600,
		title: "Rooster Teeth",
		frame: false, transparent: true,
		icon: require('path').join(__dirname, 'www/assets/app-icon.png')
	});

	let url = require('url').format({
		protocol: 'file',
		slashes: true,
		pathname: require('path').join(__dirname, '/www/index.html')
	});

	win.loadURL(url);
	win.openDevTools();
	win.setMenu(null);
});
