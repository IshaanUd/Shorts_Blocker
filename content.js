(function () {
    // Function to block YouTube Shorts
    function blockYouTubeShorts() {
        // Select elements that represent YouTube Shorts, retrieved from internet
        // ytd-reel-shelf-renderer  -  for reels on home page
        // ytd-rich-sheld-rendere - for reels that come up on search page
        var shortsElements = document.querySelectorAll('ytd-reel-shelf-renderer, ytd-rich-shelf-renderer');
        // implement for every element in the  
        for (var i = 0; i < shortsElements.length; i++) {
            var el = shortsElements[i];
            el.style.display = 'none';
        }
    }
    var mutationCallback = function (mutations, observer) {
        mutations.forEach(function (mutation) {
            if (mutation.type === "childList") {
                blockYouTubeShorts();
            }
        });
    };
    var observer = new MutationObserver(mutationCallback);
    // Start observing changes to the document body and its descendants
    observer.observe(document.body, { childList: true, subtree: true });
    // Initial block of YouTube Shorts
    blockYouTubeShorts();
})();
