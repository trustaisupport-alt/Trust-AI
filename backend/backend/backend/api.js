function trustAIStatus(req, res) {
    res.writeHead(200, {
        "Content-Type": "application/json"
    });

    res.end(JSON.stringify({
        service: "TrustAI",
        status: "online",
        protection: "ready",
        message: "TrustAI backend is working."
    }));
}

module.exports = {
    trustAIStatus
};
