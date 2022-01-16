changePlayerSize.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: () => {
                if (document.querySelector('.iframe_wrapper').style.position !== 'absolute') {
                    document.querySelector('.iframe_wrapper').style.position = 'absolute';
                    document.querySelector('.iframe_wrapper').style.top = '0';
                    document.querySelector('.iframe_wrapper').style.left = '0';
                    document.querySelector('.iframe_wrapper').style.zIndex = '9999';
                } else {
                    document.querySelector('.iframe_wrapper').style.position = ''
                }
        },
    });
});