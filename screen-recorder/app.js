document.getElementById('startRecording').addEventListener('click', recordClick, false);

function recordClick() {
    chrome.desktopCapture.chooseDesktopMedia(["screen", "window"], accessRecord);
}

function accessRecord(id) {
    navigator.webkitGetUserMedia({
        audio: false,
        video: {
            mandatory: {
                chromeMediaSource: "desktop",
                chromeMediaSourceId: id
            }
        }
    }, startStream, failStream)
}

function startStream(stream) {
    console.log('recording data');
    let video = document.getElementById('screenMain');

    console.log(stream)
    console.dir(video)
    video.srcObject = stream;
    stream.onended = function () {
        console.log('video recording session ended');
    }
}

function failStream() {
    console.log('Some error on video recording')
}