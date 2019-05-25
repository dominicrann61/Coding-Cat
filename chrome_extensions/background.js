console.log('Background running');

chrome.browserAction.onClicked.addListener((tab) => {
    let msg = {
        txt: 'Hello'
    }
    chrome.tabs.sendMessage(tab.id, msg);
});