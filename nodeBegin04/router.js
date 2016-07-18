/**
 * Created by LINDA4 on 8/25/2015.
 */
function route(handle, pathname) {

    console.log("About to route a request for " + pathname);
    if(typeof handle[pathname] == 'function'){
        handle[pathname]();
    }else{
        console.log("No request handler found for" + pathname);
    }
}

exports.route = route;