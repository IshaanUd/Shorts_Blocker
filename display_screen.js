function checkForShortsURL() {
    var currentURL = window.location.href; // gets the link reference from the current window
    if (currentURL.includes('youtube.com/shorts/')) // checks whether the url includes shorts 
     {
        displayCustomScreen(); // display message accordingly
    }
}
function displayCustomScreen() {
    // Create an iframe to load the custom screen
    var iframe = document.createElement('iframe');
    iframe.src = chrome.runtime.getURL('popup.html'); // Load popup.html in the iframe
    iframe.style.position = 'fixed';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.zIndex = '9999'; // Ensure it's on top of other elements
    document.body.innerHTML = ''; // Optionally clear the page content before displaying the iframe
    document.body.appendChild(iframe); // Add the iframe to the document
}
checkForShortsURL(); // Run the function to check and block Shorts
