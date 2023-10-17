chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log("Message reçu dans le script d'arrière-plan :", request);

    if (request.redirectToMainPage) {
        chrome.tabs.create({ url: chrome.runtime.getURL("index.html") });
    }
    if (request.identifiants) {
       console.log(request.identifiants)
    }
});

