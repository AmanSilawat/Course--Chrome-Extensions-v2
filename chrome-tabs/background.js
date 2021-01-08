chrome.browserAction.onClicked.addListener(function() {
    // chrome.tabs.create({ url: 'http://www.google.com' });
    chrome.tabs.create({ url: chrome.extension.getURL('extension-homepage.html') });
})
