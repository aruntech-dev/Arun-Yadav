(function () {
    // Create an anonymous session ID for this browser tab
    let sessionId = sessionStorage.getItem("clientSessionId");

    if (!sessionId) {
        sessionId =
            "SID-" +
            Date.now().toString(36) +
            "-" +
            crypto.randomUUID().split("-")[0];

        sessionStorage.setItem("clientSessionId", sessionId);
    }

    // Make the session ID available to your site
    window.clientSessionId = sessionId;

    console.log("Session ID:", sessionId);
})();
