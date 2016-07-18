/**
 * Created by LINDA4 on 8/25/2015.
 */
var server = require("./server");
var router = require("./router");

server.start(router.route);
