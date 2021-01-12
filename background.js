var allowedSite = "https://www.google.com/"

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.action == "testSite") {
            if(sender.tab.url !== allowedSite){
                alert(sender.tab.url)
                chrome.tabs.remove(sender.tab.id);
            }
        }
    }
);