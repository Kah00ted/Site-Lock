chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.action == "testSite") {
            alert(sender.tab.url)
            chrome.tabs.remove(sender.tab.id);
        }
    }
);