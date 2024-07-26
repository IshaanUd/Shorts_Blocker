function isYouTubeShort(url) {
    return url.includes('/shorts/');
}
function checkCurrentPage() {
    if (isYouTubeShort(window.location.href)) {
        console.log('This is a YouTube Short');
        chrome.runtime.sendMessage({ isShort: true });
    }
    else {
        console.log('This is not a YouTube Short');
        chrome.runtime.sendMessage({ isShort: false });
    }
}
checkCurrentPage();
