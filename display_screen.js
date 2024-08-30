function checkForShortsURL() {
    var currentURL = window.location.href; // gets the link reference from the current window
    if (currentURL.includes('youtube.com/shorts/')) // checks whether the url includes shorts 
     {
        displayCustomScreen(); // displayes message accordingly
    }
}
function displayCustomScreen() {
    // Create an iframe to load the custom screen
    var iframe = document.createElement('iframe');
    iframe.src = chrome.runtime.getURL('popup.html');
    iframe.style.position = 'fixed';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.zIndex = '9999'; // Ensure it's on top of other elements
    document.body.appendChild(iframe);
}
