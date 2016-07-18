/**
 * Created by LINDA4 on 8/25/2015.
 */
var http = require("http");
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        response.writeHead(200, {"Content-Type": "text/plain"});
//一下一行，为阻塞操作, start请求响应完之后，才能响应upload请求
//      var content = route(handle, pathname);
//      response.write(content);

//非阻塞操作，将函数作为参数（即回调函数）传递给函数，则为异步操作。
        response.write(route(handle, pathname));

        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;