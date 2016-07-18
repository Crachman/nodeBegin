/**
 * Created by LINDA4 on 11/24/2015.
 */
var exec = require("child_process").exec;

function start(){
    console.log("Request handler 'start' was called.");
    var content = "empty";

    exec("dir", function(error, stdout, stderr){
        content = stdout;
    });

    return content;
}

function upload(){
    console.log("Request handler 'upload' was called.");
    return "Hello, upload!";
}

exports.start = start;
exports.upload = upload;