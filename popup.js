chrome.storage.local.get(['active'], function (result) {
    if (result.active == false) {
        console.log("yes")
        document.querySelector(".slider2").classList.toggle("buttonon");
        document.querySelector(".slider1").classList.toggle("buttonon");
    }
});

chrome.storage.local.get(['lockedSite'], function(result) {
    document.getElementById("siteInput").value = result.lockedSite
});

document.getElementById('siteInput').onchange = function() {
    var newSite = document.getElementById("siteInput").value
    chrome.storage.local.set({"lockedSite": newSite});
};