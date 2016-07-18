/**
 * Created by LINDA4 on 8/25/2015.
 */
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handler = {};
handler["/"] = requestHandlers.start;
handler["/start"] = requestHandlers.start;
handler["/upload"] = requestHandlers.upload;

server.start(router.route,handler);
