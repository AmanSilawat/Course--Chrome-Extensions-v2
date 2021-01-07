const contextsList = ["selection", "link", "image", "page"];

for (const context of contextsList) {
    const title = `Twitter Toolkit: share this ${context} on your twitter profile`;
    chrome.contextMenus.create({
        title: title,
        contexts: [context],
        onclick: myFunction,
        id: context
    });
}

function myFunction(data, tab) {
    console.log(data)
    let = url = 'https://twitter.com/intent/tweet?';
    switch (data.menuItemId) {
        case 'selection':
            chrome.windows.create({ url: `${url}text=${encodeURIComponent(data.selectionText)}`, type: "panel"});
            break;

        case 'link':
            chrome.windows.create({ url: `${url}url=${encodeURIComponent(data.linkUrl)}`, type: "panel"});
            break;

        case 'image':
            chrome.windows.create({ url: `${url}url=${encodeURIComponent(data.srcUrl)}`, type: "panel"});
            break;

        case 'page':
            chrome.windows.create({ url: `${url}text=${encodeURIComponent(tab.title)})&url=${data.pageUrl}`, type: "panel"});
            break;
    }
}