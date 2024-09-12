function checkForShortsURL() {
    var currentURL = window.location.href; // gets the link reference from the current window
    if (currentURL.includes('youtube.com/shorts/')) // checks whether the url includes shorts 
     {
        displayCustomScreen(); // display message accordingly
    }
}
function displayCustomScreen() {
    // Create a full-screen div to cover the page
    var overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw'; // Full width of the viewport
    overlay.style.height = '100vh'; // Full height of the viewport
    overlay.style.backgroundColor = '#f44336'; // Red background color
    overlay.style.zIndex = '9999'; // Ensure it's on top of other elements
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.color = 'white';
    overlay.style.fontFamily = 'Arial, sans-serif';
    // Add a message to the overlay
    var message = document.createElement('div');
    message.innerHTML = "\n        <h1>YouTube Shorts Blocked</h1>\n        <p>We noticed you are watching a YouTube Short.<br>Please enjoy full-length videos instead!</p>\n    ";
    message.style.textAlign = 'center';
    // Append the message to the overlay
    overlay.appendChild(message);
    // Clear the page content and append the overlay
    document.body.innerHTML = ''; // Clear the current page content
    document.body.appendChild(overlay); // Add the overlay to the page
}
checkForShortsURL(); // Run the function to check and block Shorts
