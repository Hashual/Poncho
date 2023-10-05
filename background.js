// background.js

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log("Message reçu dans le script d'arrière-plan :", request);

    if (request.redirectToMainPage) {
        // Rediriger vers index.html (ou le nom de votre page principale)
        chrome.tabs.create({ url: chrome.runtime.getURL("choose_login.html") });
    }
});
