
var remote = require('electron').remote;
BrowserWindow = remote.BrowserWindow;

const webview = document.querySelector('webview');

webview.addEventListener('new-window', (e) => {
	const protocol = require('url').parse(e.url).protocol;
	const host = require('url').parse(e.url).host;

	console.log(  require('url').parse(e.url));

	if (protocol === 'http:' || protocol === 'https:' && host.includes('roosterteeth.com') ) {
		$('webview').attr('src', e.url );
		document.getElementById('LoadingScreen').classList.remove('hide');
	}else{
		let child = new BrowserWindow({
			width: 800, height: 600, nativeWindowOpen: true,
		});
		child.loadURL(e.url);
	}
});

webview.addEventListener('did-stop-loading', function(){
	document.getElementById('LoadingScreen').classList.add('hide');
});

function init() {

     document.getElementById("min").addEventListener("click", function (e) {
		let window = BrowserWindow.getFocusedWindow();
		window.minimize();
     });

     document.getElementById("close").addEventListener("click", function (e) {
		let window = BrowserWindow.getFocusedWindow();
		window.close();
     });
};

document.onreadystatechange = function () {
     if (document.readyState == "complete") {
          init();
     }
};
