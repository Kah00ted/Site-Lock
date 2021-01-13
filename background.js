// Check whether new version is installed
chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason == "install") {  //run on extension installed
        //console.log("This is a first install!");
        chrome.storage.local.set({ "active": false });
        chrome.storage.local.set({ "lockedSite": "" });
    } else if (details.reason == "update") {  //run on extension updated
        var thisVersion = chrome.runtime.getManifest().version;
        console.log("Updated from " + details.previousVersion + " to " + thisVersion + "!");
    }
});

//chrome.storage.local.set({ "active": true });

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.action == "testSite") {
            chrome.storage.local.get(['active'], function (result) {
                if (result.active == true) {
                    chrome.storage.local.get(['lockedSite'], function (result) {
                        if (-1 == sender.tab.url.search(result.lockedSite)) {
                            //alert(sender.tab.url)
                            chrome.tabs.remove(sender.tab.id);
                        }
                    });
                }
            });
        }
    }
);