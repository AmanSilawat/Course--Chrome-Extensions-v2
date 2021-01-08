chrome.browserAction.onClicked.addListener(function () {

    // ! first example (execute some script in any active tab)
    chrome.tabs.executeScript(null, {
        code: "document.body.background = 'purple'"
    });


    // ! second example (run external script)
    // chrome.tabs.executeScript(null, { file: "app.js" });


    // ! third example (information variable access inside of external script file)
    // let information = 12345;
    // chrome.tabs.executeScript(null, {
    //     code: `var information = ${information}`
    // }, function () {
    //     chrome.tabs.executeScript(null, { file: "app.js" });
    // });
});

