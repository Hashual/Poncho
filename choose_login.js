function NomDeDomaine() {  
    return new Promise((resolve, reject) => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const url = new URL(tabs[0].url);
        resolve(url.hostname);
        });
    });
}

NomDeDomaine().then((domaine) => {
    chrome.storage.sync.get(domaine, function (result) {
        chrome.runtime.sendMessage({identifiants: result});
    })
});