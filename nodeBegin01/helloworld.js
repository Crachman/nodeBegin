/**
 * Created by LINDA4 on 8/25/2015.
 */

var http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(3000);