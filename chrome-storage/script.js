document.getElementById('save').addEventListener('click', function () {
    let value = document.getElementById('txtArea').value;
    
    chrome.storage.sync.set({'textData': value}, function () {
        alert('Success');
    })
});

document.getElementById('get').addEventListener('click', function () {
    chrome.storage.sync.get('textData', function (data) {
        alert(data.textData);
    })

    chrome.storage.sync.set({ 'textData': value }, function () {
        alert('Success');
    })
});