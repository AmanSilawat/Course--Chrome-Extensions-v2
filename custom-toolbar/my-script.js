var url = chrome.extension.getURL('toolbar.html');
var iframe = document.createElement('iframe');
var height = 35;
iframe.id = 'custom_toolbar';
iframe.src = url;
iframe.height = 35;
iframe.style.transform = `translateY(${-height}px)`;
document.body.appendChild(iframe);
document.body.style.transform = `translateY(${height}px)`