var server = require("./server.js");
var router = require("./router.js");
var requestHandlers = require("./requestHandlers.js");

var handler = {};
handler["/"] = requestHandlers.home;
handler["/home"] = requestHandlers.home;

server.start(router.route,handler);


//var fs = require("fs");
//fs.readFile('home.html', function (err, data) {
//    if (err) {
//        console.error(err);
//    }
//    console.log("Asynchronous read:\n" + data.toString());
//});
