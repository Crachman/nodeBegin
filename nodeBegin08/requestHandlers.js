/**
 * Created by LINDA4 on 11/24/2015.
 */
var io = require("fs");

function home() {
    console.log("start to read file");
    return io.readFileSync('html/home.html').toString();

}

exports.home = home;