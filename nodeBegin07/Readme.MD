`原方式：请求处理程序 --> 请求路由 --> 服务器，将请求处理程序返回的内容（请求处理程序最终要显示给用户的内容）传递给HTTP服务器
`现改成：将服务器“传递”给内容的方式。从实践的角度来说，就是将response对象（从服务器的回调函数onRequest()获取）通过请求路由传递给请求处理程序。

