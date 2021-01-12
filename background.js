// Check whether new version is installed
chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
        console.log("This is a first install!");
        chrome.storage.local.set({"active": false});
        chrome.storage.local.set({"lockedSite": "google.com"});
    }else if(details.reason == "update"){
        var thisVersion = chrome.runtime.getManifest().version;
        console.log("Updated from " + details.previousVersion + " to " + thisVersion + "!");
    }
});

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.action == "testSite") {
            chrome.storage.local.get(['lockedSite'], function (result) {
                if (-1 == sender.tab.url.search(result.key)) {
                    //alert(sender.tab.url)
                    chrome.tabs.remove(sender.tab.id);
                }
            });
        }
    }
);