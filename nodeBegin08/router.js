function route(handle, pathname) {
    if (pathname==="/myfavicon.ico"){
        console.log("====favicon====")
        return require("fs").readFile("myfavicon.ico");
    }
    console.log("About to route a request for " + pathname);
    if(typeof handle[pathname] == 'function'){
        return handle[pathname]();
    }else{
        console.log("No request handler found for" + pathname);
        return "404 Not found";
    }
}

exports.route = route;