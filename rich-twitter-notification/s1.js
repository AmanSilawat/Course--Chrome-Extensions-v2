let options = {
    type: 'progress',
    title: 'My first popup',
    message: 'Fy first notification',
    iconUrl: './icon.png',
    progress: 42,
    // imageUrl: './icon.png',
    // items: [
    //     { title: "Item1", message: "This is item 1." },
    //     { title: "Item2", message: "This is item 2." },
    //     { title: "Item3", message: "This is item 3." }
    // ]
};

// accept two parameter - options, callback
chrome.notifications.create(options);

chrome.notifications.onClicked.addListener(redirect);
// chrome.notifications.onButtonClicked.addListener(redirect);

function redirect() {
    console.log('redirect');
    alert('show popup')
}