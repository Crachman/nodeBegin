/**
 * Created by LINDA4 on 8/25/2015.
 */
var http = require("http");
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(route(handle, pathname));
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;