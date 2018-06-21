let toTextButton = {
	'id': 'toText',
	'title': 'toText',
	'contexts': ['selection']
};
let toPassButton = {
	'id': 'toPass',
	'title': 'To Password',
	'contexts': ['selection']
};

chrome.contextMenus.create(toTextButton, function() {console.log('loaded contextMenu')});
chrome.contextMenus.create(toPassButton, function() {console.log('loaded 2nd contextMenu')});

chrome.contextMenus.onClicked.addListener(function(clickData) {

	if(clickData.menuItemId == 'toText')
	{
		console.log('clicked');
		chrome.tabs.executeScript({
			file: "toText.js"
		});
	} 
	else if(clickData.menuItemId == 'toPass')
	{
		console.log('clicked2');
		chrome.tabs.executeScript({
			file: 'toPass.js'
		});
	}
});