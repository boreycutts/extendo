chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    const url = changeInfo.url;
    if(url) {
        console.log()
        if(url.includes("ieee.org") && !url.includes("proxy") && !url.includes(".pdf")) {
            chrome.tabs.update(tabId, {url: "http://proxy.libraries.uc.edu/login?url=" + url});
        }
    }
})
