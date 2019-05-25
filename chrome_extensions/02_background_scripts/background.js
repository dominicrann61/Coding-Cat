console.log('Background Script running');
chrome.browserAction.onClicked.addListener((tabs) => {
    console.log('Btn Clicked');
})