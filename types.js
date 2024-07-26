function fetchData(callback) {
    setInterval(function () {
        console.log("Data fetched");
        callback();
    }, 2000);
}
function displayData() {
    console.log("Displaying data");
}
fetchData(displayData);
