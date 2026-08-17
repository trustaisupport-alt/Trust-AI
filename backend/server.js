const http = require("http");
const { trustAIStatus } = require("./api");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    if (req.url === "/api/status" && req.method === "GET") {
        return trustAIStatus(req, res);
    }

    res.writeHead(404, {
        "Content-Type": "application/json"
    });

    res.end(JSON.stringify({
        error: "TrustAI endpoint not found"
    }));

});

server.listen(PORT, () => {
    console.log(`TrustAI backend running on port ${PORT}`);
});
