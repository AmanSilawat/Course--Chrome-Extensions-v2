chrome.contextMenus.create({
    title: "Twitter Social Tooltip!",
    contexts: ["selection"],
    onclick: myFunction
});

function myFunction(txt) {
    chrome.tabs.create({
        url: `https://twitter.com/intent/tweet?text=${txt.selectionText}`
    });
}