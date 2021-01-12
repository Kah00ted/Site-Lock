var allowedSite = "google.com"

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.action == "testSite") {
            if(-1 == sender.tab.url.search(allowedSite)){
                //alert(sender.tab.url)
                chrome.tabs.remove(sender.tab.id);
            }
        }
    }
);