/**
 * Created by LINDA4 on 11/24/2015.
 */
function start(){
    console.log("Request handler 'start' was called.");
}

function upload(){
    console.log("Request handler 'upload' was called.");
}

exports.start = start;
exports.upload = upload;