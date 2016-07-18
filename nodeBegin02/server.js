/**
 * Created by LINDA4 on 8/25/2015.
 */
var http = require("http");
var url = require("url");

function start(){
    function onRequest(req,res){

        console.log("Request \""+ url.parse(req.url).pathname + "\" received.");
        res.writeHead(200,{"Context-Type":"text/plain"});
        res.write("Hello World");
        res.end();
    }
    http.createServer(onRequest).listen(8000);

    console.log("Server has started.");
}

//make server.js as module
exports.start = start;